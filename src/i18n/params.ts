import { LOCALES, type Locale } from "./types";

const LOCALE_ALIASES: Record<string, Locale> = {
  zh: "zh-CN",
  "zh-cn": "zh-CN",
  cn: "zh-CN",
  "zh-tw": "zh-TW",
  tw: "zh-TW",
  en: "en-US",
  "en-us": "en-US",
};

export function parseLangParam(value: string | null): Locale | null {
  if (!value) return null;
  const normalized = value.trim();
  if ((LOCALES as readonly string[]).includes(normalized)) {
    return normalized as Locale;
  }
  return LOCALE_ALIASES[normalized.toLowerCase()] ?? null;
}

export function langParamValue(locale: Locale) {
  return locale;
}
