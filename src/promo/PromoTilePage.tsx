import { useEffect } from "react";

import { assetUrl } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import SiteLayout from "@/shell/SiteLayout";

import PromoCanvas from "./PromoCanvas";
import { Headline, Poster } from "./Poster";
import styles from "./promo.module.css";

function TileView() {
  const { text } = useTranslation();

  return (
    <Poster tone="field" accent="#3b82f6" className={styles.tileSlide}>
      <div className={styles.kicker}>
        <img src={assetUrl("brand/logo-dark.png")} alt="" className={styles.logo} />
        <img
          src={assetUrl("brand/logo-light.png")}
          alt=""
          className={`${styles.logo} ${styles.logoLight}`}
        />
        <span className={styles.kickerName}>{text.promo.brandKicker}</span>
      </div>
      <Headline
        copy={{
          lead: text.promo.brand.lead,
          rest: text.promo.brand.rest,
          subtitle: "",
        }}
      />
      <p className={styles.tileTagline}>{text.promo.tileTagline}</p>
    </Poster>
  );
}

export default function PromoTilePage() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.knowitPromo = "1";
    root.dataset.knowitCapture = "1";
    root.dataset.knowitTile = "1";
    return () => {
      delete root.dataset.knowitPromo;
      delete root.dataset.knowitCapture;
      delete root.dataset.knowitTile;
    };
  }, []);

  return (
    <SiteLayout showNav={false} showFooter={false} fullBleed showWave={false}>
      <PromoCanvas size="tile">
        <TileView />
      </PromoCanvas>
    </SiteLayout>
  );
}
