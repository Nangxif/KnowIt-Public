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
