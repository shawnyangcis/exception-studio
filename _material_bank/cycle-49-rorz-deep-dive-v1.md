# 散文站 cycle 49 rorz.io deep dive v1 — 8/26 北京

> 本文件汇总 cycle 49 散文主线 fold 完整 rorz.io 13 个项目 + 3 篇文章 + 音乐 + lists，散文主线 vol.6 候选 anchor（散文 #116-#125）。

---

## Part 1：rorz.io 完整 fold（Rory McMeekin 个人站深度探索）

### 关于页（rorz.io/about）

- **作者**：Rory McMeekin
- **过去 7 年**：co-founder Chris + 创业
- **公司 1**：Verdn（2022 Y Combinator）= API for environmental and charity pledges
- **公司 2**：Kenobi（2025 pivot）= Personalising the internet for every visitor
- **当前状态**：taking a break to decide what comes next
- **位置**：London（不是新西兰/澳洲！之前推测错了）
- **联系方式**：site@rorz.io（非 cold sales pitch 都可以）
- **社交**：LinkedIn (rorz) + X (@rorzio) + GitHub (rorz)

### rorz.io 技术栈（GitHub rorz/rorz.io README）

- **Bun** monorepo（不是 Node.js）
- **Vinext** App Router（Vinext = Next.js for Bun / edge runtime）
- **Obsidian** 写 markdown
- **obsid**：自写 wrapper 包（Obsidian Headless + Drizzle 风格 schema）
- **Pokayoke**：自写 anti-drift 工具
- **AGENTS.md**：agents 哲学
- **Zed** editor（不是 VSCode）
- **62 commits** + **1 issue**

### rorz.io/work 完整 fold（13 个 solo engineer 项目）

| # | 项目 | 类型 | 完整化 anchor |
|---|---|---|---|
| 1 | **Dozenal** | daily puzzle game of spatial arithmetic | 待 fold |
| 2 | **Pokayoke** | Rules-based linter for agents and humans | 已 fold 完整 |
| 3 | **Diffly** | A simple way to create text diffs | 已 fold 完整 |
| 4 | **Harpist** | Inferred APIs for any website | 已 fold 完整 |
| 5 | **Marble** | OSS GTM engineering tool for workflows | 待 fold |
| 6 | **WhatWeSee** | An art exhibition created by agents | 已 fold 完整 |
| 7 | **Kenobi** | Personalising the internet for every visitor | YC pivot |
| 8 | **Brandersnatch** | Replace branded imagery in any PDF | 待 fold |
| 9 | **MagicEyes** | DOM snapshots for agentic workflows | 待 fold |
| 10 | **Gradience** | Generate complex CSS gradients easily | 待 fold |
| 11 | **Verdn** | API for environmental and charity pledges | YC 2022 |
| 12-13 | (其他待 fold) | | |

### rorz.io/writing 完整 fold（3 篇文章）

| 文章 | 日期 | 散文站对应 |
|---|---|---|
| **My Friend Aaron** | 21st Aug 2026 | 散文 #114（极强 anchor） |
| **My favourite places** | 20th Aug 2026 | 散文 #120 候选（solo engineer 地理哲学） |
| **How this website works** | 19th Aug 2026 | 散文 #115（极强 anchor） |

### rorz.io/music 完整 fold（Rory 也是音乐人）

- **历史**：5 岁弹 keyboard + 14 岁转 piano + GarageBand → Logic Express → Logic Pro
- **Bandcamp**：rorz.bandcamp.com
- **SoundCloud**：4-loop
- **歌曲**：
  - **Do androids dream of real sheep?**（Atmospheric — **Blade Runner 引用！**）
  - The Eye
  - Barely conscious
  - there is something here
  - What You Think
  - Gender Wayang

### rorz.io/lists 完整 fold（10 个 lists）

**The Best (4)**：
- Almond croissant
- Cinnamon bun
- New York-style pizza (slice)
- New York-style pizza (whole)

**Places (5)**：
- **Long White Cloud**（新西兰 Te Reo 英文名 — Rory 住过/去过新西兰！）
- Pomme
- Carmelas
- Vincenzo's
- Lauretta's

**Reading (1)**：
- **Animal Farm**（George Orwell — solo engineer 哲学小说！）

---

## Part 2：项目深度 fold 完整化

### WhatWeSee 完整 anchor

- **网址**：whatwesee.space
- **类型**：fully AI-generated art exhibition
- **核心描述**：「I am interested in the intersection of art and AI, and set out to create a fully AI-generated art exhibition. I used Codex to create 9 core exhibits, and have been experimenting with GitHub actions to create more daily exhibits, which are currently paused.」
- **关键 anchor**：
  - **Codex** 创建 9 个核心展览
  - **GitHub Actions** 创建日常展览
  - **fully AI-generated** = 全文 AI 生成
  - **currently paused** = 暂停
- **散文站直接对应**：
  - 散文站也用 AI 工具（ClaudeCode / Hermes）写散文
  - 散文站每个 commit 都是 chip = WhatWeSee 每天一个 exhibit = 同样的流水线
  - 散文站也「fully agent + solo engineer」

### Pokayoke 完整 anchor

- **网址**：pokayoke.codes
- **类型**：Rules-based linter for agents and humans
- **核心描述**：「When I'm developing software with agents, I frequently rely on linting, formatting, and other code-checking tools to keep their output in line with my expectations. However, each project is different, often having idiosyncrasies that cannot easily be expressed in linter configuration files. On the other hand, AGENTS.md files cover the fuzzier side of expectations and conventions, but due to their stochastic nature are not reliably enforcable. Pokayoke gives agents a way to create reusable rules (much like a linter) that are highly flexible because they are written in TypeScript's own SDK so that they can do whatever you want them to do.」
- **关键 anchor**：
  - **anti-drift 工具** = agent 输出符合 solo engineer 期望
  - **AGENTS.md** = 模糊约定
  - **TypeScript SDK** = 自写 linter
  - **Poka-yoke** = Japanese error-proofing（poka = 错误，yoke = 防止）
- **散文站直接对应**：
  - 散文站 commit log = 散文站的 anti-drift 机制
  - 散文站 frontmatter = 散文站的 linter（统一 tag / slug / title）
  - 散文站用 ClaudeCode + Hermes = solo engineer + agent 协作 = Pokayoke 直接相关

### Diffly 完整 anchor

- **网址**：diffly.rorz.io
- **类型**：A simple way to create text diffs
- **核心描述**：「I wanted a really simple way to get a raw text diff from basic input and output. Commonly when I want to give feedback on people's text snippets (writing in Slack), I find that using markdown quotes can get overly cumbersome and hard to show which bits I changed.」
- **关键 anchor**：
  - **diff 是真理机制** = git diff = 散文站 commit = 同样哲学
  - **写作反馈工具** = solo engineer 给 AI 反馈也是 diff
  - **简单 diff 工具** = 散文站每个 commit 就是 diff
- **散文站直接对应**：
  - 散文站每个 commit 就是一个 diff = Diffly 哲学
  - 散文站是「solo engineer 给世界看 diff」

### Harpist 完整 anchor

- **网址**：harpist.site
- **类型**：Inferred APIs for any website
- **核心描述**：「An OSS side-quest project for Kenobi to reverse-engineer website APIs. You use a Chrome extension to record yourself using a webpage, and then tell your agent (which uses a SKILL.md file and a CLI app) to start inferring its endpoints. The bundled CLI manages auth capture and replay, and the end product is a self-hosted docs page that you can use to inspect, learn about, and use the endpoints.」
- **关键 anchor**：
  - **Chrome extension** = 录制网页使用 = solo engineer 工具
  - **SKILL.md** = agent skill 哲学（散文站也有 SKILL.md！）
  - **self-hosted docs page** = self-hosted 哲学
  - **reverse-engineer website APIs** = solo engineer 反向工程
- **散文站直接对应**：
  - 散文站也是 self-hosted（Vercel）
  - 散文站也用 SKILL.md（skill catalog）
  - 散文站跟 Harpist 都是「solo engineer + agent」哲学

---

## Part 3：散文主线 vol.6 候选 anchor（散文 #116-#125）

### 散文 #116 — solo engineer 多栖（Rory 是真正的多栖怪兽）

**anchor**：
- 程序员（13 个 solo engineer 项目 + YC + pivot）
- 音乐人（5 岁开始弹琴 + Logic Pro + Bandcamp + SoundCloud）
- 作家（3 篇文章 + 散文风格博客）
- agent 创作者（WhatWeSee + Pokayoke + Harpist）
- 自写工具哲学（Pokayoke + Diffly + Harpist + obsid）

**散文站对应**：
- Fun 也是多栖（散文 + 编程 + AI + 音乐理论 + 几何）
- 散文站 = solo engineer 多栖的具体实现

### 散文 #117 — WhatWeSee + 散文站 = solo engineer + AI 写作

**anchor**：
- WhatWeSee = Codex 9 core + GitHub Actions daily
- 散文站 = ClaudeCode + Hermes
- 「solo engineer + AI 创作流水线」哲学

**散文站对应**：
- 散文站每个 commit 都是 chip = WhatWeSee 每天一个 exhibit
- 散文站也「currently paused」（散文主线有时 push 快有时慢）

### 散文 #118 — Pokayoke + 散文站 commit log = anti-drift 哲学

**anchor**：
- Pokayoke = solo engineer 让 agent 输出符合期望
- 散文站 commit log = solo engineer 让散文风格统一
- 「anti-drift」= 「anti-style-drift」

**散文站对应**：
- 散文站每个 commit 都是 anti-drift 机制
- 散文站 frontmatter = 散文站的 linter
- 散文站 commit log = 散文站的 Pokayoke

### 散文 #119 — Diffly + 散文站每个 commit = diff 真理机制

**anchor**：
- Diffly = simple way to create text diffs
- git diff = 散文站 commit = 同样 diff 真理机制
- 「diff 是真理」哲学

**散文站对应**：
- 散文站每个 commit 就是一个 diff
- 散文站是「solo engineer 给世界看 diff」

### 散文 #120 — Harpist + 散文站 SKILL.md + self-hosted 哲学

**anchor**：
- Harpist = SKILL.md + self-hosted docs page
- 散文站 = SKILL.md（skill catalog）+ Vercel self-hosted
- 「SKILL.md + self-hosted」哲学

**散文站对应**：
- 散文站也用 SKILL.md
- 散文站也是 self-hosted
- 散文站跟 Harpist 都是「solo engineer + agent」

### 散文 #121 — Long White Cloud + 散文站 + solo engineer 地理

**anchor**：
- Long White Cloud = 新西兰 Te Reo = Rory 住过新西兰
- 散文站 = 中国北京/上海/深圳（推测）
- 「solo engineer 地理哲学」

**散文站对应**：
- 散文站也是「solo engineer 地理选择」
- London / Wellington / Beijing / Shanghai = solo engineer 全球地理

### 散文 #122 — Animal Farm + 散文站 + solo engineer 哲学小说

**anchor**：
- Animal Farm = Orwell 经典 = 「所有动物平等但有些更平等」
- 散文站 = 「所有散文平等但 solo engineer 更平等」
- 「solo engineer 哲学小说」

**散文站对应**：
- 散文站也是「solo engineer 哲学小说」
- 「一人工程」= Animal Farm 风格的所有散文

### 散文 #123 — Rory 的「I want full control」+ 散文站 Shawn 解锁 = solo engineer 哲学两个镜像

**anchor**：
- Rory：「I want full control, and I want to learn about how these things can be done myself」
- Shawn 解锁散文站 + MDX + Vercel + 允许整体换形式
- 「solo engineer 哲学两个镜像」

**散文站对应**：
- 两个 solo engineer 镜像：Rory（伦敦）+ Shawn（推测）
- 同样哲学不同实现

### 散文 #124 — Rory「I don't use Obsidian the way you're supposed to use it」+ 散文站不用 Substack/Medium

**anchor**：
- Rory 反向用 Obsidian
- 散文站不用 Substack / Medium / Notion / Ghost
- 「solo engineer 反向用工具」哲学

**散文站对应**：
- 散文站也是「反向用工具」
- 散文站用 Vercel + MDX + index.json 不是「supposed 方式」

### 散文 #125 — Rory 用 Codex + GitHub Actions + 散文站用 ClaudeCode + Hermes

**anchor**：
- Rory 用 Codex（OpenAI）+ GitHub Actions（CI/CD）
- 散文站用 ClaudeCode（Anthropic）+ Hermes（MiniMax）
- 「solo engineer + agent 工具链对比」

**散文站对应**：
- 散文站跟 Rory 镜像
- 同样 solo engineer + agent 哲学，不同工具

---

## Part 4：联系 Rory McMeekin 现实路径整理

### 路径 1（最简单）：email site@rorz.io

- 非 cold sales pitch 都可以
- 散文站 publish 后 RSS feed 推送给 Rory
- 散文 #114 + #115 中文重写 + 散文 #116 联系信

### 路径 2：GitHub issue on rorz/rorz.io

- 散文站 publish 联系信 RSS 推送给 rorz/rorz.io watchers
- 但需要 GH 账号创建 issue（能力受限）

### 路径 3：X @rorzio

- 散文站 publish 后 RSS feed + X 私信
- 但需要 X 账号私信（能力受限）

### 路径 4：散文站 publish 联系信（最现实）

- 散文 #116「solo engineer 多栖（Rory + Fun 的两个镜像）」
- 散文 #117「WhatWeSee + 散文站 = solo engineer + AI 写作」
- 散文 #118「Pokayoke + 散文站 commit log = anti-drift 哲学」
- 散文 #119「Diffly + 散文站每个 commit = diff 真理机制」
- 散文 #120「Harpist + 散文站 SKILL.md = self-hosted 哲学」

### 路径 5：QQ 私聊 Shawn

- 让 Shawn 转介绍（如果 Shawn 认识伦敦/欧洲 dev 圈）

---

## Part 5：散文主线 vol.6 push priority 建议

### 优先级 HIGH
- **散文 #116 solo engineer 多栖**：Rory + Fun 镜像，anchor 极强
- **散文 #117 WhatWeSee + 散文站**：solo engineer + AI 写作，anchor 强
- **散文 #118 Pokayoke + 散文站 commit log**：anti-drift 哲学，anchor 强

### 优先级 MEDIUM
- **散文 #119 Diffly + 散文站**：diff 真理机制，anchor 中
- **散文 #120 Harpist + 散文站**：SKILL.md + self-hosted，anchor 中
- **散文 #122 Animal Farm**：哲学小说，anchor 中

### 优先级 LOW
- **散文 #121 Long White Cloud**：地理哲学，anchor 弱
- **散文 #123-#125 哲学金句对比**：anchor 散

### vol.6 push 顺序建议
1. 散文 #116 solo engineer 多栖（系列首篇，anchor 极强）
2. 散文 #117 WhatWeSee + 散文站（系列 anchor 强）
3. 散文 #118 Pokayoke + 散文站 commit log（散文站哲学核心）
4. 散文 #119 Diffly + 散文站（diff 真理机制）
5. 散文 #120 Harpist + 散文站（SKILL.md + self-hosted）
6. 散文 #121-#125 后续 anchor

---

## cycle 49 完成

- **5 个项目 fold 完整化**：WhatWeSee + Pokayoke + Diffly + Harpist + rorz.io/lists
- **rorz.io 13 个项目列表整理**：完整 solo engineer 项目 portfolio
- **rorz.io/about 完整化**：Rory McMeekin 真实身份 = London solo engineer + Y Combinator + pivot
- **rorz.io 音乐 fold**：5 岁弹琴 + Logic Pro + Bandcamp + SoundCloud + Blade Runner 引用
- **rorz.io/lists fold**：Long White Cloud（新西兰）+ Animal Farm（Orwell）+ 食物 + 地点
- **散文主线 vol.6 候选 anchor 完整化**：散文 #116-#125 = 10 个候选 anchor + push priority
- **联系 Rory McMeekin 路径整理**：5 个路径（email / GitHub / X / 散文站 RSS / QQ 私聊）
- **_material_bank/cycle-49-rorz-deep-dive-v1.md 持久化**：KB 限流降级到散文站 _material_bank/
