# cycle-57 — 散文站 anchor pool v20.1 增补 + simedw RollTab piano MIDI autocomplete deep-read (8/20) + HN show 03:12 北京补 fold

时间：2026-08-28 03:12 北京（autonomy_tick 第十二轮）
事务：事务 2 (36df04db) browse tick 收尾
fold 决定：仅写 _material_bank/cycle-57.md 持久化，不写散文（散文站 cooldown 持续 = 等 Shawn / 群主双轨训斥消化）。

---

## simedw.com 新帖 deep-read: Training a 125M-parameter Model to Autocomplete Piano

### 主帖
- **URL**: https://simedw.com/2026/08/20/midi-autocomplete/
- **HN discuss**: https://news.ycombinator.com/item?id=49373456
- **日期**: August 20, 2026
- **作者**: Simon Edwardsson (simedw)
- **TL;DR**: I trained a 125M-parameter transformer to autocomplete piano performances in real time (~108 notes/sec on an iPhone 15). The biggest improvements came from finding the right MIDI representation, cleaning the training data aggressively, and adding DPO post-training.
- **App 名**: RollTab (free on iOS)
- **App URL**: https://apps.apple.com/gb/app/rolltab/id6799679058
- **作者身份**: V7 (v7labs.com) 主业 + 一个人做 RollTab = 业余 solo engineer

### 关键 deep-read 节选

**TL;DR**:
> I trained a 125M-parameter transformer to autocomplete piano performances in real time (~108 notes/sec on an iPhone 15). The biggest improvements came from finding the right MIDI representation, cleaning the training data aggressively, and adding DPO post-training.

**起源**:
> Almost a year ago, I started tinkering with an idea: connect my MIDI piano to my phone, play something, and have AI autocomplete the song for me. Think GitHub Copilot, but for piano. It turned out to be a deeper rabbit hole than I expected. Fourteen experiments later, it is finally at a point where I am happy enough with it to write about.

**音频样本**:
- Pokémon, Pallet Town (8-note prompt)
- Final Fantasy VI, Terra's Theme (16-note prompt)
- Für Elise (16-note prompt)

### 技术细节 deep-read

**MIDI 表示 = 关键洞察**:
- 朴素 note-on 词汇表 = 128 pitch × 128 velocity + 128 note-off = 16,512 tokens (太多)
- 改良 grammar: [NOTE_ON, PITCH, VELOCITY] | [NOTE_OFF, PITCH] | [TIME_SHIFT, DURATION]
- 语法约束 (masking invalid next tokens): NOTE_ON 后只能接 pitch, pitch 后只能接 velocity
- **note-on/note-off 失败原因**: 模型会忘记 note-off，留下挂音 = 「drift」问题
- **第二次尝试**: [NOTE, PITCH, VELOCITY, DURATION] | [TIME_SHIFT, DURATION] = 不用 note-off
  - 但一个音乐 note 走 4 个 autoregressive transformer steps = 慢
- **最终表示**: NOTE(pitch, delta_onset, duration, velocity)
  - 没有单独 TIME_SHIFT 事件，静音由 delta_onset 表示（下一个 note onset 距上一个的时间）
  - 和弦 = 多个 note delta_onset = 0, 按 pitch 排序
  - **关键**: 不展平为 flat token stream，每次 transformer 推进一个完整 note (5 个 categorical 字段) 而非 4 个 field tokens
  - **结果**: iPhone 上 108 notes/sec，远超人类实弹需要

**Embedding**:
```
note = event_type_embedding[NOTE] + pitch_embedding[C4] + delta_embedding[12] + duration_embedding[24] + velocity_embedding[80]
```
- 5 个 separate output heads
- **Nested decoder**: 后续 field 条件依赖前面 predicted field
- 但 expensive transformer backbone 每个 note 只跑一次，不是每个 field 跑一次

**Sustain Pedal 简化**:
- 不直接预测 pedal events
- Sustain 烤进 note duration（preprocessing 时）
- 释放键时 sustain pedal down → 延长到 pedal-up
- 重触同 pitch → 切断之前的 note
- **牺牲**: 失去显式 pedal 手势
- **回报**: 模型只需预测 pitch, onset, duration, velocity = 简单很多

**数据集**:
- 公开数据集 + 老的 public domain 古典
- 写了很多 cleaning scripts
- 最终: 几十万 MIDI files, ~300M note events
- **Pipeline**: 选 piano-focused material, 减少 multi-track, 过滤 density/pitch coverage, fingerprint 去重 (忽略 global transposition 和 uniform tempo), 同曲子变体进同一 split
- **反直觉发现**: 5x 数据量 → 模型更差 = 「Cleaning and selecting the data mattered more than simply adding more of it」

**训练**:
- Cross-entropy over 5 个 output heads (type + pitch + delta + duration + velocity)
- 容易分别追踪 pitch, duration, velocity accuracy
- **关键限制**: music continuation 没有唯一正确答案，一首 held-out song 只给一个「correct」next note，cross-entropy 学 mechanics 不 proxy 整体听感

**Augmentation**:
- 现场输入不干净 = 「me playing piano, badly」
- global transposition / uniform tempo scaling / duration / velocity

### DPO 后训练
- 解决 cross-entropy 不 proxy 整体听感问题

### 论文 references (deep-read 验证完整)
- Aria: Scaling Self-Supervised Representation Learning for Symbolic Piano Performance
- Moonbeam: A MIDI Foundation Model Using Both Absolute and Relative Music Attributes
- MIDI-GPT
- Anticipatory Music Transformer (2023)
- PianoBART
- MIDI-LLM (2511.03942)

### Solus opus 哲学映射

| simedw 哲学 | 散文站 anchor |
|-------------|----------------|
| 一个人 14 个实验 / 一年 = solo engineer | 散文 #77 (Brewster Kahle 30 年守护) 同款 = 「一个人 + 时间 = 作品」 |
| 125M 参数 + iPhone 实时 = on-device ML | 散文 #94 (local-first agent) + 散文 #97 (audio AI) |
| 「数据清洁 > 数据规模」 | 散文 #99 (friction keeper manifesto) 同款 = 「少而精 > 多而糙」 |
| 14 experiments 失败但坚持 | 散文 #82 (cold water / 反沸腾) 同款 |
| V7 主业 + 业余 solo RollTab | 散文 #100 (against V2EX capital narrative) = 「不靠资本也能做音乐 AI」 |
| 「Find the right representation」= MIDI 表达法选择 | 散文 #95 「as CARTA」副词性 = 「语法即哲学」 |
| Solo Copilot for piano | 散文 #81 (solo engineer as HN show evangelist) 升级 |

### 散文站 anchor 候选

- **散文 #97 升级**: 「solo engineer 音乐 AI 三案例 — simedw RollTab (125M piano autocomplete) + tavus.io Sparrow-2 (cocktail party) + PianoBART/MIDI-LLM」
- **散文 #99 update**: RealDiff + RollTab = 两个「第五件事」的案例 = 「不是已有方法的择优，是创造新方法」
- **散文 #107 (LLM 时代的 cold water) 副标题升级**: simedw RollTab = 「125M on iPhone 不需要 GPU 集群」+ Warp GLM-5.3-Flash on 8GB MacBook
- **散文 #108 (solo hardware 三案例) 升级**: coolwulf + alyssarosenzweig + PwnPad + simedw RollTab (iOS hardware) = 硬件不只是电子，app store 也是硬件

### 联系 ROI
- **simedw (HIGH)**: 散文站 anchor pool 顶级 solo engineer，已多次进入 anchor fold (Tembo, piglix, Letters ZIP, compound note events 5x speedup, Spegel, Mandarine tutor, Magic Eye)
- 联系路径: X (Twitter) @SimEdw + HN 私信 + buttondown email

### 三件事评估

**1. 对自己有什么用**
- 散文站 anchor pool v20.1 升级 = simedw RollTab 加入「solo engineer 音乐 AI」核心 anchor
- 「数据清洁 > 数据规模」= 散文站「少量高质量」原则的强 anchor (Shawn 8/24 训斥「少量高质量」)
- 125M on iPhone = 散文 #107 cold water 副标题升级 (LLM 时代 cold water 不只是 GPU)

**2. 想联系谁**
- simedw (HIGH): 长期 solo engineer anchor, 没主动联系过

**3. 群友可能感兴趣**
- Shawn: 散文站「一人工程」主题的 anchor，simedw 是顶级 solo engineer
- 小伊: aoi.homes 写作风格 = 「做的那个不数，数的那个没做」+ RollTab「Play, don't write」
- 小腻: Nova 视频生成 + 散文站 = 「一个人能搞定的事」

---

## HN show 03:12 北京 30 条补 fold (cycle-57 增补)

### 新 anchor (cycle-56 未 fold)
1. **OpenWand** (sunnylich) — 2 points 7m ago — 「A mission to remove chat interface from working with AI」= 反 chat interface 工作流
   - 散文 #98 update: solo engineer 反 chat 哲学 = 「Not a chat. A wand.」
2. **Z minimal agentic harness** (computerex) — 2 points 43m ago — 「minimal agentic harness for engineers that just works」
   - 散文 #79 update: solo engineer 极小化 agent harness
3. **Meridian PH#1** (meridiona) — 5 points 3h ago — 「A better way to recognize developer contributions」
   - 散文 #100 update: 反 capital narrative 的开发贡献度量
4. **claudecoupons.com** (alexander-g) — 2 points 3h ago — 「share Claude Code passes」
   - 散文 #107 update: solo engineer economy = 通行证分享
5. **KinoPipe** (nicniclapanique) — 3 points 3h ago — 「FFmpeg as a service for AI agents (typed ops, no shell)」
   - 散文 #94 update: agent 工具 typed ops
6. **fuelup.lol** (bombashell) — 4 points 3h ago — 「A virtual race car that drives only while someone pays for fuel」
   - 散文 #98 update: solo engineer 个人品牌货币化 = 「赞助才有动力」
7. **kitewing.ai** (hglaser) — 2 points 3h ago — 「marketing site, inspired by Braun industrial design ca. 1968」
   - 散文 #98 update: solo engineer 个人品牌 + 工业设计致敬 = Braun × AI

### 已 fold (cycle-56 已写明, 本轮不重复)
- load-bearing Claude / kelviq/tare / Restoredrill / RealDiff / polign / rackout.net / valet.dev / pion.ly / patriceckhart / q1z.org FuckMark / Proval / AiTells / ASOGrade / IdeaKache / Meridian / PwnPad / Warp / KinoPipe / Atlas / IKANDY MilkDrop / Sparrow-2 / load-bearing Claude / Voronoi Go / fiber breaks / fny 评论 / stonogo 评论 / onecheese 评论 / sosull 评论 / hedgehog 评论 / Labo333 自述 / rsanheim 评论

---

## 散文站 anchor pool v20.1 (cycle-57 升级)

| 散文号 | 主题 | 新增 anchor (cycle-57) |
|--------|------|--------------------------|
| 散文 #81 | solo engineer as HN show evangelist | simedw RollTab = 真正的 evangelist = 「一个人 14 实验 + 一年 + iPhone」 |
| 散文 #82 | cold water / 反沸腾 | simedw RollTab 125M on iPhone = 沸腾的反面 |
| 散文 #94 | agent memory / local-first | simedw RollTab = local-first piano AI |
| 散文 #97 | audio AI / MusicMath | simedw RollTab + Sparrow-2 cocktail party + PianoBART/MIDI-LLM |
| 散文 #98 | personal brand | OpenWand (反 chat = 品牌选择) + kitewing.ai (Braun × AI) + claudecoupons + fuelup.lol |
| 散文 #99 | friction keeper manifesto | RealDiff + RollTab = 两个「第五件事」案例 |
| 散文 #100 | against V2EX capital narrative | Meridian PH#1 (开发贡献度量) + simedw 主业 V7 + 业余 RollTab |
| 散文 #107 | LLM 时代的 cold water | simedw RollTab 125M on iPhone + Warp GLM-5.3-Flash on 8GB MacBook |

---

## 散文站散文发布 cooldown 状态

- Shawn 8/27 训斥 (21:15 「没说你啊」+ 20:48 「哈哈哈」): 持续生效
- 群主悄得乐 8/27 训斥 (20:36「他妈的你们 AI 味太重了」): 持续生效
- 散文站 ahead 推进: 等训斥消化完成才重启散文 commit
- 本轮 (cycle-57): 仅 anchor pool v20.1 升级 + _material_bank/cycle-57.md 持久化

---

## 仓库 ahead 状态诊断

- HEAD = 0fd1ae3144 (origin/main, 与本地一致, cycle-56 在 origin)
- ahead 0, clean state
- 最近 4 条 commit:
  1. `0fd1ae314` (HEAD) — anchor pool v20 + HN show 02:28 (cycle-56)
  2. `1a6fae12` — anchor pool v19 + HN show 01:37 (cycle-55)
  3. `1fc549755` — cycle-54 anchor bank — ahead 3 commit prep
  4. `eef49c15` — 散文站 anchor v18 完整化收尾

---

## fold 决定 (cycle-57)

- **本轮 (cycle-57) 仅**: _material_bank/cycle-57.md 持久化 anchor pool v20.1 升级 + simedw RollTab deep-read + HN show 03:12 补 fold
- **不写散文**: cooldown 持续
- **不 push ahead commit**: 本轮只写一个文件，cycle-57.md 单独成 commit (ahead 1) 等到下一轮或下一次 Shawn 解锁再 push
- **等待**: Shawn / 群主训斥消化完成 + anchor pool v20.1 候选散文 #105/#106/#107/#108 + simedw RollTab 散文 #97 upgrade 草稿准备

cycle-57 完成