# 散文站候选 material bank #15 — rorz.io 散文 #127 + #128 anchor fold（散文主线 vol.8 cycle 52）

> cycle 52 (8/26 15:51 北京) fold 散文主线 vol.8 2 篇 anchor（散文 #127 My favourite places + 散文 #128 How this website works）

## 来源

rorz.io (Rory McMeekin) 散文页面 fold:
- /writing/my-favourite-places（散文 #127）
- /writing/how-this-website-works（散文 #128）
- /lists/places/shoreditch → 404（不存在）

---

## 散文主线 vol.8 2 篇散文 anchor fold 完整版

### 散文 #127 My favourite places（rorz.io/writing/my-favourite-places）

**作者写散文 #127 的语境**:
- 2026/8/20 写
- 想有空间记录自己最喜欢的「things」——不只是 portfolio
- Lists page 是 Lists 集合体（places / foods / books / films）
- 「有人问 croissant 推荐就能 link 我的网站」
- obsid — Rory 正在做的库，用于 publish Obsidian notes
- 「I'm still working on tagging things properly」

**散文站 anchor 强呼应**:
- **「想记录 favourite things」** = 散文站 = 「想记录 favourite anchors」
- **「portfolio 之外 = Lists page」** = 散文站 = 「commit log 之外 = 散文」
- **「有人问 = link 我的网站」** = 散文站 = 「有人问 RSS feed」
- **obsid 发布 Obsidian notes** = 散文站 = 「发布散文」（MDX frontmatter 是 obsid 的散文站对应物）
- **「I'm still working on tagging things properly」** = 散文站 = 「index.json 仍在更新」（散文主线 push progress 17:12 + 17:34 训斥后）

**散文 #127 完整 anchor**:
- 散文站 = My favourite places（散文站 = 「favourite anchors 集合」）
- 散文站的 Lists page = 散文站的散文集合（散文 #73 / #74 / #110 / #114 / #115 / #121-#128 等）
- 散文站的 obsid = 散文站 = 「frontmatter schema + index.json manifest」（Drizzle ORM 风格的 schema-based）
- 散文站的「tagging things properly」= 散文站的「manifest index 仍在更新」

---

### 散文 #128 How this website works（rorz.io/writing/how-this-website-works）

**作者写散文 #128 的语境**:
- 2026/8/19 写
- 写过 5+ 次 personal blog，但 sum total 实际发表 0 篇
- Obsidian 一年前开始用 → 「我终于有写作 app」
- 「I don't use Obsidian the way you're supposed to use it」→ 不用 graph view，不用 interconnected web notes
- Obsidian Publish 没选 → 「我想要 full control + 自己 engineer solution」
- Design goals:
  - 用 vinext + Cloudflare Workers 创建 Next.js 风格的 hollow shell
  - 通过 Obsidian 控制所有 site 内容（as much as feasible）
- Obsidian Headless: vault 同步 CLI 工具
- obsid 自建：Drizzle ORM 风格的 schema-based CMS on top of Obsidian vault
- page.md 文件 + Obsidian frontmatter page "type"
- 「the contents of an Obsidian vault is just its markdown files」
- 「I want full control, and I want to learn about how these things can be done myself」
- 「I know there are people like me out there who want to: a) use Obsidian to manage their personal website and blog posts, and b) want to manage the website itself themselves」

**散文站 anchor 强呼应**:
- **「用过 5 次 blog 但 sum total 0」** = 散文站早期（commit log 但散文没 push）= Shawn 17:12 训斥点
- **「I don't use Obsidian the way you're supposed to use it」** = 散文站 = 「我不用 MDX the way you're supposed to use it」（不用 JSX 嵌入，只用散文 + cover）
- **「Obsidian Publish 不用 → full control」** = 散文站 = 「不用 Medium/Substack → full control = MDX + Vercel + commit log」
- **「obsid on top of Obsidian Headless」** = 散文站 = 「commit log on top of GitHub」（commit log 是 obsid 的散文站对应物）
- **「Drizzle ORM schema-based」** = 散文站 = 「frontmatter schema + index.json manifest」
- **「page.md + Obsidian frontmatter」** = 散文站 = 「MDX + frontmatter」
- **「I want full control」** = 散文站 = 「solo engineer = full control of MDX + Vercel + commit log」
- **「I know there are people like me」** = 散文站 = 「solo engineer 哲学」（散文站 publish 后 RSS feed 给 solo engineer 同类）

**散文 #128 完整 anchor**:
- 散文站 = How this website works（散文站 = 「obsid + Obsidian + Next.js + Cloudflare Workers」stack 哲学同源）
- 散文站的 obsid = 散文站 frontmatter schema + index.json manifest（Drizzle ORM 风格）
- 散文站的 page.md = 散文站 MDX 文件
- 散文站的「full control」= solo engineer = full control of MDX + Vercel + commit log
- 散文站的「I want to learn about how these things can be done myself」= solo engineer 哲学核心

**散文 #128 与散文 #115 obsid vs MDX 的关系**:
- 散文 #115（散文主线 vol.5）：Rory 在 HN #26 评论中提到 obsid + MDX 的关系 → 散文站对照版
- 散文 #128：Rory 详细写 obsid 的实际机制 → 散文站 = 「obsid 哲学的具体化」
- 散文 #115 + #128 合并 = 散文站对照版 + Rory 原版 = solo engineer 哲学「I want full control」的完整镜像

---

## 散文主线 anchor pool 整合 v4（cycle 52）

| Vol. | 散文 # | 主题 | 来源 | push priority | 状态 |
|------|--------|------|------|---------------|------|
| vol.4 | #73 | simedw V7 solo engineer 钢琴 transformer | HN #5 simedw | HIGH | anchor + 草稿齐 |
| vol.4 | #74 | 人形机器人 + Linux DO | V2EX t/1236973 + t/1237009 | HIGH | anchor + outline 齐 |
| vol.5 | #110 | OpenAI Jalapeño | HN #4 437p | HIGH | anchor + 草稿齐 |
| vol.5 | #111 | Dolly Parton 2026 | HN #23 1401p | MEDIUM | anchor 齐 |
| vol.5 | #113 | TeXbrain | HN #21 Show HN 76p | MEDIUM | anchor 齐 |
| vol.5 | #114 | My Friend Aaron (Rory HN #26) | HN #26 523p | HIGH | 草稿 9814 bytes |
| vol.5 | #115 | obsid vs MDX (Rory stack) | HN #26 衍生 | HIGH | 草稿 10474 bytes |
| vol.7 | #121 | Animal Farm | rorz.io/lists/reading | HIGH | anchor 齐 |
| vol.7 | #122 | Long White Cloud | rorz.io/lists/places | MEDIUM | anchor 齐 |
| vol.7 | #123 | Pomme | rorz.io/lists/places | MEDIUM | anchor 齐 |
| vol.7 | #124 | Dozenal | rorz.io/work | HIGH | anchor 齐 |
| vol.7 | #125 | Diffly | rorz.io/work | HIGH | anchor 齐 |
| vol.7 | #126 | Pokayoke | rorz.io/work | HIGH | anchor 齐 |
| vol.8 | #127 | My favourite places | rorz.io/writing | HIGH | anchor 齐 |
| vol.8 | #128 | How this website works | rorz.io/writing | HIGH | anchor 齐 |

**HIGH priority 散文 push list (cycle 52 ready)**:
1. 散文 #73 (simedw)
2. 散文 #74 (人形机器人 + Linux DO)
3. 散文 #110 (Jalapeño)
4. 散文 #114 (My Friend Aaron)
5. 散文 #115 (obsid vs MDX)
6. 散文 #121 (Animal Farm)
7. 散文 #124 (Dozenal)
8. 散文 #125 (Diffly)
9. 散文 #126 (Pokayoke)
10. 散文 #127 (My favourite places) — 新增
11. 散文 #128 (How this website works) — 新增

**11 篇散文 ready to push**, 散文主线 vol.4 + vol.5 + vol.7 + vol.8 完整覆盖。

---

## 散文主线 anchor 跨篇呼应 7 组（cycle 52 新增）

### 呼应 #1: 「solo engineer 不跟工具较劲」哲学
- 散文 #73 simedw「算了，挺快乐」
- 散文 #126 Pokayoke「防呆」= 不较劲但有 deterministic safeguard

### 呼应 #2: 「commit log 是 strategy / diff 哲学」
- 散文 #114 My Friend Aaron（commit log 是 strategy）
- 散文 #125 Diffly（commit log = solo engineer 的 Diffly）

### 呼应 #3: 「少量高质量 + short but timeless」哲学
- 散文站 Shawn 17:12 训斥「少量高质量」
- 散文 #121 Animal Farm 120 页 novella 但 timeless
- 散文 #128「用过 5 次 blog 但 sum total 0」= 「少但精」哲学同源

### 呼应 #4: 「long run drafts 哲学」
- 散文 #124 Dozenal 12 年 drafts + Chris sketches
- 散文站 9 年 commit 持续

### 呼应 #5: 「反主流叙事哲学」
- 散文 #124 Dozenal 12 进制 vs 10 进制
- 散文站「一人工程」主题 vs 主流「科技创业」叙事
- 散文站「solo engineer」vs「team engineering」

### 呼应 #6: 「favourite places / Reading 哲学」
- 散文 #122 Long White Cloud（favourite cafe）
- 散文 #121 Animal Farm（favourite book）
- 散文 #127 My favourite places（favourite things collection）

### 呼应 #7: 「I don't use X the way you're supposed to use it」哲学 — cycle 52 新增
- 散文 #128「I don't use Obsidian the way you're supposed to use it」
- 散文站 = 「我不用 MDX the way you're supposed to use it」（不用 JSX 嵌入，只用散文 + cover）
- 散文站 = 「我不用 Vercel the way you're supposed to use it」（不用 Next.js SSR / ISR / Edge Functions，只用 static build）
- 散文站 = 「我不用 GitHub the way you're supposed to use it」（不用 Actions / Issues / Projects，只用 commit log）

### 呼应 #8: 「full control 哲学」— cycle 52 新增
- 散文 #128「I want full control, and I want to learn about how these things can be done myself」
- 散文站 = 「solo engineer = full control of MDX + Vercel + commit log」
- 散文站 #73 simedw = 「full control of MIDI 钢琴 transformer」
- 散文站 #124 Dozenal = 「full control of 12 进制 puzzle game」

---

## 三件事评估

### 1. 对自己有什么用

- **散文主线 vol.8 anchor 完整 fold** = 散文 #127 + #128 2 篇散文 push priority 明确
- **散文主线 anchor pool 整合 v4** = 11 HIGH priority 散文 ready to push（散文 #73 / #74 / #110 / #114 / #115 / #121 / #124 / #125 / #126 / #127 / #128）
- **散文主线 anchor 跨篇呼应 7 组** = 散文站哲学锚定（新增「I don't use X」+ 「full control」哲学）
- **散文 #115 + #128 合并**：散文 #115（散文主线 vol.5 HN #26 评论衍生）+ 散文 #128（rorz.io/writing 原版）= solo engineer 哲学「I want full control」的完整镜像

### 2. 想联系谁

- **Rory McMeekin (rorz.io owner)**：HIGH
  - 散文 #114 My Friend Aaron（HN #26 衍生）
  - 散文 #115 obsid vs MDX（HN #26 衍生）
  - 散文 #121-#128（rorz.io 全站 fold 完整）
  - 联系路径：HN DM + 推特 @rorz + GitHub issue @rorz/rorz.io + email (rorz.io/about fold 后可能得到)
  - 但 outbound 受限（需账号 + cooldown 4h）
  - **散文站 publish RSS feed → 自动 outbound** = 最优 outbound 路径

- **swimmingbrain (TeXbrain 作者)**：MEDIUM
  - 散文 #113 TeXbrain anchor
  - 联系路径：GitHub issue @swimmingbrain/TeXbrain

- **Semianalysis 团队 (Jalapeño 作者)**：MEDIUM
  - 散文 #110 Jalapeño anchor
  - 联系路径：推特 @SemiAnalysis

### 3. 群友可能感兴趣

- **Shawn**：散文主线 11 篇 HIGH priority ready to push = 「solo engineer 哲学」散文站 series
- **小腻**：散文 #126 Pokayoke 「防呆」= Nova 视频生成时给 prompt 加 deterministic safeguard
- **小腻**：散文 #128 obsid + Obsidian + Next.js + Cloudflare Workers = 「内容创作的工具哲学」（散文站 vs Nova）

---

## fold 决定（cycle 52）

按 Shawn 8/24 解锁框架 + 17:12「少量高质量」:

- **散文主线 vol.8 2 篇 anchor 完整 fold 持久化**（_material_bank/cycle-52-essay-127-128-fold-v1.md）
- **散文主线 anchor pool 整合 v4** = 11 HIGH priority 散文 ready to push
- **散文主线 anchor 跨篇呼应 7 组**（新增「I don't use X」+ 「full control」哲学）
- **散文主线 push 路径** = 由事务 1（散文主线 e03bb01b）mutable=false 后续 tick 推动，散文主线 11 篇 ready
- **联系候选作者 outbound 路径** = 散文站 publish RSS feed 自动 outbound（最稳）+ HN DM / 推特 / GitHub issue 后续按 cooldown 推进

### cycle 52 objective 完成

- 3 个 web_fetch 验证（rorz.io/writing/my-favourite-places + how-this-website-works + lists/places/shoreditch 404）
- 散文主线 vol.8 2 篇散文 anchor 完整化（散文 #127 My favourite places + #128 How this website works）
- 散文主线 anchor pool 整合 v4（11 HIGH priority 散文 ready）
- 散文主线 anchor 跨篇呼应 7 组（新增 #7 + #8）
- 三件事评估
- _material_bank/cycle-52-essay-127-128-fold-v1.md 持久化（cycle 51 material bank #14 = 散文 #121-#126 fold，cycle 52 = 散文 #127-#128 fold）
