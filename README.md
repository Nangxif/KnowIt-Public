<p align="center">
  <img alt="KnowIt Logo" src="./assets/logo.png" width="320">
</p>

<p align="center">
  <strong>读懂网页，也让网页更好用。一站式、隐私优先的模块化网页效率工作台。</strong>
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
  <a href="https://nangxif.github.io/KnowIt-Public/">官网</a>
  &nbsp;·&nbsp;
  <a href="./README_EN.md">English</a> | 简体中文
</p>

---

## 简介

在日常浏览网页、阅读文献、工作学习或内容创作时，你是否常遇到以下痛点？

* 浏览器插件栏日益臃肿，不同插件快捷键冲突、交互凌乱；
* 担心敏感网页数据被各类在线 AI 或翻译工具上传，泄露隐私；
* 各种小工具收费繁琐，或绑定单一 AI 厂商，缺乏定制灵活性。

**KnowIt** 是一款完全运行在本地、隐私优先的模块化浏览器效率工具集。通过内建**应用市场**，你可以像搭积木一样自由安装或卸载各项小工具，打造最符合个人工作流的「网页超级工作台」。

**核心特点：**

* **模块化应用市场**：按需安装，保持扩展轻量流畅
* **隐私优先**：网页内容、选中文字、搜索与生成记录默认只存本地，不上传至 KnowIt 服务器
* **自备 API Key**：统一模型配置中心，支持 DeepSeek、OpenAI、Gemini、Moonshot (Kimi)、阿里云百炼、SiliconFlow 等主流大模型
* **优雅交互**：支持快捷键、右键菜单、划词悬浮工具栏、侧边栏，以及深浅色模式

---

## 免费与付费说明

| 类型 | 包含内容 | 价格 |
| --- | --- | --- |
| **免费** | 文字搜索、资源下载器 | 免费 |
| **终身版（付费）** | 页面导出、内容总结、划词翻译、划词识字、智能写作与润色，以及后续高级工具 | **¥ 6.66** 一次买断 |

购买后在扩展首页「购买激活」中填写**邮箱 + 爱发电订单号**即可解锁。每个订单号与绑定邮箱最多可激活 **2** 次；切换订单号会导致相关付费工具被卸载。

**付费链接（爱发电）：**

👉 [打开爱发电支付页面](https://ifdian.net/order/create?product_type=1&plan_id=bb5efc0a8f0c11f181ee52540025c377&sku=%5B%7B%22sku_id%22%3A%22bb66d6fa8f0c11f1bada52540025c377%22,%22count%22%3A1%7D%5D&viokrz_ex=0)

> AI 相关功能需自行配置模型 API Key。请求会发送至你选择的模型服务商，请自行确认其隐私政策与计费规则。KnowIt 本身不会代收或转发你的密钥。

---

## 应用清单与使用方式

安装扩展后，点击浏览器工具栏中的 KnowIt 图标即可打开首页与应用市场。先在市场中安装需要的应用，再按下方方式使用。

### 免费应用

#### 1. 文字搜索（默认已安装）

* **做什么**：像代码编辑器一样搜索网页文字，支持大小写匹配、结果跳转与自定义高亮。
* **怎么用**：
  1. 在任意网页按下默认快捷键 `Ctrl + F`（Mac 为 `⌘ + F`）打开搜索框
  2. 输入关键词进行定位与高亮
  3. 可在应用设置中自定义快捷键与高亮样式

#### 2. 资源下载器

* **做什么**：一键扫描并提取网页中的图片、视频等资源，支持预览与批量下载。
* **怎么用**：
  1. 在应用市场安装「资源下载器」
  2. 在网页空白处右键，选择 **资源下载器**
  3. 在侧边栏中筛选、预览并批量下载

---

### 付费应用（需激活终身版）

#### 3. 页面导出

* **做什么**：整理网页正文并导出为 Markdown，保存干净、可编辑的副本。
* **怎么用**：
  1. 安装并确保已激活
  2. 在网页空白处右键，选择 **生成 Markdown**
  3. 在侧边栏查看、编辑并导出结果；可在设置页调整导出相关选项

#### 4. 内容总结

* **做什么**：用 AI 总结整篇网页或选中内容，快速提炼重点与核心结论。
* **怎么用**：
  1. 先在「AI 模型配置」中填好 API Key，并在该应用设置中选择模型
  2. **整页总结**：右键网页，选择 **AI总结**
  3. **划词总结**：选中文字后，在悬浮工具栏点击 **总结**（可在「设置 → 工具栏显示」中开启）
  4. 结果在侧边栏展示，可暂停生成并查看历史记录

#### 5. 划词翻译

* **做什么**：选中文字即时翻译；也可对整页进行 AI 对照翻译，减少来回切页。
* **怎么用**：
  1. 配置模型后安装应用
  2. **划词翻译**：选中文字，点击悬浮工具栏 **翻译**
  3. **全文翻译**：右键网页，选择 **AI 全文翻译**
  4. 可在应用设置中调整目标语言与模型

#### 6. 划词识字

* **做什么**：选中网页文字后，快速展示拼音与词义解释，辅助阅读与学习。
* **怎么用**：
  1. 配置模型后安装应用
  2. 选中文字，在悬浮工具栏点击 **识字**
  3. 在面板中查看读音与释义；可在设置页管理模型与历史

#### 7. 智能写作与润色

* **做什么**：在网页输入框中调用 AI，进行润色、纠错、续写、扩写、精简或自定义 Prompt 创作。
* **怎么用**：
  1. 配置模型后安装应用，并在设置中开启输入框写作助手
  2. 聚焦任意输入框 / 文本域，右下角出现悬浮助手按钮
  3. 选择预设（润色、纠错、续写、扩写、精简等）或输入自定义指令
  4. 可将结果替换原文、插入或复制

---

## 快速上手

1. **安装扩展**  
   加载打包后的 Chrome MV3 扩展（或从发布包安装）。

2. **打开首页**  
   点击插件图标进入 KnowIt 首页 / 应用市场。

3. **安装应用**  
   在「应用市场」中安装免费工具；付费工具需先完成激活。

4. **（可选）配置 AI**  
   打开「AI 模型配置」，添加厂商、模型名称、接口地址与 API Key，并设为默认模型。各 AI 应用可在各自设置页单独指定模型。

5. **（可选）购买激活**  
   前往[爱发电支付](https://ifdian.net/order/create?product_type=1&plan_id=bb5efc0a8f0c11f181ee52540025c377&sku=%5B%7B%22sku_id%22%3A%22bb66d6fa8f0c11f1bada52540025c377%22,%22count%22%3A1%7D%5D&viokrz_ex=0)完成支付，回到首页「购买激活」填写邮箱与订单号。

6. **开始使用**  
   通过快捷键、右键菜单或划词悬浮工具栏调用已安装应用。

---

## 使用须知

* **数据离线处理**：网页内容、选中文字、搜索记录、总结与生成结果等，默认仅在本地处理，不会上传至 KnowIt 服务器。
* **API Key 仅保存在本地**：自行配置的密钥只存在于当前浏览器本地配置中。
* **配置同步**：应用安装状态、偏好设置等，可能通过浏览器同步能力跟随 Google 账号同步。
* **激活限制**：每个爱发电订单号与绑定邮箱最多激活 2 次，请妥善保管。
* **第三方模型服务**：使用 AI 功能时，请求会发送至你配置的模型服务商。

---

## 联系与反馈

| 渠道 | 链接 / 信息 |
| --- | --- |
| 问题反馈（推荐） | [GitHub Issues](https://github.com/Nangxif/KnowIt-Public/issues) |
| 项目仓库 | [Nangxif/KnowIt-Public](https://github.com/Nangxif/KnowIt-Public) |
| 联系邮箱 | [575981390@qq.com](mailto:575981390@qq.com) |
| 联系邮箱 | [nangxif@gmail.com](mailto:nangxif@gmail.com) |
| 付费购买 | [爱发电结账页](https://ifdian.net/order/create?product_type=1&plan_id=bb5efc0a8f0c11f181ee52540025c377&sku=%5B%7B%22sku_id%22%3A%22bb66d6fa8f0c11f1bada52540025c377%22,%22count%22%3A1%7D%5D&viokrz_ex=0) |

如有功能建议、Bug 反馈或合作需求，欢迎通过 Issues 或邮件联系。

