## Why

KnowIt 插件已上线免费应用「元素检查器」（Element Inspector）：右键或快捷键进入检查模式，悬停查看类似 Figma 的属性面板，底部工具条可切换取色。官网落地页、应用清单、演示区和 README 仍只覆盖旧清单，访问者无法从公开站点发现这项能力。

## What Changes

- 在官网应用清单中新增只读应用「元素检查器」，归入插件同款「开发工具」分类，标记为免费。
- 在演示区增加对应示意图：页面高亮 + 属性面板 + 底部检查/取色工具条。
- 免费套餐说明、更新日志、中英文 README 同步写上该应用及其用法。
- 不改定价结构、不改终身版权益，不把该应用标成高级或「准备上线」。

## Capabilities

### New Capabilities

- （无）

### Modified Capabilities

- `marketing-landing`: 应用清单、演示区、免费套餐文案与公开文档必须包含免费的「元素检查器」，并展示「开发工具」分类。

## Impact

- 官网前端：`src/landing/apps.ts`、`AppCatalog`、`Showcase`、演示 mock / callout、三语文案（`src/i18n`）、定价免费套餐一句。
- 公开文档：`README.md`、`README_EN.md` 应用清单与免费说明；更新日志新增一条。
- 参考源：`/Users/fangyankai/Documents/projects/KnowIt` 的应用市场条目、locale 与内容脚本 UI。官网只复制文案与示意，不引入插件运行时。
- 不改安装/购买链接、激活流程、法律协议条款，也不新增后端或依赖。
