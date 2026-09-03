<p align="center">
  <img alt="KnowIt Logo" src="./assets/logo-dark.png" width="320">
</p>

<p align="center">
  <strong>Understand webpages, and make them easier to use. A privacy-first, modular productivity workbench for the web.</strong>
</p>

<p align="center">
  <a href="https://github.com/Nangxif/KnowIt-Public/stargazers">
    <img src="https://img.shields.io/github/stars/Nangxif/KnowIt-Public.svg?style=flat-square&color=gold" alt="GitHub stars" />
  </a>
  <a href="https://github.com/Nangxif/KnowIt-Public/issues">
    <img src="https://img.shields.io/github/issues/Nangxif/KnowIt-Public.svg?style=flat-square&color=red" alt="GitHub issues" />
  </a>
  <img src="https://img.shields.io/badge/version-3.0.0-3b82f6?style=flat-square" alt="KnowIt 3.0.0" />
</p>

<p align="center">
  <a href="https://nangxif.github.io/KnowIt-Public/">Official site</a>
  &nbsp;·&nbsp;
  <a href="https://chromewebstore.google.com/detail/knowit/jcdiikfdkjffieikiehgcffbclelinfa">Chrome Web Store</a>
  &nbsp;·&nbsp;
  <a href="https://microsoftedge.microsoft.com/addons/detail/knowit/enhdaccokoiadmddhlehmpkmeeaanlll">Edge Add-ons</a>
  &nbsp;·&nbsp;
  English | <a href="./README.md">简体中文</a>
</p>

---

## Overview

Browsing, reading papers, studying, or creating content often comes with familiar friction:

* Too many extensions fighting for toolbar space and shortcuts
* Worry that online AI or translation tools upload sensitive page data
* Fragmented paid tools, or lock-in to a single AI vendor

**KnowIt** is a privacy-first, modular browser toolkit that runs locally. Click the extension icon to open the **Workbench**, then install or remove tools like building blocks and assemble a personal web workbench.

**Highlights:**

* **Modular workbench** — install only what you need
* **Privacy-first** — page content, selections, search and generation history stay local by default; nothing is uploaded to KnowIt servers
* **Bring your own API key** — unified model settings for DeepSeek, OpenAI, Gemini, Moonshot (Kimi), Alibaba DashScope, SiliconFlow, and more
* **Polished UX** — shortcuts, context menus, selection toolbar, side panel, workbench, new tab page, and light/dark themes

---

## What's new in 3.0.0

The current release is **3.0.0** (2026-09-01). Compared with 2.x:

* **Workbench redesign** — the extension home is now a two-pane workbench for installing apps, configuring models, toolbar, blacklist, sync, activation, and usage stats
* **New tab redesign** — every new tab can search the web, jump into common AI chats, and show daily headlines
* **History redesign** — summaries, translations, word lookups, writing, and exports now live in the workbench
* **New free app: Ad Cleaner** — after permission is granted, ads and promo overlays hide automatically; right-click to clean / restore, with undo
* **New free app: Element Inspector** — inspect page element properties and pick any on-screen pixel color
* **Selection translation zoom** — open a larger side-panel view of the translation
* **Stability** — unused apps no longer leak styles onto the host page, and Media Downloader opens reliably again. If you are still on 2.3.0, please update

---

## Free vs Paid

| Plan | Includes | Price |
| --- | --- | --- |
| **Free** | Text Search, Media Downloader, Ad Cleaner, Element Inspector | Free |
| **Lifetime (Paid)** | Page Export, Content Summary, Selection Translate, Selection Word Inspector, Smart Writing & Polishing, plus future premium tools | **¥ 6.66** one-time |

After payment, open the workbench → **Pricing / Activate**, then enter your **email + Afdian order number**. Each order number bound to an email can be activated up to **2** times. Switching to another order number will uninstall related premium tools.

**Purchase link (Afdian):**

👉 [Open Afdian checkout](https://ifdian.net/order/create?product_type=1&plan_id=bb5efc0a8f0c11f181ee52540025c377&sku=%5B%7B%22sku_id%22%3A%22bb66d6fa8f0c11f1bada52540025c377%22,%22count%22%3A1%7D%5D&viokrz_ex=0)

> AI features require your own model API key. Requests go to the provider you configure—review their privacy and billing terms. KnowIt does not collect or proxy your keys.

---

## Workbench & New Tab

After installing the extension, click the KnowIt icon to open the **Workbench**. Install the apps you need, then follow the steps below.

### Workbench

The workbench is KnowIt’s control center:

* Browse, install, and uninstall apps, and open each app’s settings
* Configure AI models, the selection toolbar, the plugin blacklist, and cross-device sync
* Activate the Lifetime plan
* Review usage stats and full history

**Text Search**, **Media Downloader**, and **Ad Cleaner** are installed by default. Add the rest as needed.

### New tab

Every new tab lets you:

* Search the web
* Jump into DeepSeek, Kimi, Qwen, Doubao, ChatGPT, Claude, Gemini, Yuanbao, and other AI chats
* Check daily headlines

### History

Content Summary, Selection Translate, Word Inspector, Smart Writing, and Page Export records stay local and can be reviewed in the workbench, grouped by tool, with the original input and result. The new tab page no longer shows history.

---

## Apps & How to Use

### Free apps

#### 1. Text Search (installed by default)

* **What it does**: Search webpage text like a code editor, with case matching, result navigation, and custom highlights.
* **How to use**:
  1. Press `Ctrl + F` (Mac: `⌘ + F`) on any page to open the search box
  2. Enter keywords to jump and highlight matches
  3. Customize the shortcut and highlight style in app settings

#### 2. Media Downloader (installed by default)

* **What it does**: Scan and extract images and videos from the current page, with preview and batch download.
* **How to use**:
  1. Right-click on the page and choose **Media Downloader**
  2. Filter, preview, and batch-download in the side panel

#### 3. Ad Cleaner (installed by default)

* **What it does**: Hide ads and promotional overlays on the current page. Auto-cleans on load, or right-click to clean, with undo. This hides nodes on the page; it does not block network requests.
* **How to use**:
  1. Grant permission on first use (the onboarding flow can enable it in one click); it will not auto-clean until authorized
  2. After that, newly opened pages hide ads automatically; refresh an already-open tab to apply
  3. You can also right-click a blank area and choose **Hide ads on this page** or **Restore ads on this page**
  4. In app settings, turn off “Auto-clean when a page loads” or “Keep hiding ads that appear later”

#### 4. Element Inspector

* **What it does**: Click a page element to view a Figma-like properties panel, and pick any on-screen pixel with the eyedropper.
* **How to use**:
  1. Install **Element Inspector** from the workbench
  2. Right-click a blank area and choose **Inspect page elements**, or press `Alt+Shift+C`
  3. Hover to inspect properties, click to pin; use the bottom toolbar to switch Inspect / Eyedropper
  4. Press `Esc` to exit

---

### Premium apps (Lifetime activation required)

#### 5. Page Export

* **What it does**: Clean up page body content and export an editable Markdown copy.
* **How to use**:
  1. Install the app and ensure activation is complete
  2. Right-click on the page and choose **Generate Markdown**
  3. Review, edit, and export in the side panel; adjust options in settings

#### 6. Content Summary

* **What it does**: Summarize a full page or selection with AI and extract key points quickly.
* **How to use**:
  1. Configure an API key under **AI Model Settings** in the workbench, then pick a model in this app’s settings
  2. **Full-page summary**: right-click → **AI Summary**
  3. **Selection summary**: select text → click **Summary** on the floating toolbar (enable under workbench **Toolbar Display**)
  4. Results appear in the side panel; generation can be paused and history is kept locally

#### 7. Selection Translate

* **What it does**: Translate selected text instantly, or run AI full-page translation under the originals. Translations can be opened in a larger side-panel view.
* **How to use**:
  1. Configure a model, then install the app
  2. **Selection translate**: select text → click **Translate** on the floating toolbar; use **Zoom** when you need a larger view
  3. **Full-page translate**: right-click → **AI Page Translation**
  4. You can also translate the clipboard with a shortcut, or paste into the translation side panel and press `⌘/Ctrl + Enter`
  5. Adjust target language and model in app settings

#### 8. Selection Word Inspector

* **What it does**: Show Pinyin and detailed definitions for selected text to aid reading and learning.
* **How to use**:
  1. Configure a model, then install the app
  2. Select text → click **Inspector** on the floating toolbar
  3. View pronunciation and definitions in the panel; manage model and history in settings

#### 9. Smart Writing & Polishing

* **What it does**: AI assistant for webpage inputs—polish, grammar fix, continue, expand, shorten, or custom prompts.
* **How to use**:
  1. Configure a model, install the app, and enable the input-field assistant in settings
  2. Focus any input / textarea; a floating button appears at the bottom-right
  3. Choose a preset (Polish, Grammar, Continue, Expand, Shorten, etc.) or enter a custom instruction
  4. Replace the original, insert, or copy the result

---

## Quick Start

1. **Install the extension**  
   Install from the [Chrome Web Store](https://chromewebstore.google.com/detail/knowit/jcdiikfdkjffieikiehgcffbclelinfa) or [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/knowit/enhdaccokoiadmddhlehmpkmeeaanlll), or load a packaged Chrome MV3 build from [GitHub Releases](https://github.com/Nangxif/KnowIt-Public/releases).

2. **Open the workbench**  
   Click the extension icon to open the KnowIt workbench and finish onboarding. Enabling free Ad Cleaner is recommended.

3. **Install apps**  
   Install the tools you need from the workbench; premium tools require activation first.

4. **(Optional) Configure AI**  
   Open **AI Model Settings** in the workbench, add provider, model name, API URL, and API key, then set a default model. Each AI app can still pick its own model.

5. **(Optional) Purchase & activate**  
   Pay via [Afdian checkout](https://ifdian.net/order/create?product_type=1&plan_id=bb5efc0a8f0c11f181ee52540025c377&sku=%5B%7B%22sku_id%22%3A%22bb66d6fa8f0c11f1bada52540025c377%22,%22count%22%3A1%7D%5D&viokrz_ex=0), then enter email + order number under Pricing / Activate.

6. **Start using**  
   Trigger installed apps via shortcut, context menu, selection toolbar, or the new tab page.

---

## Usage Notice

* **Local-first data**: Page content, selections, search history, summaries, and generation results are processed locally by default and are not uploaded to KnowIt servers.
* **API keys stay local**: Keys you configure are stored only in local browser settings.
* **Config sync**: Install state and preferences may sync with your Google account via browser sync.
* **Activation limits**: Each Afdian order + bound email supports up to 2 activations.
* **Third-party model services**: AI requests are sent to the provider you configure.
* **Ad Cleaner limits**: Ad Cleaner hides page nodes and does not block ad requests. In-player video ads, anti-adblock walls, and native promotions without clear ad signals may remain.

---

## Contact & Feedback

| Channel | Link / Info |
| --- | --- |
| Feedback (recommended) | [GitHub Issues](https://github.com/Nangxif/KnowIt-Public/issues) |
| Repository | [Nangxif/KnowIt-Public](https://github.com/Nangxif/KnowIt-Public) |
| Official site | [nangxif.github.io/KnowIt-Public](https://nangxif.github.io/KnowIt-Public/) |
| Email | [575981390@qq.com](mailto:575981390@qq.com) |
| Email | [nangxif@gmail.com](mailto:nangxif@gmail.com) |
| Purchase | [Afdian checkout](https://ifdian.net/order/create?product_type=1&plan_id=bb5efc0a8f0c11f181ee52540025c377&sku=%5B%7B%22sku_id%22%3A%22bb66d6fa8f0c11f1bada52540025c377%22,%22count%22%3A1%7D%5D&viokrz_ex=0) |

For feature requests, bug reports, or collaboration, open an Issue or email us.
