import type { Locale } from "./types";

export const LOCALE_PREFIX: Record<Locale, string> = {
  "zh-CN": "",
  "zh-TW": "/zh-TW",
  "en-US": "/en",
};

const PREFIXED_LOCALES: readonly { prefix: string; locale: Locale }[] = [
  { prefix: "/zh-TW", locale: "zh-TW" },
  { prefix: "/en", locale: "en-US" },
];

export function stripLocalePrefix(pathname: string): string {
  const path = pathname || "/";
  for (const { prefix } of PREFIXED_LOCALES) {
    if (path === prefix) return "/";
    if (path.startsWith(`${prefix}/`)) {
      const rest = path.slice(prefix.length);
      return rest || "/";
    }
  }
  return path.startsWith("/") ? path : `/${path}`;
}

export function localeFromPathname(pathname: string): Locale {
  for (const { prefix, locale } of PREFIXED_LOCALES) {
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return locale;
  }
  return "zh-CN";
}

export function localizePath(path: string, locale: Locale): string {
  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const withoutHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const queryIndex = withoutHash.indexOf("?");
  const query = queryIndex >= 0 ? withoutHash.slice(queryIndex) : "";
  const pathname = queryIndex >= 0 ? withoutHash.slice(0, queryIndex) : withoutHash;
  const bare = stripLocalePrefix(pathname || "/");
  const prefix = LOCALE_PREFIX[locale];
  const localized = bare === "/" ? prefix || "/" : `${prefix}${bare}`;
  return `${localized}${query}${hash}`;
}

export function isPromoPath(pathname: string) {
  const bare = stripLocalePrefix(pathname);
  return bare === "/promo" || bare.startsWith("/promo/");
}
