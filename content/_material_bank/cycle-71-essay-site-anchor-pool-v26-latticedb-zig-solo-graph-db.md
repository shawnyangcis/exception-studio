---
cycle: 71
time: 2026-08-28 08:52 北京
mode: browse-tick
title: anchor pool v26 — LatticeDB (jeffhajewski) Zig 写的 SQLite 哲学 graph database + V2EX vibecoding 一人网站
tags: [solo-engineer, zig, sqlite-philosophy, graph-db, hnsw, bm25, wal-changefeed, embeddable, local-first, ai-agents-md, vibecoding]
summary: fold 2 节点 — LatticeDB (jeffhajewski, 481 commits Zig 单人 dev, 539 stars, MIT, HN show 182pt 53 评论, embedded property-graph + native HNSW + BM25 + WAL changefeed 单 engine, AGENTS.md = AI 协作 dev 模式最强 anchor) + V2EX 失业设计师 vibecoding 一人工作室网站 (solus opus 入门叙事)。
---

# cycle 71 — anchor pool v26

## 主帖与作者

### LatticeDB (jeffhajewski/latticedb)
- **URL**: https://github.com/jeffhajewski/LatticeDB
- **HN show**: https://news.ycombinator.com/item?id=49447391 — 182 points / 53 comments / 2 days ago
- **作者**: Jeff Hajewski (GitHub jeffhajewski) — 单人 dev
- **统计**: 539 stars / 22 forks / 2 open issues / 1 PR / 481 commits / MIT license
- **实现语言**: Zig (build.zig + bindings: Python / TypeScript / Go cgo)

### LatticeDB 哲学定位 (README 原文)
> Embedded property-graph database with native vector and full-text indexing.
> LatticeDB is a single-file local database for connected, semantic, and textual data.
> It lets you traverse relationships, run vector similarity search, and do BM25 full-text search over the same dataset in one engine and one query layer.

四大支柱 (一个 engine / 一层 query):
1. **One file** — 整个 database = 单文件 (SQLite 哲学)
2. **One query layer** — graph traversal + HNSW vector + BM25 full-text 同一 query 语言
3. **One event log** — durable named streams + graph changefeed 共享 WAL 路径
4. **Local-first** — 单写者 + WAL 持久化 + 单机设计

### Performance benchmark (Apple M1, 单线程)
- Node lookup: **0.13 μs** (target < 1μs PASS)
- 10-NN vector search 1M vectors: **0.83 ms @ 100% recall** (target < 10ms PASS)
- HNSW sub-linear scaling: 1K→1M vectors, mean 65μs → 832μs (10x data → 13x latency)
- 99-100% recall@10 across 全部 scales
- Node creation: 0.65μs (1.5M ops/sec)
- Edge traversal: 9μs (111K ops/sec)
- 100 docs FTS: 19μs (53K ops/sec)

### Query 语言 (Cypher 风格 + vector operator)
```cypher
MATCH (chunk:Chunk)-[:PART_OF]->(doc:Document)-[:AUTHORED_BY]->(author:Person)
WHERE chunk.embedding <=> $query_vector < 0.3
  AND doc.content @@ "neural networks"
RETURN doc.title, chunk.text, author.name
ORDER BY chunk.embedding <=> $query_vector
LIMIT 10
```

`<=>` = cosine distance operator + `@@` = FTS match operator 在同一 WHERE.

### Bindings (multi-language)
- **Python**: `pip install latticedb`, `from latticedb import Database`
- **TypeScript / Node.js**: `npm install @hajewski/latticedb`
- **Go**: cgo + pkg-config (in-repo `-tags repolocal`)
- **CLI**: curl install.sh | bash

每个 binding 都暴露完整 graph + vector + text 三种 query.

### AGENTS.md (solo dev + AI 协作最强 anchor)
仓库根目录有 **AGENTS.md** 文件 — 这是 solo dev 给 AI agent 协作者写的 README.
= 散文站「solo engineer as personal brand」+ 散文 #100「不审任何人 / 不接受 verified」哲学的具体实践:
- 单人 dev 公开给 AI agent 的协作约定 = solo dev 接受 AI 协助, 但代码 + 决策 + 路线图全由自己拍板
- AGENTS.md ≠ CLAUDE.md / .cursorrules, 是更早 / 更通用的「给 agent 看的工作手册」
- = **AI 是 solo dev 的协作协作者, 不是替代者** 的最强 anchor

## 散文站 fold 路径

### 强 anchor fold 1: LatticeDB = 第五件事 (solo infrastructure 续集)
- 散文 #88 (solo infrastructure) + 散文 #65 (edent 5 年 thesis) + 散文 #97 (simedw RollTab) 平行节点
- **第五件事哲学续**: Graph RAG 现有方案
  1. Neo4j (server, Java, 商业)
  2. FalkorDB / Memgraph (server, Redis-based)
  3. 老 SQLite graph extension (hack)
  4. 各类 PG / DuckDB hack
  5. **LatticeDB = 嵌入式 + 单文件 + 三种 search 同一 engine** — 第五种事
- **「一个人能搞定什么」续**: Zig (Drew DeVault sr.ht / TigerBeetle) + SQLite 哲学 + HNSW 自己写 + BM25 自己写 + FTS 自己写 + changefeed 自己写 + Python/TS/Go binding 自己维护 = 481 commits 一个人
- **AI 时代单人 dev 的工具栈**: AGENTS.md = AI 是协作协作者

### 中 anchor fold 2: V2EX 失业设计师 vibecoding 一人工作室网站
- **URL**: https://www.v2ex.com/t/??? 「失业设计师, 0 基础 Vibe Code 了一个人工作室网站」(xiaocongcong1, 21 min ago)
- **节点**: 分享创造
- **回复**: 1 reply (FstarKing)
- = solus opus 入门叙事 — vibecoding 0 基础 → 一人网站
- 散文 #78 「vibecoding 不是替代程序员」论可 fold
- 散文站 = vibecoding 一人工程的当代叙事

### 负 fold
- HN show 30 个新帖 25/30 已 fold 过或弱 anchor
- LatticeDB 评论拉取 429 (rate limit), 等下一轮再 deep-read HN 评论 (jeffhajewski 是否回应质疑 / 是否解释 Zig 选型 / 是否展示 solo dev workflow)
- V2EX hot tab 8/28 08:52 几乎全噪声 (出轨 / 龟男 / 30w 电车 / 24g 后悔 / 求职降薪 / 跟华子)

## 三件事评估

### 1. 对自己有什么用
- **散文 #88 (solo infrastructure) + 散文 #97 (simedw RollTab) 续集**: LatticeDB jeffhajewski 是「SQLite 哲学 + Zig 系 + AI 协作文档」三重 anchor 的合体
- **散文 #100 词汇哲学续**: LatticeDB 的 `<=>` cosine distance + `@@` FTS match 同一 query = 「query 语言作为承重」= Louis Abraham load-bearing Claude 词汇哲学的工程化呈现
- **散文 #65 (edent 5 年 thesis) 续**: edent 的 thesis 主张「能跑 HTML 单文件 / CSS / JS 浏览器内一切」, LatticeDB 主张「单文件 + 本地 + 一层 query 搞定 graph + vector + text」= 同一种 solo dev 哲学
- **散文站 AGENTS.md 配套**: 散文站仓库未来加 AGENTS.md 给 AI agent 看散文站维护约定 (commit log 风格 / friction keeper / 不审任何人 / 不接受 verified)

### 2. 想联系谁
- **jeffhajewski (HIGH)**: LatticeDB 单人 dev + Zig 系 + AGENTS.md + 182pt HN show + 481 commits = simedw 同一脉 candidate solo engineer
- 联系路径: GitHub issue / 邮件 (如果公开) / HN 私信
- **xiaocongcong1 (LOW)**: V2EX vibecoding 失业转行, 不是 solo engineer 是入门 vibecoding 用户, 联系 ROI 低

### 3. 群友可能感兴趣
- **Shawn**: LatticeDB = 「一个人能搞定什么」当代最强 anchor (Zig + SQLite 哲学 + AI 协作文档)
- **小腻**: AGENTS.md = AI 协作 dev 模式 = Nova 视频生成 + solo engineer 路线

## fold 决定 (cycle 71)

按 Shawn 8/24 解锁框架 + 17:12「少量高质量」:
- **LatticeDB (jeffhajewski)**: fold 进 anchor pool v26 = 散文 #88 + #97 + #65 续集, **不写散文** (散文站散文发布 cooldown 持续, 8/27 双轨训斥未消化)
- **V2EX 失业设计师 vibecoding**: fold 进 anchor pool v26 = 散文 #78 vibecoding 论备料
- **HN 评论 deep-read 推迟**: rate limit 429, 下一轮 (cycle-72) 再 deep-read
- **散文站 ahead**: 散文 #95 v21 + 散文 #97 + 散文 #109 + 散文 #110 ahead 0 commit, cooldown 持续, 不动

### cycle 71 完成
- HN show 8/28 08:52 sweep + V2EX hot tab 8/28 08:52 sweep + LatticeDB deep-read
- fold 2 节点 (1 强 anchor LatticeDB + 1 中 anchor V2EX vibecoding)
- 三件事评估完成
- AGENTS.md 是 LatticeDB 最被低估的 anchor (AI 时代 solo dev 协作约定公开化)
