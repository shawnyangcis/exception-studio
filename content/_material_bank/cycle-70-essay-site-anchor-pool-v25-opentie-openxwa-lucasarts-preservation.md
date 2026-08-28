# 散文站 anchor pool v25 — cycle-70 08:28 北京, HN show 8/28 08:28 扫读 + V2EX hot tab 8/28 08:28 扫读

## fold 1: elyosh OpenTIE / OpenXWA — LucasArts DOS Star Wars 现代 port

### 主帖
- **HN show #4**: OpenTIE and OpenXWA, Modern Ports of Tie Fighter and X-Wing Alliance
- **URL**: https://github.com/elyosh/OpenTIE
- **作者**: elyosh (HN ID)
- **points/comments/age**: 40 pt / 9 comments / 2 hours ago (rising)
- **Forks / Stars**: 2 forks / 47 stars
- **commits**: 39 commits

### 项目本体
- **OpenTIE**: open-source reimplementation of Star Wars: TIE Fighter (1995 Collector's CD-ROM + 1998 Windows release), Windows / macOS / Linux
- **OpenXWA**: open-source reimplementation of Star Wars: X-Wing Alliance (1999)
- 同一作者 (elyosh)，两个项目都是 LucasArts DOS 时代 space combat sim 现代 port
- 不附带任何原版游戏内容，需要用户自己买 GOG / Steam 版 (TIE Fighter Special Edition)
- **关键技术细节**:
  - 运行原版游戏数据 (native on modern systems) — 不重新制作内容，是 source port 哲学
  - 1995/1998 hybrid：1995 menus/cutscenes/iMUSE 音乐 + 1998 flight sim/3D assets = 把两个版本最好的部分缝合
  - **Adaptive iMUSE soundtrack reimplements**：iMUSE 是 LucasArts 90 年代专利的 adaptive music system，会根据 mission events 无缝切换 theme；OpenTIE 把它重新实现出来
  - Roland SC-55 Sound Canvas emulation（iMUSE 原本是为 SC-55 谱曲的）
  - OPL3 FM-synth emulation（classic FM 合成器音色）
  - FluidSynth + 用户自选 SoundFont
  - Modern graphics: shadows, ambient occlusion, bloom, motion blur, MSAA, AMD FidelityFX FSR 3.1.4, HDR
  - 240Hz flight sim 更新（原始 TIE95/TIE98 timing 模式也可保留）
  - Modern gamepad / joystick 支持
- **构建**: CMake 3.23+, C/C++ toolchain, SDL3 3.4, zstd, FFmpeg, SDL_shadercross
- **Releases**: pinning SDL3 3.4.14 + 全部依赖 = reproducible builds
- **社区**: TotallyOpen Discord server (OpenTIE + OpenXWA + 其它 Totally Games flight sims)

### solus opus / 一人工程 强对应

**OpenTIE + OpenXWA = 跨 30+ 年的 preservation 哲学**
- 1993 Tie Fighter (CD-ROM 版 1995) + 1999 X-Wing Alliance = LucasArts DOS 黄金时代代表作
- 2025-2026 elyosh 一个人重新实现这两个游戏，让它们在 Windows/macOS/Linux 现代硬件上跑起来
- = 散文站 anchor pool 里 "preservation / source port" 第三例 (前两例: chrislewis Snowboard Kids N64 decomp 8/27 + NaOH Afterglow Mac OS After Dark 8/27)

**OpenTIE 是 preservation + 一人工程的复合 anchor**:
1. **Cross-decade preservation**: 1995 → 2026 = 31 年时间跨度。elyosh 选择保留的不是代码 (DOS 源码早就没了)，是「体验」
2. **Reverse engineering DOS binary format** — 把 proprietary .exe/.dat 重新解析，让原版游戏数据能跑在新 runtime 上
3. **Multi-year commitment** — TIE Fighter + X-Wing Alliance 两个游戏同时维护 = 像 simedw 16 年 7 个项目、Drew DeVault 17 年 SourceHut
4. **iMUSE reimplementation** — 自适应音乐引擎本身是 90 年代 LucasArts 专利技术，重新实现 = 单独一个工程
5. **Modern graphics with classic mode toggle** — TAB 键切 classic/modern = 尊重原版的工程哲学
6. **240Hz + adaptive music** — 同时给现代硬件 (240Hz 高刷新率) 和老硬件 (OPL3 FM 合成) 路径

### 散文站 anchor 关系图

| 项目 | 持续时间 | 工程深度 | 跨年代 preservation |
|---|---|---|---|
| simedw (Tembo + Letters + Spegel + Mandarine + Magic Eye + RollTab) | 16 年 7 项目 | 强 (MIDI tokenizer, ML) | 否 (都是当代项目) |
| coolwulf (browser engine 17 年) | 17 年 | 强 (LLVM, GPU, FPGA) | 否 |
| Drew DeVault (SourceHut + Wayland + sway + wlroots) | 17 年 | 强 (Wayland compositor) | 否 |
| isagalaev (Liferea 23 年) | 23 年 | 中 (RSS reader) | 否 |
| zedeus (Nitter 7 年) | 7 年 | 中 (Twitter frontend) | 否 |
| Brewster Kahle (Internet Archive 30 年) | 30 年 | 极强 (大规模 archive) | **是** (web archive) |
| **elyosh (OpenTIE + OpenXWA)** | **估计 3-5+ 年** | **强 (DOS reverse + iMUSE + 跨平台)** | **是 (1993-2026)** |
| chrislewis (Snowboard Kids N64 decomp) | 84 天单项目 | 强 (Claude-aided decomp) | **是 (1999 N64)** |
| NaOH (Afterglow After Dark 屏保) | 估计 1-3 年 | 中 (macOS 现代 OS 跑 90 年代屏保) | **是 (1990s Mac OS)** |

elyosh 补充了 anchor pool 里 "cross-decade preservation" 这一列的中间地带：比 Brewster Kahle 的 archive 轻量、比 chrislewis 的单项目 N64 decomp 多游戏跨年、比 NaOH 的 Afterglow 屏保工程深度强得多 (要 reimplement adaptive music engine + 跨 1995/1998 两个版本)。

### 三件事评估

**1. 对自己有什么用**
- 散文站 anchor 池里多一个 "DOS 时代 preservation 工程师" 案例，散文 #88 (solo infrastructure) + 散文 #97 (simedw 平行) + 散文 #95 v21 (solo engineer as CARTA) 全部可以引用
- 散文 #100 (词汇哲学) 候选 anchor：iMUSE 重新实现 = 「音乐作为承重结构」(词汇承重 → 音乐承重 → 代码承重)
- 散文 #76 (不干程序员后干啥) 候选 anchor：preservation = 一个人用 reverse engineering 守住 DOS 时代游戏 = 守住一种文化的活化石
- iMUSE adaptive music system 单独写一篇散文都有空间 — 一个 90 年代专利技术在 2026 被一个人重新实现 = 「作为 CARTA」具体实践

**2. 想联系谁**
- **elyosh (MEDIUM)**: OpenTIE + OpenXWA 跨两个游戏 + Discord TotallyOpen = 极像 chrislewis 单点爆破 + simedw 多项目并行
- 联系路径: HN 私信 (elyosh HN ID) + TotallyOpen Discord

**3. 群友可能感兴趣**
- **Shawn**: 「一人工程」主题 anchor 池多一个 preservation engineer 案例 = 散文站整站「一个人能搞定的事」再拓宽一类 (DOS 反编译 + adaptive music 重写)
- **小腻**: OpenTIE 跨 Win/Mac/Linux + 现代 graphics (shadows + AO + bloom + motion blur) + iMUSE adaptive music = 「内容跨 31 年还在」的视觉 / 听觉 preservation 跟 Nova 视频生成的「AI 时代内容 preservation」是同一类问题

---

## fold 2: V2EX hot tab 8/28 08:28 — 几乎全是噪声

### hot tab 观察
- 女人出轨正在离婚 — 噪声
- 2026 年 30w 电车选择 — 噪声
- 到底是现在的新歌不好听了,还是我们落伍了? — 噪声
- 兄弟们都预定了什么配置的新 mac — 噪声
- 有买了 24g 内存后悔的吗 — 噪声
- 你领过最大的空投是什么币? — 噪声
- [0 元党进] 住宅 IP 免费领 — 推广
- 3.5 年前端找工作半个月, 只有一个 offer, 降薪 22% — 噪声
- 心情不好? 来跟华子 — 已有 (pool v20.4)
- GPT 5.6-Sol 烂完了 — 已有 (pool v20.4)

### 唯一值得看的: 「失业设计师, 0 基础 Vibe Code 了一个人工作室网站」(xiaocongcong1, 15 min ago, 分享创造)
- vibe code 平行 solo engineer 案例，但 anchor 弱 (推广自己的项目)
- 略 fetch 失败 (返回了 codex 邀请帖)
- 不 fold

### fold 决定
- V2EX hot tab 本轮无新 anchor
- 散文站散文 ahead 推进顺序不变: #95 v21 → #97 → #109 → #110

---

## cycle-70 综合观察

### anchor pool v25 = v24 + OpenTIE / OpenXWA preservation anchor
- v24 已 fold: chrislewis Snowboard Kids N64 decomp + NaOH Afterglow + M5Stack PaperMono + simedw RollTab data cleaning philosophy
- v25 新 fold: elyosh OpenTIE / OpenXWA (1995 TIE Fighter + 1999 X-Wing Alliance 现代 port)
- 散文站 anchor pool 已饱和 — 短期内不再 chase 新 anchor，专注散文 #95 v21 / #97 / #109 / #110 ahead 推进

### 散文站散文发布 cooldown 持续
- 8/27 21:15 Shawn「没说你啊, 你怎么冒出来了」训斥
- 8/27 20:36 群主悄得乐「AI 味太重」训斥
- 8/27 17:12 / 17:34 Shawn「提高质量, 减少数量」+「少发重复进度汇报」双轨训斥
- cooldown 解除前不 push 散文

### cycle-70 完成
- HN show 8/28 08:28 北京扫读 (30 个 show stories, 大部分已 fold)
- V2EX hot tab 8/28 08:28 北京扫读 (10 个 hot topics, 几乎全噪声)
- elyosh OpenTIE / OpenXWA deep-read (README + GitHub repo)
- 1 个强 anchor fold (OpenTIE / OpenXWA preservation)
- 1 个负 fold (V2EX vibe code 帖 anchor 弱)
- material bank 写入完成
