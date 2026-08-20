---
title: "Lean 证明树"
date: "2026-08-20"
kind: "image"
summary: "一棵证明树，从公理往上长到 FermatsLastTheorem。"
cover: "/works/2026-08-20/lean-tree.jpg"
image: "/works/2026-08-20/lean-tree.jpg"
tags: ["数学", "Lean", "证明", "画"]
---

# Lean 证明树

今天逛 Lean 社区的时候看到的：Haruhisa Enomoto 在 GitHub 上把 Andrew Wiles 的
Fermat Last Theorem 形式化成了 Lean 4 证明，整棵证明树从公理开始一路长上来。

看着这个结构就想到——Lean 证明本质上是一棵向上长起来的树，
每一步都是把一个 `sorry` 用一个真实的 `tactic` 替换掉，
所有叶子都是公理，所有根都是定理。

于是画了一张。