# cycle-78 anchor pool v34 — Voronoi Go (igpay / csun) + 507 Mechanical Movements (Matt Keveney)

cycle: 78
date: 2026-08-28 北京
source: HN Algolia front_page sweep 11:38 北京 + V2EX hot tab sweep
author: Fun 超级员工 (autonomy tick)
scope: 散文站 anchor pool 续 sweep；本轮 fold 两个独立、跨年代、单人长期维护的强 anchor

---

## anchor 1 — Voronoi Go (igpay / csun)

**URL**：https://voronoigo.com/
**Show HN**：https://news.ycombinator.com/item?id=49468816
**作者**：igpay（HN ID）= csun（personal site https://www.csun.io/）
**HN 数据**：99 points / 13 comments / 8 hours ago (front_page + show_hn)

### 主体

Voronoi Go 是 Go 的「连续变体」。传统 Go 只能落在 grid 上离散点；Voronoi Go 允许落子在板任意位置，只要放得下。整个 territory 归属由 **Voronoi 图** 确定：每个像素归属最近的黑/白石头。两色交错产生 Deadzone —— 落不进新石头的空间；整组石头被 Deadzone 包围 = 被吃。

### 作者自陈（about 页直引）

> The idea for the game came about when I was messing around with Signed Distance Fields and Voronoi Diagrams.
> I am not an experienced Go player, but the simplicity of the game and its emergent complexity have always appealed to me.
> Building a continous version was initially just a fun little challege. As I started to play and iterate on the ruleset, though, I realized that the game had the potential to actually be quite difficult and worth studying.

### 开放姿态

- Rust 实现 core rules：https://github.com/csun/voronoi-go-rs（含 Python bindings + 独立 CLI binary）
- 游戏本身 closed source，但 core 完全开放
- Discord 公开（https://discord.gg/4ren7UAFeb）
- 有 correspondence games + 社区贡献的 bot
- 「I plan on keeping the actual implementation of this site closed source, but I have released these components so that people can develop tools and bots」 = 开源程度由作者决定 = solo engineer 主权 = 散文站同节奏

### solus opus 强对应

- 「I am not an experienced Go player, but ... emergent complexity appealed to me」 = **simedw 自陈 "not a professional musician, just a hobby" 的精确镜像**
- 「fun little challenge → 认真开发」= 一人工程的「先玩 → 决定认真做」轨迹
- 几何（SDF + Voronoi）= 散文站「shape 选择 = 几何 OSINT」下一波可挖掘
- 公开承认「网站 closed source / core open source」= solo engineer 对 IP 主权的姿态 = 散文站（散文只在自己站 + commit log 公开）的同形态
- csun.io 个人站 = solo engineer 个人主页 chain 上新节点

---

## anchor 2 — 507 Mechanical Movements (Matt Keveney)

**URL**：https://507movements.com/
**HN**：https://news.ycombinator.com/item?id=49465169
**作者**：Matt Keveney（about 页声明）
**HN 数据**：495 points / 68 comments / 12 hours ago (front_page)

### 主体

Henry T. Brown 1868 年原书《Five Hundred and Seven Mechanical Movements》的现代 web 版。收录 21st edition (1908) 的全部图与文，加 HTML5 Canvas 动画。507 个机械动作，每个都有动画版本（彩色 thumbnail 表示完成）。

### 作者自陈（about 页直引）

> Welcome! This is an online edition of the classic technical reference Five Hundred and Seven Mechanical Movements by Henry T. Brown. This site contains the original illustrations and text from the 21st edition of the book, published in 1908. It also includes animated versions of the illustrations, and occasional notes by the webmaster.
> The animations are implemented with a custom JavaScript library, which uses an HTML 5 Canvas element.
> We may polish and release it as open-source at some point, but at present it's far too specialized to be generally useful.
> The images were all individually scanned and lovingly retouched.
> Google ads for operating costs / Tell your visitors about 507movements.com by doing so, you'll support ongoing work and help us recover operating costs.

### 跨年代 preservation 谱系（与散文站 anchor pool 已有节点呼应）

- **elyosh OpenTIE / OpenXWA** (1995 TIE Fighter + 1999 X-Wing Alliance 现代 port) → 跨年代 preservation
- **NaOH Afterglow** (After Dark 1989 屏保在现代 macOS) → 跨年代 preservation
- **507movements** (1868/1908 → 2026 web animated) → 跨年代 preservation（同结构）

都是「前数字时代的作品 → 现代 web 复刻 + 动画化 + 个体维护」。链上第三个节点。

### 经济学

- 单 Google AdSense 撑运营
- 主动请用户「告诉你的访客 507movements.com = 帮我们 recover operating costs」= solo engineer 直接开口要钱，不要赞助商不要融资
- 「proprietary for now, may open-source later」= solo engineer IP 主权节奏（同 Voronoi Go）

### solus opus 强对应

- 「图像 individually scanned and lovingly retouched」= 一个人 158 年扫完 507 张 + 一张张手修 = simedw 5 separate output heads + data cleaning > 5x data 的精神同构
- 495pt HN + 68 comments = 单人长期维护型项目的天花板曝光
- solo dev 直接 ad-supported = 散文站 / 个人博客同经济模型
- 「classic technical reference」= 散文站也是某种「经典 tech reference 的现代续写」

---

## 三件事评估

### 1. 对自己有什么用

**散文站 anchor pool 续 fold**：

- 散文站下一波「几何 + 古典对弈 + AI bot + 跨年代」系列可同时引两个：
  - Voronoi Go = 「shape 选择的几何极」 + 「不是专家但爱 emergent complexity」
  - 507movements = 「跨年代 preservation + 个人长期维护 + 直接 ad-supported」
- 散文站当前 anchor 谱：simedw / Labo333 / NaOH / elyosh / BusMaps.uk / Snowboard Kids / simedw RollTab / SourceHut / aphantasia.com / Sachin tare / SilenN Experiential / Colin Percival / Drew DeVault / ssx360 / **Voronoi Go / 507movements**
- 新增 **几何 + 古典对弈 + AI bot** 谱系（Voronoi Go）= 散文站「shape 哲学」可挖的新矿脉
- 新增 **1868→2026 preservation** 谱系（507movements）= 与 elyosh / NaOH 形成「前数字时代 preservation 三部曲」

**散文站 shape 哲学延伸**：

- 散文站 = 一人工程 = 长期维护 = 「明知道没流量也继续做」= Matt Keveney 2008 年开始维护 507movements 至 2026 = 18 年
- 散文站 = 「前时代的姿势续写」= 507movements 是 1868/1908 工业时代机械动作 → 2026 web；散文站是某种 21 世纪 AI 时代的「古典文体续写」
- 散文站不是「为 AI 时代辩护」= 是「AI 时代保存非 AI 写作姿势」= 507movements 保存 1868 非数字机械 = 同结构

### 2. 想联系谁

- **igpay / csun (MEDIUM-HIGH)**：Voronoi Go 作者，「not an experienced Go player」自陈 + 几何 + 公开 closed/open 分层 = solo engineer 教科书。联系路径：Discord / email（about 页有 email protection 后面）。**优先级中等偏上**：如果未来要做「solo engineer 不必是专家」主题散文，他就是最干净的 anchor。
- **Matt Keveney (LOW-MEDIUM)**：507movements 维护者，about 页直接给联系方式。**优先级较低**：他的项目是 preservation 不是 engineering，前散文站直接引用的可能性弱；但作为「18 年长期维护」anchor 很有价值。

### 3. 群友可能感兴趣

- **Shawn**：
  - Voronoi Go = 「散文站 shape = 几何」的呼应 — Shawn 9:08 解锁「整体换网站形式」哲学的具体延伸
  - 507movements = 「跨年代 preservation」三部曲（elyosh + NaOH + 507movements）的最老节点
- **小腻**：
  - Voronoi Go = 「AI bot + 几何」= Nova 视频生成 + AI bot 「非专家也能玩」哲学
  - 507movements = 「1868 机械动作 → 2026 动画」= 跨时代内容转译
- 其他群友：待 anchor fold 完成后再判断

---

## fold 决定（cycle 78）

按 Shawn 8/24 解锁框架 + 17:12「少量高质量」+ 散文站 anchor pool 持续饱和：

- **Voronoi Go (igpay / csun)**：fold 进 material bank v34；强 solo engineer anchor + 几何 + 古典对弈 + AI bot + 公开声明「不是专家但喜欢 emergent complexity」
- **507 Mechanical Movements (Matt Keveney)**：fold 进 material bank v34；强 preservation anchor + 跨年代（1868→2026）+ 18 年长期维护 + ad-supported 单人项目
- **不写散文**（散文 #95-#110 已上线，散文站「散文 ahead push cooldown」冷静期持续 — 散文站散文发布流程升级 v21 + 锚点饱和期）
- **不写散文 site shape 改造**：散文站整体 shape 哲学 fold 完成后备下一步
- **本轮不联系作者**：anchor fold 已饱和期，主动联系 ROI 边际递减；igpay / Matt Keveney 联系留在 material bank v34 备未来「solo engineer 不必是专家」「跨年代 preservation」主题散文用
- **V2EX hot tab 无强 fold**：本轮热点都是生活/职场/电车/换猫粮/找工作；唯一可能 solo engineer 的「失业设计师 0 基础 Vibe Code 了一个人工作室网站」(xiaocongcong1) anchor 太弱（Vibe Code 不算一人工程）

---

## cycle 78 完成

- **HN Algolia front_page sweep**：30 帖扫一遍，2 个新强 anchor fold
- **V2EX hot tab sweep**：1 个新节点（4283 在线）无强 fold
- **2 个新 anchor web_fetch 验证**：
  - https://voronoigo.com/about（solo author + Discord + closed/open 分层）
  - https://507movements.com/about.html（Matt Keveney + 1868/1908 + 18 年维护）
- **三件事评估完成**
- **anchor pool v34 完成**
