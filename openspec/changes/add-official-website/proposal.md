## Why

KnowIt 目前只有 GitHub README 作为对外说明，访问者无法以与插件一致的视觉体验了解产品、浏览应用清单或完成安装/购买。需要在本仓库落地一个官网，把插件首页的视觉语言（像素波背景、胶囊顶栏、深浅主题）带到公开站点，降低安装门槛并统一品牌观感。

## What Changes

- 在本仓库新增一个单页官网（营销落地页），复用 KnowIt 插件 `tabs/apps` 的视觉风格。
- 全站使用插件同款 `PixelWaveBackground` 像素波画布背景，并支持 `vscode-dark` / `vscode-light` 主题切换。
- 顶部栏沿用插件首页的胶囊式 sticky nav：品牌区、分区锚点、语言切换、主题切换、主 CTA；不移植插件内的设置或激活表单。
- 落地页包含：Hero（安装入口）、核心卖点、只读应用市场卡片、免费/终身版定价（爱发电购买）、页脚（仓库、反馈、联系邮箱、隐私/条款入口）。
- 支持简体中文、繁体中文、英语，默认语言为简体中文。
- 通过 GitHub Pages 发布静态站点。

## Capabilities

### New Capabilities

- `website-shell`: 官网外壳——像素波背景、胶囊顶栏、主题与语言切换、页脚与法律文档入口。
- `marketing-landing`: 单页营销内容——Hero、卖点、应用清单、定价与安装/购买 CTA。

### Modified Capabilities

- （无）本仓库尚无主 specs。

## Impact

- 本仓库目前几乎只有 README 与 OpenSpec 脚手架；实现阶段会新增前端工程（Vite + React + TypeScript）、静态资源与 GitHub Pages 工作流。
- 视觉与文案以 `/Users/fangyankai/Documents/projects/KnowIt` 插件（`tabs/apps`、主题 token、`AppFooter`）和本仓库 README 为参考，在官网仓库内复制/适配，不建立跨仓库依赖。
- 不引入后端、不在官网做许可证激活；购买走爱发电，激活仍在插件内完成。
- 安装主入口先指向 GitHub Releases；Chrome 网上应用店链接作为可配置项，有正式上架地址后再替换。
