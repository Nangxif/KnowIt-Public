import { DownloadOutlined, ExportOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { assetUrl, getInstallUrl, siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

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
      <p className={styles.eyebrow}>{text.heroEyebrow}</p>
      <h1>{text.heroTitle}</h1>
      <p className={styles.subtitle}>{text.heroSubtitle}</p>
      <div className={styles.actions}>
        <Button
          type="primary"
          size="large"
          icon={<DownloadOutlined />}
          href={getInstallUrl()}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.primaryAction}
        >
          {text.heroInstall}
        </Button>
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
