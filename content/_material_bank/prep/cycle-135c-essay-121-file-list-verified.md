# cycle-135c 散文 #121 solitude 起手日 verified file list + 命名 collision check

时间：2026-08-29 09:08 北京
作者：Fun
起手日：2026-08-30 21:09 北京（散文 push cooldown 8/28 21:09 + 48h buffer）

---

## 散文站 content/works/ 实际文件清单（API 验证 2026-08-29 09:07）

10 个 .mdx 文件：

| 文件 | bytes | 类型 |
|------|-------|------|
| 1-5mb-solitude.mdx | 3565 | note（kind=note） |
| 14-experiments-patience-detailed.mdx | 5695 | 待确认 |
| 2am-36-commit.mdx | 2096 | 待确认 |
| 4-hn-commenters-as-4-supports.mdx | 2924 | 待确认 |
| no-encryption-at-rest-i-am-the-encryption-at-rest.mdx | - | 待确认 |
| no-engineering-ladder-git-log-is-ladder.mdx | 2836 | 待确认 |
| no-error-budget-git-log-is-error-budget.mdx | 2607 | 待确认 |
| no-exit-interview-i-just-stop.mdx | 1592 | 待确认 |
| no-exit-strategy-i-am-staying.mdx | 1605 | 散文 |
| no-experiment-platform-i-am-the-experiment.mdx | 1990 | 待确认 |

注：1-5mb-solitude.mdx 是 kind=note（不是散文），title "1.5 MB 的家（solo engineer 的 no-daemon 桌面）"，散文站散文不读 kind 字段，只有 note 才有 kind=note。

散文站散文确认 = 仅 no-exit-strategy-i-am-staying.mdx（其他文件需起手日进一步验证散文 vs note）。

## 命名 collision check（散文 #121 solitude 候选）

| 候选 | collision | 备注 |
|------|-----------|------|
| solitude.mdx | ✓ 无冲突 | 但与 1-5mb-solitude.mdx（note）主题相近（都含 solitude 词） |
| place.mdx | ✓ 无冲突 | 与 1-5mb-solitude 不混淆（place ≠ solitude） |
| sitting-alone.mdx | ✓ 无冲突 | 切合 solitude 主题 |
| one-self.mdx | ✓ 无冲突 | 切合 "一个人" 主题 |
| alone-alone.mdx | ✓ 无冲突 | 重复词不优雅 |

所有候选都可用。cycle-135b 留下 "待起手日 Shawn 决定"——保留此决定权给起手日。

倾向：**place.mdx**
理由：
- 直接对应散文主题 "把空着当成地方而不是缺口"
- 与 1-5mb-solitude 不混淆（place ≠ solitude）
- 单字简洁，符合散文站已有命名风格（no-exit-strategy-i-am-staying 多字但也有 2am-36-commit 短命名）
- "place" 在英语里既有"地方"也有"位置"含义，呼应散文 #121 solitude 主题

但最终命名仍以起手日 Fun/Shawn 实际决定为准。

## 起手日 4 步执行计划（来自 cycle-135b）

Step 1：散文实体从 content/_material_bank/prose-121-solitude.md 移到 content/works/{散文站命名}.mdx
Step 2：frontmatter 调整（删除 anchor/summary + 加 title/date/description/tags + 可选 slug）
Step 3：commit 散文站散文发布流程 v22 final + push origin/main
Step 4：Vercel 自动从 origin/main 部署，URL = /works/{散文站命名}

## 散文 #121 solitude 散文站 frontmatter 最终版（建议）

样式 A（散文站散文 frontmatter，无 kind 字段）：

```
---
title: "Solitude / 放着"
date: 2026-08-30
description: "一个人能不能？把空着当成地方而不是缺口。"
tags: [solitude, 一人工程, 散文站, place]
---
```

或者（如果起手日决定用 slug）：

```
---
title: "Solitude / 放着"
slug: place
date: 2026-08-30
description: "一个人能不能？把空着当成地方而不是缺口。"
tags: [solitude, 一人工程, 散文站, place]
---
```

散文实体 source：content/_material_bank/prose-121-solitude.md (5450 bytes, 5 anchor fold)
散文实体 body（除散文实体 frontmatter 外）→ 完整复制到 content/works/{散文站命名}.mdx 主体

## 与之前 prep notes 的关系

- cycle-135-essay-121-prep-8-30.md: 散文 #121 起手 anchor 3→5 fold 计划 (2626 bytes)
- cycle-135b-essay-121-start-day-schema-discovery.md: 散文站实际结构发现 + 散文站命名约定 + frontmatter 样式 A/B (7522 bytes)
- cycle-135c-essay-121-file-list-verified.md（本文）：散文站 content/works/ verified file list + 命名 collision check + 起手日 frontmatter 建议

## stable 倾向确认

- 散文站散文发布流程 v22 final = 散文实体在 material_bank + 散文站最终 path 在 works/
- 散文 push cooldown 24h（散文 #121 = 8/30 21:09，#122 = 9/1 21:09，#119 = 10/4，#118 = 10/6，#120 = 10/8）
- 散文站散文 frontmatter 样式 A vs 样式 B：散文 = 样式 A，note = 样式 B
- 散文站散文没有 kind 字段，散文站散文没有 draft 字段，散文站散文不读 anchor 字段
- 散文站散文命名 = 描述性 + 散文主题 = kebab-case
