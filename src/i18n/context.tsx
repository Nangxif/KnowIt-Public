import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import { enUS } from "./en-US";
import { zhCN } from "./zh-CN";
import { zhTW } from "./zh-TW";
import {
  LOCALES,
  LOCALE_HTML_LANG,
  type Locale,
  type Messages,
} from "./types";

export const LOCALE_STORAGE_KEY = "knowItLocale";
export const DEFAULT_LOCALE: Locale = "zh-CN";

const dictionaries: Record<Locale, Messages> = {
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  "en-US": enUS,
};

const isLocale = (value: unknown): value is Locale =>
  typeof value === "string" && (LOCALES as readonly string[]).includes(value);

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // Ignore blocked storage.
  }
  return DEFAULT_LOCALE;
}

function applyLocale(locale: Locale) {
  document.documentElement.lang = LOCALE_HTML_LANG[locale];
  document.title = dictionaries[locale].documentTitle;
}

type LocaleContextValue = {
  locale: Locale;
  text: Messages;
  changeLanguage: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const next = readStoredLocale();
    setLocale(next);
    applyLocale(next);
  }, []);

  useEffect(() => {
    applyLocale(locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      text: dictionaries[locale],
      changeLanguage: (next) => {
        setLocale(next);
        try {
          window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
        } catch {
          // Ignore blocked storage.
        }
      },
    }),
    [locale],
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

export { LOCALES } from "./types";
export type { Locale } from "./types";
