import { createContext, useContext, useEffect, type ReactNode } from "react";

import { useTranslation } from "@/i18n/context";
import { LOCALE_HTML_LANG, LOCALES, type Locale } from "@/i18n/types";

import type { JsonLd } from "./structuredData";
import { absoluteUrl, assetAbsolute } from "./urls";

export type PageHead = {
  title: string;
  description: string;
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

export function renderHeadTags(head: PageHead) {
  const canonical = absoluteUrl(head.pathname, head.locale);
  const image = assetAbsolute("/brand/icon-128.png");
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

  return [
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
    ...alternates,
    `<meta name="robots" content="${escapeAttr(head.robots)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="KnowIt" />`,
    `<meta property="og:title" content="${escapeAttr(head.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(head.description)}" />`,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `<meta property="og:image" content="${escapeAttr(image)}" />`,
    `<meta property="og:locale" content="${OG_LOCALE[head.locale]}" />`,
    ogAlternates,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escapeAttr(head.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(head.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(image)}" />`,
    jsonLd,
  ]
    .filter(Boolean)
    .join("\n");
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function applyClientHead(head: PageHead) {
  document.title = head.title;
  document.documentElement.lang = LOCALE_HTML_LANG[head.locale];
  upsertMeta("name", "description", head.description);
  upsertMeta("name", "robots", head.robots);
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:site_name", "KnowIt");
  upsertMeta("property", "og:title", head.title);
  upsertMeta("property", "og:description", head.description);
  upsertMeta("property", "og:url", absoluteUrl(head.pathname, head.locale));
  upsertMeta("property", "og:image", assetAbsolute("/brand/icon-128.png"));
  upsertMeta("property", "og:locale", OG_LOCALE[head.locale]);
  upsertMeta("name", "twitter:card", "summary");
  upsertMeta("name", "twitter:title", head.title);
  upsertMeta("name", "twitter:description", head.description);
  upsertMeta("name", "twitter:image", assetAbsolute("/brand/icon-128.png"));

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
  pathname,
  robots = "index, follow",
  jsonLd,
}: {
  title: string;
  description: string;
  pathname: string;
  robots?: string;
  jsonLd?: JsonLd;
}) {
  const { locale } = useTranslation();
  const collector = useContext(HeadContext);
  const head: PageHead = {
    title,
    description,
    pathname,
    locale,
    robots,
    jsonLd,
  };
  if (collector) collector.current = head;

  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    applyClientHead(head);
  }, [title, description, pathname, locale, robots, jsonLdKey]);

  return null;
}

export function renderDocumentTitle(title: string) {
  return escapeText(title);
}

export function renderDescriptionAttr(description: string) {
  return escapeAttr(description);
}
