## Context

官网落地页已有只读应用清单、演示切换和三语文案，类型上只有 `efficiency` / `ai` 两类，以及 8 个 `AppId`。插件源在 `/Users/fangyankai/Documents/projects/KnowIt`：`element-inspector` 是免费、非默认安装的 `development` 应用，色值 `#5b90b0`。动机见 `proposal.md`，行为见 `specs/marketing-landing/spec.md`。

## Goals / Non-Goals

**Goals:**

- 把插件市场条目接到现有 catalog / showcase / i18n 数据模型里，而不是另做一页或嵌入截图。
- 演示区用现有 `BrowserFrame` + mock CSS 画一帧示意，文案跟主题和语言走。
- README 与 changelog 和落地页用同一套名称、分类、免费身份。

**Non-Goals:**

- 不在官网运行真实检查逻辑、取色器或内容脚本。
- 不移植设置页、快捷键配置、黑名单或跨域限制说明（README 用法保持短列表即可）。
- 不补齐 README 里其他已有漂移（例如广告清除），除非实现时同一段必须一起改才能编译。
- 不改终身版价格、激活文案或法律协议正文。

## Decisions

### 1. 沿用现有 AppId / catalog 扩展，新增 `development` 分类

在 `src/i18n/types.ts` 的 `AppId` 增加 `"element-inspector"`，`AppCategory` 增加 `"development"`。`catalogApps` 插在广告清除之后、付费工具之前，与插件 `tabs/apps` 顺序一致。卡片与详情里为第三类显示 `categoryDevelopment`（简中「开发工具」、繁中「開發工具」、英文 "Development"）。

备选：把检查器塞进「效率小工具」能少改类型，但会和插件市场分类不一致，访问者两边对不上。

### 2. 文案以插件市场描述为准，演示文案再压缩

名称与简介直接用插件条目：

- zh-CN：「元素检查器」/「点击页面元素查看类似 Figma 的属性面板，并用取色器吸取页面任意像素色。」
- zh-TW / en-US：对应插件 locale。

演示 caption 写成一句操作路径：右键「检查页面元素」或 `Alt+Shift+C`，悬停看属性，工具条切换取色。Mock 面板内的分组标题（图层、位置与尺寸、布局、文字、填充等）从插件 `locales/*/element-inspector.ts` 取用，只保留示意需要的字段，不整表搬运。

### 3. 示意图复刻插件一帧 UI，而不是贴截图

新增 `ElementInspectorMock`，结构对齐插件内容脚本，但做成静态示意：

- `BrowserFrame` 里放一篇抽象文章 + 一块深色代码块作为「选中元素」。
- 右侧浮动属性面板：标题为选中标签名、`复制 CSS`、分组键值。
- 底部居中胶囊工具条：检查（选中）/ 取色 / 关闭。
- 新 callout 锚点挂在属性面板或工具条上（现有 `SHOWCASE_ANCHORS` 加一项即可）。

图标用 `@ant-design/icons`（例如 `AimOutlined`），不复制插件 SVG，以免官网多一套资源管线。

备选：用用户提供的产品截图更真，但无法跟主题/语言切换，也和其他 mock 风格冲突。

### 4. 免费套餐与 changelog 只加这一项

`freeDescription` 在现有「文字搜索、资源下载器、广告清除」后追加「元素检查器」。changelog 在列表顶部新增 `2.4.0`（日期用实现当天），一条写明新增元素检查器；不改写 2.3.0 及更早条目。插件 `package.json` 仍是 2.3.0，官网用 2.4.0 作为这条公开说明的版本号。

README / README_EN 在「免费应用」下增加一节：做什么 + 怎么用（右键或快捷键、悬停/点击锁定、工具条取色、Esc 退出）。

## Risks / Trade-offs

- [示意图和插件真界面有差距] → 只画访问者能认出的三件套（高亮、属性面板、底栏），并沿用现有「以扩展内为准」的演示副标题。
- [插件改名或改分类导致再漂移] → 实现时对着插件 `tabs/apps` 与 locale 抄一版；不建跨仓库依赖。
- [changelog 版本与插件发版号不一致] → 若插件稍后用别的版本号发布，只改 changelog 条目版本，不改应用行为。

## Migration Plan

1. 改类型与三语文案，再接线 catalog / showcase / 定价。
2. 本地切语言和主题，确认清单、演示、免费套餐、changelog、README 都出现该应用。
3. 随现有 GitHub Pages 工作流发布；回滚即还原本变更的文案与组件，无数据迁移。
