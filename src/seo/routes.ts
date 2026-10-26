import { PROMO_INDEX_PATH, PROMO_SLIDE_PATHS, PROMO_TILE_PATH } from "@/app/paths";
import { APP_DOC_IDS } from "@/docs/docIds";
import { localizePath } from "@/i18n/routing";
import { LOCALES, type Locale } from "@/i18n/types";

/** Bare paths that should be indexed. `/docs` is the creator note. */
export const INDEXABLE_PATHS = [
  "/",
  "/faq",
  "/privacy",
  "/terms",
  "/changelog",
  "/docs",
  ...APP_DOC_IDS.map((id) => `/docs/${id}`),
] as const;

export const NOINDEX_PATHS = [
  PROMO_INDEX_PATH,
  PROMO_TILE_PATH,
  ...Object.values(PROMO_SLIDE_PATHS),
] as const;

export const REDIRECT_PATHS = [{ from: "/docs/creator-note", to: "/docs" }] as const;

export function prerenderManifest() {
  const pages: { locale: Locale; pathname: string; urlPath: string; indexable: boolean }[] = [];

  for (const locale of LOCALES) {
    for (const pathname of INDEXABLE_PATHS) {
      pages.push({
        locale,
        pathname,
        urlPath: localizePath(pathname, locale),
        indexable: true,
      });
    }
    for (const pathname of NOINDEX_PATHS) {
      pages.push({
        locale,
        pathname,
        urlPath: localizePath(pathname, locale),
        indexable: false,
      });
    }
  }

  const redirects = LOCALES.flatMap((locale) =>
    REDIRECT_PATHS.map((redirect) => ({
      locale,
      from: localizePath(redirect.from, locale),
      to: localizePath(redirect.to, locale),
    })),
  );

  return { pages, redirects };
}
