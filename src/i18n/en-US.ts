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
  navDocs: "Docs",
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
  paidTag: "Paid",
  freeTag: "Free",
  detailsTitle: "App details",
  detailsClose: "Close",
  categoryEfficiency: "Productivity",
  categoryAi: "AI tools",
  categoryDevelopment: "Development",
  appNames: {
    "text-search": "Text Search",
    "media-downloader": "Media Downloader",
    "ad-cleaner": "Ad Cleaner",
    "element-inspector": "Element Inspector",
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
    "element-inspector":
      "Click a page element to view a Figma-like properties panel, and pick any on-screen pixel with the eyedropper.",
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
    "element-inspector":
      "Right-click “Inspect page elements” or press Alt+Shift+C, hover for properties, then pick a color from the toolbar.",
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
    elementInspector: {
      tagName: "code",
      copyCss: "Copy CSS",
      sectionIdentity: "Layer",
      sectionSize: "Position & size",
      sectionLayout: "Layout",
      sectionTypography: "Typography",
      sectionFill: "Fill",
      labelTag: "Tag",
      labelClass: "Class",
      classValue: "hljs language-js",
      labelWidth: "Width",
      labelHeight: "Height",
      widthValue: "786px",
      heightValue: "240px",
      labelDisplay: "display",
      displayValue: "block",
      labelFont: "Font",
      fontValue: "Menlo, 12px",
      labelColor: "Color",
      colorValue: "#ABB2BF",
      labelBackground: "Fill",
      backgroundValue: "#282C34",
      modeInspect: "Inspect",
      modeEyedropper: "Eyedropper",
    },
  },
  pricingTitle: "Free vs Lifetime",
  pricingSubtitle: "Start with free tools, then unlock every premium app with a one-time purchase.",
  freePlan: "Free",
  freePrice: "¥ 0",
  freeDescription: "Text Search, Media Downloader, Ad Cleaner, and Element Inspector.",
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
  creatorNoteTitle: "A note from the creator",
  creatorNoteSubtitle:
    "For anyone still using KnowIt 2.3.0, and everyone who already has KnowIt installed.",
  creatorNoteParagraphs: [
    "If you're still using KnowIt 2.3.0, I owe you an apology. There was a design problem in that version: even if you hadn't opened a tool — even if you weren't using it at all — it could still mess up the layout of the page you were reading. Text might pile up, the page might look broken, and it would feel like the website itself had gone wrong. Because it happened in the background, a lot of people never connected it to KnowIt. You might have just thought, “Why did this page suddenly look weird?” The cause was on my side. I'm sorry.",
    "This is fixed in KnowIt 2.4.0. If you haven't updated yet, installing the new version will stop it from happening again.",
    "For now, I'm not planning to add new tools unless an idea comes along that's genuinely worth building on its own. I want to spend the time making what already exists better: smoother to use, more reliable, and less likely to get in your way.",
    "Thank you for using KnowIt. If something still feels off, please keep telling me.",
  ],
  creatorNoteSignOff: "The KnowIt creator",
  creatorNoteDate: "September 1, 2026",
  docsTitle: "Docs",
  docsNavLabel: "Document navigation",
  docsGroupApps: "Tool design notes",
  philosophyTitle: "Design notes: {name}",
  philosophyWhyTitle: "Why it exists",
  philosophyCraftTitle: "Why the interaction looks like this",
  philosophyNotTitle: "What it refuses to be",
  philosophyLink: "Read the design notes",
  appPhilosophy: {
    "text-search": {
      sections: [
        {
          title: "Why this tool exists",
          paragraphs: [
            "The browser's built-in find-in-page carries a few limitations that have frustrated developers and heavy users for years:",
          ],
          items: [
            {
              label: "Fixed position: ",
              text: "The search bar is locked to the top or bottom of the browser window and cannot be moved, so it regularly covers the content you are reading — especially awkward when you need to compare a match against the text around it.",
            },
            {
              label: "Limited matching: ",
              text: "There is no case-sensitive matching, so it cannot tell React from react, or API from api — distinctions that matter a great deal to developers.",
            },
            {
              label: "No advanced patterns: ",
              text: "Regular expressions are not supported, which leaves you stuck whenever the target is a complex pattern: every email address on the page, dates in a particular format, several keywords at once.",
            },
          ],
        },
        {
          paragraphs: [
            "Together these gaps make native find-in-page a poor fit for development work, document review, technical writing, and anything else that calls for precise text handling. Text Search aims to be a more flexible, more capable in-page search tool that matches how developers already work.",
          ],
        },
        {
          title: "Design direction",
          paragraphs: [
            "The UI borrows directly from VS Code's search experience. That is not an arbitrary choice — VS Code's find panel is an efficient interaction pattern validated daily by an enormous number of developers, and its layout, visual hierarchy, and feedback are all worth following. For a tool aimed at developers, reusing a familiar mental model cuts the learning curve to almost nothing.",
          ],
        },
        { title: "Core principles" },
        {
          title: "1. Movable first",
          level: 3,
          paragraphs: [
            "The search bar should not be an appendage bolted onto the page; it should be a panel you position yourself. Drag it wherever it stays out of your line of sight and within easy reach of what you are reading. A search tool should adapt to where your attention goes, rather than making you work around it.",
          ],
        },
        {
          title: "2. Precise matching, case included",
          level: 3,
          paragraphs: [
            "For developers and technical writers, case is not a cosmetic difference — it is a semantic one. String is a type, string is a keyword; Apple is a company, apple is a fruit. Supporting case-sensitive matching is, at heart, respecting how precise text is.",
          ],
        },
        {
          title: "3. Leave room for power users",
          level: 3,
          paragraphs: [
            "Regular expressions are the sharpest tool in text processing. This version focuses on the two most pressing pain points, movability and case matching, but the matching engine is designed to be extensible, with a clear interface reserved for regex. A tool should start from the simple cases without putting a ceiling on what it can do.",
          ],
        },
        {
          title: "4. Stay light, stay in the flow",
          level: 3,
          paragraphs: [
            "Search is frequent, brief, and threaded between reading and editing. The tool should open instantly and close instantly, add no startup cost, and never break your concentration. A lightweight floating panel, rather than something that takes over the page, is what that principle looks like in practice.",
          ],
        },
      ],
    },
    "media-downloader": {
      sections: [
        {
          paragraphs: [
            "There's a frustration a lot of people run into: you're browsing a page full of images you like — design references, useful assets, pictures worth keeping — and you have no idea where to start saving them. Right-click and save as? Too slow, one at a time. Drag them to the desktop? Plenty of pages simply don't allow it. Select everything first and download in one go? There's no “select multiple” anywhere to be found. These are supposed to be simple actions, yet for anyone who isn't fluent in the technical details they turn into a test of patience.",
            "Media Downloader came out of watching those very real pain points. It isn't meant to hand power users another advanced tool. It's meant to let any ordinary computer user gather what's on a page as easily and intuitively as batch-saving photos in a phone gallery.",
            "Three ideas sit at the center of the design:",
          ],
        },
        {
          title: "1. What you see is what you get",
          paragraphs: [
            "You shouldn't have to understand “page source,” “resource URLs,” or “request headers.” If you can see it, you can select it; if you can select it, you can download it. The interaction stays close to everyday habits, with fewer dialogs, fewer settings, and less jargon, so downloading comes back to the most natural sequence there is: select, confirm, save.",
          ],
        },
        {
          title: "2. Batch it, and skip the busywork",
          paragraphs: [
            "The assets on a page are rarely one or two. They come as a set, a batch, a whole page at once. Select-all and batch download exist to free you from mechanical clicking. Tick once, save once, and spend the time you get back on the work itself rather than on repetition that means nothing.",
          ],
        },
        {
          title: "3. Transparent and under your control",
          paragraphs: [
            "Before you press Download, you can see exactly which files are selected and how many there are, so nothing gets grabbed by mistake or quietly left behind. The goal isn't one-click automation; it's that you keep the right to choose and the right to confirm, and that every step stays clear and reassuring.",
          ],
        },
        {
          paragraphs: [
            "Media Downloader isn't trying to show off. It's trying to be the kind of helper that understands you. Its reason for existing isn't to tell you how you ought to download things — it's to stand quietly beside you and make something that should always have been simple actually simple.",
          ],
        },
      ],
    },
    "ad-cleaner": {
      intro:
        "The goal is not to win a war with ad networks. It is to give the reading surface back. Hide and undo matter more than “wipe it all out.”",
      why: [
        "Promo overlays cover the article, but false positives are real—nav, banners, paywalls often look like ads. Cleaning without undo makes people afraid to turn it on.",
      ],
      craft: [
        "Once enabled, it works on its own, because ads should not cost a click every time. It hides instead of deleting, so undo is possible. The context menu is for the overlay that just appeared.",
      ],
      not: [
        "Not a system-wide blocker, and not a militant filter list. It only deals with layers on the current page that get in the way of reading.",
      ],
    },
    "element-inspector": {
      intro:
        "Chrome DevTools is for debugging. Often you only need width, color, type. Element Inspector splits “looking” apart from “investigating.”",
      why: [
        "Matching a mock, picking a color, checking spacing—none of that should start with a full console. The panel follows a Figma-like property grouping because visual work already lives in that shape.",
      ],
      craft: [
        "Hover to inspect, click to lock; the toolbar switches inspect and eyedropper. Esc leaves. It is a light overlay. Use it, then go. It should not change the page.",
      ],
      not: [
        "It does not replace DevTools: no breakpoints, no network panel, no DOM editing. That is a different job.",
      ],
    },
    "page-export": {
      intro:
        "A piece worth keeping is often wrapped in nav, related links, and ads. Page Export pulls out the body and turns it into Markdown you can keep editing.",
      why: [
        "Bookmarks rot, screenshots are not searchable, and copy-paste brings junk markup. Markdown is a clean, editable halfway house that fits a notes app.",
      ],
      craft: [
        "Preview in the side panel first, then copy or export. You should see what you are taking before you take it. It tidies the article, not a mirror of the whole site.",
      ],
      not: [
        "Not a web-archiving tool, and not a pixel-perfect layout dump. Complex app pages were never meant to be exported as essays.",
      ],
    },
    "content-summary": {
      intro:
        "Facing a long page, you often need to decide whether it is worth reading—not to read it twice. Summary should happen on this page, with the key staying in your hands.",
      why: [
        "Sending a whole page to a random summarizer website hands your reading to a stranger. Bring-your-own key and local history are the privacy floor. Full-page and selection cover “this article” and “this passage.”",
      ],
      craft: [
        "The result streams in the side panel and can be paused. Generation should not hijack your scrolling. History is there because you may want the same page tomorrow.",
      ],
      not: [
        "It does not pretend to have read the part you still need to read. A summary is an index, not a substitute. KnowIt also does not hold your model keys.",
      ],
    },
    "selection-translate": {
      intro:
        "Translation should appear next to the words—not throw you into another website. One sentence at a time, or a bilingual reading of the whole page.",
      why: [
        "Tab-switching breaks reading. Instant selection covers “this word / this sentence.” Full-page bilingual covers “I want to finish this in my language.”",
      ],
      craft: [
        "The floating toolbar shows up only after a selection, then gets out of the way. Full-page translation lives in the side panel; the original stays. Results can be cached locally so the same sentence is not billed twice.",
      ],
      not: [
        "Not a dictionary, and not a KnowIt-hosted model. Word Inspector is a separate app. Translation only converts language.",
      ],
    },
    "word-inspector": {
      intro:
        "You already know the language; you are just stuck on a word. Inspector gives pronunciation and meaning instead of turning the whole sentence into another language.",
      why: [
        "Translation pulls you out of the original. When learning, or reading Chinese on the web, people need “how is this read, what does it mean.” It is separate from Selection Translate so two jobs do not collapse into one button.",
      ],
      craft: [
        "Select, then “inspect.” The panel appears in place—light, fast, dismissible. The model is yours to choose, because gloss quality varies and that choice should be yours.",
      ],
      not: [
        "Not a full dictionary product, and not a quote-and-example mill. It only helps you over the word in front of you.",
      ],
    },
    "smart-writer": {
      intro:
        "Writing happens in webpage inputs: comments, forms, admin, docs. The assistant should come to those fields, instead of making you copy into a chat window and paste back.",
      why: [
        "Copying back and forth drops context and hands a draft to another product. Presets (polish, grammar, continue, expand, shorten) cover the common “I know this needs a pass.” Custom prompts cover the rest.",
      ],
      craft: [
        "It only appears when an input is focused, as a small control in the corner. Results can replace, insert, or copy—you decide what happens to the original. It never rewrites text you have not confirmed.",
      ],
      not: [
        "Not a standalone editor, and not a popup while you are merely browsing. When the assistant is off, the page should feel as if it were never installed.",
      ],
    },
  },
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
      version: "2.4.0",
      date: "2026-09-01",
      items: [
        "Added the free Element Inspector app for inspecting page elements and picking colors",
        "Added the free Ad Cleaner app to hide ads and promotional overlays, with undo support",
        "Redesigned the app marketplace",
        "Redesigned the new tab page",
        "Fixed unused apps leaking styles onto the original page, and Media Downloader failing to open",
      ],
    },
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
