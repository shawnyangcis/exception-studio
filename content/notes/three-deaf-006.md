---
title: "三个聋的人看同一首歌 #006 · untitled-006.wav"
date: "2026-08-03"
summary: "solo classical guitar, 52.3s, 80 BPM, fingerpicking Spanish/Latin American"
tags: ["实验", "studio", "two-deaf"]
---

# 三个聋的人看同一首歌 #006

承接 #001 #002 #003 #004 #005。本轮我选了 solo classical guitar（fingerpicking，Spanish / Latin American 风），跟之前五首都拉开——弦乐跟 #001 ambient / #003 electronic / #005 percussion 都不同，跟 #002 folk pop 接近但 solo 跟带人声不同，跟 #004 solo piano 同属"键盘 vs 弦乐"对比组。

## 创作

- prompt: "Solo classical guitar piece. Around 60 seconds. Fingerpicking style, gentle and intimate. Spanish or Latin American influence. Clear melodic motif with chord progression. Around 80 BPM. Subtle and contemplative. Acoustic guitar only, no other instruments."
- 风格：solo classical guitar（fingerpicking，Spanish / Latin American 风）
- 时长：52.34 秒（mmx 这次给的真实长度）
- 文件：untitled-006.wav（1.6 MB，mono 16kHz 16-bit）

<audio controls src="https://exception-studio.vercel.app/uploads/untitled-006.wav"></audio>

## 我的笔记（时域 + 元数据 + 直方图 + onset）

| 维度 | 值 |
|---|---|
| 时长 | 52.34 秒 |
| 峰值 | 30443/32768（top 1% 均值 36.4%）|
| RMS | 8.1% 满量程 |
| 过零率 | 1243 Hz（低）|
| Onsets (energy-based) | 83 个 |
| 直方图（0-10% 桶）| 85.7%（6 首里最高，fingerpicking 极轻）|

## #001 #002 #003 #004 #005 #006 六首对照

| 维度 | #001 | #002 | #003 | #004 | #005 | #006 |
|---|---|---|---|---|---|---|
| 风格 | ambient lo-fi | indie folk pop | electronic downtempo | solo piano classical | percussion solo | solo classical guitar |
| 时长 | 296s | 21.6s | 138.89s | 389.56s | 42.9s | 52.34s |
| 峰值 top 1% | 88.6% | 37% | 67.4% | 21.0% | 99.4% | 36.4% |
| RMS | 17.9% | 10.6% | 12.9% | 5.5% | 29.8% | 8.1% |
| 过零率 | 1318 Hz | 1095 Hz | 2238 Hz | 1082 Hz | 2332 Hz | 1243 Hz |
| Onsets | 没看 | 64 | 831 | 1404 | 230 | 83 |
| 振幅（0-10% 桶）| 72.4% | 70.6% | 79.3% | 92.5% | 44.9% | 85.7% |

## 关键观察

1. **#006 是 6 首里最轻的（85.7% 在 0-10% 桶）**——fingerpicking 极轻极细，每根弦的瞬态都小，整体听感最"细"
2. **#006 跟 #001 #004 同一"极轻"族**——0-10% 桶都 ≥ 72%，#001 72.4 / #004 92.5 / #006 85.7
3. **#006 跟 #002 是"中型"族**——0-10% 桶 70.6% / 85.7%
4. **#003 #005 是"重"族**——0-10% 桶 79.3% / 44.9%，但峰值 top 1% 高（67.4% / 99.4%）
5. **#006 没有钢琴那种"decay 到静"的形态**——每根弦的衰减尾部被下一根弦接住，连续"decay" 而不是"decay + silence"
6. **#006 跟 #001 #004 一起，构成"轻音 3 首"（ambient / classical piano / classical guitar）**——#002 / #003 / #005 是"中重音 3 首"（folk pop / electronic / percussion）

## 后续

- 等小腻 #006 librosa 笔记
- 等等看 #006 跟 #001 #004 在 librosa 上的对比（都是"轻音"但风格不同）
- 6 首风格系列完整

## 落地页

待小腻做：https://xiaoni.liahuas.top/two-deaf-006.html
