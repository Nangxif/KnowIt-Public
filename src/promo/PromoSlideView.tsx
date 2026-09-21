import { assetUrl } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import type { Locale } from "@/i18n/types";

import { Headline, Poster } from "./Poster";
import styles from "./promo.module.css";
import StatsSlide from "./StatsSlide";
import SetupSlide from "./SetupSlide";
import type { PromoSlideId } from "./slides";

function BrandMark({ name }: { name: string }) {
  return (
    <div className={styles.kicker}>
      <img src={assetUrl("brand/logo-dark.png")} alt="" className={styles.logo} />
      <img
        src={assetUrl("brand/logo-light.png")}
        alt=""
        className={`${styles.logo} ${styles.logoLight}`}
      />
      <span className={styles.kickerName}>{name}</span>
    </div>
  );
}

function ShieldMark() {
  return (
    <svg className={styles.privacyMark} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 1 20.217 2.826A1 1 0 0 1 21 3.802v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.789V3.802a1 1 0 0 1 .783-.976ZM12 3.049 5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604ZM12 7a2 2 0 0 1 1.001 3.732L13 15h-2v-4.268A2 2 0 0 1 12 7Z"
      />
    </svg>
  );
}

function brandToolsSrc(locale: Locale) {
  const suffix = locale === "en-US" ? "-en" : "";
  return assetUrl(`promo/brand-tools${suffix}.png`);
}

function BrandSlide() {
  const { locale, text } = useTranslation();

  return (
    <Poster tone="field" className={styles.brandSlide}>
      <div className={styles.copy}>
        <BrandMark name={text.promo.brandKicker} />
        <div className={styles.brandHeadline}>
          <Headline copy={text.promo.brand} />
        </div>
      </div>
      <div className={styles.artField}>
        <div className={styles.brandPanel}>
          <img src={brandToolsSrc(locale)} alt="" />
        </div>
      </div>
    </Poster>
  );
}

function popupShotSrc(locale: Locale, tone: "light" | "dark") {
  const suffix = locale === "en-US" ? "-en" : "";
  return assetUrl(`promo/popup-${tone}${suffix}.png`);
}

function PopupSlide() {
  const { locale, text } = useTranslation();

  return (
    <Poster tone="air" className={styles.popupSlide}>
      <div className={styles.copy}>
        <Headline copy={text.promo.popup} variant="inline" />
      </div>
      <div className={styles.popupArt}>
        <div className={styles.popupStack}>
          <img
            src={popupShotSrc(locale, "dark")}
            alt=""
            className={`${styles.popupShot} ${styles.popupShotBack}`}
          />
          <img
            src={popupShotSrc(locale, "light")}
            alt=""
            className={`${styles.popupShot} ${styles.popupShotFront}`}
          />
        </div>
      </div>
    </Poster>
  );
}

function PrivacyPoint({ title }: { title: string }) {
  return (
    <li className={styles.privacyCard}>
      <div className={styles.privacyCardTitle}>{title}</div>
    </li>
  );
}

function PrivacySlide() {
  const { text } = useTranslation();

  return (
    <Poster tone="field" className={styles.privacySlide}>
      <div className={styles.copy}>
        <Headline copy={text.promo.privacy} variant="inline" />
        <ul className={styles.privacyCards}>
          <PrivacyPoint title={text.promo.privacyLocal} />
          <PrivacyPoint title={text.promo.privacySync} />
          <PrivacyPoint title={text.promo.privacyKey} />
        </ul>
      </div>
      <ShieldMark />
    </Poster>
  );
}

export default function PromoSlideView({ id }: { id: PromoSlideId }) {
  switch (id) {
    case "brand":
      return <BrandSlide />;
    case "popup":
      return <PopupSlide />;
    case "privacy":
      return <PrivacySlide />;
    case "stats":
      return <StatsSlide />;
    case "setup":
      return <SetupSlide />;
  }
}
