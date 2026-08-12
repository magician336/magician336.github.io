# 文章模板设计稿 · `post`

> 页面职责：单篇博客的阅读体验。重点在**长读排版**--prose 区块的字号、行高、代码块、引用、公式都要让教授 / 同行愿意读完。用一篇真实示例《Why backprop is just chain rule》同时示范内容与排版规格。

---

## 整页 wireframe

```
┌─ nav ───────────────────────────────────────────────────────────────┐
│ ~ magician336                          about  projects  blog  tools │
│                                                     /blog (active)    │
└─────────────────────────────────────────────────────────────────────┘
┌─ article-head ──────────────────────────────────────────────────────┐
│                                                                     │
│   2026.07.14  ·  6 min read  ·  #ml  #notes                         │
│                                                                     │
│   Why backprop is just chain rule                                   │
│                                                                     │
│   A short derivation from first principles - no framework, no       │
│   hand-waving. By the end you'll see .backward() is calculus,       │
│   nothing more.                                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ prose ─────────────────────────────────────────────────────────────┐
│                                                                     │
│   Frameworks make backpropagation feel like magic. You call         │
│   `.backward()` and gradients appear. But there's no magic - it's   │
│   the chain rule, applied carefully. Let's derive it.               │
│                                                                     │
│   ## Setup                                                          │
│                                                                     │
│   Consider a function f(x) = (x^2 + 1)^3 ...                        │
│                                                                     │
│   The derivative, by the chain rule:                                │
│                                                                     │
│   [ 块级公式:  f'(x) = 3(x^2+1)^2 · 2x ]                            │
│                                                                     │
│   ## Why this matters for neural nets                               │
│                                                                     │
│   A neural network is just a big composition ...                    │
│                                                                     │
│   ```python                                                         │
│   def backward(self, grad_output):                                  │
│       # chain rule: local grad * incoming grad                      │
│       return grad_output * self.local_grad()                        │
│   ```                                                               │
│                                                                     │
│   > Backprop is not an algorithm you implement.                     │
│   > It's the chain rule you compose.                                │
│                                                                     │
│   - forward pass computes outputs                                   │
│   - backward pass composes local gradients in reverse               │
│   - storage is the price you pay for not recomputing                │
│                                                                     │
│   ### A subtlety                                                    │
│                                                                     │
│   ...                                                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ article-foot ──────────────────────────────────────────────────────┐
│                                                                     │
│   // tags   #ml  #notes                                             │
│   // perm    magician336.github.io/2026/07/backprop-chain-rule      │
│                                                                     │
│   <- A note on segment trees                  Implementing softmax..│
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ footer (同主页) ───────────────────────────────────────────────────┐
│   magician336@home:~$ ▮                                             │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 区块逐一说明

### 1. article-head

- **meta 行**：等宽 `--step--1`，灰，`·` 分隔 -- `日期 · 阅读时长 · 标签`。
  - 日期精确到日（`2026.07.14`，比列表的 `2026.07` 更细）。
  - 阅读时长由 Hexo 插件算（如 `hexo-wordcount`）。
- **标题**：display `--step-5`，`letter-spacing: -0.035em`，`line-height: 1.08`。
- **摘要**：灰 `--step-1`，≤60ch，定调用。一句说清"读完能得到什么"。
- 底部 `hairline` 与正文分隔。

### 2. prose（长读正文）

排版规格：

| 元素 | 规格 |
|---|---|
| 正文 | IBM Plex Sans，`--step-1`，`line-height: 1.78`，`max-width: 66ch` |
| `h2` | display，`--step-3`，上方 `--s-7` 间距，带顶部少量 padding（锚点滚动留白） |
| `h3` | display，`--step-2`，上方 `--s-6` |
| 段落 | 下方 `--s-4` |
| 行内 `code` | 等宽，琥珀字，`ink-800` 底 + `ink-700` 边，0.88em |
| 代码块 `pre` | 等宽，`ink-800` 底 + `ink-700` 边 + **左侧 2px 琥珀边**，`--step--1`，可横向滚动 |
| `blockquote` | 左 2px 琥珀边，灰斜体，`--s-5` 上下间距 |
| `ul` | `-` 琥珀前缀（非默认圆点），项间距 `--s-2` |
| `ol` | 保留数字，项间距 `--s-2` |
| `img` | `hairline` 边框，2px 圆角，`--s-5` 上下 |
| 链接 | 琥珀字 + `ember` 下边框，hover 下边框转琥珀 |

**代码块的左侧琥珀边**是 prose 里唯一的强调线，呼应全站 signature 的"代码即内容"语言，让代码块在深色底里既醒目又不喧宾夺主。

### 3. 数学公式

受众是教授，公式是刚需。两种方案任选：

- **KaTeX**（推荐，静态站友好）：Hexo 装 `hexo-math` 或直接引 KaTeX CDN。
  - 行内：`$f'(x) = 3(x^2+1)^2 \cdot 2x$` 渲染为等宽琥珀风格的行内公式（KaTeX 默认字体已可，颜色继承 bone）。
  - 块级：`$$...$$` 居中显示，上下 `--s-4` 间距。
- 公式颜色用 `--bone`（米白），变量 / 操作符靠 KaTeX 默认斜体区分，不额外上色，保持学术克制。

### 4. article-foot

- 顶部 `hairline` 分隔。
- `// tags`：等宽，标签可点回 blog 页对应筛选。
- `// perm`：永久链接，方便引用。
- 上下页导航：`<- 上一篇标题` / `下一篇标题 ->`，`link-arrow` 样式，按发布时间相邻。无相邻则该侧隐藏。

---

## 长读体验细节

- **不设侧边栏目录**：文章不会太长（这类笔记通常 5-10 分钟），目录是干扰。若超长可在右侧浮一个极简 `// contents`（仅 h2），但默认不做。
- **进度条**：顶部 1px 琥珀进度条随滚动填充（可选，纯 CSS / 少量 JS）。`reduced-motion` 下不显示。
- **字号可读**：正文 `--step-1` 在桌面约 18-19px，长读不累眼。
- **代码不折行**：`pre` 横向滚动，保住代码语义。

---

## 响应式

- ≤48rem：article-head 标题降到 `--step-4`；prose 字号维持 `--step-1`（fluid 自动缩小）；代码块全宽可滚。
- meta 行 `·` 分隔在窄屏可能换行，允许。

---

## 落地建议（Hexo）

- 模板：`post.ejs`，用 `article-head` + `<div class="prose">` 包裹 `page.content`。
- 数学：`hexo-math`（KaTeX 后端），front matter 加 `math: true` 按需加载 KaTeX 资源（非每篇都引，省体积）。
- 阅读时长：`hexo-wordcount` 的 `min2read(post.content)`。
- 上下页：Hexo 内置 `<%- post_prev(post) %>` / `post_next`。
- front matter 见 `blog.md` 末尾示例，额外加 `math: true`（如用到公式）。

---

## 示例文章正文（完整，可作首篇草稿）

> 以下是示范用完整正文，落地时可改写为真实内容。同时演示 prose 各元素。

Frameworks make backpropagation feel like magic. You call `.backward()` and gradients appear. But there's no magic - it's the chain rule, applied carefully. Let's derive it.

## Setup

Consider a simple composed function:

$$ f(x) = (x^2 + 1)^3 $$

By the chain rule, its derivative is:

$$ f'(x) = 3(x^2+1)^2 \cdot 2x = 6x(x^2+1)^2 $$

Two layers, two local derivatives, multiplied together. That's the whole idea.

## Why this matters for neural nets

A neural network is just a big composition of simple functions. Each layer is one `g_i`. The loss is the composition `L = g_n ∘ ... ∘ g_1`. Its gradient with respect to an early input is, again, the chain rule - just with more terms:

```python
def backward(self, grad_output):
    # chain rule: local grad * incoming grad
    local = self.local_grad(self.cached_input)
    return grad_output * local
```

Each layer only needs to know its *own* local gradient and the gradient flowing in from above. It never sees the global picture. That locality is why backprop is computable at all.

> Backprop is not an algorithm you implement.
> It's the chain rule you compose.

The three things to remember:

- forward pass computes and caches outputs
- backward pass composes local gradients in reverse order
- caching is the price you pay for not recomputing

### A subtlety

People confuse "backprop" with "gradient descent". They are not the same:

1. backprop computes the gradient
2. gradient descent uses it to update parameters

You can run backprop and then do anything with the gradient - descent, Adam, or just log it. Conflating the two is the most common misunderstanding in intro ML courses.

## Takeaway

Next time `.backward()` feels magical, remember: it's a composition of local derivatives, chained in reverse. Calculus, nothing more.
