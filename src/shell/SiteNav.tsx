import { GithubOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { DOCS_INDEX_PATH } from "@/app/paths";
import { assetUrl, siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import { useTheme } from "@/theme/theme";

import InstallMenu from "./InstallMenu";
import LocaleSwitcher from "./LocaleSwitcher";
import styles from "./SiteNav.module.css";

const SECTION_LINKS = [
  { hash: "highlights", labelKey: "navHighlights" },
  { hash: "showcase", labelKey: "navShowcase" },
  { hash: "apps", labelKey: "navApps" },
  { hash: "pricing", labelKey: "navPricing" },
] as const;

export default function SiteNav() {
  const { text } = useTranslation();
  const { themeName, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavFloating, setIsNavFloating] = useState(false);

  useEffect(() => {
    const syncNavFloating = () => {
      const offset = Math.max(
        window.scrollY,
        document.documentElement.scrollTop,
        document.body.scrollTop,
      );
      setIsNavFloating(offset > 8);
    };

    syncNavFloating();
    document.addEventListener("scroll", syncNavFloating, {
      capture: true,
      passive: true,
    });

    return () => {
      document.removeEventListener("scroll", syncNavFloating, { capture: true });
    };
  }, [location.pathname]);

  const goHome = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== "/") return;
    event.preventDefault();
    if (location.hash) {
      navigate("/", { replace: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const isDocsPage = location.pathname.startsWith("/docs");

  return (
    <div className={styles.navShell} data-site-nav="">
      <div className={`${styles.nav} ${isNavFloating ? styles.navScrolled : ""}`}>
        <Link
          to="/"
          className={styles.brand}
          onClick={goHome}
          aria-label={text.brandHomeLabel}
        >
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
          <span>KnowIt</span>
        </Link>

        <nav className={styles.sectionLinks} aria-label="KnowIt">
          {SECTION_LINKS.map((link) => (
            <Link
              key={link.hash}
              to={{ pathname: "/", hash: `#${link.hash}` }}
              className={styles.sectionLink}
            >
              {text[link.labelKey]}
            </Link>
          ))}
          <Link
            to={DOCS_INDEX_PATH}
            className={`${styles.sectionLink} ${
              isDocsPage ? styles.sectionLinkActive : ""
            }`}
          >
            {text.navDocs}
          </Link>
        </nav>

        <div className={styles.navRight}>
          <InstallMenu
            label={text.navInstall}
            className={styles.installButton}
            showCaret={false}
          />
          <Tooltip title={text.footerGithubLabel}>
            <Button
              type="text"
              className={styles.iconButton}
              aria-label={text.footerGithubLabel}
              icon={<GithubOutlined />}
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            />
          </Tooltip>
          <LocaleSwitcher buttonClassName={styles.controlButton} />
          <Tooltip
            title={
              themeName === "vscode-dark" ? text.switchToLight : text.switchToDark
            }
          >
            <Button
              type="text"
              className={styles.iconButton}
              aria-label={
                themeName === "vscode-dark"
                  ? text.switchToLight
                  : text.switchToDark
              }
              icon={
                themeName === "vscode-dark" ? <SunOutlined /> : <MoonOutlined />
              }
              onClick={toggleTheme}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
