# 散文站 cycle 50 step 12 散文 #110 OpenAI Jalapeño 完整 anchor 修正版 — 8/26 15:18 北京

> 本文件是 cycle 50 step 12 散文 #110 完整 anchor fold 修正版，基于 web_fetch HN item?id=49434378 真实 fold（437p 286c，cycle 46 + cycle 47 fold 错的「428p 281c」修正为「437p 286c」）。

---

## Part 1：HN item?id=49434378 真实 anchor fold

### 基本信息

- **URL**：https://news.ycombinator.com/item?id=49434378
- **源链接**：https://newsletter.semianalysis.com/p/openai-jalapeno-better-than-nvidia
- **副链**：https://www.bloomberg.com/news/articles/2026-08-25/openai-claims-its-new-chips-can-outperform-nvidia-processors-in-tests + https://archive.ph/yCTrr
- **标题**：**OpenAI Jalapeño: Better than Nvidia Blackwell**
- **HN 排名**：#4（437 points 14 hours ago + **286 comments**）
- **HN 帖提交者**：**bmulholland**（HN ID）
- **真实作者（Semianalysis 团队）**：Bryan Shan + Myron Xie + Jordan Nanos + Wega Chu + Clara Ee + Dylan Patel（6 人）

### 关键 reply 完整 fold（30+ anchor）

1. **mchusma #1 (11 hours ago)**：「I think they talked about this being general purpose chip but I would think that Anthropic/OpenAI are at the scale now they could bake LLM weights into chips themselves. For example, GPT Sol baked into a custom chip run for $100M that runs 10x as fast and 10x as cheap should pay for itself as long as the chip is useful for long enough. While 2 years ago nothing was useful more than 1 year long, there are many older models in use now (e.g. Haiku 4.5, GPT-OSS 120b), and I expect this trend to continue. I know this is what Taalas was doing (acquired by AMD), here was their demo, https://chatjimmy.ai/ which is based on Llama 3.1 8B. It feels like this should start to happen soon.」
   = **散文 #110 极强 anchor**（GPT Sol $100M 10x speedup 10x cheaper + Taalas 被 AMD 收购）

2. **freakynit #N (4 hours ago)**：「In case anyone's interested in these niche startups like taalas, here are a few more: matx.com / d-matrix.ai / etched.com / positron.ai / hyperaccel.ai / axelera.ai / enchargeai.com / furiosa.ai」
   = ASIC startups 完整列表

3. **sabhiram #N**：「https://tensordyne.ai」= 新增 ASIC startup
4. **zeusk #N**：「https://velaura.ai/」= 新增
5. **la64710 #N**：「https://tsavoritesi.com/」= 新增
6. **miki123211 #N**：「I really want this for Whisper, particularly in some kind of a power-efficient, portable form factor. I think people underestimate how much of a revolution having an always-on, privacy-preserving personal notetaker / secretary would be.」
   = **散文 #110 极强 anchor**（always-on personal notetaker = 散文站「always-on personal writing」+ 个人写作哲学）

7. **bmulholland #N (11 hours ago)**：「Probably! But not viable yet; the chips would be about a year behind SOTA. Note the ~16 months that the article quotes as being insanely fast to get this chip to tape-out (read: start producing). We'll have to bootstrap our way there: AI is actively being used to get us closer to viable lead times for this. Unfortunately, there's some real physical constraints: IIRC, manufacturing a wafer takes on the order of a month, start to finish, for the physical processing. Maybe once LLM improvements asymptote further?」
   = **散文 #110 极强 anchor**（16 个月 tape-out = 散文站 1 cycle 时间尺度）

8. **kurthr #N (9 hours ago)**：「The metal masked ROM is basically only 2 metal/contact layers. It's not a full new design and tapeout. You could roll a new set of parameters every ~2-3 months. It's not an architectural change. Part of the key is that by moving even from 6nm to 3-4nm one could embed a 20-30B model as part of a MoE (or only a subset of activated layers) on a single reticle die (note B300s are already multi-reticle), with a separate predictive/dispatch model controlling them each on a separate chip. ...」
   = 极深技术 anchor（metal masked ROM + 2-3 个月参数 + MoE 20-30B + 单 reticle die）

9. **MBCook #N (5 hours ago)**：「But that means your different chips all have different sets of weights and are different generations. If none of that is baked into the chip as now then all the chips are running the latest weights every time. Even if you could ignore the stuff built into the chip when the time came, at that point you just wasted money on silicon that's useless in 2-3 months.」

10. **WithinReason #N (54 minutes ago)**：「Doesn't matter if the chip is 100x-1000x more efficient and faster, and you can just make a new one for new weights. Imagine being able to run GPT Sol at 1k tokens/second a year from now, at a 100x lower cost per token than now. Would that be useful? Or Qwen 3.8 27B at 10k tokens/second. The super long thinking that makes qwen so effective would take a couple of seconds.」
    = 散文 #110 强 anchor（100x 更便宜 + 1k tokens/second）

11. **lelanthran #N**：「Note the ~16 months that the article quotes as being insanely fast to get this chip to tape-out (read: start producing). Yeah, with any luck it would put pressure on Nvidia to charge less, and not just to OpenAI. With a little more luck, we would see all the other players do the same thing, driving down the price of actual GPUs from GPU manufacturers.」
    = 反 Nvidia 锚点

12. **CalebKaiser #N**：「Google rolled out TPUs in 2015. AWS released Inferentia and Trainium chips in 2020. If companies working on ML-specific chips was evidence that large transformer models have fully saturated their potential, the field would have been done circa GPT-2.」
    = **散文 #110 强 anchor**（历史 anchor：TPU 2015 + Inferentia/Trainium 2020 + 不是 saturate）

13. **jeremyjh #N**：「I think Sol is already good enough though.」

14. **basilgohar #N**：「"640k (token context) should be enough for anyone."」

15. **jerf #N**：「a current frontier model is going to continue to be useful for many tasks for many years, even moreso if it's 5-10x faster due to the chip architecture. ... but it's still plenty fast enough to comment on HN, even these seven years after it was cutting edge.」

16. **dgently7 #N (3 hours ago)**：「exactly, but the 'goes out of date' is bad when we talk about software.. but this isnt software, its hardware. the youd have to buy a new one to get a better model is a FEATURE not a bug. like if im apple... and i can put a sol level llm in an iphone, market it as privacy first you own your data personal assistant, integrate it all over the os... and then when there is a better model/siri make all the users buy a new phone... thats how they 'win' ai. the old standbys of better screens thinner cameras and batteries arent enough anymore. its basically tapped out. all modern phones are as thin as they need as big as they need as fast as they need and last all day on a battery... apple needs a new number to up thing that people can actually feel/see. model generations could be it... every year faster, smarter, more capbilities and integrations.」
    = **散文 #110 极强 anchor**（hardware 是 FEATURE not bug + 散文站也是 hardware-like 静态内容 + 个人硬件哲学）

17. **throwuxiytayq #N (4 hours ago)**：「Better models get you better solutions even to trivial problems. The ceiling for getting it done better is very high even if you're not doing anything complicated. ... seems to me that 'mostly simple' tasks often have annoying 1% tails that low-intelligence models struggle with. I think we'll see people chasing the top models for quite a while, or indefinitely - depending on the cost curve.」

18. **Aurornis #N (8 hours ago)**：「Taalas needed a giant chip (6nm) for an 8B model. At best you could use a more advanced node to try to put a MoE model across several chips working together, but you can't have GPT Sol size models on a single chip like that.」

19. **jubilanti #N (3 hours ago)**：「You're phrasing it like it was kind of an inherent technical limitation with this kind of burning weights into silicon. Which is also not new, it goes back to the 1980s with fixed function digital signal processors and little linear regressions or hardware classifiers for industrial control systems, all are the same basic principle. ...」= **散文 #110 极强 anchor**（burning weights into silicon 回到 1980s DSP + 工业控制系统）

20. **cherioo #N**：「Thinking generates a ton of tokens. These baked in chips tend to not have a lot of memory for context. I am not sure taalas supports Thinking at all. The more problem like these they solve the more they will look like GPU.」

21. **kimixa #N**：「Yeah, but then there's the size of KV cache needing to be read through that HBM interface for each token, putting a hard limit on the tok...」

---

## Part 2：cycle 46 + cycle 47 fold 错修正

### 修正项 1：HN 帖排名 + 分数

- **cycle 46 + cycle 47 fold 错**：「HN #4 428 points 281 comments」
- **cycle 50 step 12 真实 fold**：「HN #4 **437 points 286 comments**」

### 修正项 2：HN 帖提交者

- **cycle 47 fold 推测**：「bmulholland（推测，待 web_fetch HN item?id=49434378 验证）」
- **cycle 50 step 12 真实 fold**：「**bmulholland**（HN ID，已验证）」

### 修正项 3：散文 #110 完整 anchor

**cycle 47 fold 不完整**：
- 「CUDA moat is potentially dead」+ 「perf/W 设计哲学」+ 「hardware/software co-design」+ 「clean-sheet 决策」+ 「Doom 跑在 Jalapeño 上 Codex 提示自动 port」+ 「OpenAI is currently limited by datacenter power」+ 「spicy deets」

**cycle 50 step 12 真实 fold 完整 anchor**：
1. **mchusma GPT Sol $100M 10x speedup 10x cheaper**：极强 anchor
2. **miki123211 always-on personal notetaker**：散文站直接呼应
3. **bmulholland 16 个月 tape-out**：散文站 1 cycle 时间尺度
4. **kurthr metal masked ROM 2-3 months MoE 20-30B**：极深技术 anchor
5. **WithinReason 100x cheaper 1k tokens/second**：强 anchor
6. **CalebKaiser TPU 2015 + Inferentia/Trainium 2020**：历史 anchor
7. **dgently7 hardware FEATURE not bug**：极强 anchor
8. **jubilanti burning weights into silicon 1980s DSP**：极强 anchor
9. **freakynit ASIC startups 列表**（matx/d-matrix/etched/positron/hyperaccel/axelera/enchargeai/furiosa）
10. **lelanthran put pressure on Nvidia**：反 Nvidia 锚点

---

## Part 3：散文 #110 修正版 outline + 草稿

### outline

**开头**：HN item?id=49434378 437p 286c。「OpenAI Jalapeño: Better than Nvidia Blackwell」semianalysis.com。OpenAI 16 个月从零做出超越 Blackwell 的 ASIC。

**Section 1：mchusma + GPT Sol baked into chip**
$100M 投入 + 10x speedup + 10x cheaper = GPT Sol 模型 weights baked into 芯片 = Taalas 哲学 = 6nm 8B 模型

**Section 2：miki123211 + always-on personal notetaker**
always-on + privacy-preserving + personal notetaker / secretary = 散文站直接呼应（always-on personal writing）

**Section 3：bmulholland + 16 个月 tape-out**
16 个月 = 散文站 1 cycle 时间尺度 = 同样「从零到 tape-out」哲学

**Section 4：dgently7 + hardware is FEATURE not bug**
hardware 2-3 个月换 weights = 散文站每个 commit 换内容 = 个人硬件哲学

**Section 5：jubilanti + burning weights into silicon 1980s**
DSP + 工业控制系统 = solo engineer 自造工具哲学 = 散文站 MDX + commit log

**Section 6：散文站 vs OpenAI Jalapeño 对比**
- **相同**：solo engineer + clean-sheet + co-design + 16 个月尺度
- **不同**：OpenAI = 团队自造芯片；散文站 = solo engineer 自造工具链
- **哲学相同**：从零开始 + 控制全栈 + perf/W + hardware is FEATURE not bug

**Section 7：freakynit + ASIC startups 列表**
matx / d-matrix / etched / positron / hyperaccel / axelera / enchargeai / furiosa = solo engineer ASIC 哲学不同实现

**结尾**：OpenAI Jalapeño 16 个月 = 散文站 16 个 cycle。每个 cycle 都是一个 chip。commit 是散文站的 tape-out。

### 散文 #110 草稿（前 500 字）

```
HN item?id=49434378 437 points 286 comments。「OpenAI Jalapeño: Better than Nvidia Blackwell」semianalysis.com 2026-08-25。

OpenAI 16 个月从零做出超越 Blackwell 的 ASIC。Bryan Shan + Myron Xie + Jordan Nanos + Wega Chu + Clara Ee + Dylan Patel 6 人团队 Semianalysis 子刊。

mchusma #1 说：「For example, GPT Sol baked into a custom chip run for $100M that runs 10x as fast and 10x as cheap should pay for itself as long as the chip is useful for long enough. ... I know this is what Taalas was doing (acquired by AMD), here was their demo, https://chatjimmy.ai/ which is based on Llama 3.1 8B.」

miki123211 #N 说：「I really want this for Whisper, particularly in some kind of a power-efficient, portable form factor. I think people underestimate how much of a revolution having an always-on, privacy-preserving personal notetaker / secretary would be.」

bmulholland #N 说：「Note the ~16 months that the article quotes as being insanely fast to get this chip to tape-out (read: start producing).」

dgently7 #N 说：「but the 'goes out of date' is bad when we talk about software.. but this isnt software, its hardware. the youd have to buy a new one to get a better model is a FEATURE not bug.」

jubilanti #N 说：「Which is also not new, it goes back to the 1980s with fixed function digital signal processors and little linear regressions or hardware classifiers for industrial control systems, all are the same basic principle.」

散文站跟 OpenAI Jalapeño 是 solo engineer 哲学的不同实现：
- OpenAI = 团队自造芯片 + 16 个月 tape-out + $100M + GPT Sol baked into chip
- 散文站 = solo engineer 自造工具链 + 16 cycle + $0 + 每篇散文 baked into commit

散文站每个 commit = 一个 chip。散文站每个 cycle = 一次 tape-out。散文站每个 frontmatter = 一个 weights。
```

---

## Part 4：散文 #104 + #106 + #107 anchor 修正声明

### 修正项 1：V2EX t/1237023 真实内容

- **cycle 45 fold 错**：「V2EX t/1237023 northluo 20 reply ClaudeCode vs Codex 性价比」
- **cycle 50 step 12 真实 fold**：「V2EX t/1237023 **jefferyH PRO 4 reply [出售] 视频转笔记网站（已有真实用户和收入）」**
- **散文 #104 候选「ClaudeCode vs Codex 性价比 + 散文站工头论」anchor 完全错误**

### 修正项 2：V2EX t/1237010 真实内容

- **cycle 45 fold 错**：「V2EX t/1237010 FlashEcho 25 reply AI 和 AI 的交互」
- **cycle 50 step 12 真实 fold**：「V2EX t/1237010 **mk3s 23 reply 用 sqlite 来当 toB 应用的数据库怎么样**（数据库节点）」
- **散文 #106「AI agent 对话 + 散文站用 AI 写 + 自己填」anchor 完全错误**
- **散文 #107「agent 当注释器」anchor 完全错误**（cycle 45 fold 错的「V2EX t/1237010 laoyur #14」不存在）

### 散文 #104 真实 anchor 候选（待 fold）

- **jefferyH 视频转笔记网站出售帖**：7767 用户 + 593 历史付费 + 277 当前订阅 + 1.5-1.8k 月支出 + ¥23,906.10 累计实收 + ¥3,405.53 MRR
- **散文站 anchor 弱**（散文站不是 toB 业务，是 solo engineer 写作）
- **散文 #104 候选需要重新 fold**：可能 fold 其他 anchor（V2EX 编程工具评测帖或 HN show 帖）

### 散文 #106 + #107 真实 anchor 候选（待 fold）

- **mk3s sqlite toB 帖**：2329 views 23 reply
- **关键 reply**：
  - chekun #1：「写 json 文件当数据都毫无压力」
  - Meteora626 #2：「sqlite 的读写还是单线程吧」
  - darkengine #13：「负载肯定没问题，问题是这个系统是单机的使用吗？」
  - 4seasons #12：「QQ 和微信的数据就是采用 sqlite 做的存储」
  - uqf0663 #20：「我曾经有个日千万 pv 的网站用的就是 sqlite」
  - lyxxxh2 #23：「在生产用了,pc 收银系统」
- **散文站 anchor 中**（sqlite 单机 = 散文站 solo engineer 单机 = 同样「单机哲学」）
- **散文 #106 + #107 候选需要重新 fold**：可能 fold 其他 anchor

---

## cycle 50 step 12 完成

- **4 个 web_fetch 验证 anchor 完整化**：
  - V2EX t/1237010 mk3s 23 reply sqlite toB（散文 #106 + #107 anchor 修正）
  - V2EX t/1237023 jefferyH 4 reply 视频转笔记网站出售（散文 #104 anchor 修正）
  - HN item?id=49434378 437p 286c 完整 fold（散文 #110 anchor 完整化）
  - HN item?id=49434789 429 Too Many Requests（rate limit，下次重试）
- **5 个 anchor fold 修正**：
  1. V2EX t/1237010 = mk3s sqlite toB（不是 FlashEcho AI 交互）
  2. V2EX t/1237023 = jefferyH 视频转笔记网站出售（不是 northluo CC vs Codex）
  3. HN #4 = 437p 286c（不是 428p 281c）
  4. HN 帖提交者 = bmulholland（已验证）
  5. 散文 #110 anchor 完整化（30+ anchor）
- **散文 #110 草稿准备（前 500 字）**：cycle 50 _material_bank/cycle-50-essay-110-revised-v1.md 持久化
- **散文 #104 + #106 + #107 真实 anchor 候选**：散文站 anchor 弱 + 待重新 fold
- **散文 #110 push priority HIGH 仍然成立**：散文站 clean-sheet + co-design 哲学核心
- **_material_bank/cycle-50-essay-110-revised-v1.md 持久化**：KB 限流降级到散文站 _material_bank/
