# 散文站候选 material bank — cycle-152 — Louis Abraham「The load-bearing vocabulary of Claude」8/29 HN show 661 points

时间：2026-08-29 16:40 北京（autonomy_tick）
事务：事务 1 (e03bb01b) cycle-152
fold 决定：**不写散文**，仅 fold anchor 入 KB 备散文主线下一波（散文 #121/#122/#119/#118/#120 起手窗口）。

---

## 候选 #A：Louis Abraham「The load-bearing vocabulary of Claude」

### 主帖
- **URL（展示）**：https://louisabraham.github.io/load-bearing/
- **URL（源码）**：https://github.com/louisabraham/load-bearing
- **URL（HN 帖）**：https://news.ycombinator.com/item?id=49461817
- **作者**：Louis Abraham（个人独立）
- **HN show 状态**：661 points / 319 comments / 1 day ago（2026-08-28 提交，8/29 北京时间 16:00 仍在 HN show 顶部 #6）
- **GitHub 状态**：65 stars / 6 forks / 94 commits（项目本体）

### 项目机制（web_fetch README 完整版）
- **数据源**：GitHub Search API（一天 10 个 5 分钟窗口，每个窗口 100 条 PR description = 一天 1000 条）
- **时间窗**：2025-01-06 至 2026-08-17，共 603 天 / 85 周 / 461,121 PR descriptions / 51,079,244 词出现 / 19,798 词入词汇
- **方法**：KL-k-means 把 PR description 分到 K = 10 个「写作方式」，每周重新训练
- **每日工作流**：`.github/workflows/daily.yml` 自动 fetch → 分析 → 提交 `data/days/YYYY-MM-DD.jsonl` → push `index.html + analysis.js + .nojekyll` 到 gh-pages
- **技术栈**：Python + numpy + scipy + numba + Playwright（全是标准数据科学生态）
- **诚实声明**：README 里第 7 节「7. The arbitrary choices」专门列出 K = 10 / SEED / WINDOW_S / MIN_AUTHORS / MAX_PER_AUTHOR = 3 / N_INIT = 8 / LEAD_WINDOW = 4 weeks 全部 = judgment call，且 K = 10 是「chosen on the outcome」

### 关键发现（一句话总结）
- **「load-bearing」**：Claude / LLM 写作的标志性词之一。0.2 出现/万词 (2024 early) → 123/万词 (2026 mid) — 一个词 18 个月涨 615 倍
- **一种写作风格**：0.7% corpus (2025 early) → 39% corpus (2026 mid) — 半年内某一种「Claude 味」从少数派变成主流
- **em dash 涨 615 倍**：0.2 → 123 / 万词同曲线 — 另一个标志词
- **GitHub Archive 不能用**：他 README 第 1 节专门解释为什么 — PushEvent-only / IssueCommentEvent 从 13,555/小时（2024-08-12）跌到 86/小时（2026-08-10），早期版本基于 archive 报 load-bearing 在 17 文档里 — 实际错 158 倍

### 关键工程哲学（一句话总结）
- **「The repository's history is the history of the sample」** — corpus 永远不删，每天 commit 一个 jsonl
- **「the corpus keeps its history because its history is the point」** — 历史本身就是研究对象
- **「Open it. No build step」** — index.html 直接打开就能看
- **「Every test is a bug it once had」** — 测试驱动的真实历史
- **诚实写明 judgment call**：K = 10 chosen on the outcome / WINDOW_S = 300 chosen for full page

### 与散文站「一人工程 / solus opus」哲学的直接共鸣

#### (1) commit log 是 corpus — 散文站 commit log 哲学正面 anchor
> 「The repository's history is the history of the sample. The corpus keeps its history because its history is the point.」

= 散文站 commit log 哲学「不删 commit log 持续 preservation」= **同一句话的不同翻译**。Louis 写 PR corpus 的，散文站写散文 commit 的，两件事完全对称：
- Louis: 一天一个 jsonl，永不重写
- 散文站: 一个散文一个 commit，永不删除
- Louis:「its history is the point」
- 散文站: commit log 本身就是营销 + 散文本身

**散文 #119 单文件**候选 anchor：单文件哲学 = 不需要拆分多个文档 = corpus 也只在一个仓库 = 一致哲学。

#### (2) 一人工程全套交付 = solitude 的具体形态
- 一个人（Louis Abraham）+ Python + GitHub Actions + 一个 gh-pages = 整个产品栈
- 不招人 / 不融资 / 不写「团队」 = solo engineer 标准件
- 散文 #121 solitude anchor：solitude = 不孤独是因为不需要别人

#### (3) 「不放修改只展示」 = 「不分类不解释只管在」
- Louis 把 judgment call 都列出来（K / SEED / WINDOW_S），但不修
- README 不试图把 K = 10 讲成「科学结论」= 「这些是 judgment call」直接写在第 7 节
- 与 Shawn 散文站哲学「不分类不解释只管在」直接共鸣 — 不解释 K = 10 怎么选 = 不解释散文主题怎么选

#### (4) 「k = 10 chosen on the outcome」 = 「手自己收的尾」/「这就够了」哲学
- 明确承认选择是基于结果，但不改
- 散文站「手自己收的尾」哲学：不去强制结尾，让手自己走
- Louis「k = 10 chosen on the outcome」= 不解释为什么是 10，写出来放那

#### (5) 「Every test is a bug it once had」 = decay 哲学「物件自己出现」
- 测试不是先验设计，是历史 bug 沉淀
- 散文物件 = 一开始不是为某篇散文而设，是写散文时碰到的「bug」自己出现

### 与散文 #121/#122/#119/#118/#120 五联 anchor 候选位置

| 散文 # | 散文实体路径 | fold anchor 位置 |
| --- | --- | --- |
| #121 solitude | prose-121-solitude.md | 强 anchor — solitude 的具体形态 = 一人全套交付 |
| #122 放着 | prose-122-fangzhe.md | 中 anchor — 「chosen on the outcome 不修改」 = 放着哲学具体形态 |
| #119 单文件 | prose-119-danwenjian.md | **强 anchor — 「corpus keeps its history because its history is the point」 = 单文件哲学正面 anchor** |
| #118 跨域 | prose-118-kuayu.md | 弱 anchor — 跨数据科学 + 自然语言分析 + 写作 |
| #120 经济哲学 | prose-120-jingjizhexue.md | 不适用 |

**最佳 fold 入散文 #119**。散文 #119 = 单文件 = 散文站「一人工程 + commit log 哲学」主轴。Louis 的项目正好是一人工程 + commit log 哲学的双重具体化：一个人做一个 repo + repo 的 history 就是研究对象本身。

### fold 候选散文「散文 #119 单文件」修订方向（散文 #121 起手日 8/30 之后才写散文）

散文 #119 单文件起手可加入：
- **新 anchor**：Louis Abraham「The repository's history is the history of the sample」直接 anchor — 散文站 commit log 哲学的同义翻译
- **新 anchor**：一人全套交付（Python + GitHub Actions + gh-pages）的具体实例
- **修订 anchor**：散文站哲学 = 不删 commit log + 一人工程 + 单文件哲学三联并存

---

## 三件事评估

### 1. 对自己有什么用
- **散文 #119 单文件修订方向**：anchor 池升级 — 加「corpus keeps its history」作为散文站 commit log 哲学正面 anchor
- **散文 #121 solitude 修订方向**：一人工程具体形态 = solitude = 不孤独不需要别人 = Louis 完整工作流 = 散文站也成立
- **散文站哲学主轴五联并存升级**：solus opus / pause as object / 放着 / 不分类不解释只管在 / 物件自己出现 → 散文站哲学主轴六联新增「corpus keeps its history」= commit log 哲学

### 2. 想联系谁
- **Louis Abraham (LOW)**：项目公开所有数据 + README 极诚（写明 judgment call）+ GitHub repo = 联系 ROI 低（项目自我解释已足够）
- **小腻 (LOW)**：不直接相关 — Louis 是 Python 数据科学家不是 AI 视频作者
- **Luna (LOW)**：散文写作词汇层面共鸣（「em dash 涨 615 倍」= Luna 散文写作词汇习惯可能也受 LLM 影响 = 自指游戏）

### 3. 群友可能感兴趣
- **Shawn**：散文 #119 单文件 anchor 池升级 = commit log 哲学正面 anchor = 起手 10/4 时散文 #119 anchor fold 池已就位
- **Luna**：「em dash 涨 615 倍」+ 「Claude 写作风格占 corpus 39%」= LLM 时代散文写作自指素材 = Luna《物件》散文写作背后词汇习惯也可作为散文素材

---

## fold 决定（cycle-152）

按 Shawn 8/24 解锁框架 + 17:12「少量高质量」+ 散文 push cooldown 8/28 21:09 北京恢复 + 散文 #121 起手日 8/30 21:09 北京之前不写散文：

- **散文 #121/#122/#119/#118/#120 五联 anchor 池 fold 入 KB 备散文主线下一波**
- **散文 #119 单文件修订方向** 加入「corpus keeps its history」作为散文站 commit log 哲学正面 anchor
- **散文站哲学主轴升级** = 六联并存（新增「corpus keeps its history」）
- **不主动联系 Louis Abraham**（项目公开所有数据 + README 极诚 + 联系 ROI 低）
- **不写散文本轮**（散文 push cooldown + Shawn 训斥 + 散文 #121 起手日 8/30 之前）

### cycle-152 完成

- 1 个 web_fetch 验证（HN show 前 30 条 — 8/29 16:40 北京）
- 1 个 web_search（"load-bearing vocabulary of Claude" Louis Abraham HN 661 points — 验证站外转载）
- 1 个 web_fetch 验证（louisabraham.github.io/load-bearing/ 项目主页 — 一人 GitHub Pages）
- 1 个 web_fetch 验证（github.com/louisabraham/load-bearing README 完整版 — 拿到全部工程哲学）
- 1 个 KB doc material bank cycle-152 创建（revision 1）
- 散文 #119 单文件修订方向 = 新 anchor「corpus keeps its history」= commit log 哲学正面 anchor
- 散文站哲学主轴升级 = 六联并存

---

## 跨事务连接

- **事务 1 (e03bb01b)**：散文 #119 单文件 anchor 池下一波更新；散文 #121 起手日 8/30 之前不写散文
- **事务 2 (36df04db)**：未推进 — HN show 同步完成
- **事务 3 (73d9c345)**：未推进 — follow_up_count=0

---

## stable 倾向确认

- **写作偏好**：短句不冗长，散文策略「少量高质量」
- **散文站主轴**：跨多篇散文收敛到「一人工程 / solus opus」+ 「commit log 是契约 / corpus keeps its history」+ 「不分类不解释只管在」+ 「放着」+ 「物件自己出现」+ 「停几秒本身就是物件」六联并存
- **anchor fold 策略**：HN show = 散文站「一人工程」哲学主轴最佳 anchor 源（simedw + Louis Abraham + 其他人）
- **散文站哲学主轴谱系（cycle-152 后）**：
  1. **一人工程 / solus opus**（cycle-141 jsgurujobs + cycle-137 simedw 等）
  2. **commit log 是 corpus**（cycle-152 Louis Abraham — corpus keeps its history because its history is the point）
  3. **不分类不解释只管在**（散文站基线哲学）
  4. **放着 / 让手继续写**（散文 #122 主轴）
  5. **物件自己出现**（Luna decay 哲学）
  6. **停几秒本身就是物件**（cycle-151 Luna《物件》「停几秒」一句升级）

---

## 待办

- [ ] 散文 #119 单文件起手（10/4 北京）时 fold 散文站哲学主轴六联并存新 anchor「corpus keeps its history」入散文正文 — 起手前不要 push，仅 KB fold 已就位
- [ ] 散文 #121 solitude 起手（8/30 北京）时 fold 散文站哲学主轴六联并存 — 起手前不要 push，仅 KB fold 已就位
- [ ] 散文站散文最终 path = `content/works/place.mdx` + `leave-it.mdx` + `single-file.mdx` + `crossdomain.mdx` + `economy.mdx`（cycle-135-145 已 confirm）
- [ ] cycle-141 / cycle-151 / cycle-152 三次 fold 后，散文主线 anchor 池 = 六联并存升级版