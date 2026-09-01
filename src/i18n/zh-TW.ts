import type { Messages } from "./types";

export const zhTW: Messages = {
  documentTitle: "KnowIt — 讀懂網頁，也讓網頁更好用",
  localeLabel: "繁體",
  languageMenuTitle: "選擇語言",
  switchToLight: "切換成淺色模式",
  switchToDark: "切換成深色模式",
  navHighlights: "特性",
  navShowcase: "演示",
  navApps: "應用",
  navPricing: "定價",
  navInstall: "安裝",
  installChrome: "Chrome 應用商店",
  installEdge: "Edge 應用商店",
  installGithub: "GitHub 倉庫",
  brandHomeLabel: "回到頂部",
  heroTitle: "讀懂網頁，也讓網頁更好用",
  heroSubtitle:
    "一站式、隱私優先的模組化網頁效率工作臺。像搭積木一樣安裝工具，把瀏覽器變成你的超級工作臺。",
  heroInstall: "安裝擴展",
  heroPurchase: "購買終身版",
  highlightsTitle: "為什麼選擇 KnowIt",
  highlightsSubtitle: "少裝一堆插件，把真正需要的能力留在本地。",
  highlightMarketplaceTitle: "模組化應用市場",
  highlightMarketplaceBody: "按需安裝，保持擴展輕量流暢，只留下符合你工作流的工具。",
  highlightPrivacyTitle: "隱私優先",
  highlightPrivacyBody:
    "網頁內容、選中文字、搜索與生成記錄默認只存本地，不上傳至 KnowIt 服務器。",
  highlightByokTitle: "自備 API Key",
  highlightByokBody:
    "統一模型配置中心，支持 DeepSeek、OpenAI、Gemini、Moonshot、阿里雲百煉、SiliconFlow 等。",
  highlightUxTitle: "優雅交互",
  highlightUxBody: "支持快捷鍵、右鍵菜單、劃詞懸浮工具欄、側邊欄，以及深淺色模式。",
  appsTitle: "應用清單",
  appsSubtitle: "安裝擴展後，在應用市場按需啟用這些工具。",
  paidTag: "付費",
  freeTag: "免費",
  detailsTitle: "應用詳情",
  detailsClose: "關閉",
  categoryEfficiency: "效率小工具",
  categoryAi: "AI 輔助工具",
  categoryDevelopment: "開發工具",
  appNames: {
    "text-search": "文字搜索",
    "media-downloader": "資源下載器",
    "ad-cleaner": "廣告清除",
    "element-inspector": "元素檢查器",
    "page-export": "頁面導出",
    "content-summary": "內容總結",
    "selection-translate": "劃詞翻譯",
    "word-inspector": "劃詞識字",
    "smart-writer": "智能寫作與潤色",
  },
  appDescriptions: {
    "text-search":
      "像代碼編輯器一樣搜索網頁文字，支持大小寫匹配、結果跳轉與自定義高亮。",
    "media-downloader":
      "一鍵掃描並提取網頁中的圖片、視頻等資源，支持預覽與批量下載。",
    "ad-cleaner":
      "隱藏當前網頁上的廣告和推廣浮層，讓閱讀更乾淨。打開即可自動清除，也可右鍵操作，支持撤銷。",
    "element-inspector":
      "點擊頁面元素查看類似 Figma 的屬性面板，並用取色器吸取頁面任意像素色。",
    "page-export": "整理網頁正文並導出為 Markdown，保存乾淨、可編輯的副本。",
    "content-summary": "用 AI 總結整篇網頁或選中內容，快速提煉重點與核心結論。",
    "selection-translate":
      "選中文字即時翻譯；也可對整頁進行 AI 對照翻譯，減少來回切頁。",
    "word-inspector": "選中網頁文字後，快速展示拼音與詞義解釋，輔助閱讀與學習。",
    "smart-writer":
      "在網頁輸入框中調用 AI，進行潤色、糾錯、續寫、擴寫、精簡或自定義創作。",
  },
  showcaseTitle: "看看它們長什麼樣",
  showcaseSubtitle:
    "以下為界面示意圖，會跟隨主題與語言實時變化；實際界面以擴展內為準。",
  showcaseCaptions: {
    "text-search": "按下 Ctrl + F，像在代碼編輯器裡一樣定位網頁關鍵詞。",
    "media-downloader": "右鍵打開側邊欄，篩選、預覽並批量下載頁面資源。",
    "ad-cleaner": "打開網頁自動隱藏廣告和推廣浮層，也可右鍵清除，隨時撤銷。",
    "element-inspector":
      "右鍵「檢查頁面元素」或按 Alt+Shift+C，懸停查看屬性，工具條切換取色。",
    "page-export": "右鍵「生成 Markdown」，在側邊欄預覽並導出乾淨副本。",
    "content-summary": "右鍵整頁總結或劃詞總結，要點在側邊欄流式呈現。",
    "selection-translate": "選中文字，點擊懸浮工具欄「翻譯」，譯文即刻出現。",
    "word-inspector": "選中生詞，點擊「識字」，拼音與釋義立即展示。",
    "smart-writer": "聚焦輸入框，右下角喚起助手，一鍵潤色或續寫。",
  },
  showcaseMock: {
    textSearch: {
      placeholder: "搜索網頁文字",
      query: "模組化",
      matchCount: "2/8",
    },
    mediaDownloader: {
      panelTitle: "資源下載器",
      filterAll: "全部",
      filterImages: "圖片",
      filterVideos: "視頻",
      selectedCount: "已選 4 項",
      downloadAction: "批量下載",
    },
    pageExport: {
      panelTitle: "頁面導出",
      previewLabel: "Markdown 預覽",
      copyAction: "複製",
      exportAction: "導出 .md",
    },
    contentSummary: {
      panelTitle: "AI 總結",
      generating: "正在生成…",
      keyPointsLabel: "本頁要點",
      keyPoints: [
        "隱私優先，數據默認只存本地",
        "應用市場按需安裝，保持輕量",
        "自備 API Key，自由選擇模型",
      ],
    },
    selectionTranslate: {
      selectedText: "Knowledge is power.",
      toolbarTranslate: "翻譯",
      toolbarSummarize: "總結",
      resultLabel: "譯文",
      resultText: "知識就是力量。",
    },
    wordInspector: {
      selectedWord: "斟酌",
      toolbarInspect: "識字",
      pinyinLabel: "拼音",
      pinyin: "zhēn zhuó",
      meaningLabel: "釋義",
      meaning: "反覆考慮、仔細推敲，多用於措辭與決定。",
    },
    smartWriter: {
      draftText: "這個方案大概還行，我們後面再看看要不要做。",
      assistantTitle: "寫作助手",
      presets: ["潤色", "糾錯", "續寫", "擴寫", "精簡"],
      applyAction: "替換原文",
    },
    adCleaner: {
      promoLabel: "推廣",
      adLabel: "廣告",
      cleaned: "已隱藏 3 處廣告",
      undo: "撤銷",
    },
    elementInspector: {
      tagName: "code",
      copyCss: "複製 CSS",
      sectionIdentity: "圖層",
      sectionSize: "位置與尺寸",
      sectionLayout: "佈局",
      sectionTypography: "文字",
      sectionFill: "填充",
      labelTag: "標籤",
      labelClass: "Class",
      classValue: "hljs language-js",
      labelWidth: "寬度",
      labelHeight: "高度",
      widthValue: "786px",
      heightValue: "240px",
      labelDisplay: "display",
      displayValue: "block",
      labelFont: "字體",
      fontValue: "Menlo, 12px",
      labelColor: "顏色",
      colorValue: "#ABB2BF",
      labelBackground: "背景色",
      backgroundValue: "#282C34",
      modeInspect: "檢查",
      modeEyedropper: "取色",
    },
  },
  pricingTitle: "免費與終身版",
  pricingSubtitle: "先免費使用基礎工具，需要時一次買斷全部高級能力。",
  freePlan: "免費",
  freePrice: "¥ 0",
  freeDescription: "文字搜索、資源下載器、廣告清除、元素檢查器。",
  lifetimePlan: "終身版",
  lifetimePrice: "¥ 6.66",
  lifetimeDescription: "一次買斷，解鎖全部高級工具。後續高級工具可繼續使用，無訂閱。",
  pricingFeatures: [
    "頁面導出、內容總結、劃詞翻譯、劃詞識字、智能寫作與潤色",
    "以及後續高級工具",
    "購買後在擴展首頁「購買激活」填寫郵箱 + 愛發電訂單號",
  ],
  purchaseAction: "打開愛發電支付",
  activationHint:
    "激活在擴展內完成：填寫郵箱與愛發電訂單號。每個訂單號與綁定郵箱最多可激活 2 次。AI 功能需自行配置模型 API Key，KnowIt 不會代收或轉發你的密鑰。",
  footerAboutTitle: "關於",
  footerContactTitle: "聯繫我",
  footerGithubLabel: "GitHub 倉庫",
  contactFeedbackShort: "問題反饋",
  privacyPolicyLink: "隱私協議",
  userAgreementLink: "用戶協議",
  changelogLink: "更新日誌",
  changelogTitle: "更新日誌",
  legalNavLabel: "協議導航",
  legalUpdatedAtLabel: "更新時間",
  legalEffectiveAtLabel: "生效時間",
  privacyPolicy: {
    title: "隱私協議",
    updatedAt: "2026年8月12日",
    effectiveAt: "2026年8月12日",
    intro:
      "歡迎使用 KnowIt。KnowIt 是一款以本地優先為設計原則的瀏覽器擴展。本隱私協議旨在說明我如何處理與你使用產品相關的信息，以及這些信息在本地、瀏覽器同步與第三方服務之間的邊界。",
    sections: [
      {
        title: "第1條 定義",
        items: [
          {
            id: "1.1",
            text: "「KnowIt」指本瀏覽器擴展及其應用市場中可安裝的各類工具，包括但不限於文字搜索、內容總結、劃詞翻譯、頁面導出等功能。",
          },
          {
            id: "1.2",
            text: "「本地數據」指保存在你當前設備或瀏覽器本地存儲中的信息，例如配置、歷史記錄、激活狀態等。",
          },
          {
            id: "1.3",
            text: "「第三方服務」指由你自行配置或選擇使用的外部服務，例如模型服務商、愛發電支付平臺、瀏覽器賬號同步服務等。",
          },
        ],
      },
      {
        title: "第2條 我如何處理數據",
        items: [
          {
            id: "2.1",
            text: "本地優先：網頁內容、選中文字、搜索記錄、總結文本、生成結果等，默認僅在本地處理，不上傳至 KnowIt 自有服務器。",
          },
          {
            id: "2.2",
            text: "API Key 瀏覽器保存：若你自行配置模型 API Key，該密鑰保存在瀏覽器配置中，可能隨已登錄的 Chrome 賬號在不同設備間同步；KnowIt 不會收集、存儲或轉發該密鑰。",
          },
          {
            id: "2.3",
            text: "配置同步：應用安裝狀態、偏好設置等，可能通過瀏覽器自帶的同步能力，跟隨你已登錄的 Google 賬號在不同設備間同步。該同步由瀏覽器服務提供，KnowIt 不運營獨立的雲端賬號系統。",
          },
          {
            id: "2.4",
            text: "激活信息：當你購買並激活高級功能時，可能需要填寫訂單號與綁定郵箱，以便完成授權校驗。請妥善保管相關信息。",
          },
        ],
      },
      {
        title: "第3條 第三方服務與數據傳輸",
        items: [
          {
            id: "3.1",
            text: "使用 AI 相關功能時，你主動發起的請求內容會被髮送至你配置的模型服務商。KnowIt 不控制該服務商如何處理數據，請自行閱讀並確認其隱私政策與計費規則。",
          },
          {
            id: "3.2",
            text: "支付與激活相關流程可能涉及愛發電等第三方平臺。相關支付信息由對應平臺處理，KnowIt 僅用於完成功能授權所需的必要校驗。",
          },
          {
            id: "3.3",
            text: "若你通過 GitHub Issues、郵件等方式聯繫我，你主動提供的聯繫方式與反饋內容將僅用於溝通與問題處理。",
          },
        ],
      },
      {
        title: "第4條 你的權利與選擇",
        items: [
          {
            id: "4.1",
            text: "你可以隨時在擴展設置中修改、清空本地配置與歷史記錄（具體範圍以產品功能為準）。",
          },
          {
            id: "4.2",
            text: "你可以選擇是否配置第三方模型服務；不配置時，相關 AI 功能將無法使用或能力受限。",
          },
          {
            id: "4.3",
            text: "你可以關閉或退出瀏覽器賬號同步，以減少配置在不同設備間的流轉。",
          },
        ],
      },
      {
        title: "第5條 協議更新與聯繫我",
        paragraphs: [
          "我可能根據產品功能變化更新本隱私協議。更新後的協議將在產品內展示，並自公佈之日起生效。如你繼續使用 KnowIt，即視為知悉並同意更新後的內容。",
          "如對本協議有任何疑問，可通過底部欄公示的郵箱或 GitHub Issues 與我聯繫。",
        ],
      },
    ],
  },
  userAgreement: {
    title: "用戶協議",
    updatedAt: "2026年8月12日",
    effectiveAt: "2026年8月12日",
    intro:
      "本用戶協議是你與 KnowIt 之間關於使用本擴展及其中工具的法律協議。開始使用即表示你已閱讀、理解並同意接受本協議。若你不同意，請停止使用本產品。",
    sections: [
      {
        title: "第1條 服務說明",
        items: [
          {
            id: "1.1",
            text: "KnowIt 提供瀏覽器擴展形態的網頁效率工具，支持按需安裝應用市場中的功能模塊，幫助你完成搜索、總結、翻譯、導出等工作。",
          },
          {
            id: "1.2",
            text: "KnowIt 以本地優先方式運行。除你主動使用並依賴的第三方服務外，核心處理默認發生在本地環境。",
          },
          {
            id: "1.3",
            text: "部分高級工具需購買並完成激活後方可使用；未激活不影響基礎功能的正常使用（以產品實際開放範圍為準）。",
          },
        ],
      },
      {
        title: "第2條 使用規則",
        items: [
          {
            id: "2.1",
            text: "你應合法、合規地使用 KnowIt，不得利用本產品從事侵犯他人合法權益、違反法律法規或干擾網絡秩序的行為。",
          },
          {
            id: "2.2",
            text: "你應對通過 KnowIt 處理的內容擁有相應權利，或已獲得合法授權；不得利用本產品處理你無權處理的內容。",
          },
          {
            id: "2.3",
            text: "你應妥善保管本地配置、API Key、激活訂單號與綁定郵箱等信息。因個人保管不當導致的損失，由你自行承擔。",
          },
        ],
      },
      {
        title: "第3條 激活與付費功能",
        items: [
          {
            id: "3.1",
            text: "部分高級功能需通過愛發電等渠道購買後，填寫訂單號完成激活。",
          },
          {
            id: "3.2",
            text: "每個愛發電訂單號與綁定郵箱最多可激活 2 次，請謹慎操作並妥善保管；切換訂單號可能導致相關付費工具被卸載。",
          },
          {
            id: "3.3",
            text: "支付、退款、發票等事宜以對應第三方支付/銷售平臺規則為準；KnowIt 僅負責在校驗通過後開放相應功能。",
          },
        ],
      },
      {
        title: "第4條 第三方服務",
        items: [
          {
            id: "4.1",
            text: "當你啟用 AI 功能時，請求將發送至你配置的模型服務商。服務可用性、費用、內容安全與數據處理均由該服務商負責。",
          },
          {
            id: "4.2",
            text: "KnowIt 不對第三方服務的穩定性、準確性、連續性或合規性作出保證，也不對其服務中斷或內容結果承擔責任。",
          },
        ],
      },
      {
        title: "第5條 免責聲明與責任限制",
        items: [
          {
            id: "5.1",
            text: "KnowIt 按「現狀」提供。受瀏覽器環境、網頁結構、網絡狀況及第三方服務影響，功能可能出現延遲、失敗或不完整輸出。",
          },
          {
            id: "5.2",
            text: "你基於總結、翻譯、生成等內容所作的判斷與決策，應由你自行負責；KnowIt 不構成任何專業建議。",
          },
          {
            id: "5.3",
            text: "在法律允許的最大範圍內，KnowIt 作者/維護者不對因使用或無法使用本產品而產生的間接、附帶或後果性損失承擔責任。",
          },
        ],
      },
      {
        title: "第6條 協議變更",
        paragraphs: [
          "我可能適時修訂本協議。修訂內容將在產品內更新展示。若修訂涉及重大權利義務變化，我將盡可能以合理方式提示。你繼續使用即視為接受修訂後的協議。",
        ],
      },
      {
        title: "第7條 聯繫方式",
        paragraphs: [
          "如對本協議或產品使用有疑問，可通過底部欄公示的郵箱或 GitHub Issues 與我聯繫。",
        ],
      },
    ],
  },
  changelogEntries: [
    {
      version: "2.4.0",
      date: "2026-09-01",
      items: [
        "新增免費應用「元素檢查器」：檢查頁面元素並吸取顏色",
        "新增免費應用「廣告清除」：自動隱藏網頁廣告與推廣浮層，支持撤銷",
        "重新設計應用市場頁面",
        "重新設計新 tab 頁",
        "修復未啟用應用時樣式仍影響原網頁、資源下載器無法打開的問題",
      ],
    },
    {
      version: "2.3.0",
      date: "2026-08-25",
      items: [
        "新增用戶引導",
        "重新調整落地頁",
        "新 tab 頁風格調整",
      ],
    },
    {
      version: "2.2.0",
      date: "2026-08-20",
      items: [
        "重新整理激活狀態與配置的同賬號多地登錄同步邏輯",
        "翻譯結果支持本地緩存（上限 50 條），減少重複翻譯",
        "全文翻譯支持重新生成",
        "新增繁體中文界面語言支持",
        "AI翻譯支持粘貼翻譯",
        "優化底部欄，補充隱私協議、用戶協議等說明入口",
        "修復歷史列表快照無法展示、英文模式下 popup 樣式異常等問題",
      ],
    },
    {
      version: "2.1.0",
      date: "2026-08-04",
      items: [
        "接入愛發電支付，支持購買後填寫訂單號激活高級功能",
        "全文總結支持暫停，並修復偶現內容解析失敗的問題",
        "校對並優化產品相關文案內容",
        "整改底部欄，補充協議說明、更新日誌與聯繫方式入口",
      ],
    },
  ],
};
