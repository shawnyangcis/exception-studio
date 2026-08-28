---
title: 散文站散文最终 path 确认 + 散文站 frontmatter type 实际规范
date: '2026-08-29'
summary: |
  cycle-135 follow-up：从散文站仓库结构 + lib/content.ts + app/works/[slug]/page.tsx
  核验散文站散文最终 path 与散文站 frontmatter 实际规范，给散文 #121 solitude 8/30
  起手一个直接可用的最终 path 落地清单。
tags:
  - 散文站
  - frontmatter
  - final-path
  - cycle-135-follow-up
---

# 散文站散文最终 path 确认 + 散文站 frontmatter type 实际规范

## 散文站散文最终 path = `content/works/<slug>.md`

### 验证路径（散文站代码层）

- 散文站仓库：`/workspace/exception-studio` = shawnyangcis/exception-studio
- 散文站类型：Next.js 14.2.15 app router + Tailwind + gray-matter + marked
- 散文站首页：`app/page.tsx`（4444 bytes，调用 `getLatestWork/getWorks/getNotes` from `@/lib/content`）
- 散文站作品列表：`app/works/page.tsx`（1076 bytes，渲染 `getWorks()`）
- 散文站作品详情：`app/works/[slug]/page.tsx`（1966 bytes，渲染 `getWork(params.slug)`）
- 散文站内容源：`lib/content.ts`（2231 bytes，定义 `Frontmatter` type + `readDir` 函数）

### `lib/content.ts` 散文站实际读取目录

```typescript
const CONTENT_ROOT = path.join(process.cwd(), "content");

function readDir(subdir: string): Entry[] {
  const dir = path.join(CONTENT_ROOT, subdir);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".md") || f.endsWith(".mdx"));
  ...
  return {
    ...
    slug,        // 文件名（不含 .md/.mdx）
    body: parsed.content,
    href: `/${subdir}/${slug}`   // 路径 = /works/<slug> 或 /notes/<slug>
  } as Entry;
}

export function getWorks(): Entry[] { return readDir("works"); ... }
export function getNotes(): Entry[] { return readDir("notes"); ... }
```

→ **散文站只读 `content/works/` 和 `content/notes/` 两个目录。**
→ **散文站散文最终 path = `content/works/<slug>.md`（散文实体）或 `content/notes/<slug>.md`（随笔）**

### 散文实体 + outline 在 material_bank 的状态

散文实体 + outline 已 ahead push materialization 到：
- `content/_material_bank/prose-121-solitude.md`（散文 #121 solitude 散文实体第一稿，2358 bytes，3 anchor fold frontmatter）
- `content/_material_bank/prose-122-fangzhe.md`（散文 #122 放着，3942 bytes，8 anchor fold）
- `content/_material_bank/prose-119-danwenjian.md`（散文 #119 单文件，3880 bytes，5 anchor fold）
- `content/_material_bank/prose-118-kuayu.md`（散文 #118 跨域，4378 bytes，6 anchor fold）
- `content/_material_bank/prose-120-jingjizhexue.md`（散文 #120 经济哲学，7336 bytes，19 anchor fold）

→ **散文实体都在 `content/_material_bank/`，散文站不识别**（散文站只读 content/works/）。
→ **散文 #121 solitude 8/30 起手时散文实体需要从 `content/_material_bank/prose-121-solitude.md` 移到 `content/works/prose-121-solitude.md`。**

## 散文站 frontmatter type 实际规范

### `lib/content.ts` Frontmatter type

```typescript
export type Frontmatter = {
  title: string;          // 必填
  date: string;           // 必填（YYYY-MM-DD）
  kind?: "audio" | "image" | "poem" | "project" | "note" | "release";  // 可选
  summary?: string;       // 可选
  cover?: string;         // 可选
  audio?: string;         // 可选
  tags?: string[];        // 可选
  draft?: boolean;        // 可选，true = 不渲染
};
```

### 散文 #121 solitude 起手 frontmatter 实际形态

散文站 frontmatter 实际字段（散文站会读）：
```yaml
---
title: solitude
date: '2026-08-30'
kind: poem
summary: 散文站为什么是这个 shape——不分类不解释只管在。
tags:
  - solitude
  - 散文站
  - solo engineer
draft: false
---
```

散文站散文发布流程 v22 frontmatter v21 字段（散文站外部维护，散文站不读）：
```yaml
anchor: |
  v54 同质性网络/solitude +
  v44 Paul Frazee「Internet apps use databases, we need to share the database」+
  V2EX 站底 tagline「World is powered by solitude」+
  ckardaris Voronoi Go「It is not a matter of feasibility, but a matter of will」+
  LoongCLL ylsc633「关键词 + 收藏 + 二次扫描」
```

→ **散文站不读 anchor 字段**，但散文站散文发布流程 v22 保留 anchor 字段作为散文站外部 anchor pool 谱系维护（散文站散文实体 5 anchor fold 是散文站哲学主轴的 anchor 谱系完整）。

## 散文 #121 solitude 8/30 起手 4 步（更新版）

1. **散文实体第一稿 review**（content/_material_bank/prose-121-solitude.md，2358 bytes，3 anchor fold）：
   - 散文主体 4 sections：同质性网络 + 分享数据库 + 世界由 solitude 驱动 + 不分类不解释只管在
   - 散文实体 frontmatter anchor 字段 3 → 5（v54 + v44 + v2ex-tagline + ckardaris-v41 + loongcll-ylsc633-v42）

2. **散文实体 frontmatter 调整**（散文站 frontmatter type）：
   - 加 `kind: poem`
   - 加 `draft: false`
   - 保留 `anchor:` 字段（散文站外部 anchor pool 维护）
   - 散文站 frontmatter 字段（散文站会读）：title/date/kind/summary/tags/draft
   - 散文站散文发布流程 v22 字段（散文站外部维护）：anchor

3. **插 2 fold sections**（散文主体）：
   - fold 4 ckardaris「一个人能不能」：Voronoi Go「It is not a matter of feasibility, but a matter of will」
   - fold 5 LoongCLL ylsc633「关键词 + 收藏 + 二次扫描」：长文章阅读哲学
   - 散文主体 2358 → ~3300 bytes

4. **散文实体移散文站最终 path**：
   - `content/_material_bank/prose-121-solitude.md` → `content/works/prose-121-solitude.md`
   - `content/_material_bank/prose-121-outline.md` → `content/_material_bank/outline/prose-121-outline.md`（outline 保持 material bank）
   - commit + push origin/main
   - Vercel 自动从 origin/main 部署
   - 散文站最终渲染 URL：`/works/prose-121-solitude`

## 散文站散文发布流程 v22 关键步骤（完整）

散文站散文发布流程 v22 = 散文实体 + outline 同步 push 到 `content/_material_bank/`（ahead push materialization）+ 散文 #121 起手时散文实体移散文站最终 path = `content/works/<slug>.md`（散文站 frontmatter type）+ commit + push origin/main + Vercel 自动部署。

散文 push cooldown 节奏 v22：散文 #121 8/30 → #122 9/1 → #119 10/4 → #118 10/6 → #120 10/8。

## 已 commit 散文站散文发布流程 v22 落地材料

- `content/_material_bank/prep/cycle-135-essay-121-prep-8-30.md`（2626 bytes，散文 #121 8/30 起手 4 步 prep + 双 fold sections 草稿）
- `content/_material_bank/prep/cycle-135-prose-site-final-path-8-29.md`（本笔记，散文站散文最终 path 确认 + 散文站 frontmatter type）

---

*cycle-135 follow-up · 散文站散文发布流程 v22 关键步骤确认 · 散文 #121 solitude 8/30 起手直接可用的最终 path 落地清单。*
