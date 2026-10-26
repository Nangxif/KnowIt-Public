import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type PropsWithChildren,
} from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { enUS } from "./en-US";
import { parseLangParam, langParamValue } from "./params";
import { isPromoPath, localizePath } from "./routing";
import { knownBarePath, knownHash, themeSearch } from "./safePath";
import { zhCN } from "./zh-CN";
import { zhTW } from "./zh-TW";
import { LOCALE_HTML_LANG, type Locale, type Messages } from "./types";

export const LOCALE_STORAGE_KEY = "knowItLocale";
export const DEFAULT_LOCALE: Locale = "zh-CN";

const dictionaries: Record<Locale, Messages> = {
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  "en-US": enUS,
};

type LocaleContextValue = {
  locale: Locale;
  text: Messages;
  changeLanguage: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  children,
}: PropsWithChildren<{ locale: Locale }>) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const promoRoute = isPromoPath(location.pathname);
  const queryLocale = parseLangParam(searchParams.get("lang"));
  const activeLocale = promoRoute && queryLocale ? queryLocale : locale;

  useEffect(() => {
    document.documentElement.lang = LOCALE_HTML_LANG[activeLocale];
  }, [activeLocale]);

  useEffect(() => {
    if (promoRoute || !queryLocale) return;
    navigate(
      {
        pathname: localizePath(knownBarePath(location.pathname), queryLocale),
        search: themeSearch(searchParams),
        hash: knownHash(location.hash),
      },
      { replace: true },
    );
  }, [promoRoute, queryLocale, location.pathname, location.hash, navigate, searchParams]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale: activeLocale,
      text: dictionaries[activeLocale],
      changeLanguage: (next) => {
        try {
          window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
        } catch {
          // Ignore blocked storage.
        }
        if (promoRoute) {
          const nextParams = new URLSearchParams(searchParams);
          nextParams.set("lang", langParamValue(next));
          setSearchParams(nextParams, { replace: true });
          return;
        }
        navigate({
          pathname: localizePath(knownBarePath(location.pathname), next),
          search: themeSearch(searchParams),
          hash: knownHash(location.hash),
        });
      },
    }),
    [
      activeLocale,
      promoRoute,
      searchParams,
      setSearchParams,
      navigate,
      location.pathname,
      location.hash,
    ],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useTranslation must be used within LocaleProvider");
  }
  return context;
}

export function useLocalizedPath() {
  const { locale } = useTranslation();
  return (path: string) => localizePath(path, locale);
}

export { LOCALES } from "./types";
export type { Locale } from "./types";
