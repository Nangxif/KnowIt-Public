export const LOCALES = ["zh-CN", "zh-TW", "en-US"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_DISPLAY_NAMES: Record<Locale, string> = {
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  "en-US": "English",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  "zh-CN": "zh-CN",
  "zh-TW": "zh-TW",
  "en-US": "en",
};

export const LOCALE_LABELS: Record<Locale, string> = {
  "zh-CN": "简体",
  "zh-TW": "繁體",
  "en-US": "EN",
};

export type AppId =
  | "text-search"
  | "media-downloader"
  | "ad-cleaner"
  | "page-export"
  | "content-summary"
  | "selection-translate"
  | "word-inspector"
  | "smart-writer";

export type AppCategory = "efficiency" | "ai";

export type LegalSection = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly { id: string; text: string }[];
};

export type LegalDocument = {
  title: string;
  updatedAt: string;
  effectiveAt: string;
  intro: string;
  sections: readonly LegalSection[];
};

export type ChangelogEntry = {
  version: string;
  date: string;
  items: readonly string[];
};

export type ShowcaseMockMessages = {
  textSearch: {
    placeholder: string;
    query: string;
    matchCount: string;
  };
  mediaDownloader: {
    panelTitle: string;
    filterAll: string;
    filterImages: string;
    filterVideos: string;
    selectedCount: string;
    downloadAction: string;
  };
  pageExport: {
    panelTitle: string;
    previewLabel: string;
    copyAction: string;
    exportAction: string;
  };
  contentSummary: {
    panelTitle: string;
    generating: string;
    keyPointsLabel: string;
    keyPoints: readonly string[];
  };
  selectionTranslate: {
    selectedText: string;
    toolbarTranslate: string;
    toolbarSummarize: string;
    resultLabel: string;
    resultText: string;
  };
  wordInspector: {
    selectedWord: string;
    toolbarInspect: string;
    pinyinLabel: string;
    pinyin: string;
    meaningLabel: string;
    meaning: string;
  };
  smartWriter: {
    draftText: string;
    assistantTitle: string;
    presets: readonly string[];
    applyAction: string;
  };
  adCleaner: {
    promoLabel: string;
    adLabel: string;
    cleaned: string;
    undo: string;
  };
};

export type Messages = {
  documentTitle: string;
  localeLabel: string;
  languageMenuTitle: string;
  switchToLight: string;
  switchToDark: string;
  navHighlights: string;
  navShowcase: string;
  navApps: string;
  navPricing: string;
  navInstall: string;
  installChrome: string;
  installEdge: string;
  installGithub: string;
  brandHomeLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  heroInstall: string;
  heroPurchase: string;
  highlightsTitle: string;
  highlightsSubtitle: string;
  highlightMarketplaceTitle: string;
  highlightMarketplaceBody: string;
  highlightPrivacyTitle: string;
  highlightPrivacyBody: string;
  highlightByokTitle: string;
  highlightByokBody: string;
  highlightUxTitle: string;
  highlightUxBody: string;
  appsTitle: string;
  appsSubtitle: string;
  premiumTag: string;
  freeTag: string;
  comingSoonTag: string;
  detailsTitle: string;
  detailsClose: string;
  categoryEfficiency: string;
  categoryAi: string;
  appNames: Record<AppId, string>;
  appDescriptions: Record<AppId, string>;
  showcaseTitle: string;
  showcaseSubtitle: string;
  showcaseCaptions: Record<AppId, string>;
  showcaseMock: ShowcaseMockMessages;
  pricingTitle: string;
  pricingSubtitle: string;
  freePlan: string;
  freePrice: string;
  freeDescription: string;
  lifetimePlan: string;
  lifetimePrice: string;
  lifetimeDescription: string;
  pricingFeatures: readonly string[];
  purchaseAction: string;
  activationHint: string;
  footerAboutTitle: string;
  footerContactTitle: string;
  footerGithubLabel: string;
  contactFeedbackShort: string;
  privacyPolicyLink: string;
  userAgreementLink: string;
  changelogLink: string;
  changelogTitle: string;
  legalNavLabel: string;
  legalUpdatedAtLabel: string;
  legalEffectiveAtLabel: string;
  privacyPolicy: LegalDocument;
  userAgreement: LegalDocument;
  changelogEntries: readonly ChangelogEntry[];
};
