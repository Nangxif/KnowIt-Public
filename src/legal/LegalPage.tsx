import { useEffect, useState } from "react";

import type { LegalTab } from "@/app/paths";
import { useTranslation } from "@/i18n/context";
import { PageMeta } from "@/seo/head";
import { webPageJsonLd } from "@/seo/structuredData";
import SiteLayout from "@/shell/SiteLayout";

import LegalDocumentView from "./LegalDocumentView";
import styles from "./legal.module.css";

const SEO_COPY = {
  privacy: {
    title: "seoPrivacyTitle",
    description: "seoPrivacyDescription",
    keywords: "seoPrivacyKeywords",
    pathname: "/privacy",
  },
  terms: {
    title: "seoTermsTitle",
    description: "seoTermsDescription",
    keywords: "seoTermsKeywords",
    pathname: "/terms",
  },
  changelog: {
    title: "seoChangelogTitle",
    description: "seoChangelogDescription",
    keywords: "seoChangelogKeywords",
    pathname: "/changelog",
  },
} as const;

export default function LegalPage({ kind }: { kind: LegalTab }) {
  const { locale, text } = useTranslation();
  const [framed] = useState(
    () => typeof window !== "undefined" && window.self !== window.top,
  );
  const seo = SEO_COPY[kind];

  useEffect(() => {
    if (!framed) return;
    document.documentElement.dataset.knowitFramed = "1";
    return () => {
      delete document.documentElement.dataset.knowitFramed;
    };
  }, [framed]);

  const documentView = <LegalDocumentView kind={kind} />;
  const meta = (
    <PageMeta
      title={text[seo.title]}
      description={text[seo.description]}
      keywords={text[seo.keywords]}
      pathname={seo.pathname}
      jsonLd={webPageJsonLd({
        title: text[seo.title],
        description: text[seo.description],
        pathname: seo.pathname,
        locale,
      })}
    />
  );

  if (framed) {
    return (
      <div className={styles.framedPage}>
        {meta}
        {documentView}
      </div>
    );
  }

  return (
    <SiteLayout showNav={false} showFooter={false}>
      {meta}
      <div className={styles.standalone}>
        <div className={styles.panel}>{documentView}</div>
      </div>
    </SiteLayout>
  );
}
