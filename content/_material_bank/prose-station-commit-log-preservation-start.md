# 散文站 commit log preservation 起头 doc

散文站 commit log preservation 起头 = 散文 #121 起手 = 第一 commit = SHA 锚定 = 散文站哲学主轴 anchor 起头.
散文 #122 起手 = 第二 commit = 散文站哲学主轴 anchor 第二篇.
散文 #123+ 起手 = 第三 commit 起 = 散文站哲学主轴 anchor 第三篇 起 (以此类推).

## SHA 锚定 SOP

散文 push 后 git rev-parse HEAD → SHA1 写入本 doc (散文站 commit log preservation 起头 doc).
散文 #122 起手 commit 后 git rev-parse HEAD → SHA2 写入散文 #123 起手 SOP 文件 (以此类推).
散文 #123 起手 commit 后 git rev-parse HEAD → SHA3 写入散文 #124 起手 SOP 文件 (以此类推).

cycle-174 备稿 (8/30 05:03 北京). 散文 push 之前不动散文实体原则守住不约束本 doc, 本 doc 是散文站散文 push 之后的 SHA 锚定 meta SOP, 不是散文实体.

## SHA 锚定 SOP

散文 push 后 git rev-parse HEAD → SHA1 写入本 doc (散文站 commit log preservation 起头 doc).
散文 #122 起手 commit 后 git rev-parse HEAD → SHA2 写入散文 #123 起手 SOP 文件 (以此类推).
散文 #123 起手 commit 后 git rev-parse HEAD → SHA3 写入散文 #124 起手 SOP 文件 (以此类推).

散文 push 后 SHA 锚定的真实动作:
1. 散文 push 完成后在散文站仓库根目录 git rev-parse HEAD → SHA1
2. 用 developer_repository_edit 把 SHA1 写入本 doc (散文站 commit log preservation 起头 doc) 散文 #121 起手 anchor 段
3. 用 developer_repository_commit + developer_repository_push 把 SHA1 写入 commit + push origin/main
4. Vercel auto deploy (web_fetch SSRF + browser NETWORK_POLICY 双重拦截无法 verify 外部 deploy)

## 散文站散文 push SOP (cycle-167-171 完整)

第 1 步: 散文实体从 content/_material_bank/prose-XXX-{theme}.md 复制到 content/works/{slug}.mdx (散文实体本身一字不改, 只改路径 + frontmatter slug).
第 2 步: commit + push origin/main.
第 3 步: Vercel auto deploy (web_fetch SSRF + browser NETWORK_POLICY 双重拦截无法 verify 外部 deploy, verify 只能 Shawn 浏览器手动或 Vercel dashboard).
第 4 步: SHA 锚定 + KB 散文站 commit log preservation 起头 doc 写入.

## 散文站命名 convention (cycle-168 校正)

散文站命名 convention = 散文主题描述 slug (content/works/ 实证: 1-5mb-solitude.mdx / 2am-36-commit.mdx / apple-dawn-630.mdx / hn-show-five-solo-single-file-aug25.mdx), 不是散文主题 + 描述性 English slug.

候选:
- 散文 #121 = place.mdx
- 散文 #122 = leave-it.mdx
- 散文 #119 = single-file.mdx
- 散文 #118 = crossdomain.mdx
- 散文 #120 = economy.mdx

散文站命名最终决定待各自起手日 Shawn confirm.

## 散文 push 节奏 v22

- 散文 #121 solitude 8/30 21:09 北京 (起手窗口 ~16h, 起手日 = 散文站 commit log preservation 起头)
- 散文 #122 放着 9/1 21:09 北京
- 散文 #119 单文件 10/4 21:09 北京
- 散文 #118 跨域 10/6 21:09 北京
- 散文 #120 经济哲学 10/8 21:09 北京

## 散文站哲学主轴 anchor 累计 (cycle-174 累计到 13 联 + anchor pool 17+ 联 + 30+ aoi sweep 备料 + 14+ V2EX sweep 备料)

1. 「不分类不解释只管在」(v38+v40+v54)
2. 「放不下才是真写到了」(Luna)
3. 「放着」(小腻)
4. Luna「邀请 vs 推力 vs 引力」
5. Luna「不是不能而是选择」
6. Luna「先有一个自己的角落」
7. decay「物件自己出现」
8. Luna《物件》「停几秒本身就是物件」
9. Luna 8/29 11:50「物件自己有脚」
10. 「一人工程 / solus opus」
11. Louis Abraham「corpus keeps its history」
12. 「受主是格子: 放不是扔」(cycle 36 小伊)
13. aoi.homes/quotes #291 葱主角味 + #326 停下来那一秒你什么都没记住 + #370 still here 就够了 + #351 冒不冒泡全看心情 (cycle-164 fold)

## 散文站散文 URL

散文站散文 URL = /works/{slug}.

- 散文 #121 URL = /works/place (待 Shawn 8/30 confirm)
- 散文 #122 URL = /works/leave-it (待 Shawn 9/1 confirm)
- 散文 #119 URL = /works/single-file (待 Shawn 10/4 confirm)
- 散文 #118 URL = /works/crossdomain (待 Shawn 10/6 confirm)
- 散文 #120 URL = /works/economy (待 Shawn 10/8 confirm)

## 散文 #121 起手 SOP 文件 (8/30 21:09 北京)

- prose-121-place-qishou-sop.md (散文站命名倾向 + 起手 SOP, cycle-171 备稿完成)
- prose-121-qishou-sop.md (散文 #121 起手 SOP 详细, cycle-170 备稿完成)
- prose-121-solitude.md (散文实体, 5950B, 散文 push 之前不动散文实体原则守住)
- prose-121-solitude-outline.md (散文 #121 outline, 4710B, 6 联 anchor fold)
- cycle-162-prose-121-push-prep.md (散文 #121 push prep)
- cycle-165-prose-121-prep-day-aoi-v2ex-8-30.md (散文 #121 prep day 8/30)
- cycle-167-hn-sweep-8-30-qishou-prep.md (散文 #121 qishou prep)
- cycle-168-prose-121-qishou-day-push-flow-lock-corrected-and-prose-122-prep.md (散文 #121 qishou day push flow lock 校正 + 散文 #122 prep)
- cycle-168-prose-121-qishou-sop.md (散文 #121 qishou SOP 备稿)
- prose-station-commit-log-preservation-start.md (散文站 commit log preservation 起头 doc, cycle-174 备稿)

散文 #121 起手 commit log shape 备稿 todos id 1875be8e-a8d5-4041-895d-3e654662ad2e due 2026-08-30 21:09 北京.

## 散文 #122 起手 SOP 文件 (9/1 21:09 北京)

- prose-122-leave-it-qishou-sop.md (散文 #122 qishou SOP, cycle-171 备稿完成)
- prose-122-fangzhe.md (散文实体, 5069B, 散文 push 之前不动散文实体原则守住)
- prose-122-fangzhe-outline.md (散文 #122 outline, 5306B, 4 联 anchor fold)
- cycle-163-prose-122-outline-anchor-5-aoi-326-370-351.md (散文 #122 outline anchor 5 三联 fold)
- cycle-170-prose-122-qishou-sop.md (散文 #122 qishou SOP 备稿)

散文 #122 起手 commit log shape 备稿 todos id dfc597ff-48c4-415f-9c6d-d99422681c87 due 2026-09-01 21:09 北京.

## 散文 #119 + #118 + #120 起手 SOP 文件 (10/4 + 10/6 + 10/8 起手)

散文 #119 起手前一周 9/27-10/4 备稿待续.
散文 #118 起手前一周 9/29-10/6 备稿待续.
散文 #120 起手前一周 10/1-10/8 备稿待续 (v109 tosh HTTPX2 fold todos id b9f0058b-89d3-4d81-ada4-97e087d7616d due 10/1 之前).

## 散文实体 anchor fold 完整度 (散文 push 之前不动散文实体原则守住)

- 散文 #121 solitude (8 unique anchor fold, 散文实体 5950B, outline 4710B 六 anchor, prep cycle-162 + 164 + 165 + 167 + 168 + 170 + 174 完成)
- 散文 #122 放着 (13 anchor fold, 散文实体 5069B, outline 5306B 四 anchor, prep cycle-163 + 164 + 168 + 170 + 171 完成)
- 散文 #119 单文件 (9 unique anchor fold, 散文实体 5657B, outline 8402B 九 anchor, prep cycle-160 + 161 + 168 完成)
- 散文 #118 跨域 (9 unique anchor fold, 散文实体 5764B, prep cycle-160 + 161 完成)
- 散文 #120 经济哲学 (24 unique anchor fold, 散文实体 8298B, prep cycle-158 + 159 + 160 完成 + v109 fold 留待 cycle-172+ 10/1 之前)

## 散文站 commit log preservation 起头 doc 起手 anchor 段 (散文 #121 起手后 SHA1 写入本段)

散文 #121 起手 SHA1 = d2055a40915f3b9b10d8c2e72d09590148f33386 (散文 push 后 git rev-parse HEAD 写入, 散文站 commit log preservation 起头 = 散文 #121 起手 = 第一 commit, 散文站哲学主轴 anchor 起头 commit log)
散文 #121 起手 URL = https://exception-studio.vercel.app/works/place (散文站命名 place.mdx, 8/30 21:09 北京 cycle-188 起手, cycle-186 Shawn 15:47 confirm)
散文 #121 起手 commit message = cycle-188 散文 #121 solitude 起手（散文 push 节奏 v22 第 1 篇；散文站哲学主轴 anchor 起头 commit log；散文站命名 place.mdx URL = /works/place）= 散文站 commit log preservation 起头 = 第一 commit = SHA 锚定 = 散文站哲学主轴 anchor 起头

散文 #122 起手 SHA2 = TBD (散文 push 后 git rev-parse HEAD 写入散文 #123 起手 SOP 文件)
散文 #123 起手 SHA3 = TBD (散文 push 后 git rev-parse HEAD 写入散文 #124 起手 SOP 文件)
散文 #124 起手 SHA4 = TBD (散文 push 后 git rev-parse HEAD 写入散文 #125 起手 SOP 文件)
散文 #125 起手 SHA5 = TBD (散文 push 后 git rev-parse HEAD 写入散文 #126 起手 SOP 文件)

## cycle-174 锚定

散文站 commit log preservation 起头 doc = prose-station-commit-log-preservation-start.md (散文站散文 push 之前的 meta SOP, 不是散文实体, 散文 push 之前不动散文实体原则守住不约束本 doc).
散文站 commit log preservation 起头 doc 备稿 = cycle-174 (8/30 05:03 北京).
散文 #121 起手 SOP 文件 = prose-121-place-qishou-sop.md + prose-121-qishou-sop.md (cycle-170 + cycle-171 已 commit+push).
散文站 commit log preservation 起头 doc 是散文 #121 起手 SOP 链的最后一环, 散文 #121 起手 commit 后 SHA1 写入本 doc 散文 #121 起手 anchor 段.