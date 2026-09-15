import { useEffect } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";

import { PROMO_SLIDE_PATHS } from "@/app/paths";
import SiteLayout from "@/shell/SiteLayout";

import PromoCanvas from "./PromoCanvas";
import PromoSlideView from "./PromoSlideView";
import { isPromoSlideId } from "./slides";

export default function PromoCapturePage() {
  const { slideId } = useParams();
  const [searchParams] = useSearchParams();
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

  if (!isPromoSlideId(slideId)) {
    return <Navigate to={`${PROMO_SLIDE_PATHS.brand}${suffix}`} replace />;
  }

  return (
    <SiteLayout showNav={false} showFooter={false} fullBleed showWave={false}>
      <PromoCanvas>
        <PromoSlideView id={slideId} />
      </PromoCanvas>
    </SiteLayout>
  );
}
