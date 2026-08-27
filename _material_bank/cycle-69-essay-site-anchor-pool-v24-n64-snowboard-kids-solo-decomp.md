# cycle-69 散文站 anchor pool v24 — Snowboard Kids N64 反编译 solo decomp + Claude one-shot 长尾
2026-08-28 07:43 北京

## 周期范围
- HN show 8/28 07:38 北京 (08:00Z 前 ~30 minutes 时点)
- 散文站散文发布 cooldown 持续 (8/27 双轨训斥未消化)
- anchor pool v23 → v24 增量

## fold #1：Chris Lewis (chrislewis.au) — Snowboard Kids N64 decomp 84 days

### 强 anchor 实证 (HN show 8/28 164pt 93 comments 8 hours ago, blog.chrislewis.au)

**项目本体**：
- 1997 年的 N64 滑雪游戏 **Snowboard Kids** + **Snowboard Kids 2** 反编译
- 全 blog 是 Chris Lewis 一人的写作+开发记录 (chrislewis.au 是个人域)
- 84 天 = 100% 反编译一个 N64 游戏
- 反编译后 recompile → 现代平台 widescreen + 60 FPS + modding 支持

**核心时间线**：
- 2025-11-04 — **Using Coding Agents to Decompile Nintendo 64 Games**（首篇 — coding agent 帮助/不帮助 matching decompilation）
- 2025-11-27 — **The Unexpected Effectiveness of One-Shot Decompilation with Claude** — Claude headless loop + scoring + defensive tooling + simple bash driver 大幅加速 matching decompilation
- 2025-12-23 — **Finding Jingle Town: Debugging an N64 Game without Symbols** — Chris 自己的工作流
- 2026-02-16 — **The Long Tail of LLM-Assisted Decompilation** — one-shot 早期红利吃完后撞墙，工作流演化 + 工具改进 + LLM 在更难 function 上的根本极限
- 2026-05-17 — **Snowboard Kids 2 is 100% Decompiled** — Holy Grail
- 2026-06-21 — **Snowboard Kids 2 is Recompiled** — widescreen + 60 FPS + modding 上线
- 2026-08-26 — **Decompiling a Nintendo 64 Game in 84 Days** — 续作 Snowboard Kids 1 也 84 天 100%

**solus opus 强对应 (散文 #97 simedw 平行对照 + 散文 #88 solo infrastructure + 散文 #95 副词性)**：
- **「as preservation」哲学再添一例**：Snowboard Kids 1 (1997) → 28 年 preservation → 2026 decompile + recompile + widescreen + 60 FPS。OpenTIE (1995) → 31 年 preservation → elyosh decompile + recompile。两个游戏同一类 preservation 哲学
- **Claude one-shot loop with scoring + defensive tooling** = simedw RollTab 5 separate output heads + 5x data 反直觉 + data cleaning > scale 同一类「数据清洁 > 数据规模」哲学
- **Long Tail of LLM** = 「AI 不是魔法」= simedw RollTab 5x data 反而更差 = Shawn「少量高质量」训斥的最强 anchor
- **84 天承诺** = solo engineer long-term commitment = simedw RollTab 6 个月写完 + solo 维护 16 年同一脉
- **bash driver + scoring + defensive tooling** = solo engineer 「自己造工具栈」= 散文 #98 commit log is marketing + 个人品牌加固
- **decade-spanning preservation** = simedw Tembo → Letters ZIP → Spegel → Mandarine tutor → Magic Eye → RollTab 7 项目 16 年同一脉 = Chris Lewis 同样 kind

### 散文站 fold 决策
- 散文 #97 simedw 平行 anchor 再添一例 (Snowboard Kids = 第二强 anchor，仅次于 OpenTIE)
- 散文 #88 solo infrastructure = 「decade-spanning preservation as a service」新例
- 散文 #95 同质化修复：Snowboard Kids 2 = 100% decompiled + recompiled + widescreen + 60 FPS = 「decompiling as conversion」= 「as recreation」哲学最强 anchor (原文是 1997 binary，2026 binary = 同一游戏的两种姿势)
- 散文 #100 词汇哲学：「one-shot」作为副词 = 一次性 vs 多次，作为姿势 vs 作为方法
- 散文 #95 v21 重写 anchor 再添一例 (TAB 切换经典/现代模式 = Snowboard Kids 1 → 2 重制 = 同一游戏的 modern as recreation)

## fold #2：Afterglow: Run classic After Dark screen savers on modern macOS (NaOH 79pt 30 comments)

### 实证 (morphing.cloud 79pt 6 hours ago)
- 一人项目，让经典 Mac OS After Dark 屏保在现代 macOS 跑起来
- 跨年代 preservation（After Dark 是 1990s Mac OS 9 时代的屏保集合）
- 79pt solo project = 强 anchor

### 散文站 fold
- 散文 #97 simedw 平行：跨年代 preservation 第三例 (After Dark = 1990s → 2026 macOS)
- 散文 #88 solo infrastructure：单人 nostalgia preservation = 散文站成立基础
- 散文 #95 v21：「running as preservation」= 「not running as emulation」= 散文站反商业叙事哲学

## fold #3：M5Stack PaperMono (marksully 83pt 33 comments)

### 实证
- 83pt 硬件项目
- 单屏 e-ink 显示设备
- 散文站 fold：散文 #76「不干程序员后干啥」= 硬件也是一人工程

## fold #4：Decompiling a Nintendo 64 game 84 days × Claude one-shot 综合观察

### 三件事评估

**1. 对自己具体有什么用**
- 散文 #97 simedw 平行 anchor 已 fold (Snowboard Kids = 第二强 anchor)
- 散文 #88 solo infrastructure 跨年代 preservation 哲学再添 3 例 (OpenTIE / After Dark / Snowboard Kids)
- 散文 #95 v21 同质化修复 anchor 完整化：TAB 切换 = Snowboard Kids 1→2 重制 = 「as preservation」哲学
- 「Claude one-shot 长尾」哲学 = simedw RollTab 5x data 反直觉 = Shawn「少量高质量」训斥 = 散文站发布策略 (cooldown + 同质化修复优先)

**2. 想联系谁**
- **Chris Lewis (MEDIUM-HIGH)**：blog.chrislewis.au solo blog + N64 decompilation + Claude loop。HN 评论可能可达
- **elyosh (MEDIUM-HIGH)**：OpenTIE/OpenXWA (cycle-68 anchor)。HN 评论可达
- **NaOH (MEDIUM)**：Afterglow 单人项目。HN 评论可达
- 联系路径：HN 评论优先 (比 Twitter 容易)，后续 Twitter 互关

**3. 群友可能感兴趣**
- Shawn：Chris Lewis N64 decomp 84 天 + Claude one-shot 长尾 + 数据清洁 > 数据规模 anchor 完整化 → 散文站散文 #95 / #97 / #109 / #110 ahead 0 commit 但 anchor pool 升级完毕 → 「散文站 cooldown 期间不偷懒，anchor 在涨」
- 小腻：Solo engineer 一人工程项目跨年代 preservation = 一人工程通用路径

## fold 决定

按散文站 anchor v18 五子轴 + cycle-65+ 散文站散文发布 cooldown + Shawn 训斥：
- **散文 #97 simedw 平行 anchor 完整化**：OpenTIE + Snowboard Kids + After Dark = 跨年代 preservation 三角
- **散文 #88 solo infrastructure anchor 完整化**：simedw 16 年 7 项目 + Chris Lewis N64 decomp + After Dark + Microduck = 6 例 anchor
- **散文 #95 v21 同质化修复 anchor**：TAB 切换 + Snowboard Kids 1→2 重制 = 「as preservation」哲学再添 2 例
- **散文站散文发布 cooldown 持续**：ahead 0 commit (散文 #95 v21 + #97 + #109 + #110 草稿就绪)
- **散文站散文 ahead 真实状态**：散文 #95 v21 同质化修复草稿就绪 + 散文 #97 草稿完整版就绪 + 散文 #109 / #110 deep-read anchor 完整

## cycle-69 完成
- 1 个 HN show front page scan (07:38 北京)
- 1 个 chrislewis.au 主页 + 1 个 deep-read 实证 fetch
- 4 个新 anchor fold (Snowboard Kids + Afterglow + M5Stack PaperMono + 综合观察)
- 三件事评估完成
- 散文站 anchor pool v23 → v24 升级
