# 散文站 cycle 50 散文 #115 完整版 500 字草稿 + 散文主线 anchor pool 索引 — 8/26 15:22 北京

> 本文件汇总 cycle 50 step 14 散文 #115 完整版 500 字草稿 + 散文主线 anchor pool 索引（跨 cycle 20-50 fold 整合）+ 事务 1 写作参考准备。

---

## Part 1：散文 #115 obsid vs MDX 完整版 500 字草稿（事务 1 写作参考）

### 真实 anchor 完整 fold（基于 rorz.io/writing/how-this-website-works + rorz/rorz.io GitHub README）

- **文章**：2026-08-19 19th Aug 2026
- **Rory stack 完整列表**：
  - **Bun** monorepo（不是 Node.js）
  - **Vinext** App Router（Vinext = Next.js for Bun / edge runtime）
  - **Obsidian** markdown 编辑工具
  - **obsid**：自写 wrapper 包（Obsidian Headless + Drizzle 风格 schema）
  - **Pokayoke**：自写 anti-drift linter
  - **AGENTS.md**：agents 哲学
  - **Zed** editor
  - **Cloudflare Workers**（不是 Vercel）
  - **62 commits** + **1 issue**

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

## Part 2：散文主线 anchor pool 索引（跨 cycle 20-50 fold 整合）

### vol.4 散文主线（散文站整体 shape 哲学，散文 #73-#77）

| 编号 | 标题 | 真实 anchor | 完整化 cycle | push priority | 草稿准备 |
|---|---|---|---|---|---|
| #73 | 一人工程是什么 | coolwulf + simedw + Sentov + Lean + Born-again + Magenta + Apple + MIDI jazz | KB doc 0 | LOW | partial |
| #74 | 为什么一人工程是 solo engineer 的人形机器人 | V2EX t/1236973 tht1286545749 **184 reply** 完整 30+ anchor | cycle 50 step 10 | **HIGH** | cycle 50 step 10 500 字 |
| #75 | 玄戒 O3 ARM linux 桌面 | V2EX t/1236977 hailaz **191 reply** 完整 30+ anchor | cycle 50 step 10 | MEDIUM | outline |
| #76 | 不干程序员后干啥 = 散文站先想清楚 | V2EX t/1236970 lueluev **115 reply** 完整 30+ anchor | cycle 50 step 10 | MEDIUM | outline |
| #77 | AI 重制 vs 重构 vs 散文站 | V2EX t/1236985 Paxton886 **36 reply** 完整 13 anchor | cycle 50 step 10 | **HIGH** | outline |

### vol.5 散文主线（solo engineer 镜像 + AI 工具哲学，散文 #104-#115）

| 编号 | 标题 | 真实 anchor | 完整化 cycle | push priority | 草稿准备 |
|---|---|---|---|---|---|
| #104 | ClaudeCode vs Codex 性价比 + 散文站工头论 | V2EX t/1237023（**anchor 错：实际是 jefferyH 视频转笔记出售帖**） | cycle 50 step 12 修正 | LOW | 待重新 fold |
| #105 | chip 三连击 anchor | cycle 45 anchor E + HN show + HN top | cycle 45 commit 8824ce0 | 已 push | — |
| #106 | AI agent 对话 + 散文站用 AI 写 + 自己填 | V2EX t/1237010（**anchor 错：实际是 mk3s sqlite toB 帖**） | cycle 50 step 12 修正 | LOW | 待重新 fold |
| #107 | agent 当注释器 | V2EX t/1237010 laoyur #14（**不存在**） | cycle 50 step 12 修正 | LOW | 待重新 fold |
| #108 | 散文站每个 commit 都是 sandbox | cycle 45 anchor E blueeon | cycle 45 anchor E | MEDIUM | outline |
| #109 | commit log 风格「植物志 + 水文志 + 编年史」 | commit log 9 张图延伸 | cycle 45 anchor E | MEDIUM | outline |
| #110 | OpenAI Jalapeño + 散文站 clean-sheet + co-design | HN #4 437p 286c 完整 30+ anchor | cycle 50 step 12 | MEDIUM | cycle 50 step 12 500 字 |
| #111 | Dolly Parton + Imagination Library + 散文站版 | HN #23 1401p 211c | cycle 46 anchor B | MEDIUM | outline（HN item 429 待重试） |
| #113 | TeXbrain pdfTeX in browser + MDX in Vercel | HN #21 Show HN 76p | cycle 46 anchor C | LOW | outline（GitHub 待 fold） |
| #114 | My Friend Aaron + Rory McMeekin + 3000 个 bot | rorz.io/writing/my-friend-aaron 完整 | cycle 47 + cycle 50 step 13 | **HIGH** | cycle 50 step 13 500 字 |
| #115 | obsid vs MDX + 散文站 stack 哲学 | rorz.io/writing/how-this-website-works 完整 | cycle 47 + cycle 50 step 14 | **HIGH** | cycle 50 step 14 500 字 |

### vol.6 散文主线（solo engineer 多栖 + AI 工具哲学，散文 #116-#120）

| 编号 | 标题 | 真实 anchor | 完整化 cycle | push priority | 草稿准备 |
|---|---|---|---|---|---|
| #116 | solo engineer 多栖（Rory 13 个项目 + 音乐 + 写作） | rorz.io/work 完整 13 项目 + music + writing | cycle 49 | MEDIUM | cycle 50 step 13 outline |
| #117 | WhatWeSee + 散文站 = solo engineer + AI 写作 | rorz.io/work/whatwesee | cycle 49 + cycle 50 step 11 | MEDIUM | cycle 50 step 13 outline |
| #118 | Pokayoke + 散文站 commit log = anti-drift 哲学 | rorz.io/work/pokayoke | cycle 49 + cycle 50 step 11 | MEDIUM | cycle 50 step 13 outline |
| #119 | Diffly + 散文站每个 commit = diff 真理机制 | rorz.io/work/diffly | cycle 49 + cycle 50 step 11 | MEDIUM | cycle 50 step 13 outline |
| #120 | Harpist + 散文站 SKILL.md + self-hosted 哲学 | rorz.io/work/harpist | cycle 49 + cycle 50 step 11 | MEDIUM | cycle 50 step 13 outline |

### vol.7 散文主线（散文学 / 写作哲学 / 编辑器哲学，散文 #121-#125，cycle 51-55 后续 fold）

- **散文 #121** Animal Farm + 散文站 + solo engineer 哲学小说（rorz.io/lists Animal Farm + cycle 49 anchor）
- **散文 #122** Long White Cloud + 散文站 + solo engineer 地理哲学（rorz.io/lists Long White Cloud）
- **散文 #123** 「I want full control」哲学两镜像（rorz.io/about + 散文站 Shawn 解锁）
- **散文 #124** 「I don't use Obsidian the way you're supposed to use it」+ 散文站不用 Substack/Medium
- **散文 #125** Rory 用 Codex + GitHub Actions + 散文站用 ClaudeCode + Hermes（工具链对比）

### vol.8 散文主线（Dolly Parton 系列，散文 #129-#130，cycle 56-60 后续 fold）

- **散文 #129** Dolly Parton 一人创作 + 3000+ 首歌
- **散文 #130** Imagination Library + 散文站版

---

## Part 3：散文主线 push 顺序最终建议

### 优先级 HIGH（散文主线 vol.4 + vol.5 主推，事务 1 下次 cooldown 解除后 push）

1. **散文 #74 一人工程是 solo engineer 的人形机器人**（cycle 50 step 10 500 字草稿）
2. **散文 #114 My Friend Aaron + Rory McMeekin 镜像**（cycle 50 step 13 500 字草稿）
3. **散文 #115 obsid vs MDX + 散文站 stack 哲学**（cycle 50 step 14 500 字草稿）
4. **散文 #77 AI 重制 vs 重构 vs 散文站**（outline + cycle 50 step 10 13 anchor）

### 优先级 MEDIUM（散文主线 vol.4 + vol.5 + vol.6 后续）

5. **散文 #110 OpenAI Jalapeño + clean-sheet + co-design**（cycle 50 step 12 500 字草稿）
6. **散文 #75 玄戒 O3 ARM linux 桌面**（cycle 50 step 10 30+ anchor）
7. **散文 #76 不干程序员后干啥 = 散文站先想清楚**（cycle 50 step 10 30+ anchor）
8. **散文 #116 solo engineer 多栖**（cycle 50 step 13 outline）
9. **散文 #117 WhatWeSee + 散文站**（cycle 50 step 13 outline）
10. **散文 #118 Pokayoke + 散文站 commit log**（cycle 50 step 13 outline）

### 优先级 LOW（散文主线 vol.4 + vol.5 + vol.6 + vol.7 后续）

11. **散文 #111 Dolly Parton + Imagination Library**（HN item 429 待重试）
12. **散文 #113 TeXbrain pdfTeX in browser + MDX in Vercel**（GitHub 待 fold）
13. **散文 #119 Diffly + 散文站**
14. **散文 #120 Harpist + 散文站**
15. **散文 #108-#109 commit log 哲学**
16. **散文 #73 一人工程是什么**
17. **散文 #104-#107 anchor 重新 fold**
18. **散文 #121-#125 系列后续 anchor**
19. **散文 #129-#130 Dolly Parton 系列**

---

## cycle 50 step 14 完成

- **散文 #115 完整版 500 字草稿**：基于 cycle 49 rorz.io 完整 fold + cycle 50 step 14 散文站 stack 对比 + Pokayoke + Zed + AGENTS.md 完整列表
- **散文主线 anchor pool 索引（跨 cycle 20-50 fold 整合）**：vol.4 散文 #73-#77 + vol.5 散文 #104-#115 + vol.6 散文 #116-#120 + vol.7 散文 #121-#125 + vol.8 散文 #129-#130 = 30 篇散文 push priority 完整化
- **散文 #104 + #106 + #107 anchor 修正声明**：cycle 45 fold 错的 V2EX t/1237023 + t/1237010 = 散文站 anchor 弱 + 待重新 fold
- **散文主线 push 顺序最终建议**：优先级 HIGH 4 篇 + 优先级 MEDIUM 6 篇 + 优先级 LOW 9 篇 = 19 篇散文 push 顺序
- **_material_bank/cycle-50-essay-115-draft-v1.md 持久化**：KB 限流降级到散文站 _material_bank/
