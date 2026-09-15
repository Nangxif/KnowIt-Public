import { langParamValue } from "@/i18n/params";
import type { Locale } from "@/i18n/types";
import { themeParamValue, type KnowItThemeName } from "@/theme/params";

export const ROUTER_BASENAME =
  import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export const LEGAL_PATHS = {
  privacy: "/privacy",
  terms: "/terms",
  changelog: "/changelog",
} as const;

export const DOCS_INDEX_PATH = "/docs";
export const CREATOR_NOTE_DOC_ID = "creator-note";

export const PROMO_INDEX_PATH = "/promo";
export const PROMO_TILE_PATH = "/promo/tile";
export const PROMO_SLIDE_PATHS = {
  brand: "/promo/brand",
  popup: "/promo/popup",
  privacy: "/promo/privacy",
  stats: "/promo/stats",
  setup: "/promo/setup",
} as const;

export type LegalTab = keyof typeof LEGAL_PATHS;

export function withBasename(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (ROUTER_BASENAME === "/") return normalized;
  return `${ROUTER_BASENAME}${normalized}`;
}

export function legalPageSrc(
  tab: LegalTab,
  themeName: KnowItThemeName,
  locale: Locale,
) {
  const params = new URLSearchParams({
    theme: themeParamValue(themeName),
    lang: langParamValue(locale),
  });
  return withBasename(`${LEGAL_PATHS[tab]}?${params.toString()}`);
}
