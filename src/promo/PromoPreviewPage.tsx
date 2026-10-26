import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useLocalizedPath, useTranslation } from "@/i18n/context";
import { langParamValue } from "@/i18n/params";
import { PageMeta } from "@/seo/head";
import SiteLayout from "@/shell/SiteLayout";
import { useTheme } from "@/theme/theme";
import { themeParamValue } from "@/theme/params";

import PromoCanvas from "./PromoCanvas";
import PromoSlideView from "./PromoSlideView";
import styles from "./promo.module.css";
import {
  nextPromoSlideId,
  prevPromoSlideId,
  promoSlidePath,
  PROMO_SLIDE_IDS,
  type PromoSlideId,
} from "./slides";

export default function PromoPreviewPage() {
  const { text, locale } = useTranslation();
  const to = useLocalizedPath();
  const { themeName } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [slideId, setSlideId] = useState<PromoSlideId>(PROMO_SLIDE_IDS[0]);

  useEffect(() => {
    document.documentElement.dataset.knowitPromo = "1";
    return () => {
      delete document.documentElement.dataset.knowitPromo;
    };
  }, []);

  useEffect(() => {
    if (searchParams.get("lang")) return;
    const next = new URLSearchParams(searchParams);
    next.set("lang", langParamValue(locale));
    setSearchParams(next, { replace: true });
  }, [locale, searchParams, setSearchParams]);

  const params = new URLSearchParams(searchParams);
  if (!params.get("lang")) params.set("lang", langParamValue(locale));
  if (!params.get("theme")) params.set("theme", themeParamValue(themeName));
  const captureTo = `${to(promoSlidePath(slideId))}?${params.toString()}`;

  return (
    <SiteLayout showNav={false} showFooter={false} fullBleed showWave={false}>
      <PageMeta
        title={text.documentTitle}
        description={text.entityDefinition}
        pathname="/promo"
        robots="noindex, nofollow"
      />
      <div className={styles.previewPage}>
        <div className={styles.previewBar}>
          <p className={styles.previewMeta}>{text.promo.previewHint}</p>
          <Button type="primary" onClick={() => navigate(captureTo)}>
            {text.promo.previewCapture}
          </Button>
        </div>
        <div className={styles.previewStage}>
          <button
            type="button"
            className={styles.navButton}
            aria-label={text.promo.previewPrev}
            onClick={() => setSlideId((id) => prevPromoSlideId(id))}
          >
            <LeftOutlined />
          </button>
          <div className={styles.stageFrame}>
            <PromoCanvas>
              <PromoSlideView id={slideId} />
            </PromoCanvas>
          </div>
          <button
            type="button"
            className={styles.navButton}
            aria-label={text.promo.previewNext}
            onClick={() => setSlideId((id) => nextPromoSlideId(id))}
          >
            <RightOutlined />
          </button>
        </div>
      </div>
    </SiteLayout>
  );
}
