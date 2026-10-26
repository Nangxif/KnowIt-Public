import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { ROUTER_BASENAME } from "@/app/paths";
import { LOCALE_HTML_LANG } from "@/i18n/types";
import { ThemeProvider } from "@/theme/theme";

import App from "./App";
import { HeadProvider, renderDescriptionAttr, renderDocumentTitle, renderHeadTags, type PageHead } from "./seo/head";
import { prerenderManifest } from "./seo/routes";

export function render(url: string) {
  const collector: { current: PageHead | null } = { current: null };
  const html = renderToString(
    <StaticRouter basename={ROUTER_BASENAME} location={url}>
      <HeadProvider collector={collector}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HeadProvider>
    </StaticRouter>,
  );
  const head = collector.current;
  return {
    html,
    title: head?.title ?? "KnowIt",
    description: head?.description ?? "",
    lang: head ? LOCALE_HTML_LANG[head.locale] : "zh-CN",
    headTags: head ? renderHeadTags(head) : "",
    titleHtml: renderDocumentTitle(head?.title ?? "KnowIt"),
    descriptionAttr: renderDescriptionAttr(head?.description ?? ""),
  };
}

export { prerenderManifest };
