import { siteConfig } from "@/config/site";
import { localizePath } from "@/i18n/routing";
import type { Locale } from "@/i18n/types";

export function siteOrigin() {
  return siteConfig.officialSiteUrl.replace(/\/$/, "");
}

export function absoluteUrl(pathname: string, locale: Locale) {
  return new URL(localizePath(pathname, locale), `${siteOrigin()}/`).toString();
}

export function assetAbsolute(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, `${siteOrigin()}/`).toString();
}
