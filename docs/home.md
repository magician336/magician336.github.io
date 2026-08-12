# 主页设计稿 · `index`

> 页面职责：10 秒内让教授 / 面试官确信"这个学生懂行、有产出、有品味"。
>
> 信息优先级：**我是谁 → 此刻在做什么 → 做出过什么 → 写过什么 → 怎么联系**。所有占位文案均贴合 AI / 算法方向，落地时替换为真实内容即可。

---

## 整页 wireframe

```
┌─ nav (sticky, blur) ───────────────────────────────────────────────┐
│ ~ magician336                          about  projects  blog  tools │
└─────────────────────────────────────────────────────────────────────┘
┌─ hero ──────────────────────────────────────────────────────────────┐
│                                                                     │
│   magician336                                                       │
│   CS undergraduate · AI & algorithms                                │
│                                                                     │
│   // building tools that respect your time                          │
│   // and models that respect the math                               │
│   // currently exploring graph representation learning              │
│                                                                     │
│   view work ->    read blog ->                                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ // now ────────────────────────────────────────────────────────────┐
│                                                                     │
│   // now                                                            │
│   researching   graph neural networks @ systems lab                │
│   building      a tiny autodiff engine in Rust                     │
│   learning      type-level metaprogramming in Haskell              │
│   reading       "Deep Learning" — Goodfellow et al.                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ selected work ─────────────────────────────────────────────────────┐
│                                                                     │
│   selected work                              all projects ->        │
│   ══════════════════════════════════════════                        │
│   ▸ shipped    autodiff-rs          2026                            │
│        reverse-mode autodiff in Rust                                │
│        [ Rust ] [ autodiff ] [ experimental ]                       │
│                                                                     │
│   ▸ research   gnn-playground       2026                            │
│        graph neural net experiments on molecular data               │
│        [ PyTorch ] [ GNN ] [ research ]                             │
│                                                                     │
│   ▸ wip        algo-notes           2025                            │
│        competitive algorithms, documented                           │
│        [ notes ] [ algorithms ]                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ recent writing ────────────────────────────────────────────────────┐
│                                                                     │
│   recent writing                             all posts ->           │
│   ══════════════════════════════════════════                        │
│   2026.07   Why backprop is just chain rule                        │
│             a short derivation from first principles                │
│                                                                     │
│   2026.05   A note on segment trees                                 │
│             range queries without the boilerplate                   │
│                                                                     │
│   2026.03   Implementing softmax without overflow                   │
│             the log-sum-exp trick, explained                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ // stack ──────────────────────────────────────────────────────────┐
│                                                                     │
│   // stack                                                          │
│   [ PyTorch ] [ Rust ] [ C++ ] [ Haskell ] [ LaTeX ]               │
│   [ Linux ] [ git ] [ NumPy ] [ SQL ]                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ footer ────────────────────────────────────────────────────────────┐
│   magician336@home:~$ ▮                                             │
│                                                                     │
│   // contact        // elsewhere      // site                       │
│   email             github            built with hexo               │
│   / msg form        rss               © 2026 magician336            │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 区块逐一说明

### 1. Nav

- sticky，`backdrop-filter: blur(10px)`，半透明深炭底，底部 `hairline-soft`。
- 左：品牌 `~ magician336`（`~` 琥珀）。
- 右：`about · projects · blog · tools`，等宽灰，当前页 `is-active` 琥珀 + `/ ` 前缀。
- 移动端：链接间距收紧到 `--s-3`，字号降到 `--step--2`；≤30rem 时仅保留首字母或汉堡。

### 2. Hero

- **名字**：Space Grotesk 700，`--step-6`，`letter-spacing: -0.045em`，`line-height: 0.92`。这是全页最大字，是视觉锚点。
- **role**：等宽 `--step-1`，灰，`·` 分隔。"AI & algorithms" 整段琥珀，直接点亮方向。
- **注释副标**：三行 `//`，等宽 `--step-1`，逐行 `lineIn` 淡入（0.15s / 0.4s / 0.65s 延迟）。`reduced-motion` 下瞬时显示。
  - 三行文案承载三个面向：工程（tools）、理论（models / math）、当前焦点（graph representation learning）。一句话覆盖受众关心的"工程+学术"双线。
- **CTA**：两个 `link-arrow`。主 `view work ->`（琥珀描边），次 `read blog ->`（米白）。hover 箭头右移、颜色转琥珀、下边框转琥珀。

> **设计取舍**：hero 不放头像 / 大数字 / 渐变 blob。受众是教授与面试官，他们要的是"这人是谁、做什么"，不是装饰。名字 + 定位 + 注释定位语，用排版分量说话。

### 3. // now（活度信号）

- `eyebrow` `// now` + `now-list` 键值对。
- 四行：researching / building / learning / reading。
- **这一区块是主页的"心跳"**：证明站点是活的、人在持续做事。教授扫到这里会知道你当前的研究方向；面试官会看到你在自学什么。
- 内容来自 `source/_data/now.yml`，便于不重建站点就更新。
- 移动端：`11rem 1fr` 塌为单列，key 与 val 上下排。

### 4. selected work

- `section-head`：左 `selected work`（display `--step-3`），右 `all projects ->`（link-arrow）。
- `work-list`：3 条 `work-item`，`grid: 7.5rem 1fr auto`。
  - **状态标记承载真实信息**：`shipped`(琥珀) / `research`(青) / `wip`(灰)。不是 01/02/03 装饰序号 -- 受众一眼能区分"已交付 / 在研究 / 在写"。
  - 每项：状态 | 项目名 + 描述(≤56ch) + tags | 年份。
  - hover：左缩进 `--s-3` + 琥珀渐变背景 + 项目名转琥珀。
- **只放 3 个最有代表性的**，不在主页堆全部。深度优先于数量。

### 5. recent writing

- `section-head` 同上，右 `all posts ->`。
- `post-list`：3 条 `post-item`，`grid: 7.5rem 1fr`。
  - 日期(等宽灰弱) | 标题(display) + 摘要(灰，≤60ch)。
  - hover：标题转琥珀 + 左缩进。
- 文章主题选数学/算法扎实的（backprop = chain rule、segment tree、log-sum-exp），向受众暗示写作有深度，不是流水账。

### 6. // stack

- `eyebrow` `// stack` + `stack` 标签云。
- 等宽 tag，`ink-700` 边框。
- 放技术栈与工具，体现广度但不展开（展开是 about 页的事）。

### 7. Footer

- 首行 `magician336@home:~$ ▮`：`magician336` 琥珀、`@` 灰弱、`home` 青、`:~$` 灰、光标闪烁。这是 signature 的收束。
- 三列 `// contact` / `// elsewhere` / `// site`：email、msg form、github、rss、构建信息、版权。
- 移动端三列塌单列。

---

## 动效清单

| 位置 | 动效 | 触发 | reduced-motion |
|---|---|---|---|
| hero 注释 | 逐行 `lineIn` 淡入 + 上移 4px | 页面加载 | 瞬时显示 |
| work / post 列表 | 左缩进 + 项目名/标题转琥珀 + 渐变背景 | hover | 保留（hover 非动效） |
| footer 光标 | `blink` 1.1s 闪烁 | 常驻 | 静止 |
| 链接 | 颜色 + 下边框 + 箭头位移 | hover | 保留 |

---

## 响应式断点

| 断点 | 行为 |
|---|---|
| ≤48rem | nav 收紧；hero/section padding 降到 `--s-7`；work/post/now/deflist 列表塌单列；footer 三列塌单列 |
| ≤30rem | nav 链接最小间距；hero CTA 纵向铺满，箭头右对齐 |

---

## 内容占位说明

以上项目、文章、now 条目均为贴合 AI / 算法方向的**占位示例**，结构真实、文案可直接参考语气。落地时替换为真实内容：

- `autodiff-rs` / `gnn-playground` / `algo-notes` → 真实项目名与描述
- 三篇博客标题 → 真实文章
- now 四行 → 当前真实状态（建议每月更新一次）
- stack → 真实熟练技术栈
