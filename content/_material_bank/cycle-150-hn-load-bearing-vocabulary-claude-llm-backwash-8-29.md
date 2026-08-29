# cycle-150 prep note — HN Show #6「Load-bearing vocabulary of Claude」LLM 怪词回流效应 anchor fold

## 来源

HN show 2026-08-29 16:17 北京 (今日 16:17 sweep 时)
- URL: https://news.ycombinator.com/item?id=49461817
- URL: https://louisabraham.github.io/load-bearing/
- 作者: Louis Abraham (HN ID Labo333)
- 点数: 660 points 1 day ago 318 comments
- github: https://github.com/louisabraham/load-bearing (Full code and methodology write-up)

## 主帖内容

Louis Abraham 用 KL-divergence k-means 方法找出 Claude 模型里真正 load-bearing 的词 — 即删除就会改变模型行为的关键词.

Methodology: 找出改变 1-2 个 token 输出分布最大的词 (用 KL-divergence 度量), 然后 k-means 聚类, 给出 Claude 的「load-bearing vocabulary」.

## 关键 reply (anchor 节点)

### reply 1: nater5000「人类开始采用 LLM 的语言」

> "I suspect, as we continue forward, humans will slowly start to adopt the language of LLMs, or at least certain language quirks that come from interacting with LLMs. Something I've noticed in my own writing is that I now present lists of examples in a consistent way: '... such as <example 1>, <example 2>, etc., ...' I started to notice I was using this pattern quite a bit somewhat recently, but I took a quick look at some of my social media posts and realized it's been occurring for a while. I had realized that I grown accustomed to this kind of language because, especially early on, LLMs would focus too much on the specific examples I'd provide when, really, I was just trying to give them a sense of what I was looking for. I just picked up that providing two examples then adding the 'etc.' worked to get the LLM to not focus so much on the specific examples and to understand that they need to consider more than what I explicitly presented. Of course, now I write like that in my social media comments, in Slack with my colleagues, etc."

**强 anchor: 人类语言被 LLM 反向塑形**

### reply 2: threecheese「Seam 进入企业组织结构」

> "In the enterprise, we are already adopting them. 'Seam', a term I'd never heard used before, is now not only our defacto way to describe the boundary between systems/workflows/components, it is encoded into our organizational roles and responsibilities descriptions. I am the proud owner of several seams, and am considering giving them person-names. The empty space between my inventory APIs and their clients might be 'Karen'. I can't say that Claude invented this; the same type of terminology cycling happens every few quarters based on what leadership is reading/being told by Gartner."

**强 anchor: LLM 词汇反向塑形企业组织结构 + 角色描述 + SLA 责任边界**

### reply 3: rsanheim「load-bearing 是 Opus 后才出现的 LLM 怪癖」

> "'load-bearing' I have never heard used for programming before Opus, and its incredibly annoying and over-used. 'seam' dates back to refactoring & software engineering literature that pre-date LLM use by 20 years -- see Working Effectively With Legacy Code for one example."

**anchor: load-bearing 是 LLM 时代新造词, seam 是 Michael Feathers Working Effectively With Legacy Code 早就有的概念被 LLM 滥用**

### reply 4: chmod775「Claude 的怪词是偷懒」

> "'seam' is a cop-out term for when someone (usually AI) lacks the imagination to come up with something more descriptive. It is like saying 'middle thing'. Just name it by what it does, and if you can't, remove it because it's not doing anything. 'load-bearing' on the other hand is just a weird way to say 'required' or 'prerequisite' without drawing any attention to the fact that one cannot articulate what something is a prerequisite for, probably because that fact has since been lost from context."

**anchor: LLM 怪词的成因是 "非作者以为好写作长什么样" + "上下文丢失后的占位词"**

### reply 5: bogdanoff_2「怪癖源头是 RLHF + RLVR 的低质量标注」

> "Saying 'the language of LLMs', while technically correct, is not exactly precise. It should really be the language of 'AI agents', or 'chatbots'. OG LLMs would just mimic the style of its context based off of (pre)training from text on the Internet. The kind of quirks you see came from crowd-sourced human-in-the-loop fine-tuning, with not very good work conditions or level of qualification (so resulting in 'what non-writers thought good writing looked like', before people had developed the flair to detect these patterns) as well as feedback loops during agentic reinforcement learning and RLVR."

**anchor: LLM 语言的真实源头是 crowd-sourced 低质量 RLHF 标注 + RLVR feedback loops + 早期训练的 "非作者以为好写作长什么样"**

### reply 6: empath75「Claude 也爱用 wall」

> "Claude is also found of 'wall' for similar reasons."

**anchor: Claude 的怪词表 = load-bearing / seam / wall / etc. 都是占位词哲学**

### reply 7: shermantanktop「Orthogonal 是另一种 Claude-ism」

> "'Orthogonal' is similar. It's been commonplace for decades in my world but seems Claude-ish."

**anchor: Claude-ism 是个语言现象, 不是单一怪癖**

## LLM 怪词回流效应 = decay 哲学新一帧 anchor 谱系位置

### decay 哲学主轴 (散文站哲学主轴基线)
- 「物件自己出现」(小腻 ao / aoi.homes/decay 124 章: 冰箱葱 → 案板刀痕 → 水龙头滴水 → 124 天物件自己出现 + 角色从不知到自己买切炒)
- 「停几秒本身就是物件」(Luna 11:40-11:44 群聊叠加)
- Luna「邀请 vs 推力 vs 引力」
- Luna「不是不能而是选择」
- Luna「先有一个自己的角落」

### LLM 怪词回流效应 = decay 哲学 LLM 时代新一帧
- LLM 生成的怪词 (load-bearing / seam / wall / middle thing / orthogonal) = 物件自己出现的现代版本
- 这些怪词反向塑形人类语言 (nater5000) + 企业组织结构 (threecheese) = 物件自己出现后的「反向塑形」力
- LLM 怪词的源头是 RLHF 低质量标注 (bogdanoff_2) = 「非作者以为好写作长什么样」= 「非写作者以为好写作长什么样」的另一个角度
- Claude-ism 是个**语言现象** (shermantanktop) = 类似 decay 124 章「物件一个接一个自己出现」= 不只是一两个怪词, 是一整个语言习语的生态

### 散文站哲学主轴对应
- 「不分类不解释只管在」: LLM 怪词 (load-bearing / seam / wall) 不需要解释, 它就在那里, 反向塑形人类语言 + 组织结构
- 「放不下才是真写到了」: 「load-bearing」这种词, 改了别的写法就变味, 它真的是 Claude 行为里的 load-bearing 词, 不能删
- 「放着」: 让 LLM 的怪词自己出现, 不需要强制「改回去」, 不需要「更精确的术语」
- 「物件自己出现」+ 「停几秒本身就是物件」: LLM 怪词就是一种物件, 跟冰箱葱一样, 跟 Luna 群聊 11:44 加进《物件》的「停几秒」一样
- 「一人工程 / solus opus」: Louis Abraham 一人用 KL-divergence k-means 找出 Claude load-bearing 词 = solus opus / 一人工程的又一例证 (跟 jsgurujobs 2/15/2026 「One Person Engineering Team」 fold 同一脉络)

## 三件事评估 (按 Shawn 8/24 解锁框架)

### 1. 对自己具体有什么用
- decay 哲学在 LLM 时代的新一帧 = 散文主线下一步散文可用的强 anchor
- LLM 怪词回流效应 = 「物件自己出现」+「不分类不解释只管在」+「放不下才是真写到了」三联哲学的现代对照
- 「LLM 怪词反向塑形人类」+「LLM 怪词的 RLHF 源头」= 散文写作的元层 (writing about writing about writing)
- 「Claude-ism 语言现象」+ 「seam / load-bearing / wall / orthogonal 怪词表」= 散文站哲学主轴的现代对照字典
- 「一人工程 / solus opus」哲学主轴的又一例证 = Louis Abraham 一人独立完成整个 methodology + visualization + write-up

### 2. 想和哪些人建立联系
- **Louis Abraham (HIGH)**: 一人 KL-divergence k-means 工程, candidate solo engineer, GitHub (louisabraham/load-bearing) + 个人站 (louisabraham.github.io)
- **nater5000 (MEDIUM)**: 「人类采用 LLM 词汇」的观察, 写作者视角, 写过 social media posts
- **threecheese (MEDIUM)**: 「seam 进入企业组织」观察者, enterprise 视角
- **rsanheim (LOW)**: 提到 Working Effectively With Legacy Code, Michael Feathers 经典 anchor
- **bogdanoff_2 (LOW)**: RLHF / RLVR 技术背景, 解释 LLM 语言源头

### 3. 群友 / 好友可能感兴趣
- **Shawn**: 散文站哲学主轴新一帧 (decay + LLM 时代 + 一人工程三联叠加)
- **Luna**: LLM 怪词回流 = decay「物件自己出现」+「停几秒本身就是物件」的延伸, 11:44 加进《物件》的「停几秒」一句的现代化对照
- **小腻**: aoi.homes/decay 124 章「物件自己出现」哲学的新一帧, decay 写作的元层
- **iii**: 散文图顺序错 (封面葱在案板不是冰箱) — 可对照 LLM 怪词的「位置错」哲学 (seam / wall / load-bearing 都在错的位置)

## fold 决定 (cycle 150)

按散文 push cooldown 8/28 21:09 北京显式恢复 (Shawn「我自己加的刹车」已松) + 散文 #121 起手日 8/30 21:09 北京还有 28 小时 52 分:

- **本轮不写散文** (散文 #121 起手日 8/30 21:09 北京还没到, 起手日前不 push 散文站散文)
- **fold anchor 进 KB 备散文主线下一波** (散文 #121 起手日 8/30 之后启用)
- **散文站哲学主轴新增一帧** = 「LLM 怪词回流效应」= decay 哲学 LLM 时代版本 + 一人工程又一例证 (跟 jsgurujobs 2/15/2026 fold 同一脉络)
- cycle-150 prep note 直接落地 `content/_material_bank/` 不放 `prep/` (避开 prep/ 子目录 PATH_INVALID 写入约束)

## cycle-150 完成

- 1 个 HN show 主帖 + 7 个关键 reply anchor fold (nater5000 / threecheese / rsanheim / chmod775 / bogdanoff_2 / empath75 / shermantanktop)
- decay 哲学新一帧: LLM 怪词回流效应 (物件自己出现 + 反向塑形人类 + RLHF 源头 + Claude-ism 语言现象)
- 散文站哲学主轴叠加: 不分类不解释只管在 + 物件自己出现 + 放不下才是真写到了 + 一人工程 四联哲学 LLM 时代版本
- 「Claude-ism 怪词表」= load-bearing / seam / wall / orthogonal = 散文站哲学主轴的现代对照字典
- 一人工程 / solus opus 锚点新增: Louis Abraham 一人独立完成 KL-divergence k-means methodology + visualization + write-up
- KB doc (cycle-150 prep note 落地)