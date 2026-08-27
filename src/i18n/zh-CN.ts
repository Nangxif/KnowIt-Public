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
  premiumTag: "高级",
  freeTag: "免费",
  comingSoonTag: "准备上线",
  detailsTitle: "应用详情",
  detailsClose: "关闭",
  categoryEfficiency: "效率小工具",
  categoryAi: "AI 辅助工具",
  appNames: {
    "text-search": "文字搜索",
    "media-downloader": "资源下载器",
    "ad-cleaner": "广告清除",
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
  },
  pricingTitle: "免费与终身版",
  pricingSubtitle: "先免费使用基础工具，需要时一次买断全部高级能力。",
  freePlan: "免费",
  freePrice: "¥ 0",
  freeDescription: "文字搜索、资源下载器、广告清除。",
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
