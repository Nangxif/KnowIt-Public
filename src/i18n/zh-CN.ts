import type { Messages } from "./types";

export const zhCN: Messages = {
  documentTitle: "KnowIt — 读懂网页，也让网页更好用",
  localeLabel: "简体",
  languageMenuTitle: "选择语言",
  switchToLight: "切换成浅色模式",
  switchToDark: "切换成深色模式",
  navHighlights: "特性",
  navShowcase: "演示",
  navApps: "应用",
  navPricing: "定价",
  navDocs: "文档",
  navInstall: "安装",
  installChrome: "Chrome 应用商店",
  installEdge: "Edge 应用商店",
  installGithub: "GitHub 仓库",
  brandHomeLabel: "回到顶部",
  heroTitle: "读懂网页，也让网页更好用",
  heroSubtitle:
    "一站式、隐私优先的模块化网页效率工作台。像搭积木一样安装工具，把浏览器变成你的超级工作台。",
  heroInstall: "安装扩展",
  heroPurchase: "购买终身版",
  highlightsTitle: "为什么选择 KnowIt",
  highlightsSubtitle: "少装一堆插件，把真正需要的能力留在本地。",
  highlightMarketplaceTitle: "模块化应用市场",
  highlightMarketplaceBody: "按需安装，保持扩展轻量流畅，只留下符合你工作流的工具。",
  highlightPrivacyTitle: "隐私优先",
  highlightPrivacyBody:
    "网页内容、选中文字、搜索与生成记录默认只存本地，不上传至 KnowIt 服务器。",
  highlightByokTitle: "自备 API Key",
  highlightByokBody:
    "统一模型配置中心，支持 DeepSeek、OpenAI、Gemini、Moonshot、阿里云百炼、SiliconFlow 等。",
  highlightUxTitle: "优雅交互",
  highlightUxBody: "支持快捷键、右键菜单、划词悬浮工具栏、侧边栏，以及深浅色模式。",
  appsTitle: "应用清单",
  appsSubtitle: "安装扩展后，在应用市场按需启用这些工具。",
  paidTag: "付费",
  freeTag: "免费",
  detailsTitle: "应用详情",
  detailsClose: "关闭",
  categoryEfficiency: "效率小工具",
  categoryAi: "AI 辅助工具",
  categoryDevelopment: "开发工具",
  appNames: {
    "text-search": "文字搜索",
    "media-downloader": "资源下载器",
    "ad-cleaner": "广告清除",
    "element-inspector": "元素检查器",
    "page-export": "页面导出",
    "content-summary": "内容总结",
    "selection-translate": "划词翻译",
    "word-inspector": "划词识字",
    "smart-writer": "智能写作与润色",
  },
  appDescriptions: {
    "text-search":
      "像代码编辑器一样搜索网页文字，支持大小写匹配、结果跳转与自定义高亮。",
    "media-downloader":
      "一键扫描并提取网页中的图片、视频等资源，支持预览与批量下载。",
    "ad-cleaner":
      "隐藏当前网页上的广告和推广浮层，让阅读更干净。打开即可自动清除，也可右键操作，支持撤销。",
    "element-inspector":
      "点击页面元素查看类似 Figma 的属性面板，并用取色器吸取页面任意像素色。",
    "page-export": "整理网页正文并导出为 Markdown，保存干净、可编辑的副本。",
    "content-summary": "用 AI 总结整篇网页或选中内容，快速提炼重点与核心结论。",
    "selection-translate":
      "选中文字即时翻译；也可对整页进行 AI 对照翻译，减少来回切页。",
    "word-inspector": "选中网页文字后，快速展示拼音与词义解释，辅助阅读与学习。",
    "smart-writer":
      "在网页输入框中调用 AI，进行润色、纠错、续写、扩写、精简或自定义创作。",
  },
  showcaseTitle: "看看它们长什么样",
  showcaseSubtitle:
    "以下为界面示意图，会跟随主题与语言实时变化；实际界面以扩展内为准。",
  showcaseCaptions: {
    "text-search": "按下 Ctrl + F，像在代码编辑器里一样定位网页关键词。",
    "media-downloader": "右键打开侧边栏，筛选、预览并批量下载页面资源。",
    "ad-cleaner": "打开网页自动隐藏广告和推广浮层，也可右键清除，随时撤销。",
    "element-inspector":
      "右键「检查页面元素」或按 Alt+Shift+C，悬停查看属性，工具条切换取色。",
    "page-export": "右键「生成 Markdown」，在侧边栏预览并导出干净副本。",
    "content-summary": "右键整页总结或划词总结，要点在侧边栏流式呈现。",
    "selection-translate": "选中文字，点击悬浮工具栏「翻译」，译文即刻出现。",
    "word-inspector": "选中生词，点击「识字」，拼音与释义立即展示。",
    "smart-writer": "聚焦输入框，右下角唤起助手，一键润色或续写。",
  },
  showcaseMock: {
    textSearch: {
      placeholder: "搜索网页文字",
      query: "模块化",
      matchCount: "2/8",
    },
    mediaDownloader: {
      panelTitle: "资源下载器",
      filterAll: "全部",
      filterImages: "图片",
      filterVideos: "视频",
      selectedCount: "已选 4 项",
      downloadAction: "批量下载",
    },
    pageExport: {
      panelTitle: "页面导出",
      previewLabel: "Markdown 预览",
      copyAction: "复制",
      exportAction: "导出 .md",
    },
    contentSummary: {
      panelTitle: "AI 总结",
      generating: "正在生成…",
      keyPointsLabel: "本页要点",
      keyPoints: [
        "隐私优先，数据默认只存本地",
        "应用市场按需安装，保持轻量",
        "自备 API Key，自由选择模型",
      ],
    },
    selectionTranslate: {
      selectedText: "Knowledge is power.",
      toolbarTranslate: "翻译",
      toolbarSummarize: "总结",
      resultLabel: "译文",
      resultText: "知识就是力量。",
    },
    wordInspector: {
      selectedWord: "斟酌",
      toolbarInspect: "识字",
      pinyinLabel: "拼音",
      pinyin: "zhēn zhuó",
      meaningLabel: "释义",
      meaning: "反复考虑、仔细推敲，多用于措辞与决定。",
    },
    smartWriter: {
      draftText: "这个方案大概还行，我们后面再看看要不要做。",
      assistantTitle: "写作助手",
      presets: ["润色", "纠错", "续写", "扩写", "精简"],
      applyAction: "替换原文",
    },
    adCleaner: {
      promoLabel: "推广",
      adLabel: "广告",
      cleaned: "已隐藏 3 处广告",
      undo: "撤销",
    },
    elementInspector: {
      tagName: "code",
      copyCss: "复制 CSS",
      sectionIdentity: "图层",
      sectionSize: "位置与尺寸",
      sectionLayout: "布局",
      sectionTypography: "文字",
      sectionFill: "填充",
      labelTag: "标签",
      labelClass: "Class",
      classValue: "hljs language-js",
      labelWidth: "宽度",
      labelHeight: "高度",
      widthValue: "786px",
      heightValue: "240px",
      labelDisplay: "display",
      displayValue: "block",
      labelFont: "字体",
      fontValue: "Menlo, 12px",
      labelColor: "颜色",
      colorValue: "#ABB2BF",
      labelBackground: "背景色",
      backgroundValue: "#282C34",
      modeInspect: "检查",
      modeEyedropper: "取色",
    },
  },
  pricingTitle: "免费与终身版",
  pricingSubtitle: "先免费使用基础工具，需要时一次买断全部高级能力。",
  freePlan: "免费",
  freePrice: "¥ 0",
  freeDescription: "文字搜索、资源下载器、广告清除、元素检查器。",
  lifetimePlan: "终身版",
  lifetimePrice: "¥ 6.66",
  lifetimeDescription: "一次买断，解锁全部高级工具。后续高级工具可继续使用，无订阅。",
  pricingFeatures: [
    "页面导出、内容总结、划词翻译、划词识字、智能写作与润色",
    "以及后续高级工具",
    "购买后在扩展首页「购买激活」填写邮箱 + 爱发电订单号",
  ],
  purchaseAction: "打开爱发电支付",
  activationHint:
    "激活在扩展内完成：填写邮箱与爱发电订单号。每个订单号与绑定邮箱最多可激活 2 次。AI 功能需自行配置模型 API Key，KnowIt 不会代收或转发你的密钥。",
  creatorNoteTitle: "创作者的一些话",
  creatorNoteSubtitle:
    "写给仍在使用 KnowIt 2.3.0 的朋友，也写给每一位已经安装 KnowIt 的用户。",
  creatorNoteParagraphs: [
    "如果你仍在使用 KnowIt 2.3.0，我在这里先向你表达诚挚的歉意。当时有一个设计上的缺陷：即便某个工具你并未打开、也并未使用，它仍可能改动你正在浏览的网页排版。文字可能挤在一起，版面忽然错乱，看起来就像网页本身出了问题。因为发生在后台，很多人很难联想到是 KnowIt 导致的，只会觉得「这个页面怎么突然不对了」。这是我的疏忽，再次向你道歉。",
    "这一问题已在 KnowIt 2.4.0 中修复。若你尚未更新，升级到新版本后便不会再遇到这种情况。",
    "接下来一段时间，我暂不计划开发新的工具。除非遇到真正好用、值得单独做成工具的想法，否则会把精力放在打磨现有功能上，让它用起来更顺手、更稳定，也尽可能不干扰你的正常使用。",
    "感谢你对 KnowIt 的支持。若使用中仍有不便，欢迎随时告诉我。",
  ],
  creatorNoteSignOff: "KnowIt 创作者",
  creatorNoteDate: "2026年9月1日",
  docsTitle: "文档",
  docsNavLabel: "文档导航",
  docsGroupApps: "工具设计理念",
  philosophyTitle: "「{name}」的设计理念",
  philosophyWhyTitle: "为什么做",
  philosophyCraftTitle: "交互上为什么这样",
  philosophyNotTitle: "刻意不做",
  philosophyLink: "阅读设计理念",
  appPhilosophy: {
    "text-search": {
      sections: [
        {
          title: "为什么做这个工具",
          paragraphs: [
            "浏览器自带的页面搜索存在几个长期困扰开发者和重度用户的限制：",
          ],
          items: [
            {
              label: "位置固定：",
              text: "搜索框被锁定在浏览器顶部或底部，无法移动，经常遮挡正在查看的内容，尤其在对照搜索结果阅读时尤为不便。",
            },
            {
              label: "匹配能力有限：",
              text: "不支持大小写敏感匹配，无法精确区分 React 和 react、API 和 api 这类对开发者至关重要的差异。",
            },
            {
              label: "缺乏高级匹配：",
              text: "不支持正则表达式，面对复杂的文本模式（如匹配所有邮箱、特定格式的日期、多关键词组合）时力不从心。",
            },
          ],
        },
        {
          paragraphs: [
            "这些限制使得浏览器原生搜索在开发场景、文档审阅、技术写作等需要精细文本操作的场景下显得捉襟见肘。文字搜索希望提供一个更灵活、更强大、更符合开发者使用习惯的页面内搜索工具。",
          ],
        },
        {
          title: "设计取向",
          paragraphs: [
            "UI 设计直接借鉴 VS Code 的搜索体验。这不是偶然的选择——VS Code 的搜索面板是经过大量开发者日常验证的高效交互范式，其布局逻辑、视觉层次和交互反馈都值得参考。对于以开发者为目标用户的工具而言，沿用熟悉的操作心智模型可以显著降低学习成本，让用户开箱即用。",
          ],
        },
        { title: "核心理念" },
        {
          title: "1. 可移动性优先",
          level: 3,
          paragraphs: [
            "搜索框不应当是页面的附属品，而是一个可自主定位的工作面板。用户可以根据当前的阅读焦点，把搜索框拖拽到最不干扰视线、最便于操作的位置。搜索工具应该适应人的注意力流动，而不是让人去迁就它。",
          ],
        },
        {
          title: "2. 精确匹配，区分大小写",
          level: 3,
          paragraphs: [
            "对于开发者和技术写作者来说，大小写不是无关紧要的格式差异，而是语义差异。String 是类型，string 是关键字；Apple 是公司，apple 是水果。支持大小写敏感匹配，本质上是尊重文本的精确性。",
          ],
        },
        {
          title: "3. 为进阶用户留出能力空间",
          level: 3,
          paragraphs: [
            "正则表达式是文本处理的利器。目前的版本聚焦于解决可移动性和大小写匹配这两个最迫切的痛点，但架构上将匹配引擎设计为可扩展的，为后续引入正则匹配预留了清晰的接口。工具应当从简单场景入手，但不为能力设上限。",
          ],
        },
        {
          title: "4. 保持轻量，融入工作流",
          level: 3,
          paragraphs: [
            "搜索是一个高频、短暂、穿插在阅读和编辑之间的动作。工具应当即开即用、即关即走，不引入多余的启动成本，也不打断用户的心流。悬浮式的轻量面板而非整页接管，正是对这一原则的体现。",
          ],
        },
      ],
    },
    "media-downloader": {
      sections: [
        {
          paragraphs: [
            "在日常使用电脑的过程中，很多人都会遇到这样一个困扰：浏览网页时看到大量好看的图片、实用的设计素材或参考图，却不知道该从哪里下手保存。右键另存为？一张张点太慢；拖拽到桌面？有些网页根本不支持；想一次性选完再下载，结果发现根本没有「多选」的入口。这些看似简单的操作，对不熟悉技术细节的用户来说，却常常变成一场耐心的消耗战。",
            "正是基于对这些真实痛点的观察，我做了「资源下载器」。它不是为了给资深用户提供一个高级工具，而是希望让每一位普通电脑使用者，都能像在手机相册里批量保存图片一样，轻松、直观地完成网页资源的收集。",
            "它的核心设计理念，可以概括为三点：",
          ],
        },
        {
          title: "一、所见即所得，降低认知门槛",
          paragraphs: [
            "我不要求用户去理解「网页源代码」「资源链接」「请求头」这些概念。你看到什么，就能选中什么；你选中什么，就能下载什么。交互方式尽量贴近日常操作习惯，减少弹窗、设置项和专业术语，让下载回归「选中—确认—保存」这个最自然的流程。",
          ],
        },
        {
          title: "二、批量处理，告别重复劳动",
          paragraphs: [
            "网页上的素材往往不是一张两张，而是一组、一批、一整页。加入「全选」和「批量下载」，正是为了把用户从机械式点击中解放出来。一次勾选，一键保存，把时间留给创意和思考，而不是消耗在无意义的重复动作里。",
          ],
        },
        {
          title: "三、透明可控，下载前心中有数",
          paragraphs: [
            "在点击「下载」之前，用户可以清楚看到当前选中了哪些资源、数量是多少，避免误下或漏下。我不追求「一键全自动」，而是让用户始终保有选择权和确认权，让每一步操作都清晰、安心。",
          ],
        },
        {
          paragraphs: [
            "「资源下载器」不想做一个炫技的工具，它更想做一个「懂你」的助手。它存在的意义，不是告诉用户「你应该怎么下载」，而是默默站在用户身边，帮他们把那些本应简单、却一直麻烦的事情，变得真的简单起来。",
          ],
        },
      ],
    },
    "ad-cleaner": {
      intro:
        "目标不是打赢广告联盟，而是把阅读面还给你。能藏起来、能撤销，比「彻底消灭」更重要。",
      why: [
        "推广浮层常常盖住正文，但误伤也真实存在——导航、提示条、付费墙有时长得很像广告。没有撤销的清除，会让人不敢开。",
      ],
      craft: [
        "启用后自动处理，是因为广告不该让你每次都去点。隐藏而不是删掉，页面结构还在，撤销才做得到。右键是给「这一页突然冒出来」的补刀。",
      ],
      not: [
        "它不是系统级广告拦截，也不维护一份战争般的规则列表。只处理当前页上打扰阅读的层。",
      ],
    },
    "element-inspector": {
      intro:
        "Chrome DevTools 是给调试用的。很多时候你只想知道：这块有多宽、什么颜色、什么字体。元素检查器把「看」从「查」里拆出来。",
      why: [
        "对着设计稿还原、随手取个色、确认间距——这些不该先打开一座控制台。面板靠近 Figma 的属性结构，是因为做视觉的人已经熟悉那种分组。",
      ],
      craft: [
        "悬停即看，点击锁定；底部切换检查和取色。Esc 退出。它是一层轻叠，用完就走，不该改页面本身。",
      ],
      not: [
        "它不替代 DevTools：没有断点、没有网络面板、也不改 DOM。那是另一件事。",
      ],
    },
    "page-export": {
      intro:
        "一篇值得留的文章，常常被导航、推荐和广告包着。页面导出想抽出正文，变成你能继续改的 Markdown。",
      why: [
        "收藏夹会失效，截图不能搜，复制粘贴会带上一堆垃圾标记。Markdown 是一个干净、可编辑、可放进笔记软件的中间态。",
      ],
      craft: [
        "先在侧边栏预览，再复制或导出。你必须看见「我会拿走什么」，才敢按下去。它整理的是正文，不是整站镜像。",
      ],
      not: [
        "它不是网页归档工具，也不追求 100% 还原复杂排版。复杂应用页本来就不该被当成文章导出。",
      ],
    },
    "content-summary": {
      intro:
        "长文当前，你需要的往往不是再读一遍，而是先判断它值不值得读。总结应该发生在你正在看的这一页，密钥留在你手里。",
      why: [
        "把整页丢给某个在线总结网站，等于把阅读内容交给陌生人。自备 Key、默认本地留历史，是隐私优先的底线。整页和划词两种入口，对应「这篇」和「这一段」。",
      ],
      craft: [
        "结果在侧边栏流式出现，可以暂停。生成不该绑架你的滚动。历史可回看，是因为同一页你可能隔天还想对一下。",
      ],
      not: [
        "它不假装读完了你该读的部分。总结是索引，不是替代。KnowIt 也不代你保管模型密钥。",
      ],
    },
    "selection-translate": {
      intro:
        "翻译应该出现在文字旁边，而不是把你扔进另一个网站。选一句就译一句，读一篇就对照一篇。",
      why: [
        "来回切页会打断阅读节奏。即时划词解决「这个词 / 这句」；全文对照解决「我想用母语把这页读完」。",
      ],
      craft: [
        "悬浮工具栏只在选中后出现，用完即隐。全文翻译进侧边栏，原文还在。译文可本地缓存，避免同一句花两次钱。",
      ],
      not: [
        "它不是词典，也不靠 KnowIt 的服务器。识字是另一件应用；翻译只管语言转换。",
      ],
    },
    "word-inspector": {
      intro:
        "你会这门语言，只是卡在某个字上。识字给读音和释义，而不是把整句翻成另一门语言。",
      why: [
        "翻译会把你拉出原文；学语言、读中文网页时，人更需要「这个字怎么念、什么意思」。它和划词翻译分开，就是怕两件事混成一个按钮。",
      ],
      craft: [
        "选中后点「识字」，面板就地出现。轻、快、可关掉。模型可配，是因为释义质量因模型而异，选择权该在你。",
      ],
      not: [
        "它不是完整词典应用，也不做例句作文摘。只帮你跨过当下这个字。",
      ],
    },
    "smart-writer": {
      intro:
        "写作发生在网页输入框里：评论、表单、后台、文档。助手应该来迁就这些框，而不是让你复制到聊天窗口再贴回来。",
      why: [
        "复制来去会丢上下文，也会把草稿交给另一个产品。预设（润色、纠错、续写、扩写、精简）覆盖最常见的「我知道要改，但懒得自己改」；自定义指令留给例外。",
      ],
      craft: [
        "只在输入框聚焦时出现，右下角一小块。结果可替换、插入或复制——原文怎么处理由你决定。它不自动改你没确认的字。",
      ],
      not: [
        "它不是独立编辑器，也不在浏览时弹窗打扰。关着助手时，页面就该像没装过一样。",
      ],
    },
  },
  footerAboutTitle: "关于",
  footerContactTitle: "联系我",
  footerGithubLabel: "GitHub 仓库",
  contactFeedbackShort: "问题反馈",
  privacyPolicyLink: "隐私协议",
  userAgreementLink: "用户协议",
  changelogLink: "更新日志",
  changelogTitle: "更新日志",
  legalNavLabel: "协议导航",
  legalUpdatedAtLabel: "更新时间",
  legalEffectiveAtLabel: "生效时间",
  privacyPolicy: {
    title: "隐私协议",
    updatedAt: "2026年8月12日",
    effectiveAt: "2026年8月12日",
    intro:
      "欢迎使用 KnowIt。KnowIt 是一款以本地优先为设计原则的浏览器扩展。本隐私协议旨在说明我如何处理与你使用产品相关的信息，以及这些信息在本地、浏览器同步与第三方服务之间的边界。",
    sections: [
      {
        title: "第1条 定义",
        items: [
          {
            id: "1.1",
            text: "「KnowIt」指本浏览器扩展及其应用市场中可安装的各类工具，包括但不限于文字搜索、内容总结、划词翻译、页面导出等功能。",
          },
          {
            id: "1.2",
            text: "「本地数据」指保存在你当前设备或浏览器本地存储中的信息，例如配置、历史记录、激活状态等。",
          },
          {
            id: "1.3",
            text: "「第三方服务」指由你自行配置或选择使用的外部服务，例如模型服务商、爱发电支付平台、浏览器账号同步服务等。",
          },
        ],
      },
      {
        title: "第2条 我如何处理数据",
        items: [
          {
            id: "2.1",
            text: "本地优先：网页内容、选中文字、搜索记录、总结文本、生成结果等，默认仅在本地处理，不会上传至 KnowIt 自有服务器。",
          },
          {
            id: "2.2",
            text: "API Key 浏览器保存：若你自行配置模型 API Key，该密钥保存在浏览器配置中，可能随已登录的 Chrome 账号在不同设备间同步；KnowIt 不会收集、存储或转发该密钥。",
          },
          {
            id: "2.3",
            text: "配置同步：应用安装状态、偏好设置等，可能通过浏览器自带的同步能力，跟随你已登录的 Google 账号在不同设备间同步。该同步由浏览器服务提供，KnowIt 不运营独立的云端账号系统。",
          },
          {
            id: "2.4",
            text: "激活信息：当你购买并激活高级功能时，可能需要填写订单号与绑定邮箱，以便完成授权校验。请妥善保管相关信息。",
          },
        ],
      },
      {
        title: "第3条 第三方服务与数据传输",
        items: [
          {
            id: "3.1",
            text: "使用 AI 相关功能时，你主动发起的请求内容会被发送至你配置的模型服务商。KnowIt 不控制该服务商如何处理数据，请自行阅读并确认其隐私政策与计费规则。",
          },
          {
            id: "3.2",
            text: "支付与激活相关流程可能涉及爱发电等第三方平台。相关支付信息由对应平台处理，KnowIt 仅用于完成功能授权所需的必要校验。",
          },
          {
            id: "3.3",
            text: "若你通过 GitHub Issues、邮件等方式联系我，你主动提供的联系方式与反馈内容将仅用于沟通与问题处理。",
          },
        ],
      },
      {
        title: "第4条 你的权利与选择",
        items: [
          {
            id: "4.1",
            text: "你可以随时在扩展设置中修改、清空本地配置与历史记录（具体范围以产品功能为准）。",
          },
          {
            id: "4.2",
            text: "你可以选择是否配置第三方模型服务；不配置时，相关 AI 功能将无法使用或能力受限。",
          },
          {
            id: "4.3",
            text: "你可以关闭或退出浏览器账号同步，以减少配置在不同设备间的流转。",
          },
        ],
      },
      {
        title: "第5条 协议更新与联系我",
        paragraphs: [
          "我可能根据产品功能变化更新本隐私协议。更新后的协议将在产品内展示，并自公布之日起生效。如你继续使用 KnowIt，即视为知悉并同意更新后的内容。",
          "如对本协议有任何疑问，可通过底部栏公示的邮箱或 GitHub Issues 与我联系。",
        ],
      },
    ],
  },
  userAgreement: {
    title: "用户协议",
    updatedAt: "2026年8月12日",
    effectiveAt: "2026年8月12日",
    intro:
      "本用户协议是你与 KnowIt 之间关于使用本扩展及其中工具的法律协议。开始使用即表示你已阅读、理解并同意接受本协议。若你不同意，请停止使用本产品。",
    sections: [
      {
        title: "第1条 服务说明",
        items: [
          {
            id: "1.1",
            text: "KnowIt 提供浏览器扩展形态的网页效率工具，支持按需安装应用市场中的功能模块，帮助你完成搜索、总结、翻译、导出等工作。",
          },
          {
            id: "1.2",
            text: "KnowIt 以本地优先方式运行。除你主动使用并依赖的第三方服务外，核心处理默认发生在本地环境。",
          },
          {
            id: "1.3",
            text: "部分高级工具需购买并完成激活后方可使用；未激活不影响基础功能的正常使用（以产品实际开放范围为准）。",
          },
        ],
      },
      {
        title: "第2条 使用规则",
        items: [
          {
            id: "2.1",
            text: "你应合法、合规地使用 KnowIt，不得利用本产品从事侵犯他人合法权益、违反法律法规或干扰网络秩序的行为。",
          },
          {
            id: "2.2",
            text: "你应对通过 KnowIt 处理的内容拥有相应权利，或已获得合法授权；不得利用本产品处理你无权处理的内容。",
          },
          {
            id: "2.3",
            text: "你应妥善保管本地配置、API Key、激活订单号与绑定邮箱等信息。因个人保管不当导致的损失，由你自行承担。",
          },
        ],
      },
      {
        title: "第3条 激活与付费功能",
        items: [
          {
            id: "3.1",
            text: "部分高级功能需通过爱发电等渠道购买后，填写订单号完成激活。",
          },
          {
            id: "3.2",
            text: "每个爱发电订单号与绑定邮箱最多可激活 2 次，请谨慎操作并妥善保管；切换订单号可能导致相关付费工具被卸载。",
          },
          {
            id: "3.3",
            text: "支付、退款、发票等事宜以对应第三方支付/销售平台规则为准；KnowIt 仅负责在校验通过后开放相应功能。",
          },
        ],
      },
      {
        title: "第4条 第三方服务",
        items: [
          {
            id: "4.1",
            text: "当你启用 AI 功能时，请求将发送至你配置的模型服务商。服务可用性、费用、内容安全与数据处理均由该服务商负责。",
          },
          {
            id: "4.2",
            text: "KnowIt 不对第三方服务的稳定性、准确性、连续性或合规性作出保证，也不对其服务中断或内容结果承担责任。",
          },
        ],
      },
      {
        title: "第5条 免责声明与责任限制",
        items: [
          {
            id: "5.1",
            text: "KnowIt 按「现状」提供。受浏览器环境、网页结构、网络状况及第三方服务影响，功能可能出现延迟、失败或不完整输出。",
          },
          {
            id: "5.2",
            text: "你基于总结、翻译、生成等内容所作的判断与决策，应由你自行负责；KnowIt 不构成任何专业建议。",
          },
          {
            id: "5.3",
            text: "在法律允许的最大范围内，KnowIt 作者/维护者不对因使用或无法使用本产品而产生的间接、附带或后果性损失承担责任。",
          },
        ],
      },
      {
        title: "第6条 协议变更",
        paragraphs: [
          "我可能适时修订本协议。修订内容将在产品内更新展示。若修订涉及重大权利义务变化，我将尽可能以合理方式提示。你继续使用即视为接受修订后的协议。",
        ],
      },
      {
        title: "第7条 联系方式",
        paragraphs: [
          "如对本协议或产品使用有疑问，可通过底部栏公示的邮箱或 GitHub Issues 与我联系。",
        ],
      },
    ],
  },
  changelogEntries: [
    {
      version: "2.4.0",
      date: "2026-09-01",
      items: [
        "新增免费应用「元素检查器」：检查页面元素并吸取颜色",
        "新增免费应用「广告清除」：自动隐藏网页广告与推广浮层，支持撤销",
        "重新设计应用市场页面",
        "重新设计新 tab 页",
        "修复未启用应用时样式仍影响原网页、资源下载器无法打开的问题",
      ],
    },
    {
      version: "2.3.0",
      date: "2026-08-25",
      items: [
        "新增用户引导",
        "重新调整落地页",
        "新 tab 页风格调整",
      ],
    },
    {
      version: "2.2.0",
      date: "2026-08-20",
      items: [
        "重新整理激活状态与配置的同账号多地登录同步逻辑",
        "翻译结果支持本地缓存（上限 50 条），减少重复翻译",
        "全文翻译支持重新生成",
        "新增繁体中文界面语言支持",
        "AI翻译支持粘贴翻译",
        "优化底部栏，补充隐私协议、用户协议等说明入口",
        "修复历史列表快照无法展示、英文模式下 popup 样式异常等问题",
      ],
    },
    {
      version: "2.1.0",
      date: "2026-08-04",
      items: [
        "接入爱发电支付，支持购买后填写订单号激活高级功能",
        "全文总结支持暂停，并修复偶现内容解析失败的问题",
        "校对并优化产品相关文案内容",
        "整改底部栏，补充协议说明、更新日志与联系方式入口",
      ],
    },
  ],
};
