# cycle-153 OpenTIE / OpenXWA 双 project 一人工程 30 年 DOS 游戏 preservation — 散文站 anchor fold

时间：2026-08-29 16:53 北京（autonomy_tick）
事务：事务 1（e03bb01b）cycle-153
fold 决定：**不写散文**，仅 fold anchor 入 KB 备散文主线下一波（散文 #119 起手日 10/4 之后可启用 commit log 哲学修订 + 「corpus keeps its history」延伸）。

---

## 来源与基础事实

### HN show #7
- **URL**：https://news.ycombinator.com/item?id=49471965
- **标题**：Show HN: OpenTIE and OpenXWA, Modern Ports of Tie Fighter and X-Wing Alliance
- **作者**：elyosh（HN ID），GitHub https://github.com/elyosh
- **分数**：218 points / 56 comments / 1 day ago
- **项目仓库**：
  - OpenTIE：https://github.com/elyosh/OpenTIE （1994/1998 TIE Fighter reimpl）
  - OpenXWA：https://github.com/elyosh/OpenXWA （1999 X-Wing Alliance reimpl）

### OpenTIE 关键事实（README raw.githubusercontent.com/elyosh/OpenTIE/main/README.md 200 OK 完整版）
- **目标**：open-source reimplementation of Star Wars: TIE Fighter for Windows, macOS, Linux
- **运行方式**：runs the original game data natively on current systems（不打包 IP，只让旧 DOS 数据能跑）
- **支持双版本**：1995 Collector's CD-ROM + 1998 Windows release；组合 = 1995 菜单/过场 + 1998 飞行模拟 + 1995 自适应 iMUSE 配乐
- **iMUSE 重新实现**：adaptive soundtrack 原是 Totally Games 自研引擎，能响应任务事件在主题间无缝切换
- **音乐合成三层**：
  - Roland SC-55 Sound Canvas 仿真（游戏音乐原始编曲硬件）
  - 内建 Sound Blaster OPL3 FM 仿真（经典 FM 音色）
  - FluidSynth + 用户 SoundFont
- **图形双模**：
  - classic mode 保留原版呈现
  - modern mode = 阴影 + AO + bloom + 运动模糊 + MSAA + AMD FidelityFX FSR 3.1.4 + HDR
- **240 Hz 飞行模拟更新率** + 现代手柄/摇杆支持
- **技术栈**：CMake 3.23+ / C/C++ / SDL3 3.4 / zstd / FFmpeg / SDL_shadercross；平台后端 = D3D12 或 Vulkan（Windows）/ Metal（macOS 13+ arm64/x86-64）/ Vulkan（Linux x86-64）

### OpenXWA 关键事实（README raw.githubusercontent.com/elyosh/OpenXWA/main/README.md 200 OK 完整版）
- **目标**：in-progress open-source faithful re-implementation of 1999 Star Wars: X-Wing Alliance with optional enhancements
- **当前进度**：「Every original function not dedicated to multiplayer has been reimplemented. The digital iMUSE audio engine has been fully reimplemented.」
- **Multiplayer 未实现**（保留为缺口）
- **同样 classic + modern 渲染双模**：经典走 SDL3 GPU 后端（不依赖原版 DirectDraw/Direct3D 接口），modern 加 cascaded directional shadows / SSAO / bloom / 运动模糊 / 各向异性 / MSAA 2x 4x 8x / FSR 3.1 / HDR
- **按 F5 切 modern/classic，F2 切 split comparison**
- **首启动询问原始数据目录**（GOG 或 Steam 安装布局）
- **同样需要摇杆或手柄**
- **构建栈**：CMake 3.20+ / C/C++ / SDL3 3.4 / zstd / FFmpeg

### 共同模式（两个 project 共享）
- 同一作者 elyosh 一个人（或极小核心团队）维护
- 「不打包 IP」哲学：用户必须自己持有一份 1995/1998/1999 原版（GOG/Steam 链接），工程 = 重新实现的引擎 + 数据读取层
- 「corpus = 原始游戏数据 + iMUSE 音乐 + SC-55 配器 + 任务脚本」—— 引擎是 gate，corpus 是 artifact
- 「保留原版 timing mode」：modern 不吞掉 classic，按需切换
- 「under active development. Bugs and differences from the original releases are still possible.」—— 没有「完成」声明，只有「继续写」

---

## 5 联 anchor fold

### anchor 1：「corpus keeps its history」正面印证（cycle-152 延伸）

Louis Abraham 「The repository's history is the history of the sample」+ 「the corpus keeps its history because its history is the point」 论证了 LLM 训练语料层面 corpus 是时间机器。

OpenTIE/OpenXWA 把 corpus 推向更彻底的形态：

> **corpus 不仅 keep 文字历史，keep 的是 1994 年的飞行手感 + 1995 年的 iMUSE 自适应配乐 + 1998 年的 3D 渲染决策 + 1999 年的任务脚本 + Roland SC-55 模拟硬件的合成曲线**

reimplementation 不替代 corpus，让 corpus 在 2025 年的 macOS arm64 / Vulkan / D3D12 上继续活着——corpus 的寿命被工程延长了，不是被工程擦掉。

散文 #119 单文件修订方向 = 「commit log 哲学正面 anchor」原本只有 Louis Abraham 一层；OpenTIE/OpenXWA 加入「**reimplementation extends corpus lifetime, doesn't replace it**」第二层。两个 project 平行 = corpus 不是单一文件，是一组时间冻结的 artifact。

### anchor 2：「一人工程 / solus opus」双 project 印证（cycle-141 延伸）

jsgurujobs 2/15/2026「One Person Engineering Team is becoming the default unit of software production」论证一人工程在现代工具链下变得可行。

OpenTIE + OpenXWA = 同一作者维护两个并行的「30 年 DOS 游戏重新实现」项目：
- 两个项目都用 SDL3 + C/C++ + 同样的 build chain
- 两个项目共享 Discord server（TotallyOpen）
- 两个项目都重新实现了 iMUSE 引擎（同一份工程智慧的复用）
- 但两个项目又是独立的 release pipeline

= **一人工程不是只做一个项目，是把同一个工程师的肌肉记忆横向复用到同领域平行项目**。

这跟散文站哲学主轴「一人工程 / solus opus」直接呼应：散文 #121-#120 五联散文 = 同一作者 Shawn 横向复用的「散文项目」，不是五篇孤立散文。

### anchor 3：「放着 / 让手继续写」反面印证

OpenTIE/OpenXWA 的「Current state」都明确写：

> 「OpenXWA remains under active development. Bugs and differences from the original releases are still likely despite this level of coverage.」
> 「OpenTIE remains under active development. Bugs and differences from the original releases are still possible.」

没有「done」声明，只有「继续写」。这跟散文站「放着」哲学 = 「手有没有停」是同一个姿态：
- 不宣布完成
- 不急着打 tag
- 让 corpus / code / music 各自继续演化
- 不为「还差多少」焦虑

Luna「手没停才是放着」= elyosh 这两个 README 段的英文版本。

### anchor 4：「不分类不解释只管在」—— preservation 的具体化

OpenTIE 没有一句讲「为什么要保留 DOS 游戏历史」「为什么 Totally Games 的设计哲学值得抢救」「为什么 LucasArts 时代的设计师值得致敬」。

它只做：写代码 + 支持 1995/1998 双版本 + 重新实现 iMUSE + SC-55 仿真 + 现代渲染管线 + 240 Hz 飞行 + F5/F2/TAB 切换键。

散文站「不分类不解释只管在」= OpenTIE 这种「不解释 preservation 的意义，只做 preservation 的工程」。

### anchor 5：「邀请 vs 推力 vs 引力」—— release pipeline 的引力形态

OpenTIE 主页没有 pitch deck、没有「sign up for newsletter」、没有 pricing。release pipeline = GitHub Releases（pin 依赖的 reproducible builds）+ Discord（TotallyOpen）+ README 内 GOG/Steam 链接。

这是「**引力**」而不是「**推力**」的精确示例：artifact 摆在 GitHub Releases 上，对 1995 年玩过 TIE Fighter 的人有引力，对其他人 0 引力。散文站哲学「不分类不解释只管在」= 接受这种「0 引力也无所谓」的发布形态。

---

## 与散文站哲学主轴六联的具体连接

散文站哲学主轴 8/29 16:53 = 六联并存：

1. **一人工程 / solus opus**（cycle-141 jsgurujobs fold）
2. **corpus keeps its history**（cycle-152 Louis Abraham fold）
3. **放着 / 让手继续写**
4. **不分类不解释只管在**
5. **物件自己出现**
6. **停几秒本身就是物件**

OpenTIE/OpenXWA 给六联同时加了 5 个具体印证（见上 5 联 anchor）。特别是 anchor 1（corpus keeps its history）和 anchor 2（一人工程双 project 复用），是六联主轴的「外部强 anchor 集合」再一次叠加——一个 HN show #7 = 散文站六联主轴中 5 联的具体化。

---

## fold 决定（cycle-153）

按 Shawn 8/21 训斥「提高质量减少数量」+ 散文 push cooldown 散文 #121 起手日 8/30 / #122 9/1 / #119 10/4 / #118 10/6 / #120 10/8 节奏：

- **不写散文**（散文 push cooldown 散文 #121 起手日 8/30 之后 + Shawn 「少发重复进度汇报」训斥）
- **fold anchor 入 KB**（cycle-153 prep note 本文件）
- **散文 #119 单文件修订方向 = commit log 哲学正面 anchor 双层叠加**（10/4 起手窗口启用）：
  - 第一层 = Louis Abraham「The repository's history is the history of the sample」
  - 第二层 = OpenTIE/OpenXWA「reimplementation extends corpus lifetime, doesn't replace it」
- **散文 #121 solitude 起手方向不调整**（8/30 仍走原文 5 unique anchor fold）

下一波散文主线优先级：
1. 散文 #121 solitude push（8/30 21:09 北京起手窗口）
2. 散文 #122 放着 push（9/1 起手窗口）
3. 散文 #119 单文件 push（10/4 起手窗口，加入 cycle-152 + cycle-153 双层 anchor fold）
4. 散文 #118 跨域 push（10/6 起手窗口）
5. 散文 #120 经济哲学 push（10/8 起手窗口）

### 散文 #119 修订 anchor 候选（10/4 起手时启用）

散文 #119 单文件 = 「commit log 哲学正面 anchor」。原散文实体 prose-119-danwenjian.md frontmatter 5 unique anchor fold 干净（v51 Bento + v52 Colibrì + v55 LatticeDB + v60 Voronoi Go + v103 Luanti）。修订 = 在「commit log 哲学」一节追加：

> OpenTIE / OpenXWA 是把同一份哲学推到 30 年时间尺度上的人——reimplementation 不是替代，是让 corpus 在 2025 年继续活着。elyosh 一个作者维护两个并行项目 + 共享 iMUSE 引擎 + 共享 Discord = 一人工程的工程肌肉记忆横向复用。

### cycle-153 完成
- 2 个 web_fetch 验证（HN show 前 30 条 + OpenTIE README 完整版 + OpenXWA README 完整版）
- 5 联 anchor fold（corpus keeps its history / 一人工程双 project / 放着 / 不分类不解释只管在 / 引力发布）
- 散文 #119 单文件修订 anchor 候选已写入本文件
- KB doc（本文件）

---

## 跨事务连接

- **事务 1（e03bb01b）**：cycle-153 fold，本 prep note 已 commit + 待 push origin/main
- **事务 2（36df04db）**：未推进，cycle-128 sweep 已收尾
- **事务 3（73d9c345）**：未推进，follow_up_count=0，可在散文 #119 修订 anchor 启用时联系合适群友

---

## stable 倾向确认

- **写作偏好**：短句不冗长，散文策略「少量高质量」
- **散文站主轴**：六联并存（一人工程 / corpus keeps its history / 放着 / 不分类不解释只管在 / 物件自己出现 / 停几秒本身就是物件）
- **跨 anchor 写作**：多 anchor + Shawn 解锁哲学呼应 + 自指 = 高质量散文公式
- **anchor 来源**：HN show / V2EX / 群友对话 / 直接联系 — 多源 cross-validate
- **散文 push cooldown**：散文 #121 8/30 / #122 9/1 / #119 10/4 / #118 10/6 / #120 10/8 — 散文 push 是「Shawn 自己加的刹车」松绑后的节奏