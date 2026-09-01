import { useEffect } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";

import { CREATOR_NOTE_DOC_ID } from "@/app/paths";
import { useTranslation } from "@/i18n/context";
import type { AppId, Messages, PhilosophySection } from "@/i18n/types";
import AppIcon from "@/landing/app-icons/AppIcon";
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
  const doc = text.appPhilosophy[appId];
  const sections: readonly PhilosophySection[] = doc.sections ?? [
    { title: text.philosophyWhyTitle, paragraphs: doc.why },
    { title: text.philosophyCraftTitle, paragraphs: doc.craft },
    { title: text.philosophyNotTitle, paragraphs: doc.not },
  ];

  return (
    <article className={styles.article}>
      <header className={styles.articleHeader}>
        <h1>{philosophyTitle(appId, text)}</h1>
        {doc.intro ? <p className={styles.lede}>{doc.intro}</p> : null}
      </header>
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
  const { text } = useTranslation();
  const location = useLocation();
  const docId = rawId && isDocsDocId(rawId) ? rawId : null;
  const search = location.search;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [docId]);

  if (!docId) {
    return (
      <Navigate
        to={{ pathname: docsPath(CREATOR_NOTE_DOC_ID), search }}
        replace
      />
    );
  }

  return (
    <SiteLayout>
      <div className={styles.page}>
        <aside className={styles.sidebar}>
          <p className={styles.sidebarTitle}>{text.docsTitle}</p>
          <nav className={styles.nav} aria-label={text.docsNavLabel}>
            <Link
              to={{ pathname: docsPath(CREATOR_NOTE_DOC_ID), search }}
              className={`${styles.navItem} ${
                docId === CREATOR_NOTE_DOC_ID ? styles.navItemActive : ""
              }`}
            >
              {text.creatorNoteTitle}
            </Link>
            <p className={styles.groupLabel}>{text.docsGroupApps}</p>
            {APP_DOC_IDS.map((appId) => (
              <Link
                key={appId}
                to={{ pathname: docsPath(appId), search }}
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

export function DocsIndexRedirect() {
  const location = useLocation();
  return (
    <Navigate
      to={{ pathname: docsPath(CREATOR_NOTE_DOC_ID), search: location.search }}
      replace
    />
  );
}
