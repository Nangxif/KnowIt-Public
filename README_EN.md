<p align="center">
  <img alt="KnowIt Logo" src="./assets//logo.png" width="320">
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
  <a href="https://github.com/Nangxif/KnowIt-Public/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Nangxif/KnowIt-Public.svg?style=flat-square&color=green" alt="GitHub license" />
  </a>
</p>

<p align="center">
  English | <a href="./README.md">简体中文</a>
</p>

---

## Overview

Browsing, reading papers, studying, or creating content often comes with familiar friction:

* Too many extensions fighting for toolbar space and shortcuts
* Worry that online AI or translation tools upload sensitive page data
* Fragmented paid tools, or lock-in to a single AI vendor

**KnowIt** is a privacy-first, modular browser toolkit that runs locally. Through its built-in **App Marketplace**, you can install or remove tools like building blocks and assemble a personal web workbench.

**Highlights:**

* **Modular marketplace** — install only what you need
* **Privacy-first** — page content, selections, search and generation history stay local by default; nothing is uploaded to KnowIt servers
* **Bring your own API key** — unified model settings for DeepSeek, OpenAI, Gemini, Moonshot (Kimi), Alibaba DashScope, SiliconFlow, and more
* **Polished UX** — shortcuts, context menus, selection toolbar, side panel, and light/dark themes

---

## Free vs Paid

| Plan | Includes | Price |
| --- | --- | --- |
| **Free** | Text Search, Media Downloader | Free |
| **Lifetime (Paid)** | Page Export, Content Summary, Selection Translate, Selection Word Inspector, Smart Writing & Polishing, plus future premium tools | **¥ 6.66** one-time |

After payment, open the extension home → **Pricing / Activate**, then enter your **email + Afdian order number**. Each order number bound to an email can be activated up to **2** times. Switching to another order number will uninstall related premium tools.

**Purchase link (Afdian):**

👉 [Open Afdian checkout](https://ifdian.net/order/create?product_type=1&plan_id=bb5efc0a8f0c11f181ee52540025c377&sku=%5B%7B%22sku_id%22%3A%22bb66d6fa8f0c11f1bada52540025c377%22,%22count%22%3A1%7D%5D&viokrz_ex=0)

> AI features require your own model API key. Requests go to the provider you configure—review their privacy and billing terms. KnowIt does not collect or proxy your keys.

---

## Apps & How to Use

After installing the extension, click the KnowIt icon to open the home page and marketplace. Install the apps you need, then follow the steps below.

### Free apps

#### 1. Text Search (installed by default)

* **What it does**: Search webpage text like a code editor, with case matching, result navigation, and custom highlights.
* **How to use**:
  1. Press `Ctrl + F` (Mac: `⌘ + F`) on any page to open the search box
  2. Enter keywords to jump and highlight matches
  3. Customize the shortcut and highlight style in app settings

#### 2. Media Downloader

* **What it does**: Scan and extract images and videos from the current page, with preview and batch download.
* **How to use**:
  1. Install **Media Downloader** from the marketplace
  2. Right-click on the page and choose **Media Downloader**
  3. Filter, preview, and batch-download in the side panel

---

### Premium apps (Lifetime activation required)

#### 3. Page Export

* **What it does**: Clean up page body content and export an editable Markdown copy.
* **How to use**:
  1. Install the app and ensure activation is complete
  2. Right-click on the page and choose **Generate Markdown**
  3. Review, edit, and export in the side panel; adjust options in settings

#### 4. Content Summary

* **What it does**: Summarize a full page or selection with AI and extract key points quickly.
* **How to use**:
  1. Configure an API key under **AI Model Settings**, then pick a model in this app’s settings
  2. **Full-page summary**: right-click → **AI Summary**
  3. **Selection summary**: select text → click **Summary** on the floating toolbar (enable in **Settings → Toolbar Display**)
  4. Results appear in the side panel; generation can be paused and history is kept locally

#### 5. Selection Translate

* **What it does**: Translate selected text instantly, or run AI full-page translation under the originals.
* **How to use**:
  1. Configure a model, then install the app
  2. **Selection translate**: select text → click **Translate** on the floating toolbar
  3. **Full-page translate**: right-click → **AI Page Translation**
  4. Adjust target language and model in app settings

#### 6. Selection Word Inspector

* **What it does**: Show Pinyin and detailed definitions for selected text to aid reading and learning.
* **How to use**:
  1. Configure a model, then install the app
  2. Select text → click **Inspector** on the floating toolbar
  3. View pronunciation and definitions in the panel; manage model and history in settings

#### 7. Smart Writing & Polishing

* **What it does**: AI assistant for webpage inputs—polish, grammar fix, continue, expand, shorten, or custom prompts.
* **How to use**:
  1. Configure a model, install the app, and enable the input-field assistant in settings
  2. Focus any input / textarea; a floating button appears at the bottom-right
  3. Choose a preset (Polish, Grammar, Continue, Expand, Shorten, etc.) or enter a custom instruction
  4. Replace the original, insert, or copy the result

---

## Quick Start

1. **Install the extension**  
   Load the packaged Chrome MV3 build (or install from a release package).

2. **Open home**  
   Click the extension icon to open KnowIt home / marketplace.

3. **Install apps**  
   Install free tools from the marketplace; premium tools require activation first.

4. **(Optional) Configure AI**  
   Open **AI Model Settings**, add provider, model name, API URL, and API key, then set a default model. Each AI app can still pick its own model.

5. **(Optional) Purchase & activate**  
   Pay via [Afdian checkout](https://ifdian.net/order/create?product_type=1&plan_id=bb5efc0a8f0c11f181ee52540025c377&sku=%5B%7B%22sku_id%22%3A%22bb66d6fa8f0c11f1bada52540025c377%22,%22count%22%3A1%7D%5D&viokrz_ex=0), then enter email + order number under Pricing / Activate.

6. **Start using**  
   Trigger installed apps via shortcut, context menu, or selection toolbar.

---

## Usage Notice

* **Local-first data**: Page content, selections, search history, summaries, and generation results are processed locally by default and are not uploaded to KnowIt servers.
* **API keys stay local**: Keys you configure are stored only in local browser settings.
* **Config sync**: Install state and preferences may sync with your Google account via browser sync.
* **Activation limits**: Each Afdian order + bound email supports up to 2 activations.
* **Third-party model services**: AI requests are sent to the provider you configure.

---

## Contact & Feedback

| Channel | Link / Info |
| --- | --- |
| Feedback (recommended) | [GitHub Issues](https://github.com/Nangxif/KnowIt-Public/issues) |
| Repository | [Nangxif/KnowIt-Public](https://github.com/Nangxif/KnowIt-Public) |
| Email | [575981390@qq.com](mailto:575981390@qq.com) |
| Email | [nangxif@gmail.com](mailto:nangxif@gmail.com) |
| Purchase | [Afdian checkout](https://ifdian.net/order/create?product_type=1&plan_id=bb5efc0a8f0c11f181ee52540025c377&sku=%5B%7B%22sku_id%22%3A%22bb66d6fa8f0c11f1bada52540025c377%22,%22count%22%3A1%7D%5D&viokrz_ex=0) |

For feature requests, bug reports, or collaboration, open an Issue or email us.

