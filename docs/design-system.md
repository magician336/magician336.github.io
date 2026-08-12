# 设计系统 · magician336 个人站

> 深色现代专业 · 琥珀强调 · "带注释的代码"结构语言
>
> 本文件是设计规格（design spec），不是实现代码。所有 token、组件、布局决策均以可读规格形式给出，供 Hexo 主题落地时参照。

---

## 1. 设计 brief 回顾

| 轴 | 决策 |
|---|---|
| 主体 | magician336，AI / 算法方向的计算机本科生 |
| 受众 | 教授、老师、面试官 |
| 主页职责 | 10 秒内建立"懂行、有产出、有品味"的印象 |
| 视觉氛围 | 深色现代专业（极客感藏在结构语言里，不喧宾夺主） |
| 强调色 | 琥珀 `#FFB000`（CRT 暖意，非默认极客绿） |
| 落地 | 静态站挂 GitHub Pages，Hexo 生成 |

**设计单一职责**：让一位教授或面试官在扫读主页的几秒内，确信这个学生既有工程产出（shipped 的东西），又有学术纵深（research / 数学语言），并且有审美自律（排版克制、信息密度合理）。

---

## 2. Signature（记忆点）

> **整页用"带注释的代码"作结构语言。**

这是为"CS 学生 + 深色极客 + 专业受众"这个 brief 量身定做的单一记忆点，换成别的主题就不成立。具体表现：

- **区块标题**用 `// section-name` 形式，等宽字体，`//` 为琥珀色。读起来像代码注释在标注下方"代码块"。
- **hero 副标**是两到三行 `//` 注释，承载定位语。
- **"now" 区块**是键值对（`researching   graph neural networks`），像 README 的元信息表。
- **页脚**是终端提示符 `magician336@home:~$ _`，带闪烁光标收束全页。

**为什么不是别的**：终端打字机效果、矩阵雨、3D 立方体都是极客默认装饰，不承载信息。注释结构语言则把极客语义变成**信息组织方式**--每个 `//` 都在给真实内容做标注，不是贴上去的视觉糖。这符合"结构即信息"的原则。

**克制原则**：signature 只在这几处出现，其余排版保持安静。不把 `//` 撒满全页，否则从"选择"退化为"装饰"。

---

## 3. 色彩系统

深炭底有层次（不是纯黑），让深色不死板；米白文字不刺眼；琥珀强调带暖意。

### Token

| Token | Hex | 用途 |
|---|---|---|
| `--ink-900` | `#0E0E10` | 主背景。深炭，微带蓝紫调，避免纯黑发闷 |
| `--ink-800` | `#16161A` | 次背景、卡片底、代码块底 |
| `--ink-700` | `#1E1E24` | 分隔线、边框（hairline） |
| `--ink-600` | `#2A2A33` | 悬浮态、次级边框、按钮描边 |
| `--bone` | `#E6E6E6` | 主文字。米白，比纯白柔，长时间阅读不刺眼 |
| `--ash` | `#8A8A94` | 次级文字、描述、标签 |
| `--ash-dim` | `#5C5C66` | 弱化文字、时间戳、元信息 |
| `--amber` | `#FFB000` | 强调色。链接 hover、`//`、状态点、关键 CTA |
| `--ember` | `#B87900` | 琥珀暗调。下划线、边框、hover 过渡 |
| `--cyan` | `#6FCFEB` | 冷色辅助。仅用于 `research` 状态标记，与琥珀形成冷暖对照 |

### 用色规则

- **强调色只用于"值得被看见"的东西**：当前状态、可交互元素的 hover、关键标识。正文不用琥珀。
- **冷暖分工**：琥珀 = 已完成 / 在产出（shipped、build）；青 = 在探索 / 研究（research）。状态标记因此自带语义。
- **背景三层**：`ink-900` 主底 → `ink-800` 卡片/代码块 → `ink-700` 边框。靠层次区分内容容器，不靠阴影。
- **氛围层**：body 上叠一层极淡点阵（`radial-gradient`，`rgba(255,255,255,0.022)`，28px 网格），呼应 CRT/终端质感，pointer-events:none，不干扰阅读。

### 差异化自检

对照 AI 设计三种默认：①暖奶油+衬线+赤陶 → 否；②近黑+荧光绿/朱红 → 部分近，但用琥珀而非荧光绿，且深炭有层次、字体非默认；③报纸 hairline+零圆角+密集栏 → 否。本设计在"深色极客"族里靠**琥珀暖色 + 三字族分工 + 注释结构语言**与默认拉开距离。

---

## 4. 字体系统

三字族明确分工，都不是烂大街的默认（Inter/Roboto/Menlo）。

| 角色 | 字体 | 字重 | 用途 |
|---|---|---|---|
| Display | **Space Grotesk** | 500 / 600 / 700 | 标题、名字、大字。几何性格，`g`/`a` 字形有辨识度，技术感但不冷 |
| Body | **IBM Plex Sans** | 400 / 500 / 600 | 正文、描述。人文无衬线，可读性好，技术血统 |
| Mono | **JetBrains Mono** | 400 / 500 | `//` 注释、标签、代码、键值对、时间戳。极客签名字体 |

**为什么这么配**：Space Grotesk（几何）与 IBM Plex Sans（人文）字形区分足够，不会糊成一片；JetBrains Mono 承担所有"技术语义"文本，让极客感集中可识别。三族均走 Google Fonts CDN，静态站零成本引入。

### 字号阶梯（fluid，`clamp` 响应式）

| Token | 范围 | 用途 |
|---|---|---|
| `--step--2` | 0.72rem → 0.8rem | 状态标记、tag、kbd、元信息 |
| `--step--1` | 0.83rem → 0.9rem | nav、eyebrow、日期、footer 链接 |
| `--step-0` | 1rem | 正文基准 |
| `--step-1` | 1.08rem → 1.2rem | 副标、hero role、prose 正文 |
| `--step-2` | 1.28rem → 1.6rem | 列表项标题（项目/文章） |
| `--step-3` | 1.6rem → 2.2rem | 区块标题、prose h2 |
| `--step-4` | 2rem → 3rem | 子页 page-head 备用 |
| `--step-5` | 2.6rem → 4.2rem | 文章标题、page-head 标题 |
| `--step-6` | 3.2rem → 6rem | hero 名字 |

### 排版规则

- 标题 `letter-spacing: -0.02em`（大字收紧），hero 名字 `-0.045em`（最大字更紧）。
- 正文 `line-height: 1.65`，prose `1.78`（长读放宽）。
- 段落 `max-width: 66ch`，控制行长可读性。
- 选区高亮：`::selection` 琥珀底 + 深炭字。

---

## 5. 间距、圆角、线条

### 间距阶梯

`--s-1`(0.5) · `--s-2`(0.75) · `--s-3`(1) · `--s-4`(1.5) · `--s-5`(2) · `--s-6`(3) · `--s-7`(4) · `--s-8`(6) · `--s-9`(9) rem

### 圆角

`--radius: 2px` -- 近乎直角，仅柔化像素锯齿。不用大圆角（避免"app 卡片"感，保持工程档案气质）。

### 线条

- `--hairline`: `1px solid var(--ink-700)` -- 主分隔线（区块间、列表项间）。
- `--hairline-soft`: `1px solid rgba(255,255,255,0.06)` -- 弱分隔（now 列表行间、nav 底）。

### 布局容器

- `--maxw: 68rem` 主内容最大宽度。
- `--gutter: clamp(1.25rem, 0.5rem+3vw, 2.5rem)` 侧边距，响应式。
- 垂直节奏统一在 `.section`（`padding-block: var(--s-8)`）管理；相邻 section 不叠加 padding，避免 type/class 选择器边距打架。

---

## 6. 组件规格

### 6.1 Eyebrow · `// 注释式区块标签`（signature）

```
// now
─────────────────
```
- 等宽字体，`--step--1`，灰字 + 琥珀 `//`。
- `::before` 生成 `//`，琥珀色。
- 用于每个主要区块的标题前缀。不承载序列信息（不用 01/02/03，因为内容不是严格序列）。

### 6.2 Nav

```
~ magician336                    about  projects  blog  tools
─────────────────────────────────────────────────────────────
```
- sticky 顶栏，`backdrop-filter: blur(10px)`，半透明深炭底（`rgba(14,14,16,0.72)`）。
- 品牌 `~ magician336`，`~` 琥珀色，等宽。
- 链接等宽、灰，hover 转米白；当前页 `is-active` 转琥珀且前缀 `/ `。

### 6.3 Hero

```
magician336
CS undergraduate · AI & algorithms

// building tools that respect your time
// and models that respect the math
// currently exploring graph representation learning

[ view work → ]   [ read blog → ]
```
- 名字：Space Grotesk 700，`--step-6`，`letter-spacing: -0.045em`。
- role：等宽，灰，`·` 分隔，"AI & algorithms" 琥珀。
- 注释副标：等宽，逐行 `lineIn` 淡入（`// ` 琥珀），像代码编辑器逐行渲染。`reduced-motion` 下瞬时显示。
- CTA：`link-arrow`，主（琥珀描边）/ 次（米白），hover 时箭头位移、颜色转琥珀。

### 6.4 Now 列表（键值对）

```
// now
researching   graph neural networks @ systems lab
building      a tiny autodiff engine in Rust
learning      type-level metaprogramming in Haskell
reading       "Deep Learning" — Goodfellow et al.
```
- 等宽，`grid-template-columns: 11rem 1fr`。
- key 琥珀、val 米白、补充 meta 灰。
- 行间 `hairline-soft`。承载"此刻在做什么"的真实信息，是主页的活度信号。

### 6.5 Work 列表（项目，状态标记）

```
▸ shipped   autodiff-rs       reverse-mode autodiff in Rust      2026
▸ research  gnn-playground    graph neural net experiments       2026
▸ wip       algo-notes        competitive algorithms, documented 2025
```
- `grid: 7.5rem 1fr auto`（状态 | 主体 | 年份）。
- 状态标记 `▸ ` 前缀 + 大写，**承载真实信息**：`shipped`(琥珀) / `research`(青) / `wip`(灰)。不是装饰序号。
- 主体：项目名（display）+ 描述（灰，≤56ch）+ tags。
- hover：左缩进 + 琥珀渐变背景 + 项目名转琥珀。

### 6.6 Post 列表（博客）

```
2026.07   Why backprop is just chain rule
2026.05   A note on segment trees
2026.03   Implementing softmax without overflow
```
- `grid: 7.5rem 1fr`（日期 | 标题+摘要）。
- 日期等宽灰弱；标题 display；hover 标题转琥珀、左缩进。

### 6.7 Tag

```
[ PyTorch ]  [ Rust ]  [ C++ ]
```
- 等宽 `--step--2`，灰字，`ink-700` 1px 边框，2px 圆角。

### 6.8 Link-arrow / Btn

- `link-arrow`：等宽，下边框，hover 转琥珀 + 箭头位移。用于行内导航动作（"all projects →"）。
- `.btn`：琥珀描边按钮，hover 填充琥珀 + 深炭字。用于显式动作（tools 页交互）。`.btn--ghost` 灰描边次级。

### 6.9 Footer（提示符 signature）

```
magician336@home:~$ ▮

// contact        // elsewhere      // site
email             github            built with hexo
/ msg form        rss               © 2026
```
- 首行终端提示符：`magician336`(琥珀) `@`(灰弱) `home`(青) `:~$`(灰) + 闪烁光标（`blink` 1.1s，`reduced-motion` 下静止）。
- 三列：contact / elsewhere / site，每列标题用 `//` eyebrow。
- 底部 meta 行：构建信息 + 版权。

### 6.10 Prose（文章正文）

- `--step-1`，`line-height: 1.78`。
- `h2`/`h3` display 字体；行内 `code` 等宽琥珀 + `ink-800` 底；`pre` 代码块 `ink-800` 底 + 左侧 2px 琥珀边。
- `blockquote` 左 2px 琥珀边，灰斜体。
- 列表：`ul` 用 `-` 琥珀前缀（不用默认圆点），`ol` 保留数字。

### 6.11 Kbd（键位）

```
[ Ctrl ] + [ K ]
```
- 等宽，`ink-800` 底，`ink-600` 边（底边 2px 模拟物理键），2px 圆角。用于 tools 页快捷键。

### 6.12 Card（通用卡片）

```
┌──────────────────────┐
│ // cheat             │
│ Big-O quick lookup   │
│ common complexities  │
│ open →               │
└──────────────────────┘
```
- `ink-800` 底 + `ink-700` 边，hover 边转 `ember` + 上移 2px。
- 顶部 `// eyebrow` 琥珀，标题 display，描述灰。

### 6.13 Deflist（关于页键值信息）

```
school      某某大学 计算机科学与技术
year        本科三年级 · 2027 届
focus       graph learning · algorithms · systems
```
- 同 now 列表结构（`11rem 1fr`），用于学术背景等结构化信息。

---

## 7. 动效原则

- **少而准**：只三处动效 -- hero 注释逐行淡入、work/post 列表 hover 缩进、footer 光标闪烁。其余静态。
- **不抢戏**：动效服务于"代码逐行渲染"的隐喻与"列表可点"的反馈，不做成全屏粒子。
- **a11y**：`@media (prefers-reduced-motion: reduce)` 下，所有动画/过渡降至 0.001ms，光标静止，scroll-behavior 关闭。

---

## 8. 可访问性

- **焦点**：所有可交互元素 `:focus-visible` 显示 2px 琥珀 outline + 3px offset。
- **对比**：`bone`(#E6E6E6) on `ink-900`(#0E0E10) ≈ 14.5:1（AAA）；`ash`(#8A8A94) on `ink-900` ≈ 5.3:1（AA 正文）；琥珀 on 深炭 ≈ 9.5:1（AAA）。
- **语义**：用语义化 HTML（`nav`/`main`/`article`/`section`/`footer`），`sr-only` 处理视觉隐藏文本。
- **响应式**：48rem 以下列表塌为单列，30rem 以下 CTA 纵向铺满。

---

## 9. Hexo 落地建议

- **主题结构**：把本系统拆成 partial -- `_partial/nav.ejs`、`_partial/footer.ejs`、`_partial/eyebrow.ejs`，页面用 `index.ejs`/`page.ejs`/`post.ejs`/`archive.ejs`。
- **token**：第 3-5 节的 token 直接写成 `:root` CSS 变量，放 `source/css/style.css`（或 Stylus）。
- **字体**：`_partial/head.ejs` 里引 Google Fonts 的 Space Grotesk + IBM Plex Sans + JetBrains Mono。
- **内容源**：项目用 `source/_data/projects.yml`，文章用 Hexo 原生 `source/_posts`，"now" 区块用 `source/_data/now.yml`（方便随时更新活度）。
- **signature 落地**：eyebrow 的 `//` 用 CSS `::before` 生成，footer 光标用纯 CSS `@keyframes blink`，无需 JS。
