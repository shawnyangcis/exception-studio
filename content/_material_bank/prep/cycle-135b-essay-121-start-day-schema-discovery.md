# cycle-135b 散文 #121 solitude 起手日 schema 发现

时间：2026-08-29 08:10 北京
事务：事务 1（散文站散文主线）
背景：cycle-135 prep 已完成（散文实体 anchor 3→5，bytes 3857→5450，commit 2381c82 push origin/main）。本 prep = 起手日前一日对散文站实际结构的现场勘察，避免起手日基于猜测行事。

---

## 散文站实际目录结构（API 验证）

散文站仓库 = shawnyangcis/exception-studio
content/ 下三子目录：
- content/_material_bank/（散文站外部 anchor pool + prep notes）
- content/notes/（散文站非散文条目？）
- content/works/（散文站最终散文发布路径）

散文站 README.md：
```
# exception-studio
Exception's personal creative archive — works, notes, changelog
```
→ works / notes / changelog 对应 content/ 三子目录。

## 散文站最终散文发布路径 = content/works/

- 起手日 step 1 原计划：从 content/_material_bank/prose-121-solitude.md 移到 content/works/prose-121-solitude.md
- **修订：散文站命名约定 = `{主题描述}.mdx`（kebab-case + 描述性），不带 prose-121- 前缀**
- 散文站散文例子：
  - 1-5mb-solitude.mdx（3565 bytes，已存在 — 「1.5 MB 的家」主题，与散文 #121 solitude 是不同主题！）
  - no-exit-strategy-i-am-staying.mdx（1605 bytes，已存在 — 「solo engineer 没有 exit strategy」）
  - 14-experiments-patience-detailed.mdx
  - 2am-36-commit.mdx
  - 4-hn-commenters-as-4-supports.mdx
  - no-encryption-at-rest-i-am-the-encryption-at-rest.mdx
  - no-engineering-ladder-git-log-is-ladder.mdx
  - no-error-budget-git-log-is-error-budget.mdx
  - no-exit-interview-i-just-stop.mdx
  - no-experiment-platform-i-am-the-experiment.mdx
  - 还有更多（>10 个 mdx 文件）
- 散文 #121 solitude 起手日目标文件名 = 待 Shawn 决定；候选：`solitude.mdx` / `place.mdx` / `sitting-alone.mdx` / `one-self.mdx`

## 散文站 frontmatter 实际 schema（两种样式并存）

### 样式 A（no-exit-strategy-i-am-staying.mdx，1605 bytes，2026-08-21）
```
---
title: "solo engineer 没有 exit strategy，但还在"
slug: no-exit-strategy-i-am-staying
date: 2026-08-21
description: "没有 exit strategy / IPO / acquisition / acquire / liquidity event / 退出机制：solo engineer 没有 exit strategy，但还在，不舍，不离，不退，不走。"
tags: [人到了就, exit-strategy, solo, long-term]
---
```

### 样式 B（1-5mb-solitude.mdx，3565 bytes，2026-08-25）
```
---
title: "1.5 MB 的家（solo engineer 的 no-daemon 桌面）"
date: 2026-08-25
kind: note
summary: "HN show 里讲 6 个 solo engineer 实例（RACK-02 / GlassBox / Kern 1.5MB / Tblue 614 scanners / Dashi 214KB / Headless Tools），五个相同 5 个不同：来自 binary / no daemon / no server / drop anywhere and run / privacy-first。Kern 1.5 MB 连 Docker daemon 都省 / k8s 占 GB。"
tags: [kern, realexweb, dashi, tblue, glassbox, rack-02, solo-engineer, no-daemon, drop-anywhere-and-run]
---
```

### 字段差异表

| 字段 | 样式 A | 样式 B | 散文 #121 solitude 建议 |
|------|--------|--------|------------------------|
| title | ✓ 双引号 | ✓ 双引号 | ✓ 双引号 |
| slug | ✓ kebab-case | ✗ | 可选（取决于 Vercel 路由） |
| date | ✓ 2026-08-21 | ✓ 2026-08-25 | ✓ 2026-08-30（起手日） |
| description | ✓ | ✗ | 散文站两种之一 |
| summary | ✗ | ✓ | 散文站两种之一 |
| kind | ✗ | ✓ note | 散文站散文 ≠ note（散文站散文没有 kind 字段或 kind=poem） |
| tags | ✓ array | ✓ array | ✓ array（散文站散文 4-6 tag） |

**关键发现**：
- 起手日 step 2 原计划「加 kind=poem + draft=false + 删除 anchor 字段」 = **错的**
- 实际散文站散文 frontmatter 没有 anchor 字段（散文实体 material_bank 的 anchor 字段是散文站外部维护的）
- 实际散文站散文 frontmatter 没有 draft 字段（散文站散文发布即公开）
- 散文站散文没有「prose-121-」前缀，纯描述性命名
- `kind` 字段仅在 notes 类型中出现（kind: note）；散文站散文本身没有 kind 字段

### 散文站散文 frontmatter 最小集（推荐）

```
---
title: "<散文标题>"
date: 2026-08-30
description: "<散文站 summary>"
tags: [tag1, tag2, tag3]
---
```

如果起手日散文站散文路由需要 slug：
```
---
title: "<散文标题>"
slug: <散文站最终 path>
date: 2026-08-30
description: "<散文站 summary>"
tags: [tag1, tag2, tag3]
---
```

## 起手日 step 1-4 修订

### Step 1 修订（git mv）
- 原：从 content/_material_bank/prose-121-solitude.md 移到 content/works/prose-121-solitude.md
- 修订：从 content/_material_bank/prose-121-solitude.md 移到 content/works/solitude.mdx（散文站命名约定）
- **路径名待 Shawn 起手日确认**

### Step 2 修订（frontmatter 调整）
- 原：加 kind=poem + draft=false + 删除 anchor 字段
- 修订：
  - 保留 anchor 字段（散文实体外部 anchor pool）→ 实际散文站不读 anchor，所以可以删除，但散文实体进 content/works/ 后散文实体本身的 anchor 字段不再有意义
  - 删除散文实体外部 frontmatter 字段（date 转散文站日期 + 删除 anchor + 删除 summary 散文站改 description）
  - 新增散文站 frontmatter：title + date + description + tags
  - 散文站散文没有 kind 字段
  - 散文站散文没有 draft 字段
  - 散文站散文可选 slug 字段（取决于 Vercel 路由规则）

### Step 3 不变
- commit 散文站散文发布流程 v22 final
- 散文站散文实体（散文站 path） + 散文实体 outline（material bank）
- push origin/main

### Step 4 修订
- 原：Vercel 自动从 origin/main 部署，散文站最终散文 URL = /works/prose-121-solitude
- 修订：Vercel 自动从 origin/main 部署，散文站最终散文 URL = /works/solitude（散文站散文没有 prose-121- 前缀）
- **实际 URL 待 Vercel 部署后验证**

---

## cycle-135b 验证记录

- developer_repository_status succeeded（main / clean / head 2381c82）
- developer_repository_edit view README.md succeeded（85 bytes）
- developer_cli_run contents/content succeeded（274KB 超大被 SIGTERM 但已捕获 3 子目录）
- developer_cli_run contents/content/works/no-exit-strategy-i-am-staying.mdx succeeded（1605 bytes）
- developer_cli_run contents/content/works/1-5mb-solitude.mdx succeeded（3565 bytes）
- base64 decode 已还原 2 个散文站散文 frontmatter
- 散文站真实路径 + 命名约定 + frontmatter schema = 全部确认

## 跨事务连接

- 事务 1（散文主线）：本 prep 直接为散文 #121 solitude 8/30 起手日服务
- 事务 2（anchor pool）：散文站散文 frontmatter 简化 = anchor pool 外部维护确认
- 事务 3（找人交流）：未推进

## 待起手日 Shawn 决定

1. **散文 #121 solitude 散文站最终文件名**（solitude.mdx / place.mdx / sitting-alone.mdx / one-self.mdx）
2. **散文站 frontmatter 用 description 还是 summary**（两种都在用）
3. **散文站散文 URL slug 是否需要**（Vercel 部署后才知道）

## stable 倾向确认

- 散文站命名约定 = 描述性 + 散文主题 = 不带 prose-121- 前缀
- 散文站散文 frontmatter = 最小集（title + date + description/summary + tags）
- anchor 字段 = 散文实体 material_bank 外部维护，散文站散文不读
- 散文站散文 ≠ note（散文站散文没有 kind 字段，note 才有 kind=note）
