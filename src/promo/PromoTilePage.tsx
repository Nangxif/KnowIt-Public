import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { assetUrl } from "@/config/site";
import { DEFAULT_LOCALE, useTranslation } from "@/i18n/context";
import { langParamValue } from "@/i18n/params";
import SiteLayout from "@/shell/SiteLayout";

import { Poster } from "./Poster";
import PromoCanvas from "./PromoCanvas";
import styles from "./promo.module.css";

function TileView() {
  const { text } = useTranslation();

  return (
    <Poster tone="air" className={styles.tileSlide}>
      <img src={assetUrl("promo/tile-icon.png")} alt="" className={styles.tileLogo} />
      <div className={styles.tileCopy}>
        <div className={styles.tileName}>{text.promo.brandKicker}</div>
        <p className={styles.tileHeadline}>{text.promo.tileHeadline}</p>
      </div>
    </Poster>
  );
}

export default function PromoTilePage() {
  const [searchParams, setSearchParams] = useSearchParams();

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

  useEffect(() => {
    if (searchParams.get("lang")) return;
    const next = new URLSearchParams(searchParams);
    next.set("lang", langParamValue(DEFAULT_LOCALE));
    setSearchParams(next, { replace: true });
  }, [searchParams, setSearchParams]);

  return (
    <SiteLayout showNav={false} showFooter={false} fullBleed showWave={false}>
      <PromoCanvas size="tile">
        <TileView />
      </PromoCanvas>
    </SiteLayout>
  );
}
