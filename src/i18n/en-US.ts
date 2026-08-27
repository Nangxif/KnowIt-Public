import type { Messages } from "./types";

export const enUS: Messages = {
  documentTitle: "KnowIt — Understand webpages, and make them easier to use",
  localeLabel: "EN",
  languageMenuTitle: "Choose language",
  switchToLight: "Switch to light mode",
  switchToDark: "Switch to dark mode",
  navHighlights: "Features",
  navShowcase: "Showcase",
  navApps: "Apps",
  navPricing: "Pricing",
  navInstall: "Install",
  installChrome: "Chrome Web Store",
  installEdge: "Edge Add-ons",
  installGithub: "GitHub repository",
  brandHomeLabel: "Back to top",
  heroTitle: "Understand webpages, and make them easier to use",
  heroSubtitle:
    "A privacy-first, modular productivity workbench for the web. Install only the tools you need and assemble your own browser workbench.",
  heroInstall: "Install the extension",
  heroPurchase: "Buy Lifetime",
  highlightsTitle: "Why KnowIt",
  highlightsSubtitle: "Fewer extensions. The capabilities you actually use stay local.",
  highlightMarketplaceTitle: "Modular marketplace",
  highlightMarketplaceBody:
    "Install only what you need and keep the extension light, tailored to your workflow.",
  highlightPrivacyTitle: "Privacy-first",
  highlightPrivacyBody:
    "Page content, selections, search and generation history stay local by default—nothing is uploaded to KnowIt servers.",
  highlightByokTitle: "Bring your own API key",
  highlightByokBody:
    "One model settings hub for DeepSeek, OpenAI, Gemini, Moonshot (Kimi), Alibaba DashScope, SiliconFlow, and more.",
  highlightUxTitle: "Polished UX",
  highlightUxBody:
    "Shortcuts, context menus, a selection toolbar, a side panel, and light/dark themes.",
  appsTitle: "Apps",
  appsSubtitle: "After installing the extension, enable these tools from the marketplace.",
  premiumTag: "Premium",
  freeTag: "Free",
  comingSoonTag: "Coming soon",
  detailsTitle: "App details",
  detailsClose: "Close",
  categoryEfficiency: "Productivity",
  categoryAi: "AI tools",
  appNames: {
    "text-search": "Text Search",
    "media-downloader": "Media Downloader",
    "ad-cleaner": "Ad Cleaner",
    "page-export": "Page Export",
    "content-summary": "Content Summary",
    "selection-translate": "Selection Translate",
    "word-inspector": "Selection Word Inspector",
    "smart-writer": "Smart Writing & Polishing",
  },
  appDescriptions: {
    "text-search":
      "Search webpage text like a code editor, with case matching, result navigation, and custom highlights.",
    "media-downloader":
      "Scan and extract images and videos from the current page, with preview and batch download.",
    "ad-cleaner":
      "Hide ads and promotional overlays on the current page. Auto-cleans on load, or right-click to clean, with undo.",
    "page-export": "Clean up page body content and export an editable Markdown copy.",
    "content-summary":
      "Summarize a full page or selection with AI and extract key points quickly.",
    "selection-translate":
      "Translate selected text instantly, or run AI full-page translation under the originals.",
    "word-inspector":
      "Show Pinyin and detailed definitions for selected text to aid reading and learning.",
    "smart-writer":
      "AI assistant for webpage inputs—polish, grammar fix, continue, expand, shorten, or custom prompts.",
  },
  showcaseTitle: "See the apps in action",
  showcaseSubtitle:
    "Interface mockups that follow the site theme and language—the real UI lives in the extension.",
  showcaseCaptions: {
    "text-search": "Press Ctrl + F and locate page keywords like in a code editor.",
    "media-downloader":
      "Open the side panel to filter, preview, and batch-download page assets.",
    "ad-cleaner":
      "Ads and promo overlays hide automatically—or right-click to clean, then undo anytime.",
    "page-export":
      "Right-click “Generate Markdown” to preview and export a clean copy.",
    "content-summary":
      "Summarize the whole page or a selection; key points stream into the side panel.",
    "selection-translate":
      "Select text and hit Translate on the floating toolbar for an instant result.",
    "word-inspector":
      "Select an unfamiliar word to see its Pinyin and definition instantly.",
    "smart-writer":
      "Focus any input, summon the assistant, and polish or continue in one click.",
  },
  showcaseMock: {
    textSearch: {
      placeholder: "Search page text",
      query: "modular",
      matchCount: "2/8",
    },
    mediaDownloader: {
      panelTitle: "Media Downloader",
      filterAll: "All",
      filterImages: "Images",
      filterVideos: "Videos",
      selectedCount: "4 selected",
      downloadAction: "Download all",
    },
    pageExport: {
      panelTitle: "Page Export",
      previewLabel: "Markdown preview",
      copyAction: "Copy",
      exportAction: "Export .md",
    },
    contentSummary: {
      panelTitle: "AI Summary",
      generating: "Generating…",
      keyPointsLabel: "Key points",
      keyPoints: [
        "Privacy-first: data stays local by default",
        "Install apps on demand from the marketplace",
        "Bring your own API key and pick any model",
      ],
    },
    selectionTranslate: {
      selectedText: "知识就是力量。",
      toolbarTranslate: "Translate",
      toolbarSummarize: "Summarize",
      resultLabel: "Translation",
      resultText: "Knowledge is power.",
    },
    wordInspector: {
      selectedWord: "斟酌",
      toolbarInspect: "Inspect",
      pinyinLabel: "Pinyin",
      pinyin: "zhēn zhuó",
      meaningLabel: "Meaning",
      meaning: "To weigh one's words; to consider carefully.",
    },
    smartWriter: {
      draftText: "The plan looks okay-ish, maybe we can revisit it later.",
      assistantTitle: "Writing assistant",
      presets: ["Polish", "Proofread", "Continue", "Expand", "Shorten"],
      applyAction: "Replace",
    },
    adCleaner: {
      promoLabel: "Promo",
      adLabel: "Ad",
      cleaned: "Hid 3 ads",
      undo: "Undo",
    },
  },
  pricingTitle: "Free vs Lifetime",
  pricingSubtitle: "Start with free tools, then unlock every premium app with a one-time purchase.",
  freePlan: "Free",
  freePrice: "¥ 0",
  freeDescription: "Text Search, Media Downloader, and Ad Cleaner.",
  lifetimePlan: "Lifetime",
  lifetimePrice: "¥ 6.66",
  lifetimeDescription:
    "One-time purchase that unlocks all premium tools. Future premium apps stay included—no subscription.",
  pricingFeatures: [
    "Page Export, Content Summary, Selection Translate, Word Inspector, Smart Writing & Polishing",
    "Plus future premium tools",
    "After payment, activate in the extension with your email and Afdian order number",
  ],
  purchaseAction: "Open Afdian checkout",
  activationHint:
    "Activation happens inside the extension: enter your email and Afdian order number. Each order + bound email can be activated up to 2 times. AI features require your own model API key—KnowIt does not collect or proxy your keys.",
  footerAboutTitle: "About",
  footerContactTitle: "Contact",
  footerGithubLabel: "GitHub repository",
  contactFeedbackShort: "GitHub Issues",
  privacyPolicyLink: "Privacy Policy",
  userAgreementLink: "User Agreement",
  changelogLink: "Changelog",
  changelogTitle: "Changelog",
  legalNavLabel: "Legal navigation",
  legalUpdatedAtLabel: "Updated",
  legalEffectiveAtLabel: "Effective",
  privacyPolicy: {
    title: "Privacy Policy",
    updatedAt: "August 12, 2026",
    effectiveAt: "August 12, 2026",
    intro:
      "Welcome to KnowIt. KnowIt is a browser extension designed with a local-first approach. This Privacy Policy explains how information related to your use of the product is handled, and where the boundaries lie among local storage, browser sync, and third-party services.",
    sections: [
      {
        title: "1. Definitions",
        items: [
          {
            id: "1.1",
            text: "“KnowIt” means this browser extension and the installable tools in its marketplace, including but not limited to text search, summarization, selection translation, and page export.",
          },
          {
            id: "1.2",
            text: "“Local data” means information stored on your current device or in the browser’s local storage, such as settings, history, and activation status.",
          },
          {
            id: "1.3",
            text: "“Third-party services” means external services you configure or choose to use, such as model providers, the Afdian payment platform, and browser account sync.",
          },
        ],
      },
      {
        title: "2. How I handle data",
        items: [
          {
            id: "2.1",
            text: "Local-first: page content, selected text, search history, summaries, and generated results are processed locally by default and are not uploaded to KnowIt’s own servers.",
          },
          {
            id: "2.2",
            text: "API keys in browser settings: if you configure a model API key, it is stored in browser settings and may sync across devices through Chrome Sync. KnowIt does not collect, store, or forward it.",
          },
          {
            id: "2.3",
            text: "Config sync: installed apps and preferences may sync across devices through the browser’s built-in sync. KnowIt does not operate a separate cloud account system.",
          },
          {
            id: "2.4",
            text: "Activation info: when you purchase and activate premium features, you may need to provide an order number and bound email for authorization checks.",
          },
        ],
      },
      {
        title: "3. Third-party services and data transfer",
        items: [
          {
            id: "3.1",
            text: "When you use AI features, the content of requests you initiate is sent to the model provider you configure. Review that provider’s privacy policy and billing terms.",
          },
          {
            id: "3.2",
            text: "Payment and activation may involve third-party platforms such as Afdian. Payment details are handled by those platforms.",
          },
          {
            id: "3.3",
            text: "If you contact me via GitHub Issues or email, the details you voluntarily provide will be used only for communication and issue handling.",
          },
        ],
      },
      {
        title: "4. Your choices",
        items: [
          {
            id: "4.1",
            text: "You may modify or clear local settings and history in the extension at any time.",
          },
          {
            id: "4.2",
            text: "You may choose whether to configure third-party model services; without them, related AI features may be unavailable or limited.",
          },
          {
            id: "4.3",
            text: "You may turn off or sign out of browser account sync to reduce settings syncing across devices.",
          },
        ],
      },
      {
        title: "5. Updates and contact",
        paragraphs: [
          "I may update this Privacy Policy as product features change. Updated terms will be shown in the product and take effect upon publication.",
          "If you have questions about this policy, contact me through the email addresses or GitHub Issues listed in the footer.",
        ],
      },
    ],
  },
  userAgreement: {
    title: "User Agreement",
    updatedAt: "August 12, 2026",
    effectiveAt: "August 12, 2026",
    intro:
      "This User Agreement is a legal agreement between you and KnowIt regarding your use of this extension and its tools. By using KnowIt, you confirm that you have read, understood, and agreed to this Agreement. If you do not agree, please stop using the product.",
    sections: [
      {
        title: "1. Service description",
        items: [
          {
            id: "1.1",
            text: "KnowIt provides browser-extension productivity tools. You can install marketplace modules as needed to search, summarize, translate, export, and more.",
          },
          {
            id: "1.2",
            text: "KnowIt runs local-first. Except for third-party services you actively use, core processing happens in your local environment by default.",
          },
          {
            id: "1.3",
            text: "Some advanced tools require purchase and activation. Basic features remain available without activation.",
          },
        ],
      },
      {
        title: "2. Acceptable use",
        items: [
          {
            id: "2.1",
            text: "You must use KnowIt lawfully and must not use it to infringe others’ rights, violate applicable laws, or disrupt network order.",
          },
          {
            id: "2.2",
            text: "You must have the necessary rights or authorization for content you process through KnowIt.",
          },
          {
            id: "2.3",
            text: "You are responsible for safeguarding local settings, API keys, activation order numbers, and bound emails.",
          },
        ],
      },
      {
        title: "3. Activation and paid features",
        items: [
          {
            id: "3.1",
            text: "Some premium features require purchase through channels such as Afdian, followed by activation with an order number.",
          },
          {
            id: "3.2",
            text: "Each Afdian order number and bound email can be activated at most twice. Switching order numbers may uninstall related premium tools.",
          },
          {
            id: "3.3",
            text: "Payment, refunds, and invoices are governed by the relevant third-party platform. KnowIt only unlocks features after validation succeeds.",
          },
        ],
      },
      {
        title: "4. Third-party services",
        items: [
          {
            id: "4.1",
            text: "When AI features are enabled, requests are sent to the model provider you configure.",
          },
          {
            id: "4.2",
            text: "KnowIt does not warrant the stability, accuracy, continuity, or compliance of third-party services.",
          },
        ],
      },
      {
        title: "5. Disclaimer and limitation of liability",
        items: [
          {
            id: "5.1",
            text: "KnowIt is provided “as is.” Browser environments, page structures, network conditions, and third-party services may cause delays, failures, or incomplete results.",
          },
          {
            id: "5.2",
            text: "Judgments and decisions you make based on summaries, translations, or generated content are your own responsibility.",
          },
          {
            id: "5.3",
            text: "To the maximum extent permitted by law, KnowIt’s author/maintainer is not liable for indirect, incidental, or consequential damages arising from use of or inability to use the product.",
          },
        ],
      },
      {
        title: "6. Changes to this Agreement",
        paragraphs: [
          "I may revise this Agreement from time to time. Revisions will be shown in the product. Continued use constitutes acceptance of the revised Agreement.",
        ],
      },
      {
        title: "7. Contact",
        paragraphs: [
          "For questions about this Agreement or the product, contact me through the email addresses or GitHub Issues listed in the footer.",
        ],
      },
    ],
  },
  changelogEntries: [
    {
      version: "2.3.0",
      date: "2026-08-25",
      items: [
        "Added user onboarding",
        "Redesigned the landing page",
        "Updated the new tab page style",
      ],
    },
    {
      version: "2.2.0",
      date: "2026-08-20",
      items: [
        "Refactored multi-device sync for activation status and settings on the same account",
        "Cached translation results locally (up to 50 entries) to reduce repeat translations",
        "Full-page translation now supports regeneration",
        "Added Traditional Chinese as a UI language",
        "AI translation now supports paste-to-translate",
        "Improved the footer with privacy policy, user agreement, and related entries",
        "Fixed history list snapshots not displaying and popup style issues in English mode",
      ],
    },
    {
      version: "2.1.0",
      date: "2026-08-04",
      items: [
        "Integrated Afdian payment, with order-number activation for premium features",
        "Full-page summary now supports pause, and fixed occasional content parsing failures",
        "Proofread and refined product copy",
        "Redesigned the footer with legal docs, changelog, and contact links",
      ],
    },
  ],
};
