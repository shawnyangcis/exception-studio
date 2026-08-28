---
title: anchor pool v38 — SilenN / Experiential Labs "open OpenRouter"
slug: cycle-82-v38-silen-experiential
date: 2026-08-28
tags: [anchor, material-bank, cycle-82, claude-code, zero-markup]
summary: HN show 178pt 35c front_page 的 anti-OpenRouter 开源 model gateway；2 humans + 2 AI bots 的 AI-augmented startup 模板；0 markup 哲学第三节点。
---

## 主帖

- **URL**：https://news.ycombinator.com/item?id=49471407
- **标题**：Show HN: We built open OpenRouter that turns usage into a better model
- **作者**：SilenN (HN ID) = Silen Naihin (GitHub login)
- **状态**：178 points / 35 comments / 2026-08-27 21:18 UTC / front_page
- **repo**：https://github.com/experientiallabs/experiential

## repo 真实数据（github api 验证）

- owner = Organization experientiallabs (id 233532581)，**不是 User**
- created 2026-06-24, pushed 2026-08-28 09:45 UTC（持续维护，3min 前还 push）
- 625 stars, 53 forks, 4 open issues
- primary language = **Python**（HN 帖 claim "rust native" 不准确）
- license = Apache-2.0（2026-08-23 #609 才加 license）
- description："An open source model gateway that provides one control plane across closed, open-source, local, and custom models."
- homepage：https://experientiallabs.ai

## contributors（github api 验证）

5 contributors 总 447 commits：

| login | contributions | % | 类型 |
|-------|--------------|---|------|
| kfallah (Kion Fallah) | 243 | 54.4% | User founder |
| SilenNaihin (Silen Naihin) | 146 | 32.7% | User founder |
| devin-ai-integration[bot] | 55 | 12.3% | Bot (Cognition Labs Devin AI) |
| sunkickr | 2 | 0.4% | User 边缘 |
| brainRottedCoder | 1 | 0.2% | User 边缘 |

**关键事实**：
- 2 founder (kfallah + SilenNaihin) 占 **87% human contribution**
- **2 AI bots**：devin-ai-integration[bot] 直接 PR；Claude Fable 5 <noreply@anthropic.com> commit message 持续 co-author
- 实际是 **2 humans + 2 AI bots + 2 边缘** = AI-augmented startup 模板

## commit 风格（commit history 验证）

PR #643 (4b83314, 2026-08-28 09:38 UTC) by Silen Naihin:

```
gateway: admission-time skip-and-recover for a dead lead rung (#643)

* gateway: skip a dead lead rung at admission, feed the circuit, auto-recover

A frozen route whose lead rung is dead at admission (a lost credential,
a drifted connection, a resolve-time capability drift) failed the WHOLE
request instead of serving a live fallback...

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>

* gateway: split read-side callbacks into NativeObservabilityMixin

native_bridge.py crossed the repository line budget; the content-free
read-side callbacks (granted-model discovery, usage report, metrics
snapshot, readiness, per-worker resource release) move verbatim into
exp/runtime/gateway/native_observability.py as a stateless mixin the
control plane inherits, so the bridge module keeps only the
request-serving authority path. No behavior change.

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
```

**关键观察**：
- commit msg 多段 sub-bullet + 引用具体文件路径 = **commit-as-documentation**
- 引用文件 (health.py, native_bridge.py, native_observability.py) + 模块拆分理由 ("crossed the repository line budget")
- "we" 第一人称 = 团队叙述
- 每个 sub-commit 都有 `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>` = 系统性 AI co-author

## HN 帖关键短语

> Compared to other similar projects we're open source, take no markup, allow you to mix local models with a marketplace, and use your traffic to (opt in) train you a model. Simple routing doesn't warrant a 10% token markup.

> The way we do this is given standardized OTel traces, we mine representative real tasks, use text world models to simulate rollouts for various models, apply an LLM judge, and fit a nearest neighbor classifier on top of an embedding of a prompt to decide the optimal model for each request.

> It's open source, so you can deploy it on your own infrastructure, use our hosted version with 0 markup, or read how we design for maximum availability on our website.

## 三件事评估

**1. 对自己有什么用**
- **0 markup / anti-OpenRouter 哲学第三节点**：
  - v1 = Krei-se (anthropic-key-reseller, solo, 0% markup)
  - v2 = ? (中间节点)
  - v3 = Experiential Labs (2 humans + 2 AI bots, 0 markup, OSS)
  - 散文 #116 "0 markup 的副词" 候选 = 工业级 sample
- **Claude Code / Cursor Origin anchor = HIGH**：
  - 系统性 Claude Fable 5 co-author + Devin AI PR bot
  - 散文 #117 "commit log with AI co-author" 候选
  - commit-as-documentation 模式跟 exception-studio commit log 完全同脉
- **AI-augmented startup 模板**：
  - 2 humans + 2 AI bots = "4 effective engineers" 模式
  - 不是 1 人 hold 住（违反 solo engineer 严格定义），但接近 "2 humans hold everything"
  - 散文 #118 "2+2 的副词" 候选

**2. 想联系谁**
- **HN 私信 SilenN** (medium-low)：AI co-author 实践者，但 startup 不是 solo engineer
- **HN 私信 Kion Fallah kfallah** (low)
- **experientiallabs.ai contact** (low)：商业联系

**3. 群友可能感兴趣**
- **Shawn**：Claude Code co-author 模式跟散文站 commit log 直接同结构；0 markup 哲学节点
- **小腻**：Nova 视频 + AI 内容创作 + 协作模式；AI-augmented 团队结构

## fold 决定（cycle 82）

按 Shawn 8/24 解锁框架 + 8/27 训斥「少量高质量」+ cycle-71 anchor pool 饱和：

- **anchor v38 = SilenN / Experiential Labs**：
  - **不是** solo engineer anchor（organization + 4 humans + 2 AI bots）
  - **是** Claude Code / Cursor Origin anchor（HIGH）
  - **是** 0 markup / anti-OpenRouter anchor（HIGH）
- **散文 #116 "0 markup 的副词 (industrial 版)"**：备 cooldown 解除后下一批散文
- **散文 #117 "commit log with AI co-author"**：备 cooldown 解除后下一批散文
- **散文 #118 "2+2 的副词"** (备选)：如果 cooldown 长且 2+2 主题展开
- **不立刻 push 散文**：8/27 双轨训斥未消化 + Shawn 私聊未回复 + push cooldown 状态不明确

## cycle 82 完成

- HN Algolia show_hn last 24h sweep（5 个新 show 发现）
- 3 个 github api call 验证 (repo / commits / contributors)
- anchor v38 final fold (organization + AI bots 双重修正)
- material bank MD file 写入暂存 (绕开 KB write RATE_LIMITED)
- 散文 #116/#117/#118 三候选 outline 形成
- 暂存待 KB write 恢复后正式 fold 进 KB