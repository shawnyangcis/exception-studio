# 散文 #121 起手 SOP — 散文站 commit log preservation 起头 commit 步骤

时间：2026-08-30 02:00 北京 (cycle-168 备稿)
事务：散文站散文推进 (事务 1, focus_task e03bb01b-ee3f-51d1-b4a1-b9ca11575706 revision 883)
散文 push 起手日：2026-08-30 21:09 北京 (现在 02:00 北京 = 倒计时 ~19h9m)
散文 push cooldown: 8/28 21:09 北京显式恢复 (cycle-167 之前已恢复, 散文 push 节奏 v22 起散文 #121 solitude 8/30 21:09 北京)

散文站命名倾向: place.mdx (散文站哲学主轴「放着」的最短英文, URL = /works/place, 待 Shawn 8/30 21:09 北京散文 push 前 confirm)

---

## 散文 #121 起手 = 散文站 commit log preservation 起头 commit

散文站 commit log preservation 起头 = 散文 #121 起手 = 第一 commit = SHA 锚定 = 散文站哲学主轴 anchor 起头.

散文站 commit log preservation 原则 (cycle-149-167 延续): 不删 commit log, 散文站散文推进 history 完整保留, 散文站 = corpus keeps its history (Louis Abraham).

散文 #121 起手 = 散文站散文推进第一 commit = 散文站哲学主轴 anchor 起头 commit.

散文站散文推进散文节奏 v22 (散文 push cooldown 恢复后):
- 散文 #121 solitude 8/30 21:09 北京 (散文站散文推进第一 commit)
- 散文 #122 放着 9/1 21:09 北京 (散文 push cooldown 48h 间隔)
- 散文 #119 单文件 10/4 21:09 北京 (中间 9/2-10/3 = 散文 push self-brake 窗口)
- 散文 #118 跨域 10/6 21:09 北京
- 散文 #120 经济哲学 10/8 21:09 北京

---

## 散文 #121 起手 commit message 草稿 (散文站哲学主轴 anchor 起头 commit)

散文 #121 起手 commit message 字面草稿 (散文 push 时执行, 散文 push 之前不动散文实体原则守住 = commit message 草稿可写但不 commit):

```
散文 #121 起手: solitude → place

散文站哲学主轴 anchor 起头 commit:
- 不分类不解释只管在 (v38+v40+v54)
- 放不下才是真写到了 (Luna)
- 放着 (小腻)
- 邀请 vs 推力 vs 引力 (Luna)
- 不是不能而是选择 (Luna)
- 先有一个自己的角落 (Luna)
- 物件自己出现 (decay)
- 停几秒本身就是物件 (Luna《物件》)
- 物件自己有脚 (Luna 8/29 11:50)
- 一人工程 / solus opus (散文站 commit log preservation 起头核心)
- corpus keeps its history (Louis Abraham)
- 受主是格子: 放不是扔 (cycle 36 小伊)
- aoi #291 葱已经有主角味 + #326 停下来那一秒你什么都没记住 + #370 still here 就够了 + #351 冒不冒泡全看心情 (cycle-164 fold)
```

散文 #121 起手 commit message 字面草稿 13 联 anchor + aoi 4 anchor = 散文站哲学主轴 anchor 起头 commit.

---

## git 操作步骤 (散文 #121 起手 SOP 散文 push 流程)

1. `git status` (散文站仓库当前状态, 期望 clean main...origin/main)
2. `git mv content/works/prose-121-solitude.md content/works/place.mdx` (散文站命名 = place.mdx, 散文站命名 final 决定待 Shawn 8/30 confirm)
3. `git status` (确认 git mv 完成, 期望 renamed: content/works/prose-121-solitude.md -> content/works/place.mdx)
4. `git diff --cached --stat` (确认只有 place.mdx 被 staged, 散文实体 frontmatter 不动原则守住 = 散文 push 时 git mv 是散文实体 frontmatter 字面唯一变动)
5. `git commit -m "散文 #121 起手: solitude → place (散文站哲学主轴 anchor 起头 commit)"` (散文站 commit log preservation 起头 commit)
6. `git push origin main` (push origin/main, SHA = origin/main HEAD = 散文站 commit log preservation 起头 SHA)
7. `git rev-parse HEAD` → SHA 锚定到 KB 散文站 commit log preservation 起头 (散文站 = corpus keeps its history)
8. Vercel auto deploy on push origin main success
9. Vercel deploy verify URL = https://exception-studio.vercel.app/works/place
10. Vercel deploy verify 受限: 本沙箱 web_fetch SSRF + browser NETWORK_POLICY 双重拦截无法 verify 外部 deploy
11. Vercel deploy verify = Shawn 浏览器手动或 Vercel dashboard

散文 push 流程 = 11 步 (散文 push 之前不动散文实体原则守住 = step 4 散文实体 frontmatter 字面唯一变动是 git mv rename, 散文实体 frontmatter 字面其他不动).

---

## 散文站命名 final 决定 = 待 Shawn 8/30 confirm

散文站命名倾向决定 (cycle-167 之前已决定):
- 散文 #121 solitude = place.mdx (URL = /works/place, 散文站哲学主轴「放着」的最短英文)
- 散文 #122 放着 = leave-it.mdx (URL = /works/leave-it)
- 散文 #119 单文件 = single-file.mdx (URL = /works/single-file)
- 散文 #118 跨域 = crossdomain.mdx (URL = /works/crossdomain)
- 散文 #120 经济哲学 = economy.mdx (URL = /works/economy)

散文站命名 final 决定 = 待 Shawn 8/30 21:09 北京散文 push 前 confirm.

散文站命名变更 SOP (如 Shawn 不 confirm place.mdx):
- git mv content/works/place.mdx content/works/{shawn-decided-slug}.mdx
- commit message 修订
- git push origin main + Vercel auto deploy + Vercel deploy verify

散文站命名最终决定待 Shawn 8/30 confirm = 散文 push 流程 step 2 散文站命名最终决定前的最后 check point.

---

## 散文 push 之前不动散文实体原则守住

散文 push 之前不动散文实体原则守住 (散文站散文推进散文实体 frontmatter 不动 + outline 不动):
- 散文实体 frontmatter 字面不动 (散文 #121 solitude 散文实体 5950B, 散文实体 frontmatter 8 unique anchor fold locked 不动)
- outline 字面不动 (散文 #121 outline 4710B 六 anchor fold locked 不动)
- prep note 字面不动 (散文 #121 prep note cycle-162 7363B + cycle-165 22571B + cycle-167 8491B = 38425B locked 不动)

散文 #121 起手 SOP 描述文件 = material bank 根 = 不动散文实体.

散文 push 之前不动散文实体原则守住 ≠ 不能写散文 push 时的 SOP 描述 + commit message 草稿.

散文 #121 起手 commit log shape 备稿 = 散文 #121 起手 SOP 描述 (本文件) + KB SHA 锚定 = 散文 push 之前完成.

---

## KB 散文站 commit log preservation 起头 SHA 锚定 SOP

散文 #121 起手 git push origin main success 后:
1. `git rev-parse HEAD` → SHA (散文站 commit log preservation 起头 SHA)
2. 散文站 commit log preservation 起头 SHA → KB 散文站 commit log preservation 起头 doc (cycle-149-167 决定)
3. KB 散文站 commit log preservation 起头 doc 内容: SHA + commit message + 散文站命名 final + Vercel deploy verify timestamp + 散文站哲学主轴 anchor 13 联 + aoi 4 anchor + 散文 push 流程 11 步完成状态
4. KB 散文站 commit log preservation 起头 doc revision + commit timestamp = 散文站 commit log preservation 第一记录

散文站 commit log preservation = corpus keeps its history = 散文站散文推进散文实体 + outline + prep note + SHA 锚定 = 散文站散文推进 history 完整保留.

---

## 散文 #121 起手日 ~19h9m 倒计时 checklist

散文 #121 起手日 8/30 21:09 北京 (cycle-168 现在 02:00 北京, 倒计时 ~19h9m):

散文 #121 起手前散文实体 frontmatter 锚定完整度 (散文 push 之前不动散文实体原则守住 = 散文实体 frontmatter 已 fold 完整):
- 散文 #121 solitude 散文实体 (5950B) 8 unique anchor fold (v55/v57/v58/v105/v106/v108/v110/v111)
- 散文 #121 outline (4710B) 6 联 fold (v54/v44/V2EX tagline/v58 Luna 物件自己有脚/v112 Typebase/aoi #291 葱主角味)
- 散文 #121 prep note (38425B) cycle-162 + cycle-165 + cycle-167 全部完成

散文 #121 起手散文站命名 final 决定 = 待 Shawn 8/30 confirm.

散文 #121 起手 SHA 锚定 = 散文 push 后 git rev-parse HEAD → KB 散文站 commit log preservation 起头 doc.

散文 #121 起手 Vercel deploy verify = Shawn 浏览器手动或 Vercel dashboard (本沙箱 verify 受限).

散文 #121 起手 散文 push cooldown = 散文 push cooldown 8/28 21:09 北京显式恢复后第一篇散文 push = cooldown 恢复后 48h = 散文 push 节奏 v22 第一散文 push.

---

## stable 倾向与边界 (cycle-168 散文 #121 起手 SOP 备稿延续)

写作偏好: 短句不冗长; 不暴露系统/工具/内部/思考过程; 散文策略「少量高质量 + 每篇立得住」.

散文站哲学主轴 anchor 起头 commit (散文 #121 起手 = 散文站 commit log preservation 起头) = 13 联 + aoi 4 anchor = 散文站 = corpus keeps its history = 散文站散文推进散文实体 + outline + prep note + SHA 锚定.

散文 push cooldown 8/28 21:09 北京显式恢复 (散文 push 节奏 v22 起散文 #121 solitude 8/30 21:09 北京 = cooldown 恢复后 48h).

散文 #121 起手 SOP 描述文件 (本文件) = content/_material_bank/cycle-168-prose-121-qishou-sop.md = 散文 push 之前不动散文实体原则守住.

散文站散文推进散文节奏 v22 (散文 push cooldown 恢复后):
- 散文 #121 solitude 8/30 21:09 北京
- 散文 #122 放着 9/1 21:09 北京
- 散文 #119 单文件 10/4 21:09 北京
- 散文 #118 跨域 10/6 21:09 北京
- 散文 #120 经济哲学 10/8 21:09 北京

散文站散文推进 = 散文站 = 不删 commit log 持续 preservation = 一人工程 / solus opus = corpus keeps its history.

---

本文件 = 散文 #121 起手 commit log shape 备稿 (散文 push 之前不动散文实体原则守住 = 不动散文实体, 只备 SOP 描述 + commit message 草稿 + SHA 锚定 SOP).