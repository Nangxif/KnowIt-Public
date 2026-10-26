import { useEffect } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";

import { PROMO_SLIDE_PATHS } from "@/app/paths";
import { useLocalizedPath, useTranslation } from "@/i18n/context";
import { langParamValue } from "@/i18n/params";
import { PageMeta } from "@/seo/head";
import SiteLayout from "@/shell/SiteLayout";

import PromoCanvas from "./PromoCanvas";
import PromoSlideView from "./PromoSlideView";
import { isPromoSlideId } from "./slides";

export default function PromoCapturePage() {
  const { slideId } = useParams();
  const { locale, text } = useTranslation();
  const to = useLocalizedPath();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.toString();
  const suffix = search ? `?${search}` : "";

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.knowitPromo = "1";
    root.dataset.knowitCapture = "1";
    return () => {
      delete root.dataset.knowitPromo;
      delete root.dataset.knowitCapture;
    };
  }, []);

  useEffect(() => {
    if (searchParams.get("lang")) return;
    const next = new URLSearchParams(searchParams);
    next.set("lang", langParamValue(locale));
    setSearchParams(next, { replace: true });
  }, [locale, searchParams, setSearchParams]);

  if (!isPromoSlideId(slideId)) {
    return <Navigate to={`${to(PROMO_SLIDE_PATHS.brand)}${suffix}`} replace />;
  }

  return (
    <SiteLayout showNav={false} showFooter={false} fullBleed showWave={false}>
      <PageMeta
        title={text.documentTitle}
        description={text.entityDefinition}
        pathname={`/promo/${slideId}`}
        robots="noindex, nofollow"
      />
      <PromoCanvas>
        <PromoSlideView id={slideId} />
      </PromoCanvas>
    </SiteLayout>
  );
}
