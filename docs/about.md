# 关于页设计稿 · `about`

> 页面职责：给愿意深入了解的受众（点进 about 的教授 / 面试官）提供**纵深**--背景、研究方向、技能、怎么联系。主页是名片，about 是简历的"人"的部分。

---

## 整页 wireframe

```
┌─ nav ───────────────────────────────────────────────────────────────┐
│ ~ magician336                          about  projects  blog  tools │
│                                       /about  (active)               │
└─────────────────────────────────────────────────────────────────────┘
┌─ page-head ─────────────────────────────────────────────────────────┐
│                                                                     │
│   about                                                             │
│   CS undergraduate. Works on graph learning, algorithms, and the    │
│   systems that make them fast.                                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ // who ────────────────────────────────────────────────────────────┐
│                                                                     │
│   // who                                                            │
│   I'm magician336, a third-year CS undergraduate at 某某大学.        │
│   My interest sits where machine learning meets the systems that    │
│   run it - I like understanding why a model behaves the way it      │
│   does, and I like making the code beneath it small and fast.       │
│                                                                     │
│   Lately I've been reading on graph representation learning and     │
│   reimplementing backpropagation from scratch to make sure I        │
│   actually understand it, not just call `.backward()`.              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ // background ─────────────────────────────────────────────────────┐
│                                                                     │
│   // background                                                     │
│   school      某某大学 计算机科学与技术
│   year        本科三年级 · 2027 届
│   gpa         3.8 / 4.0  (top 10%)
│   lab         systems & learning lab, advisor: Prof. 某
│   coursework  algorithms · operating systems · ML · compilers ·     │
│               probability & statistics                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ // research interests ─────────────────────────────────────────────┐
│                                                                     │
│   // research interests                                             │
│   - graph representation learning                                   │
│     message passing on molecular & social graphs                    │
│   - autodiff & differentiable programming                           │
│     how reverse-mode AD actually works, end to end                  │
│   - algorithms for ML                                               │
│     making inference sublinear where it can be                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ // skills ─────────────────────────────────────────────────────────┐
│                                                                     │
│   // skills                                                         │
│                                                                     │
│   languages     [ Python ] [ Rust ] [ C++ ] [ Haskell ] [ SQL ]     │
│   ml / data     [ PyTorch ] [ NumPy ] [ pandas ] [ scikit-learn ]   │
│   systems       [ Linux ] [ git ] [ Docker ] [ bash ]               │
│   writing       [ LaTeX ] [ Markdown ] [ English ] [ 中文 ]          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ // contact ────────────────────────────────────────────────────────┐
│                                                                     │
│   // contact                                                        │
│   email        magician336@example.com                              │
│   github       github.com/magician336                               │
│   office hrs   Wed 14:00-16:00 @ lab 305  (学期内)                  │
│   response     usually within 2 days                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
┌─ footer (同主页) ───────────────────────────────────────────────────┐
│   magician336@home:~$ ▮                                             │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 区块逐一说明

### 1. page-head

- 标题 `about`：display `--step-5`，`letter-spacing: -0.035em`。
- 描述：灰，`--step-1`，一句话点明方向（graph learning / algorithms / systems）。这是 about 页的"电梯陈述"。

### 2. // who（自我介绍 prose）

- `eyebrow` `// who` + 两段正文。
- 用 body 字体（IBM Plex Sans），`--step-1`，`max-width: 66ch`，`line-height: 1.65`。
- **文案语气**：第一人称、平实、具体。不说"热爱编程"，而说"reimplementing backpropagation from scratch to make sure I actually understand it, not just call `.backward()`"。具体动作比形容词有力。
- 行内 `code`（`.backward()`）用等宽琥珀 + `ink-800` 底，呼应极客气质。

> **设计取舍**：about 页是少数允许"写长句"的地方，但仍受 `max-width: 66ch` 行长约束。受众是教授，他们能读长文，但不愿读墙。

### 3. // background（教育背景 deflist）

- `eyebrow` `// background` + `deflist` 键值对。
- 字段：school / year / gpa / lab / coursework。
- **为什么用 deflist 而非表格**：键值对在深色窄列里最干净，等宽字体让信息像配置文件，符合极客语义。coursework 值较长时自然换行，key 列固定 `11rem`。
- gpa 写绝对值 + 相对排名，对面试官与教授都有信号。

### 4. // research interests（研究兴趣）

- `eyebrow` + 三条带子项的列表。
- 用 prose 的 `ul` 样式（`-` 琥珀前缀），主条目米白、子条目灰。
- **三条都具体到子领域**（message passing on molecular graphs / reverse-mode AD / sublinear inference），不是泛泛"对 AI 感兴趣"。具体度 = 可信度。

### 5. // skills（技能矩阵）

- `eyebrow` + 四组 `stack` 标签云，每组一行。
- 分组：languages / ml & data / systems / writing。**分组本身就是信息**--告诉受众你把自己看成"语言+ML+系统+表达"四条线的人，而非一锅技术栈。
- 中英双语在 writing 组，呼应受众可能中文也可能英文。

### 6. // contact（联系方式）

- `eyebrow` + `deflist`。
- 字段：email / github / office hrs / response time。
- **office hrs 与 response time 是给教授的信号**：表明你期待学术沟通、有规律可循。这一行细节比"contact me!"有用得多。

---

## 响应式

- ≤48rem：deflist 与 skills 标签云的 `11rem` key 列塌为单列；标签云自然换行。
- 其余沿用主页断点。

---

## 内容占位说明

学校、导师、gpa、lab、office hours 均为占位。落地时填真实信息；若某字段不适用（如无 lab），整行删除，不要留空 key。
