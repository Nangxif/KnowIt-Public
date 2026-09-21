import { GlobalOutlined, InfoCircleOutlined, ShareAltOutlined } from "@ant-design/icons";

import { assetUrl, siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/context";

import { Headline, Poster } from "./Poster";
import styles from "./promo.module.css";

function StoreCursor() {
  return (
    <svg className={styles.storeCursor} viewBox="0 0 24 28" aria-hidden>
      <path
        d="M3 2.2 20.6 16.4l-7.4.6 4.2 8.8-3.3 1.6-4.2-8.7L3 22.4Z"
        fill="var(--vscode-button-foreground)"
        stroke="var(--vscode-editor-background)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SetupSlide() {
  const { text } = useTranslation();
  const siteHost = new URL(siteConfig.officialSiteUrl).hostname;

  return (
    <Poster tone="field" className={styles.setupSlide}>
      <div className={styles.setupCopy}>
        <Headline copy={text.promo.setup} variant="inline" />
      </div>
      <article className={styles.storeCard}>
        <div className={styles.storeTop}>
          <div className={styles.storeBrand}>
            <img src={assetUrl("brand/logo-dark.png")} alt="" className={styles.storeLogo} />
            <img
              src={assetUrl("brand/logo-light.png")}
              alt=""
              className={`${styles.storeLogo} ${styles.storeLogoLight}`}
            />
            <div className={styles.storeName}>{text.promo.storeName}</div>
          </div>
          <div className={styles.storeCta}>
            {text.promo.addToChrome}
            <StoreCursor />
          </div>
        </div>
        <div className={styles.storeMeta}>
          <span className={styles.storeSite}>
            <GlobalOutlined />
            {siteHost}
          </span>
          <span className={styles.storeRating}>
            {text.promo.storeRating}
            <InfoCircleOutlined className={styles.storeInfo} />
          </span>
          <span className={styles.storeShare}>
            <ShareAltOutlined />
            {text.promo.storeShare}
          </span>
        </div>
        <div className={styles.storeTags}>
          <span>{text.promo.storeType}</span>
          <span>{text.promo.storeCategory}</span>
        </div>
      </article>
    </Poster>
  );
}
