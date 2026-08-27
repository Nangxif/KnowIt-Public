import { useTranslation } from "@/i18n/context";
import type { LegalDocument } from "@/i18n/types";
import type { LegalTab } from "@/app/paths";

import styles from "./legal.module.css";

function PolicyArticle({ doc }: { doc: LegalDocument }) {
  const { text } = useTranslation();

  return (
    <article className={styles.docArticle}>
      <header className={styles.docHeader}>
        <h2 className={styles.docTitle}>{doc.title}</h2>
        <div className={styles.docMeta}>
          <span>
            {text.legalUpdatedAtLabel}：{doc.updatedAt}
          </span>
          <span>
            {text.legalEffectiveAtLabel}：{doc.effectiveAt}
          </span>
        </div>
      </header>
      {doc.intro ? <p className={styles.docIntro}>{doc.intro}</p> : null}
      {doc.sections.map((section) => (
        <section key={section.title} className={styles.docSection}>
          <h3 className={styles.docSectionTitle}>{section.title}</h3>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className={styles.docParagraph}>
              {paragraph}
            </p>
          ))}
          {section.items?.length ? (
            <ol className={styles.docItemList}>
              {section.items.map((item) => (
                <li key={item.id}>
                  <span className={styles.docItemId}>{item.id}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ol>
          ) : null}
        </section>
      ))}
    </article>
  );
}

export default function LegalDocumentView({ kind }: { kind: LegalTab }) {
  const { text } = useTranslation();

  if (kind === "changelog") {
    return (
      <article className={styles.docArticle}>
        <header className={styles.docHeader}>
          <h2 className={styles.docTitle}>{text.changelogTitle}</h2>
        </header>
        {text.changelogEntries.map((entry) => (
          <section key={entry.version} className={styles.changelogEntry}>
            <div className={styles.changelogHeader}>
              <h3>v{entry.version}</h3>
              <time dateTime={entry.date}>{entry.date}</time>
            </div>
            <ul className={styles.changelogList}>
              {entry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </article>
    );
  }

  return (
    <PolicyArticle
      doc={kind === "privacy" ? text.privacyPolicy : text.userAgreement}
    />
  );
}
