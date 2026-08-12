# 博客索引设计稿 · `blog`

> 页面职责：文章全集入口。按时间倒序，可按标签筛选，可分页。受众想看的是"这人写的东西有没有料"，所以列表项要露出**标题 + 一句有信息量的摘要**，而非纯标题堆叠。

---

## 整页 wireframe

```
┌─ nav ───────────────────────────────────────────────────────────────┐
│ ~ magician336                          about  projects  blog  tools │
│                                                     /blog (active)    │
└─────────────────────────────────────────────────────────────────────┘
┌─ page-head ─────────────────────────────────────────────────────────┐
│                                                                     │
│   writing                                                           │
│   Notes I wrote to understand something. Mostly math, sometimes     │
│   systems.                                                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ // filter ─────────────────────────────────────────────────────────┐
│                                                                     │
│   // filter                                                         │
│   [ all ]  [ #ml ]  [ #algorithms ]  [ #systems ]  [ #notes ]       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ 文章列表 ──────────────────────────────────────────────────────────┐
│                                                                     │
│   2026.07   Why backprop is just chain rule                        │
│              a short derivation from first principles               │
│              [ #ml ] [ #notes ]                                     │
│                                                                     │
│   2026.05   A note on segment trees                                 │
│              range queries without the boilerplate                  │
│              [ #algorithms ]                                        │
│                                                                     │
│   2026.03   Implementing softmax without overflow                   │
│              the log-sum-exp trick, explained                       │
│              [ #ml ] [ #notes ]                                     │
│                                                                     │
│   2026.01   What I learned writing a toy LSM-tree                   │
│              compaction is where the fun is                         │
│              [ #systems ]                                           │
│                                                                     │
│   2025.11   Segment tree beats segment tree                        │
│              when one tree isn't enough                             │
│              [ #algorithms ]                                        │
│                                                                     │
│   ...                                                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ 分页 ──────────────────────────────────────────────────────────────┐
│                                                                     │
│   <- newer                          older ->                        │
│   page 1 / 3                                                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ footer (同主页) ───────────────────────────────────────────────────┐
│   magician336@home:~$ ▮                                             │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 区块逐一说明

### 1. page-head

- 标题 `writing`（而非 "blog" -- 更有人味，呼应"写下来是为了弄懂"的语气）。
- 描述：`Notes I wrote to understand something. Mostly math, sometimes systems.` -- 这句**定调**：博客是学习副产物，不是营销稿。受众（教授）会认可这种动机。

### 2. // filter（标签筛选）

- `eyebrow` `// filter` + 一行标签。
- `all` 默认选中（琥珀描边），其余灰 tag；点击切换，前端显隐。
- 标签从所有文章 `tags` 字段聚合生成。
- 同 projects 页，用 `<button aria-pressed>`，纯前端 ~20 行 JS。

### 3. 文章列表

- `post-list`，`post-item` 规格：`grid: 7.5rem 1fr`（日期 | 标题+摘要+标签）。
- 日期：等宽灰弱，`YYYY.MM`。
- 标题：display `--step-2`，hover 转琥珀。
- 摘要：灰，`--step-0`，≤60ch，**必须有信息量**（"the log-sum-exp trick, explained" 而非 "my thoughts on softmax"）。
- 标签：行内 tag，可点击直接筛选（与顶部 filter 联动）。
- hover：左缩进 + 标题琥珀。
- 按时间严格倒序，不按年分组（文章流动性强于项目，分组反而割裂）。

### 4. 分页

- 每页 10 篇（静态站 Hexo `per_page: 10`）。
- 底部：左 `<- newer`、右 `older ->`，中间 `page 1 / 3`。
- 用 `link-arrow` 样式；首/末页对应方向禁用（灰、不可点、`aria-disabled`）。

---

## 空状态

```
// filter result
no posts with this tag yet.
[ clear filter -> ]
```

---

## 响应式

- ≤48rem：`post-item` 塌单列，日期移到标题上方；标签筛选条横向滚动。

---

## 落地建议（Hexo）

- Hexo 原生 `source/_posts/*.md` + `archive.ejs` / 自定义 `blog.ejs`。
- `per_page: 10`，分页用 Hexo 内置 paginator。
- 标签筛选前端 JS：给 `post-item` 加 `data-tags`，监听筛选按钮。
- 文章 front matter：

```yaml
---
title: Implementing softmax without overflow
date: 2026-03-14
tags: [ml, notes]
excerpt: the log-sum-exp trick, explained
---
```

- `excerpt` 字段渲染为列表摘要；无则取正文首段。
