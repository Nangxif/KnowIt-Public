import { catalogApps } from "@/landing/apps";
import { siteConfig } from "@/config/site";
import { LOCALE_HTML_LANG, type Locale, type Messages } from "@/i18n/types";

import { absoluteUrl, assetAbsolute, SHARE_IMAGE, siteOrigin } from "./urls";

export type JsonLd = Record<string, unknown>;

const BROWSER_REQUIREMENTS: Record<Locale, string> = {
  "zh-CN": "需要 Google Chrome 或 Microsoft Edge。",
  "zh-TW": "需要 Google Chrome 或 Microsoft Edge。",
  "en-US": "Requires Google Chrome or Microsoft Edge.",
};

function organizationId() {
  return `${siteOrigin()}/#organization`;
}

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": organizationId(),
    name: siteConfig.name,
    url: `${siteOrigin()}/`,
    logo: {
      "@type": "ImageObject",
      url: assetAbsolute("/brand/icon-128.png"),
      width: 128,
      height: 128,
    },
    email: siteConfig.contactEmails[0],
    sameAs: [
      siteConfig.githubUrl,
      siteConfig.chromeWebStoreUrl,
      siteConfig.edgeAddonsUrl,
    ],
  };
}

function shareImageNode() {
  return {
    "@type": "ImageObject",
    url: assetAbsolute(SHARE_IMAGE.path),
    width: SHARE_IMAGE.width,
    height: SHARE_IMAGE.height,
  };
}

export function homeJsonLd(text: Messages, locale: Locale): JsonLd {
  const homeUrl = absoluteUrl("/", locale);
  const orgId = organizationId();
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      {
        "@type": "WebSite",
        "@id": `${homeUrl}#website`,
        name: siteConfig.name,
        url: homeUrl,
        description: text.seoHomeDescription,
        inLanguage: LOCALE_HTML_LANG[locale],
        publisher: { "@id": orgId },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${homeUrl}#app`,
        name: siteConfig.name,
        applicationCategory: "BrowserApplication",
        operatingSystem: "Chrome, Microsoft Edge",
        browserRequirements: BROWSER_REQUIREMENTS[locale],
        softwareVersion: siteConfig.version,
        description: text.seoHomeDescription,
        url: homeUrl,
        image: shareImageNode(),
        screenshot: shareImageNode(),
        inLanguage: LOCALE_HTML_LANG[locale],
        downloadUrl: siteConfig.chromeWebStoreUrl,
        softwareHelp: absoluteUrl("/faq", locale),
        featureList: catalogApps.map((app) => text.appNames[app.id]),
        offers: [
          {
            "@type": "Offer",
            price: "0",
            priceCurrency: "CNY",
            availability: "https://schema.org/InStock",
            url: siteConfig.chromeWebStoreUrl,
            description: text.freePlan,
          },
          {
            "@type": "Offer",
            price: "6.66",
            priceCurrency: "CNY",
            availability: "https://schema.org/InStock",
            url: siteConfig.afdianUrl,
            description: text.lifetimePlan,
          },
        ],
        author: { "@id": orgId },
        publisher: { "@id": orgId },
      },
    ],
  };
}

export function faqJsonLd(text: Messages, locale: Locale): JsonLd {
  const pageUrl = absoluteUrl("/faq", locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: pageUrl,
        name: text.seoFaqTitle,
        description: text.seoFaqDescription,
        inLanguage: LOCALE_HTML_LANG[locale],
        isPartOf: {
          "@type": "WebSite",
          name: siteConfig.name,
          url: absoluteUrl("/", locale),
        },
        publisher: { "@id": organizationId() },
        mainEntity: text.faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function webPageJsonLd(options: {
  title: string;
  description: string;
  pathname: string;
  locale: Locale;
}): JsonLd {
  const pageUrl = absoluteUrl(options.pathname, options.locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      {
        "@type": "WebPage",
        "@id": pageUrl,
        name: options.title,
        description: options.description,
        url: pageUrl,
        inLanguage: LOCALE_HTML_LANG[options.locale],
        isPartOf: {
          "@type": "WebSite",
          name: siteConfig.name,
          url: absoluteUrl("/", options.locale),
        },
        publisher: { "@id": organizationId() },
      },
    ],
  };
}

export function articleJsonLd(options: {
  title: string;
  description: string;
  pathname: string;
  locale: Locale;
  text: Messages;
}): JsonLd {
  const pageUrl = absoluteUrl(options.pathname, options.locale);
  const homeUrl = absoluteUrl("/", options.locale);
  const docsUrl = absoluteUrl("/docs", options.locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      {
        "@type": "TechArticle",
        headline: options.title,
        description: options.description,
        inLanguage: LOCALE_HTML_LANG[options.locale],
        mainEntityOfPage: pageUrl,
        url: pageUrl,
        image: shareImageNode(),
        author: { "@id": organizationId() },
        publisher: { "@id": organizationId() },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: siteConfig.name,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: options.text.docsTitle,
            item: docsUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: options.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
