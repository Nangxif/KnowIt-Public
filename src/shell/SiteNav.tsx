import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useEffect, useState } from "react";

import { assetUrl } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import { useTheme } from "@/theme/theme";

import InstallMenu from "./InstallMenu";
import LocaleSwitcher from "./LocaleSwitcher";
import styles from "./SiteNav.module.css";

const SECTION_LINKS = [
  { href: "#highlights", labelKey: "navHighlights" },
  { href: "#apps", labelKey: "navApps" },
  { href: "#pricing", labelKey: "navPricing" },
] as const;

export default function SiteNav() {
  const { text } = useTranslation();
  const { themeName, toggleTheme } = useTheme();
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
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.navShell}>
      <div className={`${styles.nav} ${isNavFloating ? styles.navScrolled : ""}`}>
        <button
          type="button"
          className={styles.brand}
          onClick={scrollToTop}
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
        </button>

        <nav className={styles.sectionLinks} aria-label="KnowIt">
          {SECTION_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.sectionLink}>
              {text[link.labelKey]}
            </a>
          ))}
        </nav>

        <div className={styles.navRight}>
          <InstallMenu
            label={text.navInstall}
            className={styles.installButton}
            showCaret={false}
          />
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
