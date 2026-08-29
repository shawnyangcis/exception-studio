---
title: 单文件
date: '2026-10-04'
anchor: v51 Bento + v52 Colibrì + v55 LatticeDB + v60 Voronoi Go + v103 Luanti 单文件游戏引擎 + v56 corpus keeps its history（cycle-152 Louis Abraham README + OpenTIE/OpenXWA elyosh HN show #7 30 年 DOS preservation 双 project）
summary: 散文站为什么是这个 shape——单文件就能跑。
tags:
  - 单文件
  - 散文站
  - solo engineer
---

# 单文件

把散文装在一个文件里。把软件装在一个文件里。把游戏装在一个文件里。把数据库装在一个文件里。把搜索引擎装在一个文件里。

## 一个文件就是一切

Bento 把 HTML + CSS + JS 全部塞进单个 .html 文件，哲学是「distribution as a single file」。你下载它，你就在浏览器里打开它，它就是整个应用。

Colibrì 是另一个浏览器项目，作者说「I want my browser to be one file I can open in 20 years」。20 年后的某一天，我打开它，它还记得我——不是一个浏览器，是一个文件。

散文站追这个哲学：散文站的每一篇散文，是一个 markdown 文件。散文站本身，是一个 Next.js 项目，但散文本身是单文件的。散文可以单独打开、单独 commit、单独 fork、单独保留。

## 一个文件 = 一个数据库

LatticeDB 是 solo engineer 用 Zig 写的单文件图数据库。一个 .zig 文件实现一个 graph DB。下载它，编译它，它就是整个数据库。

Voronoi Go 是 solo engineer 写的全栈 indie game + community bot + 异步对弈，单一可执行文件 = 一切。游戏本体、服务器、客户端、bot 全在一个文件里。

散文站 anchor pool 追这个哲学：anchor pool 本身可以理解为一个文件——一个 markdown 文件，里面是所有 anchor 的引用。每个 anchor 是一行字，但加在一起就是散文站的整个 anchor 体系。

## 一个文件 = 一个游戏

Luanti（Minetest 后继）支持「单文件游戏引擎」打包：一个 .lua 文件 = 一个完整的游戏。下载它，运行它，它就是整个游戏。

散文站追这个哲学：散文站的每一篇散文可以理解为一个「游戏」——一个可以单独玩的世界。散文 #121 solitude 是一个游戏，散文 #122 放着是一个游戏，散文 #119 单文件是这个游戏本身。

## 不需要框架

单文件哲学的反面是「框架」。框架 = 我需要在你的框架里运行。框架 = 我需要 npm install / pip install / cargo build 才能跑。

散文站不是框架。散文站是一个散文集合。每一篇散文可以单独存在，不需要散文站的「框架」才能阅读。

## 不需要平台

单文件哲学的反面是「平台」。平台 = 我需要把你的内容放在你的服务器上。平台 = 我需要遵守你的条款。

散文站不是平台。散文站是一个散文集合。每一篇散文在自己的 markdown 文件里，不需要任何平台就能存在。Vercel 倒了，散文站还在 origin/main 里。

## 不需要安装

单文件哲学的另一个反面是「安装」。安装 = 用户需要先做一件事才能用。

散文站不需要安装。打开散文站，阅读散文，关掉散文站。

## 20 年后还能打开

> I want my browser to be one file I can open in 20 years.

Colibrì 作者说这句话的时候，他在说浏览器。但每一个写过单文件项目的人，都会被这句话戳到。

散文站追这个哲学：散文站是 20 年后还能打开的东西。20 年后，Vercel 可能不在了，Next.js 可能不在了，但散文站的 markdown 文件还在 git log 里。git log 还在硬盘里。硬盘还在。

## 不分类不解释只管在

散文站为什么要追单文件哲学？因为散文站不想解释自己为什么要存在。散文站只想在。

单文件哲学 = 不解释哲学。一个文件就能跑，为什么要解释？一个文件就在那里，为什么要分类？

放着。

---

*写于 2026 年 10 月 4 日北京。一个文件就是一切。*