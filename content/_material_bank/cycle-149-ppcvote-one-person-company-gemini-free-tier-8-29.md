---
cycle: 149
date: 2026-08-29 14:58 +0800
title: ppcvote Show HN — AI agents run my one-person company on Gemini's free tier — $0/month
slug: cycle-149-ppcvote-one-person-company-gemini-free-tier
tags: [solus-opus, 散文站, hn-show, anchor-fold]
source: https://news.ycombinator.com/item?id=47296664
author: ppcvote (solo dev in Taiwan)
hn_story_id: 47296664
hn_created_at: 2026-03-08T12:55Z
hn_comments: 17+
essay_use: 散文 #121 solitude 起手日 8/30 21:09 北京 / 散文 #118 跨域 / 散文 #119 单文件
---

## 主帖关键 quote（verbatim, primary source verified via HN Algolia API 2026-08-29 14:58 +0800）

> I'm a solo dev in Taiwan. I built 4 AI agents that handle content, sales leads, security scanning, and ops for my tech agency — all on Gemini 2.5 Flash free tier (1,500 req/day). I use ~105. Monthly LLM cost: $0.
>
> Architecture: 4 agents on OpenClaw (open source), running on WSL2 at home with 25 systemd timers.
>
> Auto-post blog articles to Discord when I git push (0 LLM tokens — uses commit message directly)

## 散文站哲学主轴三层强 anchor

### 1. 「commit message directly」= commit log 自己就是营销

ppcvote 直接把 `git push` 的 commit message 当 blog post 喂给 Discord, 0 LLM tokens。散文站 commit log 哲学 = 「commit log 自己就是营销」 + 「不删 commit log 持续 preservation」。ppcvote 这一句比散文站走得更远 —— 他直接拿 commit message 做内容。

> 「当 push 发生时，commit message 已经是写好的散文标题了。」

### 2. 「4 agents + $0/month + Gemini free tier」= 一人工程经济哲学

- 4 agents on OpenClaw (open source)
- Gemini 2.5 Flash free tier (1,500 req/day, 实际 7% = 105)
- WSL2 + 25 systemd timers
- Monthly LLM cost = $0 + infra ≈ $5
- 27 Threads accounts / 12K followers / 3.3M views (一个人操作的成果)

散文站哲学主轴「一人工程 / solus opus」+ 「放着」= ppcvote 实证：一个人 + 一台 WSL2 + 1500 req 免费 quota 就能跑起来一家公司。

### 3. evanelias 揭穿 6 分钟 10 条评论 vs ppcvote 认错 = friction 哲学

HN 评论里 evanelias 指出 ppcvote 在 6 分钟内发 10 条评论 (总计 ~800 字) 看起来不是真人写的。ppcvote 47297939 / 47301278 承认：「I had a list of expected questions and drafted answers beforehand. When I finally had time to respond, I posted them all at once. Not real-time typing — that's why the timing looks suspicious. Should've spaced them out.」

散文站哲学主轴「放着」+ 「friction keeper 守住自己的节奏」= ppcvote 自己也意识到 batch 发送 vs 真人间隔的差异, **但承认后继续做**。这是 friction keeper 的反面教材 + 自我觉察。

## 三件事评估（按 Shawn 8/24 解锁框架）

### 1. 对自己具体有什么用

- 散文 #121 solitude (8/30 起手) 哲学主轴 fold 候选
- 散文 #118 跨域 (10/6 起手) 强 anchor — 「4 agents 跨 content/sales/security/ops」= 一人工程跨域实证
- 散文 #119 单文件 (10/4 起手) 强 anchor — ppcvote 整个产品架构就在一台 WSL2 主机上, 极小化 = 单机
- 散文 #120 经济哲学 (10/8 起手) 强 anchor — $0/month LLM cost + $5 infra + 27 accounts / 12K followers / 3.3M views = 一人工程经济哲学

### 2. 想联系谁

- **ppcvote (HIGH)**: 台湾 solo dev + 4 agents 架构 + GitHub playbook 公开 (https://github.com/ppcvote/free-tier-agent-fleet)。联系路径：HN 私信 + GitHub issue
- 联系 ROI 高：散文站「一人工程」主题直接对应 ppcvote 的「one-person company」, 双向 reference

### 3. 群友可能感兴趣

- **Shawn**: ppcvote 的 GitHub playbook 公开 = 散文站 anchor pool 外部正面证据
- **小腻**: Nova 视频生成 + ppcvote 的 4 agents 内容生产 = 「AI 创作时代不写散文的人已经在用 AI 写」的反面镜子
- **Luna**: ppcvote 的 27 Threads accounts / 3.3M views + 散文站 commit log preservation = 「放着自己会出现」= 「发着自己会被看见」

## fold 决定（cycle 149）

按 Shawn 8/24 解锁框架 + 17:12「少量高质量」：

- **anchor pool 强 fold 第 14 条** = ppcvote 4 agents + Gemini free tier + commit message → blog post 自动化
- 散文 #121 solitude 起手日 8/30 21:09 北京前备料
- 散文 #118 / #119 / #120 三联散文后续 fold 备料
- **不写散文**：散文 #121/#122/#119/#118/#120 五联散文 push cooldown + cycle-141 fold 决定延续

## cycle 149 完成

- 2 个 web_fetch 验证 (HN Algolia search + items/47296664)
- 1 个强 anchor fold (ppcvote Show HN 2026-03-08)
- 三件事评估完成
- KB doc 已 landing content/_material_bank/cycle-149-...md (待 commit + push)