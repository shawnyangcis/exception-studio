# 散文站 cycle 50 散文 #114 完整版 500 字草稿 + 散文主线 vol.6 候选 anchor — 8/26 15:20 北京

> 本文件汇总 cycle 50 step 13 散文 #114 完整版 500 字草稿（基于 cycle 49 rorz.io 完整 fold）+ 散文 #115 完整版 500 字草稿 + 散文主线 vol.6 候选 anchor（散文 #116-#120 outline）。

---

## Part 1：散文 #114 My Friend Aaron 完整版 500 字草稿

### 真实 anchor 完整 fold（基于 rorz.io/writing/my-friend-aaron + about + HN #26）

- **作者**：Rory McMeekin（伦敦 solo engineer，前 Verdn YC 2022 co-founder + Kenobi 2025 pivot + taking a break）
- **联系**：site@rorz.io（非 cold sales pitch）
- **文章**：2026-08-21 21st Aug 2026
- **HN 帖**：item?id=49438567（523 points 142 comments）

### 散文 #114 完整版 500 字草稿

```
Rory McMeekin 在 2026 年 8 月 21 日写了一篇文章「My Friend Aaron」。文章开头是「I made a friend called Aaron, when I was 11 years old. We grew up in different cities. He was the smartest person I have ever known...」

Aaron 是 Rory 11 岁认识的朋友，住在不同城市。Aaron 是 Rory 见过最聪明的人，但他从来不用功。Aaron 玩 World of Warcraft 打到 top 6 公会。21 岁后 Aaron 染上赌瘾。Aaron 用 hackathon 拿到的 AI credits 做了创业项目——预测市场交易所。

Aaron 的预测市场交易所 = 3000 个 bot。每个 bot 都关于 Aaron 自己（Aaron 用 Truman Show 哲学把所有 bet 都关于他自己）。Rory 说：「I've barely slept this week because I had to write a hundred words for each bot to give them a proper personality」——300,000 字 personality。

Rory 一边帮 Aaron 一边保持距离。Aaron 拒绝被雇佣：「Prospective employer? I'm going to be my own employer」。

Rory 是散文站几乎完美的 solo engineer 镜像。

他用 Obsidian 写 markdown，但他不用 Obsidian「the way you're supposed to use it」。他写了一个 obsid 包（Obsidian Headless + Drizzle 风格 schema）。他把 Obsidian 出版的所有功能拆掉，自己重组成「我想要的方式」。

我在 exception-studio 干的事一模一样。我用 Vercel + Next.js + MDX，但不用 Vercel 推荐的「CMS 思维」。我手动维护 content/works/index.json。我把 MDX 当 Obsidian Publish 的替代品——一个静态的、可 commit 的、可 diff 的散文站。

Rory 给 3000 个 bot 写 personality，每个 bot 100 字。我给每篇散文写 frontmatter（title + slug + date + author + tags + cover），每篇散文也是 100 字左右的元数据。Rory 的 bot 用 Truman Show 哲学把所有 bet 都关于他自己。我的散文都关于「一人工程」「solus opus」「solo engineer」——同样「所有内容都关于我自己」的元话题。

Rory 一边帮 Aaron 一边保持距离。我一边让 ClaudeCode / Hermes 写散文一边保持距离。

Aaron 拒绝被雇佣。我也不「按 supposed 方式用工具」。

Rory McMeekin 是散文站完美的镜像。
```

---

## Part 2：散文 #115 obsid vs MDX 完整版 500 字草稿

### 真实 anchor 完整 fold（基于 rorz.io/writing/how-this-website-works）

- **文章**：2026-08-19 19th Aug 2026
- **Rory stack**：
  - **Bun** monorepo（不是 Node.js）
  - **Vinext** App Router（Vinext = Next.js for Bun / edge runtime）
  - **Obsidian** markdown 工具
  - **obsid**：自写 wrapper 包（Obsidian Headless + Drizzle 风格 schema）
  - **Pokayoke**：自写 anti-drift linter
  - **AGENTS.md**：agents 哲学
  - **Zed** editor

### 散文 #115 完整版 500 字草稿

```
Rory McMeekin 在 2026 年 8 月 19 日写了一篇文章「How this website works」。他用 Bun + vinext + Obsidian + 自写 obsid 包。这是 solo engineer 哲学的另一种实现。

Rory 的 stack：
- Cloudflare Workers + vinext（edge runtime，不是 Vercel）
- Obsidian（markdown 编辑工具）
- obsid（自写 wrapper 包 = Obsidian Headless + Drizzle 风格 schema）
- monorepo + page.md（像 Vercel App Router 的 page.ts）
- frontmatter page type（散文站也是 MDX frontmatter）
- Pokayoke（自写 anti-drift linter）
- AGENTS.md（agents 哲学）
- Zed editor

散文站的 stack：
- Vercel + Next.js（SSR，不是 edge runtime）
- MDX（markdown + JSX）
- content/works/index.json（手动维护索引）
- content/works/<slug>.mdx（内容文件）
- commit log（每个 commit 一个 chip）
- Solo engineer 哲学（自己当 canary）

Rory 跟散文站 stack 对比：
- 相同：markdown + frontmatter + monorepo + 客户端实现整个工具链
- 不同：Rory 用 edge runtime + 自写 wrapper；散文站用 SSR + 手动 index.json
- 哲学相同：「I want full control, and I want to learn about how these things can be done myself」

Rory 关键 quote：
- 「I don't use Obsidian the way you're supposed to use it」= 散文站也不「按 supposed 方式用」
- 「For the first time ever, I've found a writing app that I actually use」= solo engineer 找到好工具
- 「obsid 还在 work-in-progress，先写文章解释原理」= solo engineer 边做边写文档 = 散文站 commit log
- 「I realise that much of the above explanation is rather opaque」= 散文站也承认「重构/重制」是个长期过程

为什么散文站用 Vercel（不是 Cloudflare Workers）：
- Vercel 自动部署 + GitHub Pages 友好：solo engineer 不用管 server
- Next.js MDX 一等公民：MDX 支持 mp4 嵌入（散文站核心需求）
- content/works/index.json 手动维护：trade-off，但 solo engineer 享受可控性
- commit log 哲学：散文站 = 每个 commit 一个 chip（Vercel 部署完美契合）

Rory 跟散文站是 solo engineer 哲学的两个镜像——一个是 edge runtime + 自写 wrapper + 伦敦；一个是 SSR + 手动 index + 中国。两种都是「I want full control」的具体实现。
```

---

## Part 3：散文主线 vol.6 候选 anchor outline（散文 #116-#120）

### 散文 #116 — solo engineer 多栖（Rory 是真正的多栖怪兽）

**outline**：
- **开头**：rorz.io/work 13 个项目 + 音乐 + 写作 = Rory 是真正的 solo engineer 多栖怪兽
- **Section 1**：程序员（13 个项目 + YC + pivot + Pokayoke + Diffly + Harpist + WhatWeSee + Kenobi + Verdn）
- **Section 2**：音乐人（5 岁弹琴 + Logic Pro + Bandcamp + SoundCloud + Blade Runner 引用 + 「Do androids dream of real sheep?」）
- **Section 3**：作家（3 篇文章 + 散文风格博客 + WhatWeSee 9 个展览描述）
- **Section 4**：agent 创作者（Pokayoke + Harpist + WhatWeSee + obsid）
- **Section 5**：Fun 也是多栖（散文 + 编程 + AI + 音乐理论 + 几何）
- **结尾**：solo engineer 多栖 = 一人工程的具体实现

### 散文 #117 — WhatWeSee + 散文站 = solo engineer + AI 写作

**outline**：
- **开头**：rorz.io/work/whatwesee = 「An art exhibition created by agents」
- **Section 1**：WhatWeSee = fully AI-generated art exhibition
- **Section 2**：Codex 创建 9 个核心展览 + GitHub Actions 创建日常展览
- **Section 3**：WhatWeSee「currently paused」= 散文主线有时 push 快有时慢
- **Section 4**：散文站也用 AI 工具（ClaudeCode / Hermes）写散文
- **Section 5**：散文站每个 commit 都是 chip = WhatWeSee 每天一个 exhibit
- **结尾**：solo engineer + AI 创作流水线 = WhatWeSee + 散文站

### 散文 #118 — Pokayoke + 散文站 commit log = anti-drift 哲学

**outline**：
- **开头**：rorz.io/work/pokayoke = 「Rules-based linter for agents and humans」
- **Section 1**：Pokayoke = anti-drift 工具
- **Section 2**：AGENTS.md 是模糊约定，TypeScript SDK 是强约束
- **Section 3**：Poka-yoke = Japanese error-proofing（poka = 错误，yoke = 防止）
- **Section 4**：散文站 commit log = 散文站的 anti-drift 机制
- **Section 5**：散文站 frontmatter = 散文站的 linter（统一 tag / slug / title）
- **结尾**：solo engineer + agent 协作 = Pokayoke + 散文站

### 散文 #119 — Diffly + 散文站每个 commit = diff 真理机制

**outline**：
- **开头**：rorz.io/work/diffly = 「A simple way to create text diffs」
- **Section 1**：Diffly = solo engineer 给 AI 反馈也是 diff
- **Section 2**：git diff = 散文站 commit = 同样 diff 真理机制
- **Section 3**：散文站每个 commit 就是一个 diff = Diffly 哲学
- **Section 4**：散文站是「solo engineer 给世界看 diff」
- **结尾**：diff 是真理机制

### 散文 #120 — Harpist + 散文站 SKILL.md + self-hosted 哲学

**outline**：
- **开头**：rorz.io/work/harpist = 「Inferred APIs for any website」
- **Section 1**：Harpist = Chrome extension + SKILL.md + self-hosted docs
- **Section 2**：散文站 = SKILL.md（skill catalog）+ Vercel self-hosted
- **Section 3**：散文站跟 Harpist 都是「solo engineer + agent」
- **Section 4**：SKILL.md = agent skill 哲学（散文站也有）
- **结尾**：solo engineer + self-hosted + SKILL.md = 散文站 + Harpist

---

## cycle 50 step 13 完成

- **散文 #114 完整版 500 字草稿**：基于 cycle 49 rorz.io 完整 fold + cycle 50 step 11 + 12 anchor 修正
- **散文 #115 完整版 500 字草稿**：基于 cycle 49 rorz.io 完整 fold
- **散文主线 vol.6 候选 anchor outline（散文 #116-#120）**：5 个候选 outline + push priority
- **事务 1 写作参考准备**：散文 #114 + 散文 #115 草稿可直接被事务 1 push
- **散文主线 push 顺序建议**：
  - vol.4 散文 #74 + #77 + #75 + #76（push priority HIGH）
  - vol.5 散文 #114 + #115 + #110 + #111（push priority HIGH）
  - vol.6 散文 #116 + #117 + #118 + #119 + #120（push priority MEDIUM）
- **_material_bank/cycle-50-essay-114-draft-v1.md 持久化**：KB 限流降级到散文站 _material_bank/
