import { catalogApps } from "@/landing/apps";
import { siteConfig } from "@/config/site";
import { LOCALE_HTML_LANG, type Locale, type Messages } from "@/i18n/types";

import { absoluteUrl, assetAbsolute } from "./urls";

export type JsonLd = Record<string, unknown>;

function organization(locale: Locale) {
  return {
    "@type": "Organization",
    name: siteConfig.name,
    url: absoluteUrl("/", locale),
  };
}

export function homeJsonLd(text: Messages, locale: Locale): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome, Microsoft Edge",
    softwareVersion: siteConfig.version,
    description: text.seoHomeDescription,
    url: absoluteUrl("/", locale),
    image: assetAbsolute("/brand/icon-128.png"),
    inLanguage: LOCALE_HTML_LANG[locale],
    installUrl: siteConfig.chromeWebStoreUrl,
    featureList: catalogApps.map((app) => text.appNames[app.id]),
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "CNY",
        description: text.freePlan,
      },
      {
        "@type": "Offer",
        price: "6.66",
        priceCurrency: "CNY",
        description: text.lifetimePlan,
      },
    ],
    sameAs: [
      siteConfig.githubUrl,
      siteConfig.chromeWebStoreUrl,
      siteConfig.edgeAddonsUrl,
    ],
    author: organization(locale),
  };
}

export function faqJsonLd(text: Messages): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: text.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
      {
        "@type": "TechArticle",
        headline: options.title,
        description: options.description,
        inLanguage: LOCALE_HTML_LANG[options.locale],
        mainEntityOfPage: pageUrl,
        url: pageUrl,
        author: organization(options.locale),
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
