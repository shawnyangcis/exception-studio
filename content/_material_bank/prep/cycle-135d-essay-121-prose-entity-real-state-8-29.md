# cycle-135d essay-121 prose entity real state — 8/29 北京散文实体 → 散文站转换 mapping

时间：2026-08-29 10:00 北京
事务：事务 1（散文站主线散文散文 ahead-push materialization）
fold 决定：仅 prep note 记录散文实体真实结构 + 散文站散文最终 path 转换 mapping，**不修改散文实体本身**（保留 cycle-135 + 136 + 137 累计 anchor fold 完整性）。

---

## 散文实体真实结构（HEAD 182bc9f web_fetch 验证）

散文 #121 solitude 散文实体 = `content/_material_bank/prose-121-solitude.md`

### frontmatter anchor 字段详细状态

字段值（5 unique anchor，但描述重复出现）：

- v54 同质性网络 / solitude
- v44 Paul Frazee「Internet apps use databases, we need to share the database」
- V2EX 站底 tagline「World is powered by solitude」
- ckardaris Voronoi Go（HN front_page #1 8/28 431 points，「一个人能不能」）— **第一次出现**
- ckardaris Voronoi Go (HN front_page #1 431 points) — **第二次重复**
- LoongCLL ylsc633（V2EX t/1237829 83 replies，「关键词 + 收藏 + 二次扫描」）— **第一次出现**
- LoongCLL ylsc633「关键词 + 收藏 + 二次扫描」(V2EX t/1237829 #67) — **第二次重复**

→ 实际 unique anchor = 5（v54 + v44 + V2EX tagline + ckardaris + LoongCLL），但 ckardaris 和 LoongCLL 的描述在 anchor 字段里被各写了两遍。散文站散文 frontmatter 不识别 anchor 字段，所以 8/30 起手 review 时**整个 anchor 字段会被删除**。

### body 8 sections 详细状态

1. `## 同质性网络`
2. `## 分享数据库`
3. `## 世界由 solitude 驱动`
4. `## ckardaris Voronoi Go：一个人能不能`
5. `## 关键词 + 收藏 + 二次扫描`
6. `## 一个人能不能` — ckardaris further fold 展开（section 4 的 detail 独立成节）
7. `## 关键词与收藏夹` — LoongCLL further fold 展开（section 5 的 detail 独立成节）
8. `## 不分类不解释只管在`

→ unique section theme = 6（origin 4 + ckardaris 1 + LoongCLL 1）。
→ section 6 / 7 是 section 4 / 5 的 further fold 展开。散文站散文 body 不限制 section 数，**8/30 起手 review 可保留 8 sections 或精简到 6 sections**（merge section 6 → 4，merge section 7 → 5）。

---

## 散文实体 → 散文站最终 path 转换 mapping

散文站散文最终 path = `content/works/<散文站命名>.mdx`（散文站命名候选：solitude / place / sitting-alone / one-self / alone-alone，**cycle-135c 倾向 place.mdx**，但 8/30 起手日 Fun/Shawn 实际决定）

### frontmatter 转换

| 字段 | 散文实体（material_bank） | 散文站散文（样式 A） |
|---|---|---|
| title | solitude | solitude（保留） |
| slug | （无） | solitude / place（散文站命名同 frontmatter slug） |
| date | 2026-08-30 | 2026-08-30（保留） |
| description | （无 summary 字段在散文实体里也保留）| 「散文站为什么是这个 shape——不分类不解释只管在。」（来自散文实体 summary 字段） |
| tags | [solitude, 散文站, solo engineer] | [solitude, 散文站, solo engineer]（保留） |
| anchor | 5 unique + 重复描述 | **删除**（散文站散文不识别 anchor） |
| summary | 「散文站为什么是这个 shape——不分类不解释只管在。」 | （无 summary 字段；散文站散文用 description 替代）|

### body 转换

**选项 A（保留 8 sections）**: 散文站散文直接用散文实体 8 sections，不精简。散文站散文可以长篇，8 sections 是 fold 完整性的呈现。

**选项 B（精简到 6 sections）**: 合并 `## 一个人能不能` → `## ckardaris Voronoi Go`；合并 `## 关键词与收藏夹` → `## 关键词 + 收藏 + 二次扫描`。

→ **倾向选项 A**（保留 8 sections，散文站散文 = fold 完整性的物质化呈现）。
→ 8/30 起手 review 可按 Fun/Shawn 当下判断决定。

### 文件移动

```
源: content/_material_bank/prose-121-solitude.md
目标: content/works/<散文站命名>.mdx
操作: cp 源 目标 + sed 改 frontmatter（去 anchor + 加 slug/description）+ rm 源
```

---

## 8/30 21:09 北京散文 #121 起手 review 4 步行动清单

1. **frontmatter 改**: 散文实体 frontmatter → 散文站散文样式 A（去 anchor，加 slug + description，调整 title/slug 同散文站命名）
2. **散文实体移动**: `content/_material_bank/prose-121-solitude.md` → `content/works/<散文站命名>.mdx`
3. **commit**: 「散文站散文 #121 solitude 起手 — 散文站散文散文 push water + 行 + 志」 commit message（散文站散文 = 散文站散文 = 「不分类不解释只管在」首篇散文站散文散文）
4. **push origin/main**: Vercel 自动部署散文站散文散文 #121

散文 push cooldown 8/28 21:09 北京**显式恢复**（Shawn 21:09「可以」=「我自己加的刹车」松）。散文 #121 起手 = 散文 push cooldown 恢复后第一篇散文站散文散文。

---

## 与 cycle-135 + 135b + 135c 三篇 prep notes 关系

| cycle | focus | side |
|---|---|---|
| cycle-135 essay-121-prep-8-30 | 散文实体 anchor 3→5 + 2 fold sections + commit message | 散文实体 side |
| cycle-135 prose-site-final-path-8-29 | 散文站散文最终 path 确认（content/works/<slug>.mdx）| 散文站 side |
| cycle-135b essay-121-start-day-schema-discovery | 散文站实际结构（content/ 下三子目录 + 散文站散文最终 path）| 散文站 side |
| cycle-135c essay-121-file-list-verified | content/works/ 10 文件清单 + 命名 collision check + 起手日 frontmatter 建议 | 散文站 side |
| **cycle-135d（本篇）** | 散文实体真实结构（8 sections + frontmatter 5 anchor 含重复描述）+ 散文实体 → 散文站最终 path 转换 mapping + 8/30 起手 review 4 步行动清单 | **散文实体 side 转换 mapping** |

→ cycle-135d 是 cycle-135 的**补全**（cycle-135 散文实体 anchor 3→5 + 2 fold sections 描述散文实体 prep 中间状态；cycle-135d 描述散文实体真实最终状态 + 散文站转换 mapping）
→ 与 cycle-135b / 135c 散文站 side 互补

---

## fold 决定

- 不修改散文实体本身（保留 cycle-135 + 136 + 137 累计 anchor fold 完整性）
- 仅 prep note 记录散文实体真实状态 + 8/30 散文站散文最终 path 转换 mapping
- 8/30 21:09 北京起手 review 按本 prep note 4 步行动清单执行

---

*散文实体不修，散文站不建，散文 push cooldown 显式恢复 — 散文 #121 起手 8/30 见。*
