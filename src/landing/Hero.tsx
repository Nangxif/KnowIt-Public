import { DownloadOutlined, ExportOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { assetUrl, siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import InstallMenu from "@/shell/InstallMenu";

import styles from "./Hero.module.css";

export default function Hero() {
  const { text } = useTranslation();

  return (
    <section className={styles.hero} id="top" aria-label={text.heroTitle}>
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
      <h1>{text.heroTitle}</h1>
      <p className={styles.subtitle}>{text.heroSubtitle}</p>
      <div className={styles.actions}>
        <InstallMenu
          label={text.heroInstall}
          size="large"
          icon={<DownloadOutlined />}
          className={styles.primaryAction}
        />
        <Button
          size="large"
          icon={<ExportOutlined />}
          href={siteConfig.afdianUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.secondaryAction}
        >
          {text.heroPurchase}
        </Button>
      </div>
    </section>
  );
}
