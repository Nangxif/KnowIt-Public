import { useEffect } from "react";

import { assetUrl } from "@/config/site";
import { useTranslation } from "@/i18n/context";
import SiteLayout from "@/shell/SiteLayout";

import PromoCanvas from "./PromoCanvas";
import styles from "./promo.module.css";

function TileView() {
  const { text } = useTranslation();

  return (
    <div className={styles.tileSlide}>
      <img src={assetUrl("promo/tile-icon.png")} alt="" className={styles.tileLogo} />
      <div className={styles.tileCopy}>
        <div className={styles.tileName}>{text.promo.brandKicker}</div>
        <p className={styles.tileHeadline}>{text.promo.tileHeadline}</p>
      </div>
    </div>
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
