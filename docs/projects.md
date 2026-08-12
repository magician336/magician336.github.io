# 项目页设计稿 · `projects`

> 页面职责：作品集全集。主页只放 3 个精选，这里放全部，按时间倒序、可筛选。让受众能快速扫读你做过什么的**广度与进度**，并能按"只看已交付 / 只看研究"聚焦。

---

## 整页 wireframe

```
┌─ nav ───────────────────────────────────────────────────────────────┐
│ ~ magician336                          about  projects  blog  tools │
│                                              /projects (active)      │
└─────────────────────────────────────────────────────────────────────┘
┌─ page-head ─────────────────────────────────────────────────────────┐
│                                                                     │
│   projects                                                          │
│   Things I've built, am building, or am researching.                │
│   Status is honest - wip means wip.                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ // filter ─────────────────────────────────────────────────────────┐
│                                                                     │
│   // filter                                                         │
│   [ all ]  [ shipped ]  [ research ]  [ wip ]      [ #rust ]  ...   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ 2026 ──────────────────────────────────────────────────────────────┐
│                                                                     │
│   2026                                                              │
│   ═══                                                               │
│   ▸ shipped    autodiff-rs          2026.08                         │
│        reverse-mode autodiff in Rust                                │
│        [ Rust ] [ autodiff ] [ experimental ]        live ->        │
│                                                                     │
│   ▸ research   gnn-playground       2026.05                         │
│        graph neural net experiments on molecular data               │
│        [ PyTorch ] [ GNN ] [ research ]              repo ->        │
│                                                                     │
│   ▸ shipped    kv-store             2026.02                         │
│        a toy LSM-tree key-value store in C++                        │
│        [ C++ ] [ systems ] [ storage ]               repo ->        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ 2025 ──────────────────────────────────────────────────────────────┐
│                                                                     │
│   2025                                                              │
│   ═══                                                               │
│   ▸ wip        algo-notes           2025.11                         │
│        competitive algorithms, documented                           │
│        [ notes ] [ algorithms ]                      wip            │
│                                                                     │
│   ▸ shipped    raytracer            2025.07                         │
│        a path tracer following "Ray Tracing in One Weekend"         │
│        [ C++ ] [ graphics ]                          repo ->        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ footer (同主页) ───────────────────────────────────────────────────┐
│   magician336@home:~$ ▮                                             │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 区块逐一说明

### 1. page-head

- 标题 `projects`，描述两行：
  - 第一行点明范围（built / building / researching）。
  - 第二行 `Status is honest - wip means wip.` -- 这句是**信任声明**。受众（尤其面试官）见惯了把半成品吹成成品的简历，明说"状态诚实"是差异化信号，也呼应状态标记的真实信息语义。

### 2. // filter（筛选条）

- `eyebrow` `// filter` + 两组筛选：
  - **状态组**：`all` / `shipped` / `research` / `wip`。当前选中项琥珀描边（`.btn--ghost` 的选中态变体），其余灰描边。
  - **标签组**：`#rust` `#pytorch` `#c++` ... 从项目数据动态生成，等宽 tag 样式，选中转琥珀。
- **交互**：点击筛选用前端 JS 即时显隐 `work-item`（静态站可引轻量脚本，或 Hexo 生成多份预筛选页--见落地建议）。无刷新。
- **可访问性**：筛选按钮用 `<button aria-pressed>`，键盘可达。

> **为什么按状态而非仅按年份筛选**：状态是本项目的信息核心（诚实标记进度）。教授想看"在研究什么"，面试官想看"交付过什么"，状态筛选直接服务这两种意图。

### 3. 按年份分组列表

- 年份标题：display `--step-3`，下接 `hairline`，等宽副标可选。
- 每年下挂 `work-item` 列表，年内按时间倒序。
- `work-item` 规格同主页，但**扩展一列链接**：`live ->` / `repo ->` / `wip`（无链接时显示状态文字，不可点）。
  - `grid` 升级为 `7.5rem 1fr auto auto`（状态 | 主体 | 年月 | 链接）。
- hover 行为同主页：左缩进 + 琥珀渐变 + 项目名转琥珀。

### 4. 单项目字段（数据模型）

每个项目建议字段（`source/_data/projects.yml`）：

```yaml
- name: autodiff-rs
  status: shipped        # shipped | research | wip
  year: 2026
  month: 08
  desc: reverse-mode autodiff in Rust
  tags: [Rust, autodiff, experimental]
  links:
    live: https://...
    repo: https://github.com/...
  # 详情页（可选）:
  slug: autodiff-rs
```

- `status` 决定状态标记颜色（琥珀 / 青 / 灰）。
- `links` 决定右侧链接类型；都没有则显示 `wip` 文字。
- `slug` 可选，有则项目名链接到 `/projects/autodiff-rs/` 详情页（见下）。

### 5. 项目详情页（可选，`/projects/:slug/`）

不是必须，但推荐对重点项目做。结构：

```
page-head: 项目名 + 一句话 + 状态/年份/链接 meta
prose 正文: 动机 / 设计 / 实现 / 学到什么
代码块 / 图 / 公式(LaTeX) 按 prose 样式
article-foot: 上一页/下一页、仓库链接
```

复用 `article-head` + `prose` 组件，无需新组件。受众点进来想读"为什么这么做、怎么做的"，prose 正合适。

---

## 空状态

当筛选结果为空：

```
// filter result
no projects match this filter.
[ clear filters -> ]
```

- 等宽灰，一句解释 + 一个清除筛选的 link-arrow。
- 不说"sorry"、不卖萌。告诉用户发生了什么（无匹配）和怎么解决（清除）。

---

## 响应式

- ≤48rem：`work-item` 的 4 列 grid 塌为单列；状态、年月、链接堆叠在主体下；筛选条状态组与标签组各占一行，可横向滚动。

---

## 落地建议（Hexo）

- 数据：`source/_data/projects.yml`（上述字段）。
- 列表页：`projects.ejs` 遍历数据，按 `year` 分组，组内按 `month` 倒序。
- 筛选：纯前端方案 -- 给每个 `work-item` 加 `data-status` / `data-tags`，引一个 ~30 行 vanilla JS 监听筛选按钮 `aria-pressed` 切换显隐。无需框架。
- 详情页：为有 `slug` 的项目生成 `projects/:slug/index.md`，用 `post.ejs` 同款模板（article-head + prose）。
