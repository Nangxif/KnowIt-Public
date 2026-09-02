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
    "This is fixed in KnowIt 3.0.0. If you haven't updated yet, installing the new version will stop it from happening again.",
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
          title: "1. Why this tool exists",
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
          title: "2. Design direction",
          paragraphs: [
            "The UI borrows directly from VS Code's search experience. That is not an arbitrary choice — VS Code's find panel is an efficient interaction pattern validated daily by an enormous number of developers, and its layout, visual hierarchy, and feedback are all worth following. For a tool aimed at developers, reusing a familiar mental model cuts the learning curve to almost nothing.",
          ],
        },
        { title: "3. Core principles" },
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
      sections: [
        {
          paragraphs: [
            "Ads are just about everywhere on the web. Pop-ups, sidebars, floating layers — they don't only break your concentration, they blur the line between what's content and what's promotion. There are plenty of ad filters out there, some paid, some technically formidable. As an early-stage extension built by one person, this one can't yet match those mature paid products on detection accuracy.",
            "None of that stops me from building something honest, useful, and steadily getting better.",
            "The thinking behind Ad Cleaner comes down to three ideas:",
          ],
        },
        {
          title: "1. Free as a stance, not a marketing tactic",
          paragraphs: [
            "“Free” isn't a hook to get you to install it; it's the basis on which the tool exists. Filtering ads should be a baseline capability available to everyone, not a “premium benefit” billed yearly. I made it free because I believe a good tool doesn't need a price tag to prove its worth — people using it and telling me what's wrong is the return I care about.",
          ],
        },
        {
          title: "2. Grant permission once, then forget about it",
          paragraphs: [
            "Ad structures on some sites are genuinely complex, and the extension has to read and parse page elements to filter them accurately. On first install it asks for the permissions it needs — not to over-reach, but so that filtering can happen automatically on every page afterwards.",
            "After that one grant, day-to-day use takes zero effort. No subscribing to rule lists, no maintaining a blocklist, no tuning filter strength; ordinary users shouldn't have to spend energy on configuration. Install it, grant it, open a page, and leave the rest to me. You won't get stuck because you “don't know how to set it up.” I'd rather you simply notice, at some point, that pages feel a little cleaner today.",
          ],
        },
        {
          title: "3. Honest about the gaps, still improving",
          paragraphs: [
            "I won't pretend otherwise: what it catches today is limited, and some complex ads or newer placement formats still slip through. But I treat those misses as a direction for improvement rather than a flaw to explain away. Every page someone browses is a chance for me to learn something. Later versions will keep sharpening the detection and refining the rules, so the results get a little better each time.",
          ],
        },
      ],
    },
    "element-inspector": {
      sections: [
        {
          paragraphs: [
            "You're browsing, you come across a color scheme you like, a nice typeface, spacing that just feels right — and you want to note it down for later. The trouble is that all of it lives in the page's code, and the only way to see it is to open the browser's developer tools. That thing does far too much: screens of English and numbers that send any non-programmer straight back out.",
            "This extension exists to fix that small annoyance. The idea is simple: skip the complicated parts, do one thing well.",
          ],
        },
        {
          title: "1. Turn heavyweight developer tools into a handy little one",
          paragraphs: [
            "The browser's built-in inspector is powerful, but it was built for developers, and its panels are stuffed with network requests, error logs, and source debugging that ordinary people never need. This extension cuts all of that away and keeps only what gets used most: pick a color, check a font size, measure some spacing, see what the corner radius is. The interface is clean, it works the moment you open it, and whatever your cursor lands on is what it shows you. Nothing to learn, no shortcuts to memorize.",
          ],
        },
        {
          title: "2. Install it and go, no thinking required",
          paragraphs: [
            "No account, no manual, nothing to configure. Once installed, click the icon on any page, move your mouse around, and the style information appears right on screen — colors as actual values, elements outlined automatically. The whole thing is as direct as taking a screenshot, with no technical barrier at all. Hand it to anyone and they'll figure it out.",
          ],
        },
        {
          title: "3. Later, not just one color — the whole style, packed up in one click",
          paragraphs: [
            "Today you can pick colors and read font sizes one at a time. But it will keep growing: eventually one action should identify every color, typeface, spacing value, and corner radius the page uses and lay them out as a clear reference card. See a page you like, click once, and take its entire visual language with you. Going from “grabbing one color” to “packing up a whole style” is what this is really meant to become.",
          ],
        },
        {
          paragraphs: [
            "It's early, so it isn't especially powerful yet, and some things won't be detected accurately. But the direction is clear: a small tool a designer can pick up and use straight away, that feels good in the hand, and that keeps getting better.",
          ],
        },
      ],
    },
    "page-export": {
      sections: [
        {
          title: "1. What you want to keep is the article, not the whole page",
          paragraphs: [
            "When you come across a piece worth archiving, the only part you actually want is the body text. But that body is wrapped in navigation, related-post rails, comment threads, and ads. Copy and paste and you drag along styling and links you'll never use; save a screenshot and you can't search it or edit it; leave it in your bookmarks and the link may rot at any time. So the first thing Page Export does is peel the article out of its packaging — headings, paragraphs, lists, quotes, and code blocks kept as they were, everything else dropped.",
          ],
        },
        {
          title: "2. Markdown, so you can still edit it later",
          paragraphs: [
            "The export format is Markdown, not because it's fashionable but because it's plain enough to last: text any editor can open, ready to drop straight into Obsidian, Notion, or a similar notes app, searchable, and easy to keep under version control. PDFs and screenshots, by contrast, are snapshots you can no longer touch. An article you saved should be material you can keep editing and quoting from, not a photograph you can only look at.",
          ],
        },
        {
          title: "3. See what you're taking before you decide",
          paragraphs: [
            "No tool can extract an article with perfect accuracy. So after you right-click a page and generate the Markdown, the result appears in the side panel first, and you can fix it on the spot: delete a stray paragraph, add a note of your own, adjust a heading level. Once it looks right, copy it or export the .md file. I deliberately didn't build the “one right-click and it's quietly on your disk” version — you should see what you're taking before you commit to it.",
          ],
        },
        {
          title: "4. It isn't a web archiver",
          paragraphs: [
            "It doesn't try to reproduce the original layout pixel for pixel, and it doesn't mirror whole sites. Admin consoles, dashboards, maps, and other complex app pages were never meant to be exported as articles; forcing them into Markdown just yields fragments. Page Export serves one purpose: taking the text worth keeping from this page, cleanly.",
          ],
        },
      ],
    },
    "content-summary": {
      sections: [
        {
          title: "1. Bring summarizing down from the whole page to a passage",
          paragraphs: [
            "Summarizing an entire article solves the problem of “reading all of this is exhausting,” but that's not where the need ends. Often you only want to work out what one long stretch in the middle is actually saying, or you're stuck on a single dense section — and yet, for a few hundred words of confusion, you're made to summarize the whole article and then dig through the result for your answer, which ends up slower. Summarizing a selection takes the grain from “the whole page” down to a paragraph, or even a couple of sentences. Highlight whatever isn't clear and hit exactly that, instead of processing a wall of text for one small part of it.",
          ],
        },
        {
          title: "2. There when called, never breaking your rhythm",
          paragraphs: [
            "While you're reading, your attention flows continuously. Jumping out to open another tool, pasting the text in, waiting for output, then switching back to read it — that interruption alone costs real energy. Select the text and a floating button appears; one click starts the summary. The whole path is compressed to its shortest form: you never leave the page, never switch apps, and barely move your eyes. This design tucks the tool entirely behind a gesture. When you want it, it's at hand; when you don't, it never shows up, so nothing intrudes on immersive reading.",
          ],
        },
        {
          title: "3. Make a thick book thin, and save your attention too",
          paragraphs: [
            "Whole-page or selected-passage, the underlying idea is the same: pull the substance out of redundant text. A full summary builds the wide view and lets you grasp the shape of a piece quickly; a passage summary is targeted, clearing one local obstacle at a time. The two work together — use the full summary to judge whether an article deserves a close read, then use passage summaries to chew through the hard parts while reading it properly. Throughout, you stay in charge: not dragged down by length, and not lost among fragments. Every bit of effort goes where it counts.",
          ],
        },
        {
          title: "4. Natural output, faithful to the source, and restrained",
          paragraphs: [
            "Every summary follows the same rules. The language should be fluent and natural, reading like something a person wrote, never stiff or awkward. The content stays strictly faithful to the original: nothing added, nothing altered, nothing twisted. And it says plainly that this is an assistive tool — when a decision matters, go back to the source text. Whether you summarize a whole article in one click or highlight a passage in passing, every summary should be worth the trust placed in it: no hand-waving, no fudging, and no promises it can't keep.",
          ],
        },
      ],
    },
    "selection-translate": {
      sections: [
        {
          title: "1. Why not just use Chrome's built-in translation",
          paragraphs: [
            "Chrome does ship with translation, but for users in mainland China there's a very practical problem: it needs a VPN to work at all. Plenty of people simply can't use it, and those who can often fight an unstable connection. On top of that, the entry point is tucked into the top-right corner of the browser, and the result appears in a panel that feels detached from the page you're reading — you have to dismiss it by hand when you're done. Translate a long passage and that little panel can't hold it, which leaves you scrolling inside a popup.",
          ],
        },
        {
          title: "2. Not just web pages — anywhere",
          paragraphs: [
            "Chrome's translation only handles text on a web page. Copy a foreign-language passage out of a PDF, a chat window, an email, or an image, and you're on your own. At that point the only option is to open Google Translate or DeepL, paste it in, and hit the button — too many steps. That's the problem Selection Translate is meant to solve: wherever the text came from, once it's on your clipboard, one shortcut gives you the translation without a detour through another site.",
          ],
        },
        {
          title: "3. The translation belongs right under your eyes",
          paragraphs: [
            "The point of translating is to help you understand what's in front of you, so the result should appear next to your cursor or beside the text you selected, with no need to move your eyes across the screen. When you trigger a clipboard translation by shortcut, the result should show up close at hand too, and disappear with another keypress once you've read it, leaving your workflow intact. That kind of immediate feedback feels far more natural than a new tab or a panel pinned to the corner.",
          ],
        },
      ],
    },
    "word-inspector": {
      sections: [
        {
          title: "1. It came from something small but real",
          paragraphs: [
            "There was no grand market research behind this feature, and no trend to chase. It came purely from a small habit of mine: when I'm reading a book or scanning the news and hit an obscure character or an idiom I've never met, I can't help stopping to look it up. That “can't help it” impulse is what made me realize that a need doesn't have to be widespread to deserve being taken seriously — it only has to be real.",
          ],
        },
        {
          title: "2. Built for the few who like to be exact",
          paragraphs: [
            "Honestly, this tool will never have a large audience. In an age of fast reading, most people skip the hard word and move on, and that's fine as long as the gist survives. But there's always a small group with a natural curiosity about language — people who like to pick at the exact wording, who enjoy the settled feeling of having fully digested every term. This tool was made for those lovely few.",
          ],
        },
        {
          title: "3. Make looking a word up cost nothing",
          paragraphs: [
            "If the point is to satisfy curiosity the moment it strikes, the process has to be fast. Reaching for a dictionary means switching apps and typing the word out, which breaks the rhythm of reading badly. The core idea here is “swipe once, and you know” — drag across the word with your mouse and the definition appears immediately. In the instant you want an answer, I want the distance to it to be as short as possible.",
          ],
        },
        {
          title: "4. Respect every moment you choose to pause",
          paragraphs: [
            "With information coming at everyone this fast, being willing to stop for a single word is a precious kind of attention. I don't want to spend that patience on pop-up ads, sprawling encyclopedia entries, or showy animations. The interface stays clean and restrained: the pronunciation and the meaning, stated precisely, and then it steps quietly aside and hands the reading back to you.",
          ],
        },
        {
          title: "5. A small tool, but an honest one",
          paragraphs: [
            "Rather than a powerful piece of productivity software, think of it as a quiet study companion. It won't interrupt you, but the moment you pause to ask, it's there. I believe a good tool doesn't have to please everyone — it only has to feel exactly right, in the moments it's needed, to the people who need it. That's enough.",
          ],
        },
      ],
    },
    "smart-writer": {
      sections: [
        {
          title: "1. Where the idea came from",
          paragraphs: [
            "Writing in WPS Office, I found the built-in AI polish and expand features genuinely useful. A flat, lifeless sentence becomes smoother and fuller with a single click. The catch is that the feature only lives inside WPS. The moment you switch to a browser to write an email, post something, or fill in a form, it's gone.",
          ],
        },
        {
          title: "2. Where it hurts most",
          paragraphs: [
            "That second-guessing multiplies once the writing turns formal — a work email, a project summary, an application letter. You put down one sentence and read it over and over. Is the grammar off? Does the subject actually match the verb? Is the wording appropriate? Does it read gracefully? You already know exactly what you mean; you just can't be sure the sentence lands. So a paragraph that should take five minutes drags on for half an hour, edited and re-edited, each pass leaving you less confident than the last.",
          ],
        },
        {
          title: "3. The problem worth solving",
          paragraphs: [
            "The browser is where most people actually do their typing now, so why shouldn't good writing help be available there? That's what this extension does — it frees “let AI fix my wording” from office software and puts it wherever you happen to be typing. When the moment is formal and the words matter, having a level-headed assistant beside you to check the phrasing and the grammar makes the whole thing far less nerve-racking.",
          ],
        },
        {
          title: "4. How it works in practice",
          paragraphs: [
            "No switching between apps, no copying text somewhere else and pasting it back. Select the text right there in the browser, click once, and AI will smooth the sentence out, stretch it longer, or make it read more appropriately. Social posts, work emails, online forms — it's right there when you reach for it, without breaking your train of thought or making you fight the interface.",
          ],
        },
        {
          title: "5. What it's really for",
          paragraphs: [
            "To let people concentrate on the idea they're trying to express, instead of burning themselves out on word choice. Technology doesn't have to be dazzling. If it can help during the few seconds you're most stuck, that's plenty.",
          ],
        },
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
      version: "3.0.0",
      date: "2026-09-01",
      items: [
        "Redesigned the workbench",
        "Moved usage stats onto the workbench and redesigned them",
        "Redesigned the history page",
        "Redesigned the new tab page",
        "Selection translation now supports a larger, zoomed-in view",
        "Added the free Element Inspector app for inspecting page elements and picking colors",
        "Added the free Ad Cleaner app to hide ads and promotional overlays, with undo support",
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
