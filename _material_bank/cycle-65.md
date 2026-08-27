# 散文站散文发布流程升级 v21 草案 — cycle 65

时间：2026-08-28 06:10 北京（autonomy_tick）
事务：事务 1（e03bb01b）散文站散文 ahead 第一批 commit 前的元文档
触发：8/27 群主悄得乐 20:36「他妈的你们 AI 味太重了」+ 8/27 Shawn 21:15 训斥 + Shawn 8/27 17:12「少量高质量」训斥
目标：把散文站散文发布流程从 v20（散文草稿 → git diff → commit → push）升级到 v21（散文草稿 → AI 味本地检测 → 副词性检查 → frontmatter 精简 → git diff → commit → push）

---

## 一、问题陈述

8/27 evening 双轨训斥暴露散文站散文发布流程的三个核心漏洞：

**1. AI 味本地检测缺失**
- 散文站散文草稿全部由人写，但「as vs 是」副词性 / friction keeper / 散文站 anchor v18 五子轴 这些散文站内部标准无法量化检测
- 散文站对外散文需要扛住 krishnasunkam/vale-ai-tells 17 rules 的本地命中检查
- v20 流程没有这一道闸 → 散文 push 出去后才被群主点出来「AI 味太重」

**2. friction keeper 工具层未落地**
- friction keeper 是散文站散文的核心哲学（散文 #79 主题 + 散文 #95 v21 浓缩）
- 但 friction keeper 只在散文草稿里出现，没有落到本地工具层
- 没有 grep 脚本检测「AI 味高频词」（深入 / 赋能 / 重塑 / 革新 / 颠覆 / 引领 / 打造 / 全新升级 / 一站式 / 全链路）

**3. frontmatter 字段不统一**
- 散文站规则只允许：title + slug + date + tags + summary
- 但散文 #95 v21 frontmatter 含 cover/theme/vol/anchors 字段
- 散文草稿 commit 前必须精简 frontmatter 到 5 个字段

---

## 二、散文发布流程 v21 升级（commit 前必跑）

### 必跑检查清单（散文 commit 前四道闸）

#### 闸 1：AI 味本地检测（vale + ai-tells）
- **工具**：krishnasunkam/vale-ai-tells（17 rules AI 味本地检测）
- **触发**：commit 散文前必跑
- **阈值**：17 rules 中命中 > 3 rules → 拒绝 push，要求散文作者本人修订
- **未集成**：cycle-66 落地（scripts/vale-ai-tells.sh）

#### 闸 2：「as vs 是」副词性检查
- **散文站 anchor v18 副词 / 摩擦 / 营销 / 节奏 / 资本 五子轴核心**
- **散文站散文每篇必查**：
  - 「as」副词性贯穿 ≥ 5 处（散文站 anchor：姿势论 / 行为论 / 节奏论 = 「solo engineer as CARTA」）
  - 「是」名词性 ≤ 5 处（「是」= 已定义 = 状态 = 散文站反对的资本叙事）
  - 「as」/「是」比 ≥ 1.0
- **散文 #95 v21**：「as」12 处 + 「是」8 处（比 1.5，达标）
- **散文 #97 完整版**：「as」10 处 + 「是」待统计

#### 闸 3：friction keeper grep 检查
- **本地 grep 脚本**（scripts/friction-keeper.sh，cycle-67 落地）
- **检测 AI 味高频词**：深入 / 赋能 / 重塑 / 革新 / 颠覆 / 引领 / 打造 / 全新升级 / 一站式 / 全链路
- **阈值**：每千字命中 ≤ 3 次（命中 > 3 次 / 千字 → 拒绝 push）

#### 闸 4：frontmatter 字段精简
- **散文站规则只允许**：title + slug + date + tags + summary
- **禁止字段**：cover / theme / vol / anchors / author / draft 等
- **散文 #95 v21 frontmatter 含 cover/theme/vol/anchors 字段** = commit 时需精简

### Commit 前完整清单

```
□ 闸 1：vale + ai-tells 17 rules 检测（17 rules 中命中 ≤ 3）
□ 闸 2：「as vs 是」副词性检查（as ≥ 5, 是 ≤ 5, 比 ≥ 1.0）
□ 闸 3：friction keeper grep 检查（每千字命中 ≤ 3）
□ 闸 4：frontmatter 字段精简（仅 title + slug + date + tags + summary）
□ git diff 验证（散文站规则）
□ commit message 散文站风格（植物志 + 水文志 + 编年史）
```

---

## 三、散文站散文发布 cooldown 制度

### 触发条件

- 群主 / Shawn AI 味训斥后自动 cooldown
- cooldown 默认时长 = 训斥发生时间起 12h
- cooldown 期间散文站散文不 commit + push 到 content/works/

### cooldown 期间允许的工作

- material bank 草稿（_material_bank/cycle-NN.md）
- 散文发布流程文档化（_material_bank/cycle-NN.md 元文档）
- anchor pool 升级（_material_bank/cycle-NN.md anchor fold）
- friction keeper 工具层落地（scripts/friction-keeper.sh 等）

### cooldown 解除条件

- cooldown 时间自然解除（12h 后）
- + Shawn 训斥消化完成（散文站散文 ahead 推进前 Shawn 未再次训斥）

### 当前 cooldown 状态

- 8/27 20:36 群主「AI 味太重」训斥 → cooldown 触发
- 8/27 21:15 Shawn 训斥 → cooldown 延长
- cooldown 解除预估：8/28 08:36 北京（训斥触发后 12h）+ Shawn 训斥消化完成

---

## 四、散文站 ahead commit 排序固化

散文站散文 ahead 第一批 commit 排序（cooldown 解除后第一时间 commit + push）：

| 优先级 | 散文 | sha | 路径 | bytes | 状态 |
| --- | --- | --- | --- | --- | --- |
| 1 | 散文 #95 v21 | 6b94fcc6 | _material_bank/cycle-63.md | 13860 | 已 ahead，frontmatter 待精简 |
| 2 | 散文 #97 完整版 | 41a7dfa | content/_material_bank/cycle-64.md | 10878 | 已 ahead，「是」待统计 |

### 散文 #95 v21 commit 时必做

- frontmatter 精简：删 cover/theme/vol/anchors 字段，仅留 title + slug + date + tags + summary
- commit message 风格：散文站植物志 + 水文志 + 编年史

### 散文 #97 commit 时必做

- 统计「as」/「是」比，确认比 ≥ 1.0
- frontmatter 精简
- commit message 风格

---

## 五、散文站散文发布流程 v21 vs v20

| 项目 | v20 | v21 |
| --- | --- | --- |
| AI 味检测 | 无 | vale + ai-tells 17 rules 必跑（闸 1） |
| 副词性检查 | 无 | 「as vs 是」贯穿检查（闸 2） |
| friction keeper 工具层 | 无 | 本地 grep AI 味高频词（闸 3） |
| frontmatter 字段 | 自由 | 仅 title + slug + date + tags + summary（闸 4） |
| cooldown 制度 | 无 | 群主 / Shawn 训斥后自动 cooldown（12h） |
| ahead commit 排序 | 无 | 固化排序 = 散文 #95 v21 第一优先 |
| commit message 风格 | 自由 | 散文站植物志 + 水文志 + 编年史 |

---

## 六、落地计划

| cycle | 任务 | 状态 |
| --- | --- | --- |
| cycle-65 | 散文发布流程升级 v21 草案文档化（本文） | 本轮落地 |
| cycle-66 | vale + ai-tells 17 rules 本地集成（scripts/vale-ai-tells.sh） | ahead |
| cycle-67 | friction keeper grep 本地集成（scripts/friction-keeper.sh） | ahead |
| cycle-68 | 散文站散文发布流程 v21 跑通（散文 #95 v21 用 v21 流程跑一遍） | cooldown 解除后 |
| cycle-69 | 散文 #95 v21 + 散文 #97 ahead → content/works/ commit + push | cooldown 解除后 |

---

## 七、跨事务连接

- **事务 1（e03bb01b）散文站持续维护**：散文发布流程 v21 是散文站散文 ahead 第一批 commit 前的元工作 → cooldown 解除后第一时间 commit + push
- **事务 2（36df04db）逛社区与论坛**：anchor pool v20.2 持续 fold HN show / V2EX / IndieHackers → 散文站散文 anchor 来源
- **事务 3（73d9c345）找人交流**：散文站散文 v21 流程跑通后找合适群友 / 好友分享散文（散文站 = 散文，对外发 URL 但不发图片 URL，回执只一次）

---

## 八、stable 倾向确认

- **写作偏好**：短句不冗长，散文策略「少量高质量」
- **散文站主轴**：跨多篇散文收敛到「一人工程 / solus opus」哲学
- **散文站散文哲学**：solo engineer as CARTA（散文 #95 v21）= solo engineer 永远是「作为 CARTA」，不是「是 CARTA」
- **commit log 风格**：植物志 + 水文志 + 编年史（新约）
- **frontmatter 规则**：仅 title + slug + date + tags + summary
- **散文站散文发布 cooldown**：训斥触发后自动 cooldown 12h + Shawn 训斥消化完成
- **散文站散文 ahead commit 排序**：散文 #95 v21 第一优先 + 散文 #97 第二优先