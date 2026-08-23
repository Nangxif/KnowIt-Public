import { GithubOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useState, type CSSProperties } from "react";

import { assetUrl, siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import type { LegalDocument } from "@/i18n/types";

import styles from "./SiteFooter.module.css";

type LegalTab = "privacy" | "terms" | "changelog";

type SiteFooterStyle = CSSProperties & {
  "--app-footer-width": string;
};

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const { text } = useTranslation();
  const [activeTab, setActiveTab] = useState<LegalTab | null>(null);

  const navItems: { key: LegalTab; label: string }[] = [
    { key: "privacy", label: text.privacyPolicyLink },
    { key: "terms", label: text.userAgreementLink },
    { key: "changelog", label: text.changelogLink },
  ];

  const renderDocument = (doc: LegalDocument) => (
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

  return (
    <>
      <footer
        className={styles.footer}
        style={{ "--app-footer-width": "1180px" } as SiteFooterStyle}
      >
        <div className={styles.footerGrid}>
          <div className={styles.brandColumn}>
            <div className={styles.brandRow}>
              <img
                src={assetUrl("brand/logo-dark.png")}
                alt=""
                className={styles.logo}
              />
              <img
                src={assetUrl("brand/logo-light.png")}
                alt=""
                className={`${styles.logo} ${styles.logoLight}`}
              />
              <span className={styles.brandName}>KnowIt</span>
            </div>
            <div className={styles.socialRow}>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.githubButton}
                aria-label={text.footerGithubLabel}
                title={text.footerGithubLabel}
              >
                <GithubOutlined />
              </a>
            </div>
            <p className={styles.copyright}>
              © {currentYear} KnowIt. All rights reserved.
            </p>
            <p className={styles.versionLabel}>v{siteConfig.version}</p>
          </div>

          <div className={styles.linkColumns}>
            <section className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>{text.footerAboutTitle}</h3>
              <ul className={styles.columnLinks}>
                {navItems.map((item) => (
                  <li key={item.key}>
                    <button
                      type="button"
                      className={styles.footerLink}
                      onClick={() => setActiveTab(item.key)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
            <section className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>{text.footerContactTitle}</h3>
              <ul className={styles.columnLinks}>
                {siteConfig.contactEmails.map((email) => (
                  <li key={email}>
                    <a href={`mailto:${email}`} className={styles.footerLink}>
                      {email}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={siteConfig.issuesUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles.footerLink}
                  >
                    {text.contactFeedbackShort}
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </footer>

      <Modal
        centered
        open={activeTab !== null}
        title={null}
        onCancel={() => setActiveTab(null)}
        footer={null}
        width={920}
        destroyOnClose
        className={styles.legalModal}
        styles={{ body: { padding: 0 } }}
      >
        <div className={styles.legalLayout}>
          <aside className={styles.legalSidebar}>
            <nav className={styles.legalNav} aria-label={text.legalNavLabel}>
              {navItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={`${styles.legalNavItem} ${
                    activeTab === item.key ? styles.legalNavItemActive : ""
                  }`}
                  onClick={() => setActiveTab(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>
          <div className={styles.legalContent}>
            {activeTab === "privacy" ? renderDocument(text.privacyPolicy) : null}
            {activeTab === "terms" ? renderDocument(text.userAgreement) : null}
            {activeTab === "changelog" ? (
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
            ) : null}
          </div>
        </div>
      </Modal>
    </>
  );
}
