## Context

KnowIt-Public 目前几乎没有前端工程，只有 README、logo 与 OpenSpec 脚手架。视觉与交互参考物在相邻的 KnowIt 插件仓库：`tabs/apps` 的胶囊顶栏、`PixelWaveBackground` 画布、`style.css` 的 VS Code 主题 token、以及 `AppFooter` 的页脚/法律文档弹层。官网必须能独立构建与发布，不能依赖插件仓库或 `chrome.*` API。动机见 `proposal.md`，行为契约见 `specs/website-shell/spec.md` 与 `specs/marketing-landing/spec.md`。

## Goals / Non-Goals

**Goals:**

- 用可独立维护的静态站复刻插件首页的外壳观感（像素波、胶囊顶栏、深浅主题、三语）。
- 把 README 中的产品说明、应用清单和定价整理成单页营销结构。
- 让安装与购买走外部链接，站点本身零后端。

**Non-Goals:**

- 不移植应用安装、卸载、模型配置、许可证激活或跨设备同步。
- 不在本期引入文档站、博客、账号系统或 Chrome Web Store 上架流程。
- 不建立对本机 KnowIt 插件仓库的运行时或构建时依赖。

## Decisions

### 1. Vite + React + TypeScript + CSS Modules

选择与插件同一渲染模型，以便直接移植 `PixelWaveBackground`（canvas + `useEffect` + `matchMedia`）和 `tabs/apps` 的 CSS Modules 顶栏。静态输出也适合 GitHub Pages。

备选：纯 HTML/CSS 太难保住画布动画与主题切换；Next.js 对本期单页静态站过重。

### 2. 在本仓库复制并去插件化，而不是跨仓库引用

从 KnowIt 复制并改写这些表面：

- `PixelWaveBackground.tsx` / `.module.css`：去掉 `@/theme` 对 `chrome.storage` 的依赖，改为接收本站 `themeName`。
- 顶栏布局与样式：保留品牌、胶囊滚动态、语言按钮、主题图标按钮；用分区锚点 +「安装」主按钮替换设置与激活入口。
- `style.css` 中的 `--vscode-*` / `--knowit-*` token，以及 `data-knowit-theme` 切换方式。
- 页脚结构与法律弹层交互；文案按 README 与插件 locale 精简到官网所需字段。

主题与语言偏好写入 `localStorage`（键名可沿用 `knowItTheme` / locale key），首访默认 `vscode-dark` + `zh-CN`。

备选：iframe 嵌插件页不可行（依赖扩展运行时）；npm workspace 链接私有插件仓库会破坏独立发布。

### 3. 轻量 Ant Design，仅用于已有控件

继续使用 antd Button / Dropdown / Modal / Tooltip，以对齐插件的 LocaleSwitcher、法律弹层和主按钮。不引入应用市场里的 Form、Switch、安装状态等扩展专属控件。

备选：自绘全部控件能减小体积，但会拉大与插件顶栏的视觉差。

### 4. 单页、无路由、静态内容源

整站一个 `index.html`。应用清单、定价、卖点、法律文档放在本站 i18n 字典与一份 `site-config`（GitHub、Releases、爱发电、联系邮箱、可选 Chrome Web Store URL）。卡片只读，可点开详情说明，但不出现安装/卸载。

安装 CTA 默认 `https://github.com/Nangxif/KnowIt-Public/releases`；配置了商店 URL 后再切换主按钮。购买 CTA 使用 README 中的爱发电结账链接。

### 5. GitHub Pages 发布

用 GitHub Actions 构建 `dist/` 并部署到 Pages。Vite `base` 默认 `/KnowIt-Public/`，以匹配 `https://nangxif.github.io/KnowIt-Public/`；若后续绑定自定义域名，只改 `base` 为 `/`。

README 增加官网地址；不把现有中英文 README 改成站点的唯一内容源。

## Risks / Trade-offs

- [插件后续改版导致官网视觉漂移] → 把背景、顶栏、token 收敛到本站 `src/shell` 与 `src/theme`，在任务中写明参考路径，但不做自动同步。
- [像素波在大屏上的绘制开销] → 沿用插件的降帧、DPR 上限、`visibilitychange` 暂停和 `prefers-reduced-motion` 静态帧。
- [antd 增加包体] → 只引入官网实际用到的组件，接受略大于纯静态页的体积以换一致性。
- [GitHub Pages 子路径资源 404] → 构建时固定 `base`，所有静态资源与锚点使用相对站点根路径。
- [缺少产品截图] → 首期 Hero 使用现有 logo 与文案；有截图后再加入，不阻塞上线。

## Migration Plan

1. 在仓库根目录新增官网工程（`package.json`、Vite、`src/`），保留现有 README 与 `openspec/`。
2. 本地 `npm run dev` / `npm run build` 验证主题、语言、锚点、外链。
3. 合并后由 GitHub Actions 发布 Pages；失败则保留 README 作为对外入口，回滚 Actions 或关闭 Pages 即可，无数据迁移。

## Open Questions

- 是否绑定自定义域名（只影响 Vite `base` 与 Pages 设置，不改变页面行为）。
- Chrome 网上应用店正式地址何时替换 Releases 作为主安装入口。
