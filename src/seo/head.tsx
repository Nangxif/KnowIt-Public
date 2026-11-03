import { createContext, useContext, useEffect, type ReactNode } from "react";

import { useTranslation } from "@/i18n/context";
import { LOCALE_HTML_LANG, LOCALES, type Locale } from "@/i18n/types";

import type { JsonLd } from "./structuredData";
import { absoluteUrl, assetAbsolute, SHARE_IMAGE } from "./urls";

export type PageHead = {
  title: string;
  description: string;
  keywords?: string;
  imageAlt: string;
  pathname: string;
  locale: Locale;
  robots: string;
  jsonLd?: JsonLd;
};

const HeadContext = createContext<{ current: PageHead | null } | null>(null);

export function HeadProvider({
  collector,
  children,
}: {
  collector: { current: PageHead | null };
  children: ReactNode;
}) {
  return <HeadContext.Provider value={collector}>{children}</HeadContext.Provider>;
}

function escapeAttr(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeText(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const OG_LOCALE: Record<Locale, string> = {
  "zh-CN": "zh_CN",
  "zh-TW": "zh_TW",
  "en-US": "en_US",
};

function openGraphType(pathname: string) {
  if (pathname === "/docs" || pathname.startsWith("/docs/")) return "article";
  return "website";
}

export function renderHeadTags(head: PageHead) {
  const canonical = absoluteUrl(head.pathname, head.locale);
  const image = assetAbsolute(SHARE_IMAGE.path);
  const alternates = LOCALES.map((locale) => {
    const href = absoluteUrl(head.pathname, locale);
    return `<link rel="alternate" hreflang="${LOCALE_HTML_LANG[locale]}" href="${escapeAttr(href)}" />`;
  });
  alternates.push(
    `<link rel="alternate" hreflang="x-default" href="${escapeAttr(absoluteUrl(head.pathname, "zh-CN"))}" />`,
  );

  const ogAlternates = LOCALES.filter((locale) => locale !== head.locale)
    .map(
      (locale) =>
        `<meta property="og:locale:alternate" content="${OG_LOCALE[locale]}" />`,
    )
    .join("\n");

  const jsonLd = head.jsonLd
    ? `<script type="application/ld+json">${JSON.stringify(head.jsonLd).replace(/</g, "\\u003c")}</script>`
    : "";

  const keywords = head.keywords
    ? `<meta name="keywords" content="${escapeAttr(head.keywords)}" />`
    : "";

  return [
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
    ...alternates,
    `<meta name="robots" content="${escapeAttr(head.robots)}" />`,
    `<meta name="author" content="KnowIt" />`,
    `<meta name="applicable-device" content="pc,mobile" />`,
    keywords,
    `<meta property="og:type" content="${openGraphType(head.pathname)}" />`,
    `<meta property="og:site_name" content="KnowIt" />`,
    `<meta property="og:title" content="${escapeAttr(head.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(head.description)}" />`,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `<meta property="og:image" content="${escapeAttr(image)}" />`,
    `<meta property="og:image:alt" content="${escapeAttr(head.imageAlt)}" />`,
    `<meta property="og:image:width" content="${SHARE_IMAGE.width}" />`,
    `<meta property="og:image:height" content="${SHARE_IMAGE.height}" />`,
    `<meta property="og:locale" content="${OG_LOCALE[head.locale]}" />`,
    ogAlternates,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(head.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(head.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(image)}" />`,
    `<meta name="twitter:image:alt" content="${escapeAttr(head.imageAlt)}" />`,
    jsonLd,
  ]
    .filter(Boolean)
    .join("\n");
}

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string | undefined,
) {
  const selector = `meta[${attribute}="${key}"]`;
  if (!content) {
    document.head.querySelector(selector)?.remove();
    return;
  }
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function applyClientHead(head: PageHead) {
  const image = assetAbsolute(SHARE_IMAGE.path);
  document.title = head.title;
  document.documentElement.lang = LOCALE_HTML_LANG[head.locale];
  upsertMeta("name", "description", head.description);
  upsertMeta("name", "keywords", head.keywords);
  upsertMeta("name", "robots", head.robots);
  upsertMeta("name", "author", "KnowIt");
  upsertMeta("name", "applicable-device", "pc,mobile");
  upsertMeta("property", "og:type", openGraphType(head.pathname));
  upsertMeta("property", "og:site_name", "KnowIt");
  upsertMeta("property", "og:title", head.title);
  upsertMeta("property", "og:description", head.description);
  upsertMeta("property", "og:url", absoluteUrl(head.pathname, head.locale));
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:image:alt", head.imageAlt);
  upsertMeta("property", "og:image:width", String(SHARE_IMAGE.width));
  upsertMeta("property", "og:image:height", String(SHARE_IMAGE.height));
  upsertMeta("property", "og:locale", OG_LOCALE[head.locale]);
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", head.title);
  upsertMeta("name", "twitter:description", head.description);
  upsertMeta("name", "twitter:image", image);
  upsertMeta("name", "twitter:image:alt", head.imageAlt);

  document.head
    .querySelectorAll("[data-knowit-seo], meta[property='og:locale:alternate']")
    .forEach((node) => node.remove());

  const canonical = document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = absoluteUrl(head.pathname, head.locale);
  canonical.setAttribute("data-knowit-seo", "");
  document.head.appendChild(canonical);

  for (const locale of LOCALES) {
    const alternate = document.createElement("link");
    alternate.rel = "alternate";
    alternate.hreflang = LOCALE_HTML_LANG[locale];
    alternate.href = absoluteUrl(head.pathname, locale);
    alternate.setAttribute("data-knowit-seo", "");
    document.head.appendChild(alternate);
  }

  const fallback = document.createElement("link");
  fallback.rel = "alternate";
  fallback.hreflang = "x-default";
  fallback.href = absoluteUrl(head.pathname, "zh-CN");
  fallback.setAttribute("data-knowit-seo", "");
  document.head.appendChild(fallback);

  for (const locale of LOCALES) {
    if (locale === head.locale) continue;
    const alternateLocale = document.createElement("meta");
    alternateLocale.setAttribute("property", "og:locale:alternate");
    alternateLocale.content = OG_LOCALE[locale];
    alternateLocale.setAttribute("data-knowit-seo", "");
    document.head.appendChild(alternateLocale);
  }

  let script = document.getElementById("knowit-jsonld");
  if (!head.jsonLd) {
    script?.remove();
    return;
  }
  if (!script) {
    script = document.createElement("script");
    script.id = "knowit-jsonld";
    script.setAttribute("type", "application/ld+json");
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(head.jsonLd);
}

export function PageMeta({
  title,
  description,
  keywords,
  pathname,
  robots = "index, follow",
  jsonLd,
}: {
  title: string;
  description: string;
  keywords?: string;
  pathname: string;
  robots?: string;
  jsonLd?: JsonLd;
}) {
  const { locale, text } = useTranslation();
  const collector = useContext(HeadContext);
  const imageAlt = text.seoShareImageAlt;
  const head: PageHead = {
    title,
    description,
    keywords,
    imageAlt,
    pathname,
    locale,
    robots,
    jsonLd,
  };
  if (collector) collector.current = head;

  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    applyClientHead(head);
  }, [title, description, keywords, imageAlt, pathname, locale, robots, jsonLdKey]);

  return null;
}

export function renderDocumentTitle(title: string) {
  return escapeText(title);
}

export function renderDescriptionAttr(description: string) {
  return escapeAttr(description);
}
