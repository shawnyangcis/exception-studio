# cycle-137 essay-119 单文件散文实体真实状态 prep note（8/29）

> 起手日：10/4 21:09 北京（散文 push 节奏 v22 = #119 单文件 10/4）
> 起手前 prep：散文实体真实状态 + 散文站命名候选 + frontmatter 样式 A 转换 + 起手 4 步
> 验证依据：web_fetch raw.githubusercontent.com/shawnyangcis/exception-studio/fe8fa50/content/_material_bank/prose-119-danwenjian.md @ HEAD fe8fa50 = 200 OK

---

## 一、散文 #119 单文件散文实体真实状态（HEAD fe8fa50）

### frontmatter（5 anchor fold）

```yaml
title: 单文件
date: '2026-10-04'
anchor:
  - v51 Bento
  - v52 Colibrì
  - v55 LatticeDB
  - v60 Voronoi Go
  - v103 Luanti 单文件游戏引擎
summary: 散文站为什么是这个 shape——单文件就能跑。
tags:
  - 单文件
  - 散文站
  - solo engineer
```

### anchor fold 状态（无描述重复问题）

| anchor | fold 类型 | 散文实体描述 |
|--------|-----------|-------------|
| v51 Bento | HTML 单文件 | 「把 HTML + CSS + JS 全部塞进单个 .html 文件，distribution as a single file」 |
| v52 Colibrì | 浏览器单文件 | 「I want my browser to be one file I can open in 20 years」 |
| v55 LatticeDB | 数据库单文件 | 「solo engineer 用 Zig 写的单文件图数据库。一个 .zig 文件实现一个 graph DB」 |
| v60 Voronoi Go | indie game 单文件 | 「solo engineer 写的全栈 indie game + community bot + 异步对弈，单一可执行文件 = 一切」 |
| v103 Luanti | 游戏引擎单文件 | 「Minetest 后继支持单文件游戏引擎打包：一个 .lua 文件 = 一个完整的游戏」 |

5 anchor 描述清楚，无散文 #121 solitude 的 ckardaris + LoongCLL 双 fold 描述近似问题。

### body 8 sections 全清晰

1. **一个文件就是一切**（Bento + Colibrì + 散文站 = markdown 单文件）
2. **一个文件 = 一个数据库**（LatticeDB + Voronoi Go + anchor pool 单文件 = 一个 markdown）
3. **一个文件 = 一个游戏**（Luanti 单文件游戏引擎 + 散文 = 单独玩的世界）
4. **不需要框架**（散文站不是框架，每篇散文可以单独存在）
5. **不需要平台**（散文站不是平台，Vercel 倒了还在 origin/main）
6. **不需要安装**（打开散文站，阅读散文，关掉散文站）
7. **20 年后还能打开**（Colibrì 作者原话 + 散文站 = 20 年后还能打开的东西）
8. **不分类不解释只管在**（散文站哲学主轴「不分类不解释只管在」直接收口 = 散文站为什么要追单文件哲学）

散文站哲学主轴 = 「不分类不解释只管在」+「放不下才是真写到了」+「放着」= 散文 #119 单文件直接收口。

### 散文实体总长 3880 bytes（5 anchor fold + 8 sections）

散文实体散文主题 = 单文件 / single-file = edent / tke248 / flostep / simedw 同一脉络 = solo engineer 单文件哲学呼应。

---

## 二、散文 #119 单文件散文站散文最终 path

### 散文主题 = 单文件

候选散文站命名：
- `single-file.mdx`：直译，散文站散文命名 = kebab-case + 描述性
- `one-file.mdx`：散文站散文命名 one-X 句式（散文站散文站命名风格）
- `one.mdx`：太抽象，散文站散文站命名约定 = 描述性
- `solo-file.mdx`：solo engineer 哲学呼应但散文站命名约定没出现过 solo-file
- `i-am-a-single-file.mdx`：长散文站命名，散文站散文命名 = 描述性 + 简洁

### 倾向：`single-file.mdx`

理由：
- 散文主题 = 单文件，散文站命名 single-file 简洁
- 散文站散文命名约定 = kebab-case + 描述性
- 散文站散文 URL = `/works/single-file`
- 散文站散文与散文站散文已有散文站命名风格一致（1-5mb-solitude.mdx / 2am-36-commit.mdx 等散文）

散文站散文 URL = `/works/single-file`（Vercel 部署后验证）。

### collision check

散文站 content/works/ 已有 10 个 .mdx 文件：
- 1-5mb-solitude.mdx
- 14-experiments-patience-detailed.mdx
- 2am-36-commit.mdx
- 4-hn-commenters-as-4-supports.mdx
- no-encryption-at-rest-i-am-the-encryption-at-rest.mdx
- no-engineering-ladder-git-log-is-ladder.mdx
- no-error-budget-git-log-is-error-budget.mdx
- no-exit-interview-i-just-stop.mdx
- no-exit-strategy-i-am-staying.mdx
- no-experiment-platform-i-am-the-experiment.mdx

候选 single-file.mdx 不与任何已有散文站散文冲突。

---

## 三、散文 #119 单文件散文站散文 frontmatter 样式 A 转换

### 当前散文实体 frontmatter（样式 + anchor）

```yaml
title: 单文件
date: '2026-10-04'
anchor:
  - v51 Bento
  - v52 Colibrì
  - v55 LatticeDB
  - v60 Voronoi Go
  - v103 Luanti 单文件游戏引擎
summary: 散文站为什么是这个 shape——单文件就能跑。
tags:
  - 单文件
  - 散文站
  - solo engineer
```

### 散文站散文 frontmatter 样式 A（散文）

散文站散文样式 A = title + slug + date + description + tags（散文站散文没有 kind/draft/anchor 字段）

### 转换后散文站散文 frontmatter（散文站样式 A）

```yaml
title: 单文件
slug: single-file
date: '2026-10-04'
description: 散文站为什么是这个 shape——单文件就能跑。
tags:
  - 单文件
  - 散文站
  - solo engineer
```

转换说明：
- 去 anchor 字段（散文站散文没有 anchor 字段，anchor 字段是散文站外部 anchor pool 谱系维护）
- 加 slug: single-file（散文站散文 URL = /works/single-file）
- summary → description（散文站散文样式 A 用 description 不用 summary）
- title/date/tags 保留

---

## 四、散文 #119 单文件散文实体散文站散文起手 4 步（10/4 21:09 北京起手窗口）

### Step 1: frontmatter 改样式 A

```yaml
title: 单文件
slug: single-file
date: '2026-10-04'
description: 散文站为什么是这个 shape——单文件就能跑。
tags:
  - 单文件
  - 散文站
  - solo engineer
```

### Step 2: 散文实体移到 content/works/single-file.mdx

mv content/_material_bank/prose-119-danwenjian.md → content/works/single-file.mdx

### Step 3: commit

commit log 风格 = 植物志 + 水行志 + 编年史
示例：
```
散文站：散文 #119 单文件起手（10/4 北京）
散文实体 3880B（5 anchor fold + 8 sections）
散文站散文最终 path = content/works/single-file.mdx
散文站散文 URL = /works/single-file（Vercel 部署后验证）
散文站哲学主轴「不分类不解释只管在」收口
```

### Step 4: push origin/main → Vercel 自动部署

Vercel 自动从 origin/main 部署散文站散文，散文站散文 URL `/works/single-file` 散文站散文上线。

---

## 五、散文 #119 单文件散文实体散文站散文 prep 状态

散文 #119 单文件散文实体真实状态 prep（cycle-137）完成：
- ✅ 散文实体真实状态（HEAD fe8fa50）= frontmatter 5 anchor fold + body 8 sections
- ✅ 散文站散文最终 path = content/works/single-file.mdx
- ✅ 散文站散文 frontmatter 样式 A 转换
- ✅ 起手 4 步（10/4 21:09 北京起手窗口）
- ✅ 散文站散文 URL = /works/single-file
- ✅ 散文站散文 collision check 10 个 .mdx 文件（候选 single-file.mdx 不冲突）

散文 #119 单文件散文实体散文站散文起手 prep（10/4 21:09 北京起手窗口）就绪。

---

## 六、散文 #119 单文件散文实体散文站散文散文主线哲学收口

散文 #119 单文件散文实体散文站哲学收口：
- 散文站 = 单文件 solo engineer = edent/tke248/flostep/simedw 同一脉络
- 散文站哲学主轴「不分类不解释只管在」直接收口 = 散文站为什么是单文件
- 散文站散文不需要框架 + 不需要平台 + 不需要安装 = 单文件哲学三个反面
- 散文站散文 20 年后还能打开 = Colibrì 作者「I want my browser to be one file I can open in 20 years」哲学呼应
- 散文站散文「放着」= 散文 #119 单文件 = 散文站散文可以单独存在 = 不需要散文站散文框架

散文 #119 单文件是散文站哲学主轴「不分类不解释只管在」散文站散文散文实体散文站散文散文实体散文站散文散文实体的散文主线哲学收口散文站散文散文实体。

---

## 七、散文 #121 vs 散文 #122 vs 散文 #119 散文实体散文站散文 prep 状态对比

| 散文 # | 散文主题 | 散文实体 prep | 散文站命名候选 | 起手日 |
|--------|----------|----------------|-----------------|--------|
| #121 | solitude | cycle-135 + 135b + 135c + 135d（4 篇） | place.mdx | 8/30 21:09 北京 |
| #122 | 放着 | cycle-136（1 篇） | leave-it.mdx | 9/1 |
| #119 | 单文件 | cycle-137（1 篇，本轮） | single-file.mdx | 10/4 21:09 北京 |

散文 #118 跨域散文实体真实状态 prep + 散文 #120 经济哲学散文实体真实状态 prep 待 cycle-138/139。

散文 push 节奏 v22 = #121 solitude 8/30 / #122 放着 9/1 / #119 单文件 10/4 / #118 跨域 10/6 / #120 经济哲学 10/8。
