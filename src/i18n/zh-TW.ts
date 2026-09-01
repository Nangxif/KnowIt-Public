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
  navDocs: "文檔",
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
  creatorNoteTitle: "創作者的一些話",
  creatorNoteSubtitle:
    "寫給仍在使用 KnowIt 2.3.0 的朋友，也寫給每一位已經安裝 KnowIt 的用戶。",
  creatorNoteParagraphs: [
    "如果你仍在使用 KnowIt 2.3.0，我在這裡先向你表達誠摯的歉意。當時有一個設計上的缺陷：即便某個工具你並未打開、也並未使用，它仍可能改動你正在瀏覽的網頁排版。文字可能擠在一起，版面忽然錯亂，看起來就像網頁本身出了問題。因為發生在後台，很多人很難聯想到是 KnowIt 導致的，只會覺得「這個頁面怎麼突然不對了」。這是我的疏忽，再次向你道歉。",
    "這一問題已在 KnowIt 2.4.0 中修復。若你尚未更新，升級到新版本後便不會再遇到這種情況。",
    "接下來一段時間，我暫不計劃開發新的工具。除非遇到真正好用、值得單獨做成工具的想法，否則會把精力放在打磨現有功能上，讓它用起來更順手、更穩定，也盡可能不干擾你的正常使用。",
    "感謝你對 KnowIt 的支持。若使用中仍有不便，歡迎隨時告訴我。",
  ],
  creatorNoteSignOff: "KnowIt 創作者",
  creatorNoteDate: "2026年9月1日",
  docsTitle: "文檔",
  docsNavLabel: "文檔導航",
  docsGroupApps: "工具設計理念",
  philosophyTitle: "「{name}」的設計理念",
  philosophyWhyTitle: "為什麼做",
  philosophyCraftTitle: "交互上為什麼這樣",
  philosophyNotTitle: "刻意不做",
  philosophyLink: "閱讀設計理念",
  appPhilosophy: {
    "text-search": {
      sections: [
        {
          title: "為什麼做這個工具",
          paragraphs: [
            "瀏覽器自帶的頁面搜索存在幾個長期困擾開發者和重度用戶的限制：",
          ],
          items: [
            {
              label: "位置固定：",
              text: "搜索框被鎖定在瀏覽器頂部或底部，無法移動，經常遮擋正在查看的內容，尤其在對照搜索結果閱讀時尤為不便。",
            },
            {
              label: "匹配能力有限：",
              text: "不支持大小寫敏感匹配，無法精確區分 React 和 react、API 和 api 這類對開發者至關重要的差異。",
            },
            {
              label: "缺乏高級匹配：",
              text: "不支持正則表達式，面對複雜的文本模式（如匹配所有郵箱、特定格式的日期、多關鍵詞組合）時力不從心。",
            },
          ],
        },
        {
          paragraphs: [
            "這些限制使得瀏覽器原生搜索在開發場景、文檔審閱、技術寫作等需要精細文本操作的場景下顯得捉襟見肘。文字搜索希望提供一個更靈活、更強大、更符合開發者使用習慣的頁面內搜索工具。",
          ],
        },
        {
          title: "設計取向",
          paragraphs: [
            "UI 設計直接借鑒 VS Code 的搜索體驗。這不是偶然的選擇——VS Code 的搜索面板是經過大量開發者日常驗證的高效交互範式，其佈局邏輯、視覺層次和交互反饋都值得參考。對於以開發者為目標用戶的工具而言，沿用熟悉的操作心智模型可以顯著降低學習成本，讓用戶開箱即用。",
          ],
        },
        { title: "核心理念" },
        {
          title: "1. 可移動性優先",
          level: 3,
          paragraphs: [
            "搜索框不應當是頁面的附屬品，而是一個可自主定位的工作面板。用戶可以根據當前的閱讀焦點，把搜索框拖拽到最不干擾視線、最便於操作的位置。搜索工具應該適應人的注意力流動，而不是讓人去遷就它。",
          ],
        },
        {
          title: "2. 精確匹配，區分大小寫",
          level: 3,
          paragraphs: [
            "對於開發者和技術寫作者來說，大小寫不是無關緊要的格式差異，而是語義差異。String 是類型，string 是關鍵字；Apple 是公司，apple 是水果。支持大小寫敏感匹配，本質上是尊重文本的精確性。",
          ],
        },
        {
          title: "3. 為進階用戶留出能力空間",
          level: 3,
          paragraphs: [
            "正則表達式是文本處理的利器。目前的版本聚焦於解決可移動性和大小寫匹配這兩個最迫切的痛點，但架構上將匹配引擎設計為可擴展的，為後續引入正則匹配預留了清晰的接口。工具應當從簡單場景入手，但不為能力設上限。",
          ],
        },
        {
          title: "4. 保持輕量，融入工作流",
          level: 3,
          paragraphs: [
            "搜索是一個高頻、短暫、穿插在閱讀和編輯之間的動作。工具應當即開即用、即關即走，不引入多餘的啟動成本，也不打斷用戶的心流。懸浮式的輕量面板而非整頁接管，正是對這一原則的體現。",
          ],
        },
      ],
    },
    "media-downloader": {
      sections: [
        {
          paragraphs: [
            "在日常使用電腦的過程中，很多人都會遇到這樣一個困擾：瀏覽網頁時看到大量好看的圖片、實用的設計素材或參考圖，卻不知道該從哪裡下手保存。右鍵另存為？一張張點太慢；拖拽到桌面？有些網頁根本不支持；想一次性選完再下載，結果發現根本沒有「多選」的入口。這些看似簡單的操作，對不熟悉技術細節的用戶來說，卻常常變成一場耐心的消耗戰。",
            "正是基於對這些真實痛點的觀察，我做了「資源下載器」。它不是為了給資深用戶提供一個高級工具，而是希望讓每一位普通電腦使用者，都能像在手機相冊裡批量保存圖片一樣，輕鬆、直觀地完成網頁資源的收集。",
            "它的核心設計理念，可以概括為三點：",
          ],
        },
        {
          title: "一、所見即所得，降低認知門檻",
          paragraphs: [
            "我不要求用戶去理解「網頁源代碼」「資源鏈接」「請求頭」這些概念。你看到什麼，就能選中什麼；你選中什麼，就能下載什麼。交互方式盡量貼近日常操作習慣，減少彈窗、設置項和專業術語，讓下載回歸「選中—確認—保存」這個最自然的流程。",
          ],
        },
        {
          title: "二、批量處理，告別重複勞動",
          paragraphs: [
            "網頁上的素材往往不是一張兩張，而是一組、一批、一整頁。加入「全選」和「批量下載」，正是為了把用戶從機械式點擊中解放出來。一次勾選，一鍵保存，把時間留給創意和思考，而不是消耗在無意義的重複動作裡。",
          ],
        },
        {
          title: "三、透明可控，下載前心中有數",
          paragraphs: [
            "在點擊「下載」之前，用戶可以清楚看到當前選中了哪些資源、數量是多少，避免誤下或漏下。我不追求「一鍵全自動」，而是讓用戶始終保有選擇權和確認權，讓每一步操作都清晰、安心。",
          ],
        },
        {
          paragraphs: [
            "「資源下載器」不想做一個炫技的工具，它更想做一個「懂你」的助手。它存在的意義，不是告訴用戶「你應該怎麼下載」，而是默默站在用戶身邊，幫他們把那些本應簡單、卻一直麻煩的事情，變得真的簡單起來。",
          ],
        },
      ],
    },
    "ad-cleaner": {
      intro:
        "目標不是打贏廣告聯盟，而是把閱讀面還給你。能藏起來、能撤銷，比「徹底消滅」更重要。",
      why: [
        "推廣浮層常常蓋住正文，但誤傷也真實存在——導航、提示條、付費牆有時長得很像廣告。沒有撤銷的清除，會讓人不敢開。",
      ],
      craft: [
        "啟用後自動處理，是因為廣告不該讓你每次都去點。隱藏而不是刪掉，頁面結構還在，撤銷才做得到。右鍵是給「這一頁突然冒出來」的補刀。",
      ],
      not: [
        "它不是系統級廣告攔截，也不維護一份戰爭般的規則列表。只處理當前頁上打擾閱讀的層。",
      ],
    },
    "element-inspector": {
      intro:
        "Chrome DevTools 是給調試用的。很多時候你只想知道：這塊有多寬、什麼顏色、什麼字體。元素檢查器把「看」從「查」裡拆出來。",
      why: [
        "對著設計稿還原、隨手取個色、確認間距——這些不該先打開一座控制台。面板靠近 Figma 的屬性結構，是因為做視覺的人已經熟悉那種分組。",
      ],
      craft: [
        "懸停即看，點擊鎖定；底部切換檢查和取色。Esc 退出。它是一層輕疊，用完就走，不該改頁面本身。",
      ],
      not: [
        "它不替代 DevTools：沒有斷點、沒有網絡面板、也不改 DOM。那是另一件事。",
      ],
    },
    "page-export": {
      intro:
        "一篇值得留的文章，常常被導航、推薦和廣告包著。頁面導出想抽出正文，變成你能繼續改的 Markdown。",
      why: [
        "收藏夾會失效，截圖不能搜，複製粘貼會帶上一堆垃圾標記。Markdown 是一個乾淨、可編輯、可放進筆記軟件的中間態。",
      ],
      craft: [
        "先在側邊欄預覽，再複製或導出。你必須看見「我會拿走什麼」，才敢按下去。它整理的是正文，不是整站鏡像。",
      ],
      not: [
        "它不是網頁歸檔工具，也不追求 100% 還原複雜排版。複雜應用頁本來就不該被當成文章導出。",
      ],
    },
    "content-summary": {
      intro:
        "長文當前，你需要的往往不是再讀一遍，而是先判斷它值不值得讀。總結應該發生在你正在看的這一頁，密鑰留在你手裡。",
      why: [
        "把整頁丟給某個在線總結網站，等於把閱讀內容交給陌生人。自備 Key、默認本地留歷史，是隱私優先的底線。整頁和劃詞兩種入口，對應「這篇」和「這一段」。",
      ],
      craft: [
        "結果在側邊欄流式出現，可以暫停。生成不該綁架你的滾動。歷史可回看，是因為同一頁你可能隔天還想對一下。",
      ],
      not: [
        "它不假裝讀完了你該讀的部分。總結是索引，不是替代。KnowIt 也不代你保管模型密鑰。",
      ],
    },
    "selection-translate": {
      intro:
        "翻譯應該出現在文字旁邊，而不是把你扔進另一個網站。選一句就譯一句，讀一篇就對照一篇。",
      why: [
        "來回切頁會打斷閱讀節奏。即時劃詞解決「這個詞 / 這句」；全文對照解決「我想用母語把這頁讀完」。",
      ],
      craft: [
        "懸浮工具欄只在選中後出現，用完即隱。全文翻譯進側邊欄，原文還在。譯文可本地緩存，避免同一句花兩次錢。",
      ],
      not: [
        "它不是詞典，也不靠 KnowIt 的服務器。識字是另一件應用；翻譯只管語言轉換。",
      ],
    },
    "word-inspector": {
      intro:
        "你會這門語言，只是卡在某個字上。識字給讀音和釋義，而不是把整句翻成另一門語言。",
      why: [
        "翻譯會把你拉出原文；學語言、讀中文網頁時，人更需要「這個字怎麼念、什麼意思」。它和劃詞翻譯分開，就是怕兩件事混成一個按鈕。",
      ],
      craft: [
        "選中後點「識字」，面板就地出現。輕、快、可關掉。模型可配，是因為釋義質量因模型而異，選擇權該在你。",
      ],
      not: [
        "它不是完整詞典應用，也不做例句作文摘。只幫你跨過當下這個字。",
      ],
    },
    "smart-writer": {
      intro:
        "寫作發生在網頁輸入框裡：評論、表單、後台、文檔。助手應該來遷就這些框，而不是讓你複製到聊天窗口再貼回來。",
      why: [
        "複製來去會丟上下文，也會把草稿交給另一個產品。預設（潤色、糾錯、續寫、擴寫、精簡）覆蓋最常見的「我知道要改，但懶得自己改」；自定義指令留給例外。",
      ],
      craft: [
        "只在輸入框聚焦時出現，右下角一小塊。結果可替換、插入或複製——原文怎麼處理由你決定。它不自動改你沒確認的字。",
      ],
      not: [
        "它不是獨立編輯器，也不在瀏覽時彈窗打擾。關著助手時，頁面就該像沒裝過一樣。",
      ],
    },
  },
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
