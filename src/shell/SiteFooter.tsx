import { GithubOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useState, type CSSProperties } from "react";

import { legalPageSrc, type LegalTab } from "@/app/paths";
import { assetUrl, siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import { useTheme } from "@/theme/theme";

import styles from "./SiteFooter.module.css";

type SiteFooterStyle = CSSProperties & {
  "--app-footer-width": string;
};

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const { locale, text } = useTranslation();
  const { themeName } = useTheme();
  const [activeTab, setActiveTab] = useState<LegalTab | null>(null);

  const navItems: { key: LegalTab; label: string }[] = [
    { key: "privacy", label: text.privacyPolicyLink },
    { key: "terms", label: text.userAgreementLink },
    { key: "changelog", label: text.changelogLink },
  ];

  const activeLabel =
    navItems.find((item) => item.key === activeTab)?.label ?? "";

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
            {activeTab ? (
              <iframe
                key={`${activeTab}-${locale}-${themeName}`}
                className={styles.legalFrame}
                title={activeLabel}
                src={legalPageSrc(activeTab, themeName, locale)}
              />
            ) : null}
          </div>
        </div>
      </Modal>
    </>
  );
}
