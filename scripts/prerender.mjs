import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

process.env.NODE_ENV = "production";

const originalError = console.error;
console.error = (...args) => {
  const message = args.map((item) => String(item)).join(" ");
  if (
    message.includes("useLayoutEffect does nothing on the server") ||
    message.includes("destroyOnClose")
  ) {
    return;
  }
  originalError(...args);
};

const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");
const template = readFileSync(templatePath, "utf8");

const serverEntry = pathToFileURL(path.resolve(".ssr/entry-server.js")).href;
const { render, prerenderManifest } = await import(serverEntry);

function applyTemplate(page) {
  let html = template.replace(
    /<html lang="[^"]*"/,
    `<html lang="${page.lang}"`,
  );
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${page.titleHtml}</title>`);
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${page.descriptionAttr}" />`,
  );
  html = html.replace("</head>", `${page.headTags}\n  </head>`);
  html = html.replace('<div id="root"></div>', () => `<div id="root">${page.html}</div>`);
  return html;
}

function writePage(urlPath, contents) {
  const relative = urlPath === "/" ? "index.html" : path.join(urlPath.slice(1), "index.html");
  const file = path.join(distDir, relative);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, contents);
}

const shell404 = template.replace(
  "</head>",
  '<meta name="robots" content="noindex" />\n  </head>',
);
writeFileSync(path.join(distDir, "404.html"), shell404);

const manifest = prerenderManifest();
const indexed = [];

for (const page of manifest.pages) {
  const rendered = render(page.urlPath);
  writePage(page.urlPath, applyTemplate(rendered));
  if (page.indexable) {
    indexed.push({
      loc: new URL(page.urlPath, "https://knowit.nangxif.com/").toString(),
      pathname: page.pathname,
      locale: page.locale,
      title: rendered.title,
      description: rendered.description,
    });
  }
}

for (const redirect of manifest.redirects) {
  const target = new URL(redirect.to, "https://knowit.nangxif.com/").toString();
  const html = `<!doctype html>
<html lang="${redirect.locale === "en-US" ? "en" : redirect.locale}">
  <head>
    <meta charset="utf-8" />
    <title>KnowIt</title>
    <link rel="canonical" href="${target}" />
    <meta http-equiv="refresh" content="0; url=${redirect.to}" />
    <script>location.replace(${JSON.stringify(redirect.to)})</script>
  </head>
  <body></body>
</html>
`;
  writePage(redirect.from, html);
}

const byPath = new Map();
for (const page of indexed) {
  const list = byPath.get(page.pathname) ?? [];
  list.push(page);
  byPath.set(page.pathname, list);
}

const hreflang = {
  "zh-CN": "zh-CN",
  "zh-TW": "zh-TW",
  "en-US": "en",
};

const urls = [...byPath.entries()].flatMap(([, pages]) => {
  const alternates = pages
    .map(
      (page) =>
        `    <xhtml:link rel="alternate" hreflang="${hreflang[page.locale]}" href="${page.loc}" />`,
    )
    .join("\n");
  const fallback = pages.find((page) => page.locale === "zh-CN");
  return pages.map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${fallback.loc}" />
  </url>`,
  );
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);

const localeHeading = {
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  "en-US": "English",
};

const sections = ["zh-CN", "zh-TW", "en-US"].map((locale) => {
  const lines = indexed
    .filter((page) => page.locale === locale)
    .map((page) => `- [${page.title}](${page.loc}): ${page.description.replace(/\s+/g, " ")}`);
  return `## ${localeHeading[locale]}\n\n${lines.join("\n")}`;
});

const llms = `# KnowIt

> KnowIt 是一款开源、模块化、隐私优先的网页阅读浏览器扩展。页面内容默认只在本地处理，不会上传到 KnowIt 的服务器；调用模型时使用你自己的 API Key。可以安装到 Chrome 和 Edge。
>
> KnowIt is an open-source, modular, privacy-first browser extension for reading the web. Page content stays on your device by default and is not uploaded to KnowIt; model calls use your own API key.

当前版本 / Current version: 3.2.2

- GitHub: https://github.com/Nangxif/KnowIt-Public
- Chrome Web Store: https://chromewebstore.google.com/detail/knowit/jcdiikfdkjffieikiehgcffbclelinfa
- Edge Add-ons: https://microsoftedge.microsoft.com/addons/detail/knowit/enhdaccokoiadmddhlehmpkmeeaanlll
- 官网 / Site: https://knowit.nangxif.com/

${sections.join("\n\n")}
`;
writeFileSync(path.join(distDir, "llms.txt"), llms);

console.log(`prerendered ${manifest.pages.length} pages, ${manifest.redirects.length} redirects`);
