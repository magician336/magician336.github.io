# 工具箱页设计稿 · `tools`

> 页面职责：附加实用页面。放速查表与小工具，体现极客实用主义--"我自己天天查的东西，也放出来给别人"。这是主页之外的**人情味与实用性**，让站点不止是简历，而像一个活的工位。

---

## 整页 wireframe

```
┌─ nav ───────────────────────────────────────────────────────────────┐
│ ~ magician336                          about  projects  blog  tools │
│                                                        /tools (active)│
└─────────────────────────────────────────────────────────────────────┘
┌─ page-head ─────────────────────────────────────────────────────────┐
│                                                                     │
│   tools                                                             │
│   Cheat sheets and tiny helpers I keep coming back to.              │
│   Press [ Ctrl ] + [ K ] to jump.                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ // cheat sheets ───────────────────────────────────────────────────┐
│                                                                     │
│   // cheat sheets                                                   │
│   ┌────────────────────┐ ┌────────────────────┐ ┌────────────────┐  │
│   │ // complexity      │ │ // latex           │ │ // git          │  │
│   │ Big-O quick lookup │ │ Math symbols I use │ │ Daily commands  │  │
│   │ common complexities│ │ for ML notes       │ │ I always forget │  │
│   │ open ->            │ │ open ->            │ │ open ->         │  │
│   └────────────────────┘ └────────────────────┘ └────────────────┘  │
│   ┌────────────────────┐ ┌────────────────────┐                     │
│   │ // shell           │ │ // python          │                     │
│   │ One-liners I reuse │ │ NumPy / tensor     │                     │
│   │ open ->            │ │ open ->            │                     │
│   └────────────────────┘ └────────────────────┘                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ // helpers ────────────────────────────────────────────────────────┐
│                                                                     │
│   // helpers                                                        │
│   ┌────────────────────┐ ┌────────────────────┐                     │
│   │ // softmax         │ │ // complexity viz  │                     │
│   │ stable softmax     │ │ plot n vs ops      │                     │
│   │ paste a vector ->  │ │ see O(n log n) ... │                     │
│   │ [ run ]            │ │ [ open ]           │                     │
│   └────────────────────┘ └────────────────────┘                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ 速查表展开示例: Big-O ─────────────────────────────────────────────┐
│                                                                     │
│   // complexity  ·  Big-O quick lookup                              │
│   ══════════════════════════════════════════                        │
│                                                                     │
│   structure / op        access      search      insert      space   │
│   ══════════════════════════════════════════════════════════        │
│   array (static)        O(1)        O(n)        O(n)        O(n)    │
│   sorted array          O(log n)    O(log n)    O(n)        O(n)    │
│   hash table            O(1) avg    O(1) avg    O(1) avg    O(n)    │
│   BST (balanced)        O(log n)    O(log n)    O(log n)    O(n)    │
│   skip list             O(log n)    O(log n)    O(log n)    O(n)    │
│                                                                     │
│   sorting algorithm     best        average     worst       space   │
│   ══════════════════════════════════════════════════════════        │
│   quicksort             O(n log n)  O(n log n)  O(n^2)      O(log n)│
│   mergesort             O(n log n)  O(n log n)  O(n log n)  O(n)    │
│   heapsort              O(n log n)  O(n log n)  O(n log n)  O(1)    │
│                                                                     │
│   [ back to tools -> ]                                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ footer (同主页) ───────────────────────────────────────────────────┐
│   magician336@home:~$ ▮                                             │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 区块逐一说明

### 1. page-head

- 标题 `tools`，描述 `Cheat sheets and tiny helpers I keep coming back to.`
- 第二行 `Press [ Ctrl ] + [ K ] to jump.` -- 用 `kbd` 组件展示快捷键，**且这条快捷键真实可用**：`Ctrl+K` 聚焦页内搜索/跳转（见 helpers 交互）。言出必行，不写装饰性 kbd。

### 2. // cheat sheets（速查表卡片网格）

- `eyebrow` `// cheat sheets` + `grid--3`（桌面三列，移动塌单列）。
- 每张 `card`：
  - 顶部 `// category` 琥珀 eyebrow（如 `// complexity`）
  - 标题（display `--step-1`）
  - 描述（灰，一句话）
  - 底部 `open ->` link-arrow，跳到该速查表的展开页（`/tools/complexity/`）
- hover：边转 `ember` + 上移 2px。
- 卡片示例：complexity / latex / git / shell / python。落地时按自己常查的内容增删。

### 3. // helpers（小工具卡片）

- `eyebrow` `// helpers` + `grid--2`。
- 与 cheat sheet 卡片的区别：**helpers 是可交互的**，卡片内有输入与按钮。
  - 例：`stable softmax` 卡片 -- 粘贴一个向量，点 `[ run ]` 输出数值稳定的 softmax 结果。
  - 例：`complexity viz` -- 输入 n，画 `O(n log n)` 等曲线对比。
- 按钮用 `.btn`（琥珀描边，hover 填充）。
- 这些小工具用纯前端 JS（softmax 几行就够；可视化用 SVG 或 `<canvas>`）。静态站无后端，全部客户端计算。

### 4. 速查表展开页（`/tools/:slug/`）

点卡片 `open ->` 进入的详细速查页。结构：

- `eyebrow` `// complexity · Big-O quick lookup`
- 内容用**对齐的等宽表格**（非 `<table>` 默认样式，而是等宽字体的列对齐，呼应终端/配置文件气质）。
  - 列标题大写、琥珀；行等宽；用 `═` / `─` 字符画分隔线（或 CSS hairline 模拟）。
- 底部 `back to tools ->`。
- 落地：每张速查表一个 Markdown 文件，用自定义等宽表格样式。

> **为什么用等宽对齐而非美观表格**：速查表的本质是"快速扫读数据"，等宽对齐像 `man` 页 / 配置文件，极客语义强、扫读快。装饰性表格边框反而拖慢。

### 5. kbd 组件用法

```
[ Ctrl ] + [ K ]      [ Esc ]  close     [ / ]  search
```

- `.kbd`：等宽，`ink-800` 底，`ink-600` 边（底边 2px 模拟物理键），2px 圆角。
- 用于：快捷键提示、工具页操作说明。
- **只在真实快捷键处用**，不作为普通标签装饰。

---

## 交互清单

| 功能 | 实现 |
|---|---|
| `Ctrl+K` 跳转 | 全局监听，聚焦页内搜索框或滚动到 helpers |
| helpers 计算 | 纯前端 JS（softmax / 复杂度可视化） |
| 卡片 hover | CSS `:hover` |
| 速查表展开 | 独立静态页（Hexo 生成） |

---

## 响应式

- ≤48rem：`grid--3` / `grid--2` 塌单列；速查表等宽表横向滚动（`overflow-x: auto`）。
- 速查表列对齐在窄屏保持等宽，允许横向滚动而非折行（折行会破坏对齐）。

---

## 落地建议（Hexo）

- 页面：`tools.ejs`（索引）+ `tools/:slug.ejs`（速查表展开）。
- 速查表数据：`source/_data/cheatsheets/*.yml`，每文件一张表的行列数据。
- helpers：`source/js/tools.js`，按卡片 ID 注册计算函数；softmax 等可内联。
- `Ctrl+K`：`source/js/shortcut.js`，~10 行。
- 等宽表格样式：在 `style.css` 加 `.cheattable` 类，等宽字体 + 列对齐 + hairline 行分隔。
