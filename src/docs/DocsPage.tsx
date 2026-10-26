import { useEffect } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";

import { CREATOR_NOTE_DOC_ID } from "@/app/paths";
import { useLocalizedPath, useTranslation } from "@/i18n/context";
import type { AppId, Messages, PhilosophySection } from "@/i18n/types";
import { catalogApps } from "@/landing/apps";
import AppIcon from "@/landing/app-icons/AppIcon";
import { PageMeta } from "@/seo/head";
import { articleJsonLd } from "@/seo/structuredData";
import SiteLayout from "@/shell/SiteLayout";

import { APP_DOC_IDS, docsPath, isDocsDocId } from "./docIds";
import styles from "./docs.module.css";

function philosophyTitle(appId: AppId, text: Messages) {
  return text.philosophyTitle.replace("{name}", text.appNames[appId]);
}

function CreatorNoteArticle({ text }: { text: Messages }) {
  return (
    <article className={styles.article}>
      <header className={styles.articleHeader}>
        <h1>{text.creatorNoteTitle}</h1>
        <p className={styles.lede}>{text.creatorNoteSubtitle}</p>
      </header>
      <div className={styles.letter}>
        {text.creatorNoteParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className={styles.signOff}>
          <span className={styles.signOffName}>{text.creatorNoteSignOff}</span>
          <time dateTime="2026-09-01">{text.creatorNoteDate}</time>
        </div>
      </div>
    </article>
  );
}

function PhilosophyArticle({ appId, text }: { appId: AppId; text: Messages }) {
  const to = useLocalizedPath();
  const doc = text.appPhilosophy[appId];
  const app = catalogApps.find((item) => item.id === appId);
  const sections: readonly PhilosophySection[] = doc.sections ?? [
    { title: text.philosophyWhyTitle, paragraphs: doc.why },
    { title: text.philosophyCraftTitle, paragraphs: doc.craft },
    { title: text.philosophyNotTitle, paragraphs: doc.not },
  ];

  return (
    <article className={styles.article}>
      <header className={styles.articleHeader}>
        <h1>{text.toolSeoTitles[appId]}</h1>
        <p className={styles.lede}>{text.appDescriptions[appId]}</p>
      </header>
      <section className={styles.section}>
        <h2>{text.toolFactsTitle}</h2>
        <ul className={styles.list}>
          <li>
            <strong>{text.toolFactDoesLabel}</strong>
            {text.appDescriptions[appId]}
          </li>
          <li>{text.toolFactPrivacy}</li>
          {app?.category === "ai" ? <li>{text.toolFactByok}</li> : null}
          <li>
            {app?.badge === "premium" ? text.toolFactPricePremium : text.toolFactPriceFree}
          </li>
        </ul>
        <p>
          <Link className={styles.moreLink} to={to("/faq")}>
            {text.toolFactFaqLink}
          </Link>
        </p>
      </section>
      {doc.intro ? <p className={styles.lede}>{doc.intro}</p> : null}
      <section className={styles.section}>
        <h2>{philosophyTitle(appId, text)}</h2>
      </section>
      {sections.map((section, index) => (
        <section
          key={section.title ?? index}
          className={
            section.level === 3
              ? `${styles.section} ${styles.subsection}`
              : styles.section
          }
        >
          {section.title ? (
            section.level === 3 ? (
              <h3>{section.title}</h3>
            ) : (
              <h2>{section.title}</h2>
            )
          ) : null}
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.items ? (
            <ul className={styles.list}>
              {section.items.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  {item.text}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </article>
  );
}

export default function DocsPage() {
  const { docId: rawId } = useParams();
  const { locale, text } = useTranslation();
  const to = useLocalizedPath();
  const location = useLocation();
  const legacyCreator = rawId === CREATOR_NOTE_DOC_ID;
  const unknown = Boolean(rawId && !isDocsDocId(rawId));
  const docId =
    rawId && isDocsDocId(rawId) && rawId !== CREATOR_NOTE_DOC_ID
      ? rawId
      : CREATOR_NOTE_DOC_ID;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [docId]);

  if (legacyCreator || unknown) {
    return <Navigate to={to("/docs")} replace />;
  }

  const pathname = docsPath(docId);
  const title =
    docId === CREATOR_NOTE_DOC_ID
      ? text.seoCreatorTitle
      : `${text.toolSeoTitles[docId]} — KnowIt`;
  const description =
    docId === CREATOR_NOTE_DOC_ID
      ? text.seoCreatorDescription
      : `${text.appDescriptions[docId]} ${text.toolFactPrivacy}`;
  const searchParams = new URLSearchParams(location.search);
  searchParams.delete("lang");
  const search = searchParams.toString();
  const href = (path: string) => (search ? `${to(path)}?${search}` : to(path));

  return (
    <SiteLayout>
      <PageMeta
        title={title}
        description={description}
        pathname={pathname}
        jsonLd={articleJsonLd({ title, description, pathname, locale, text })}
      />
      <div className={styles.page}>
        <aside className={styles.sidebar}>
          <p className={styles.sidebarTitle}>{text.docsTitle}</p>
          <nav className={styles.nav} aria-label={text.docsNavLabel}>
            <Link
              to={href(docsPath(CREATOR_NOTE_DOC_ID))}
              className={`${styles.navItem} ${
                docId === CREATOR_NOTE_DOC_ID ? styles.navItemActive : ""
              }`}
            >
              {text.creatorNoteTitle}
            </Link>
            <Link to={to("/faq")} className={styles.navItem}>
              {text.faqTitle}
            </Link>
            <p className={styles.groupLabel}>{text.docsGroupApps}</p>
            {APP_DOC_IDS.map((appId) => (
              <Link
                key={appId}
                to={href(docsPath(appId))}
                className={`${styles.navItem} ${
                  docId === appId ? styles.navItemActive : ""
                }`}
              >
                <span className={styles.navIcon} aria-hidden>
                  <AppIcon id={appId} />
                </span>
                {text.appNames[appId]}
              </Link>
            ))}
          </nav>
        </aside>
        <div className={styles.panel}>
          {docId === CREATOR_NOTE_DOC_ID ? (
            <CreatorNoteArticle text={text} />
          ) : (
            <PhilosophyArticle appId={docId} text={text} />
          )}
        </div>
      </div>
    </SiteLayout>
  );
}
