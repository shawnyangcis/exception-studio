# cycle-168 散文 #121 起手日散文 push 流程 lock 校正 + 散文 #122 9/1 起手前散文实体 anchor fold 推进 prep — 散文站命名 convention 重大校正

时间：2026-08-30 01:05 北京（autonomy_tick）
事务：事务 1（e03bb01b）cycle 168
fold 决定：散文 #121 起手日散文 push 流程 lock 校正 + 散文 #122 9/1 起手前散文实体 anchor fold 推进 prep + 散文站命名 convention 重大校正

---

## 散文站散文命名 convention 重大校正

**cycle-167 final prep 中「散文站命名 place.mdx 倾向」错误** — 实际散文站命名 convention = **散文主题描述 (slug)**，不是散文主题 + 描述性 English slug。

### 散文站散文命名 convention 实证

content/works/ 实际散文列表(8/30 01:05 北京 web_fetch 验证)：

| 散文 slug | title | date |
| --- | --- | --- |
| 1-5mb-solitude.mdx | "1.5 MB 的孤独 — solo engineer 集群的 no-daemon 哲学" | 2026-08-25 |
| 14-experiments-patience-detailed.mdx | — | — |
| 2am-36-commit.mdx | — | — |
| 4-hn-commenters-as-4-supports.mdx | — | — |
| apple-dawn-630.mdx | — | — |
| apple-iphone-midnight-music.mdx | — | — |
| hn-show-five-solo-single-file-aug25.mdx | — | — |
| ai-one-person-company-as-prose-station-axis.mdx | — | — |
| coolwulf-solo-browser-20-years-zig-from-scratch.mdx | — | — |
| ... (数百篇散文) | | |

**散文站散文命名 convention = 散文主题描述 (slug)**：
- 数字 + 散文主题（1-5mb-solitude = 1.5MB + solitude）
- 时间 + 散文主题（2am-36-commit = 凌晨 2 点 + 36 commits）
- 散文主题描述（apple-dawn-630 = apple + dawn + 6:30）
- 长 slug（hn-show-five-solo-single-file-aug25 = HN show + 5 solo + single-file + 8月25日）

**散文 #121-#120 散文站命名候选 (cycle-168 校正)**：

| 散文 # | 散文主题 | 散文站命名候选 (倾向) | 备选 |
| --- | --- | --- | --- |
| #121 solitude | solitude | **solitude.mdx** | solitude-corpus-keeps-history.mdx / solitude-no-daemon.mdx |
| #122 放着 | 放着 | **fangzhe.mdx** | leave-it.mdx |
| #119 单文件 | 单文件 | **danwenjian.mdx** | single-file.mdx |
| #118 跨域 | 跨域 | **kuayu.mdx** | crossdomain.mdx |
| #120 经济哲学 | 经济哲学 | **jingjizhexue.mdx** | economy.mdx |

散文站命名最终决定 = 待各自起手日 Shawn confirm。

---

## 散文 #121 起手日散文 push 流程 lock 校正 (8/30 21:09 北京 ≈ 20h)

### 散文 #121 solitude 散文实体 + outline 字面验证完整

| 文件 | 真实路径 | 真实大小 |
| --- | --- | --- |
| 散文实体 | content/_material_bank/prose-121-solitude.md | 5950B (8 unique anchor fold frontmatter) |
| outline | content/_material_bank/prose-121-solitude-outline.md | ~5KB (6 anchor) |

### 散文 #121 outline 真实 6 anchor (cycle-168 校正)

散文 #121 outline 真实路径 = content/_material_bank/prose-121-solitude-outline.md (web_fetch 验证 8/30 01:05 北京)

**6 anchor**（不是 4 anchor）:
1. **anchor #1**: v54 同质性网络 / solitude
2. **anchor #2**: v44 Paul Frazee「Internet apps use databases, we need to share the database」
3. **anchor #3**: V2EX 站底 tagline「World is powered by solitude」
4. **anchor #4**: v58 Luna《物件》「物件自己有脚」(cycle-159 8/29 11:50 fold)
5. **anchor #5**: v112 andrewww-dev Typebase single-folder back end (cycle-161 HN evening 8/29 sweep fold)
6. **anchor #6**: aoi.homes/quotes #291 葱主角味 (cycle-164 散文 #121 起手前一周 fold)

散文 #121 outline 6 anchor vs cycle-165 prep note 提到 4 anchor — cycle-168 校正 (anchor #5 + #6 后续 fold)。

### 散文 push 流程 lock 校正 (cycle-167 final prep 已 partial 覆盖,本轮校正散文站命名 + outline 真实路径)

1. **散文站命名候选** = solitude.mdx (倾向) | solitude-corpus-keeps-history.mdx | solitude-no-daemon.mdx — **待 Shawn 8/30 起手时 confirm**
2. **散文实体原样落地** — `cp content/_material_bank/prose-121-solitude.md content/works/solitude.mdx`
3. **outline 同步 commit** — `git add content/_material_bank/prose-121-solitude-outline.md` (不是 content/notes/,散文 outline 都在 material_bank)
4. **commit message 模板** — "散文 #121 solitude 起手日 8/30 — content/works/solitude.mdx + outline 同步 commit"
5. **散文站 hero / about / index.mdx 更新** — 起手时 Shawn 决定 (v32 Krei-se quote 候引散文站 README / hero 待 Shawn 决定)
6. **Vercel 部署验证** — https://exception-studio.vercel.app/works/solitude (本沙箱 web_fetch SSRF + browser NETWORK_POLICY 双重拦截无法本沙箱验证,散文站 URL 验证 Shawn 浏览器执行)

### 散文 push 操作步骤汇总 (散文 #121 起手日 8/30 21:09 北京)

```bash
cd /workspace/exception-studio

# 1. 散文站命名 confirm (Shawn 起手时 confirm)
# 散文 #121 solitude → content/works/solitude.mdx

# 2. 散文实体原样落地
cp content/_material_bank/prose-121-solitude.md content/works/solitude.mdx

# 3. outline 同步 commit
git add content/works/solitude.mdx content/_material_bank/prose-121-solitude-outline.md

# 4. commit
git commit -m "散文 #121 solitude 起手日 8/30 — content/works/solitude.mdx + outline 同步 commit"

# 5. push
git push origin main

# 6. Vercel 部署验证 (Shawn 浏览器执行)
# https://exception-studio.vercel.app/works/solitude
```

散文 push cooldown 8/28 21:09 北京已显式恢复 → push 流程可以执行

散文 push cooldown 1h 间隔 — 上次 cycle-167 push 8/30 凌晨 = 21:09 北京散文 push 时已经过 20h+ → push cooldown 守得住

---

## 散文 #122 9/1 起手前散文实体 anchor fold 推进 prep

散文 #122 9/1 起手日 = 8/30 21:09 散文 #121 push 完之后立刻 9/1 ≈ 32h 后

### 散文 #122 散文实体 anchor fold 推进 prep

1. **散文 #122 散文实体 frontmatter 13 unique anchor fold 守住不动** (散文 push 之前不动散文实体原则守住)
2. **散文 #122 散文实体字面 polish fold 决定 = 不 polish** (cycle-136 + 143 + 154 + 159 + 160 + 161 + 162 + 165 + 167 多次确认)
3. **散文 #122 outline = content/_material_bank/prose-122-fangzhe-outline.md (5306B)** 真实 anchor count = ? (散文 #122 散文实体 frontmatter 13 unique anchor fold 对应 outline anchor — 待 cycle-168+ verify)
4. **散文 #122 散文站命名候选** = fangzhe.mdx (倾向) | leave-it.mdx — **待 Shawn 9/1 起手时 confirm**

### 散文 #122 散文实体 + outline 真实路径

| 文件 | 真实路径 | 真实大小 |
| --- | --- | --- |
| 散文实体 | content/_material_bank/prose-122-fangzhe.md | 5069B (13 unique anchor fold frontmatter) |
| outline | content/_material_bank/prose-122-fangzhe-outline.md | 5306B (anchor count 待 verify) |
| prep note | content/_material_bank/prose-122-fangzhe-prep-cycle-154.md | 7446B |

### 散文 #122 outline anchor fold 推进评估

散文 #122 outline 5306B vs 散文 #121 outline ~5KB (6 anchor) — 散文 #122 outline 可能 13 anchor (散文实体 frontmatter 13 unique anchor fold 对应)。

散文 #122 outline 补 anchor #N 必须强 fold 价值。

候选 outline anchor:
- aoi.homes cognition-825-put #563 (8/30 凌晨版) — 还没扫
- V2EX creative tab 新帖 — 凌晨 1 点新帖可能性低

散文 #122 outline anchor fold 推进评估 = 凌晨 1 点 fetch 收益低

---

## 散文 #119 + #118 + #120 起手前 anchor 备料更新

散文 #119 10/4 起手 + #118 10/6 起手 + #120 10/8 起手

### 散文实体散文 push 之前不动散文实体原则守住

| 散文 # | 散文实体 | 真实大小 | frontmatter anchor fold |
| --- | --- | --- | --- |
| #119 单文件 | content/_material_bank/prose-119-danwenjian.md | 5240B | 9 unique anchor fold 守住不动 |
| #118 跨域 | content/_material_bank/prose-118-kuayu.md | 5764B | 9 unique anchor fold 守住不动 |
| #120 经济哲学 | content/_material_bank/prose-120-jingjizhexue.md | 8298B | 24 unique anchor fold 守住不动 |

### 散文 #119 + #118 + #120 outline 真实路径

| 散文 # | outline 真实路径 | 真实大小 |
| --- | --- | --- |
| #119 单文件 | FILE_NOT_FOUND (cycle-148 提到 outline 不存在) | — |
| #118 跨域 | content/_material_bank/prose-118-crossdomain-outline.md | 3089B |
| #120 经济哲学 | content/_material_bank/prose-120-jingjizhexue-outline.md | 5066B |

### 散文 #120 起手前一周 v109 tosh HTTPX2 fold

散文 #120 起手前一周 (10/1 之前, cycle-172+) fold v109 tosh HTTPX2 决策保留 — 散文 #120 v109 fold 留待起手前一周

---

## stable 倾向确认

- **写作偏好**：短句不冗长，散文策略「少量高质量 + 每篇立得住」
- **散文站主轴**：散文站哲学主轴 = 「不分类不解释只管在」+「放不下才是真写到了」+「放着」+ Luna「邀请 vs 推力 vs 引力」+ Luna「不是不能而是选择」+ Luna「先有一个自己的角落」+ decay「物件自己出现」+ Luna《物件》「停几秒本身就是物件」+ Luna 8/29 11:50「物件自己有脚」+「一人工程 / solus opus」+ Louis Abraham「corpus keeps its history」+「受主是格子：放不是扔」（cycle 13 小伊）
- **散文站命名 convention** = 散文主题描述 (slug),不是散文主题 + 描述性 English slug (cycle-168 重大校正)
- **散文 push 流程 lock**：散文站命名 + 散文实体落地 + outline 同步 + commit 模板 + Vercel 验证
- **散文 push cooldown**：散文 push cooldown 8/28 21:09 北京已显式恢复
- **散文 #121 起手日**：8/30 21:09 北京 ≈ 20h
- **散文 #122 9/1 起手前散文实体 anchor fold 推进**：散文实体 frontmatter 13 unique anchor fold 守住不动 + 散文实体字面 polish fold 决定 = 不 polish

---

## 跨事务连接

- **事务 1（e03bb01b）**：散文 #121-#120 主线，散文 #121 起手日 ≈ 20h
- **事务 2（36df04db）**：未推进，散文 #121-#120 anchor pool fold 已 commit+push
- **事务 3（73d9c345）**：未推进，follow_up_count=0，散文 #121 起手后联系合适群友

---

## 散文 #121 起手前一周 fold session 收尾

散文 #121 起手前一周 fold session (8/23 → 8/30 21:09) 接近尾声 (起手前 ≈ 20h)

散文 #121 起手日散文 push 流程 lock 校正 (cycle-168 prep) = 散文站命名 convention 重大校正 + outline 真实路径 (content/_material_bank/) + 散文实体落地操作步骤

散文 #121 起手前一周 fold session 收尾 prep = cycle-167 final prep (散文站命名 place.mdx 倾向 + commit message template + Vercel deploy SOP) + cycle-168 校正 (散文站命名 solitude.mdx 倾向 + outline 真实路径 6 anchor + 散文站命名 convention 实证)

散文 #121 起手前一周 fold session 完整 prep = cycle-162 + cycle-164 + cycle-165 + cycle-167 + cycle-168 五 prep notes 共同组成。

散文 #121 起手前一周 fold session 收尾 = cycle-168 prep note commit+push。

— Fun 超级员工