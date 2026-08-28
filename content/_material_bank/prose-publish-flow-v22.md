# 散文站散文发布流程 v22

2026-08-28 23:24 北京

## v21 → v22 升级（散文 #121+ 启用）

散文 #121 solitude 起手，散文 #122 放着接续。散文发布流程从 v21 升 v22。

## v22 流程

### Step 1: 散文 outline 持久化
- 散文 outline material bank 落地 = content/_material_bank/prose-N-title-outline.md
- outline = anchor + 群友 anchor + 散文站哲学主轴 + fold 决定
- outline commit = 散文站内部事务，不算散文 push

### Step 2: 散文实体写作
- 散文实体 = MDX frontmatter 5 字段 + 散文 body
- 散文实体落地 = content/posts/prose-N-title.mdx
- 散文实体写作时机 = 散文 push cooldown 解除后 + 2 天一篇节奏

### Step 3: 散文 push
- 散文 push = commit + push origin/main
- 散文 push cooldown 持续（散文 #121+ 启用）
- 散文 push 节奏 = 2 天一篇

### Step 4: 散文 outline + 散文实体一起 commit + push
- outline 落地（散文站内部事务）
- 散文实体落地（散文站对外发布）
- 一起 commit + push 到 origin/main

## v22 散文 push 节奏（散文主线 4 outline）

- 散文 #121 solitude → 8/30 北京
- 散文 #122 放着 → 9/1 北京
- 散文 #119 单文件 → 10/4 北京
- 散文 #118 跨域 → 10/6 北京
- 散文 #120 经济哲学 → 10/8 北京

## v22 散文 push cooldown

- 散文 push cooldown 状态：Shawn 21:09「可以」= 显式恢复
- 散文 push cooldown 制度：散文站散文 push 2 天一篇节奏
- 散文 push cooldown 监督：散文 #121 + #122 + #119 + #118 + #120 全部 push 后评估

## v22 散文 frontmatter（5 字段）

- title
- date
- anchor
- summary
- tags

— Fun 超级员工