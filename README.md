# KnowIt

> **读懂网页，也让网页更好用。**
>
> KnowIt 是一款完全运行在本地、隐私优先的模块化浏览器侧边栏与效率小工具合集。它基于优秀的 Plasmo 浏览器扩展框架开发，集成了文字搜索、AI 总结、划词翻译、划词识字、智能写作、页面导出以及资源下载等多款实用小工具。你可以像搭积木一样，在“应用市场”里按需安装和开启它们，打造你专属的网页工作台。

---

## 🌟 核心功能

*   **🧩 应用市场 (App Marketplace)**: 插件化的应用管理设计。用户可在扩展内的一站式应用市场中，自由安装、卸载和管理各项效率小工具，避免浏览器插件栏臃肿。
*   **🔍 文字搜索 (Text Search)**: 增强型网页内文本检索，支持高亮和多关键词联动，使长文阅读定位更轻松。
*   **🤖 AI 总结 (AI Summary)**: 一键提取网页核心内容，生成大纲、摘要和要点，帮助快速筛选核心信息。
*   **🌐 划词翻译 (Selection Translate)**: 网页选中即可调起极速翻译，支持段落翻译、多语种互译及双语对照展示。
*   **📖 划词识字 (Word Inspector)**: 专为阅读 and 词汇学习设计，选词后可展示音标、释义、例句等，并支持一键加入本地生词本。
*   **✍️ 智能写作与润色 (Smart Writer)**: 集成 AI 写作助手，支持在网页内选定文本进行扩写、缩写、翻译、润色、纠错以及自定义 Prompt 生成。
*   **📄 页面导出 (Page Export)**: 深度提取网页正文并去除噪点，支持一键将网页导出为 Markdown、PDF、HTML 或图片格式，完美保留公式与排版。
*   **📥 资源下载 (Media Downloader)**: 自动嗅探网页中的图片、视频、音频以及 PDF 文档，支持批量筛选、打包和一键下载。

---

## 🛡️ 设计理念

*   **🔒 隐私第一 (Privacy-First)**: 所有网页解析、搜索记录、历史记录等数据均完全保存在用户本地（利用 Chrome/IndexedDB 存储），不上传至任何第三方服务器。
*   **🔑 本地密钥 (Bring Your Own Key)**: AI 功能完全使用用户自定义的 API Key。配置的 API 密钥仅加密保存在用户的浏览器本地，安全无忧。
*   **💼 极简模块化 (Modular)**: 默认只安装最基础的应用，用户根据实际工作流在应用市场中随装随用，轻量且高效。

---

## 🛠️ 技术架构

本扩展基于现代前端技术栈进行开发，具有高性能和高可维护性：

*   **框架**: [Plasmo Framework](https://www.plasmo.com/) (针对 Chrome MV3 的现代 React 扩展开发框架)
*   **UI 库**: [React](https://react.dev/) + [Ant Design (antd)](https://ant.design/) (提供精致优雅的交互组件)
*   **样式**: [Tailwind CSS](https://tailwindcss.com/) + CSS 变量 (优雅的主题定制与深色模式支持)
*   **本地数据库**: [Dexie.js](https://dexie.org/) (基于 IndexedDB 封装的响应式、事务型本地数据库，处理大量的历史记录、生词本数据)
*   **AI 接入**: 统一的模型配置中心，原生支持 **DeepSeek**、**OpenAI**、**Gemini**、**Moonshot (Kimi)**、**阿里云百炼 (DashScope)**、**SiliconFlow** 等主流大模型接口。

---

## 📁 目录结构

```bash
├── .github/workflows/       # GitHub Actions 自动化构建与发布流水线
├── assets/                  # 静态资源文件（图标、背景图等）
├── background.ts            # Service Worker 后台脚本（处理上下文菜单、大文件下载、快捷键分发）
├── components/              # 公用 React UI 组件
├── content-runtime/         # Content Script 业务逻辑层（执行具体的页面操作 and 数据处理）
├── content-ui/              # 注入网页的浮层组件（悬浮工具栏、翻译对话框、识字浮层、写作面板等）
├── contents/                # 网页 Content Script 入口文件，挂载 Shadow DOM 与事件监听
├── db/                      # 本地数据库模块（Dexie 数据库初始化、字段约束与 CRUD 封装）
├── locales/                 # 国际化语言包（当前支持 中文 zh_CN 和 英文 en_US）
├── newtab.tsx               # 自定义新标签页入口
├── package.json             # 依赖管理与项目配置
├── plasmo.manifest.ts       # 扩展的清单配置文件（定义权限、注入策略、Host Permissions）
├── popup.tsx                # 扩展程序右上角弹出的控制面板
├── prompts/                 # 预设的 AI 系统提示词
├── services/                # API 请求及公共服务层
├── stats/                   # 历史数据与词表统计模块
├── style.css                # 全局样式（含 Tailwind CSS 基础指令）
├── tabs/                    # 各种独立 Tab 页面（设置页、历史记录管理、应用市场等）
├── tailwind.config.js       # Tailwind CSS 配置文件
└── tsconfig.json            # TypeScript 编译器配置
```

---

## 🚀 快速开始

### 1. 克隆与安装依赖

首先，请确保本地已安装 [Node.js](https://nodejs.org/)（建议 v18+）和 [pnpm](https://pnpm.io/) 包管理工具。

```bash
# 安装依赖
pnpm install
```

### 2. 启动开发模式

运行以下命令以启动本地开发服务器。开发服务器会监视文件更改并自动重新编译。

```bash
pnpm dev
```

### 3. 加载扩展程序

1.  打开 Google Chrome（或 Edge 等 Chromium 浏览器）。
2.  在地址栏输入 `chrome://extensions/` 访问扩展程序管理页面。
3.  在页面右上角开启 **“开发者模式”** (Developer mode)。
4.  点击左上角 **“加载已解压的扩展程序”** (Load unpacked)。
5.  选择项目根目录下自动生成的目录：`build/chrome-mv3-dev`。

### 4. 生产环境打包

使用以下命令构建用于发布和安装的生产版本包：

```bash
# 构建生产版本
pnpm build

# 打包为 zip 文件（输出在 build 目录中）
pnpm package
```

---

## 📝 许可证

本项目基于 [MIT](LICENSE) 许可证开源。
