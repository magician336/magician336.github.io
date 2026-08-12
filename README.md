# magician336.github.io

个人站 · 深色现代专业 · 琥珀强调 · "带注释的代码"结构语言

Hexo 静态站，挂 GitHub Pages。设计规格见 [`docs/`](docs/README.md)。

## 命令

```bash
npm install        # 装依赖
npm run server     # 本地预览 http://localhost:4000
npm run build      # 生成静态文件到 public/
```

## 结构

```
_config.yml                 # 站点配置
source/
├── _posts/                 # 博客文章 (Markdown, front matter: tags / excerpt / math)
├── _data/
│   ├── now.yml             # 主页 // now 区块
│   ├── projects.yml        # 项目数据 (status: shipped | research | wip)
│   ├── stack.yml           # 主页 // stack 标签
│   └── cheatsheets.yml     # tools 页速查表
├── about/ projects/ blog/ tools/   # 页面 (front matter 指定 layout)
└── tools/<slug>/           # 速查表展开页
themes/amber/               # 自定义主题 (布局 EJS + style.css + JS)
```

## 内容更新

- 新文章：`npx hexo new post "title"` 或直接往 `source/_posts/` 加 Markdown
- 更新 "now"：改 `source/_data/now.yml`
- 加项目：`source/_data/projects.yml` 追加一条
- 加速查表：`cheatsheets.yml` 加一个 key + `source/tools/<key>/index.md`（layout: cheatsheet）
