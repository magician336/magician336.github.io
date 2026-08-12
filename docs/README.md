# magician336 个人站 · 设计稿

> 深色现代专业 · 琥珀强调 · "带注释的代码"结构语言
>
> 这是**设计稿（design spec）**，不是实现代码。描述视觉系统、页面布局、组件规格与内容意图，供后续用 Hexo 落地为静态站。

---

## 设计 brief

| 轴 | 决策 |
|---|---|
| 主体 | magician336，AI / 算法方向的计算机本科生 |
| 受众 | 教授、老师、面试官 |
| 主页职责 | 10 秒内建立"懂行、有产出、有品味"的印象 |
| 视觉氛围 | 深色现代专业（极客感藏在结构语言里，不喧宾夺主） |
| 配色 | 深炭 `#0E0E10` 底 + 米白 `#E6E6E6` 字 + 琥珀 `#FFB000` 强调 |
| 字体 | Space Grotesk（display）+ IBM Plex Sans（body）+ JetBrains Mono（极客细节） |
| 落地 | 静态站挂 GitHub Pages，Hexo 生成 |

---

## 设计理念

**一句话**：把极客语义变成信息组织方式，而不是装饰。

主页不用终端打字机、矩阵雨、3D 立方体这些默认极客装饰。而是让整页读起来像一段**带注释的代码**--

- 区块标题是 `// section` 注释
- hero 副标是 `//` 注释定位语
- "now" 区块是键值对（像 README 元信息）
- 页脚是终端提示符 `magician336@home:~$ ▮`

每一个极客元素都承载真实信息（状态、当前活动、联系方式），不是贴上去的视觉糖。这是为"CS 学生 + 深色极客 + 专业受众"量身定做的记忆点（signature），换成别的主题就不成立。

**克制原则**：signature 只在这几处出现，其余排版安静。深色现代专业的浓度，靠细节而非堆砌。

---

## 设计稿索引

| 文件 | 内容 |
|---|---|
| [design-system.md](design-system.md) | **设计系统**：理念、signature、色彩/字体/间距 token、全部组件规格、动效、a11y、Hexo 映射 |
| [home.md](home.md) | **主页**：整页 wireframe、真实内容文案、逐区块说明、动效清单、响应式 |
| [about.md](about.md) | **关于页**：自我介绍、教育背景 deflist、研究兴趣、技能矩阵、联系方式 |
| [projects.md](projects.md) | **项目页**：按年份分组列表、状态/标签筛选、空状态、详情页规格 |
| [blog.md](blog.md) | **博客索引**：文章列表、标签筛选、分页、空状态 |
| [post.md](post.md) | **文章模板**：article-head、prose 长读排版（代码/公式/引用）、article-foot、完整示例文章 |
| [tools.md](tools.md) | **工具箱**：速查表卡片网格、可交互小工具、Big-O 速查展开示例、kbd 快捷键 |

---

## 设计系统速览

### 色彩

| Token | Hex | 用途 |
|---|---|---|
| `--ink-900` | `#0E0E10` | 主背景（深炭，有层次非纯黑） |
| `--ink-800` | `#16161A` | 卡片 / 代码块底 |
| `--ink-700` | `#1E1E24` | 边框 / 分隔线 |
| `--bone` | `#E6E6E6` | 主文字（米白） |
| `--ash` | `#8A8A94` | 次级文字 |
| `--amber` | `#FFB000` | 强调（链接 hover、`//`、状态点） |
| `--cyan` | `#6FCFEB` | 冷色辅助（仅 research 状态） |

### 字体

- **Display**：Space Grotesk - 标题、名字
- **Body**：IBM Plex Sans - 正文
- **Mono**：JetBrains Mono - `//` 注释、标签、代码、键值对

### 关键组件

`eyebrow`（`//` 注释标签）· `nav` · `hero` · `now-list`（键值对）· `work-item`（状态标记）· `post-item` · `tag` · `link-arrow` / `btn` · `footer`（提示符）· `prose` · `kbd` · `card` · `deflist`

详见 [design-system.md](design-system.md)。

---

## 如何阅读这份设计稿

1. 先读本文件了解整体方向。
2. 读 [design-system.md](design-system.md) 掌握 token 与组件语言--所有页面共享。
3. 按需读各页面设计稿，每页都有**完整 ASCII wireframe + 真实内容占位 + 逐区块说明**。
4. 每个组件在 wireframe 里出现时，对照 design-system.md 的规格理解其样式与意图。

所有 wireframe 里的项目名、文章标题、now 条目均为贴合 AI / 算法方向的**占位示例**，语气可直接参考，落地时替换为真实内容。

---

## Hexo 落地路线

1. **主题骨架**：新建 Hexo 主题，partial 拆分 `_partial/nav`、`_partial/footer`、`_partial/eyebrow`。
2. **token 落地**：把 design-system.md 第 3-5 节的 token 写成 `source/css/style.css` 的 `:root` 变量。
3. **字体**：`_partial/head` 引 Google Fonts 三族。
4. **页面模板**：`index.ejs`（主页）/ `page.ejs`（about、tools）/ `projects.ejs`（项目）/ `archive.ejs`（blog）/ `post.ejs`（文章）。
5. **数据源**：
   - 项目：`source/_data/projects.yml`（见 [projects.md](projects.md)）
   - now：`source/_data/now.yml`（见 [home.md](home.md)）
   - 文章：Hexo 原生 `source/_posts`
   - 速查表：`source/_data/cheatsheets/*.yml`（见 [tools.md](tools.md)）
6. **交互 JS**：项目/博客筛选 ~30 行、tools helpers、`Ctrl+K` 快捷键，均纯前端 vanilla JS。
7. **数学公式**：`hexo-math`（KaTeX），文章 front matter `math: true` 按需加载。

---

## 文件结构

```
docs/
├── README.md            # 本文件 - 设计稿总览
├── design-system.md     # 设计系统（token + 组件规格）
├── home.md              # 主页设计稿
├── about.md             # 关于页设计稿
├── projects.md          # 项目页设计稿
├── blog.md              # 博客索引设计稿
├── post.md              # 文章模板设计稿
└── tools.md             # 工具箱页设计稿
```

---

## 设计自检

对照 frontend-design 提醒的 AI 默认三象：
- ① 暖奶油 + 衬线 + 赤陶 -> **否**
- ② 近黑 + 荧光绿/朱红 -> 部分近，但用**琥珀**而非荧光绿，深炭有层次，字体非默认，注释结构语言非通用
- ③ 报纸 hairline + 零圆角 + 密集栏 -> **否**

差异化靠：**琥珀暖色**（非默认极客绿）+ **三字族明确分工**（非 Inter/Roboto 默认）+ **注释结构 signature**（为 CS 学生定制，承载真实信息）。在"深色极客"族内与默认模板拉开距离。
