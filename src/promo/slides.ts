import { PROMO_SLIDE_PATHS } from "@/app/paths";

export const PROMO_SLIDE_IDS = [
  "brand",
  "popup",
  "privacy",
  "stats",
  "setup",
] as const;

export type PromoSlideId = (typeof PROMO_SLIDE_IDS)[number];

export function isPromoSlideId(value: string | undefined): value is PromoSlideId {
  return PROMO_SLIDE_IDS.some((id) => id === value);
}

export function promoSlidePath(id: PromoSlideId) {
  return PROMO_SLIDE_PATHS[id];
}

export function nextPromoSlideId(id: PromoSlideId): PromoSlideId {
  const index = PROMO_SLIDE_IDS.indexOf(id);
  return PROMO_SLIDE_IDS[(index + 1) % PROMO_SLIDE_IDS.length];
}

export function prevPromoSlideId(id: PromoSlideId): PromoSlideId {
  const index = PROMO_SLIDE_IDS.indexOf(id);
  return PROMO_SLIDE_IDS[(index - 1 + PROMO_SLIDE_IDS.length) % PROMO_SLIDE_IDS.length];
}
