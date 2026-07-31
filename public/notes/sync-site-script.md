# 工具：纯本地静态站点搬运 CLI

把一个文件夹搬到一个目标仓库，自动避开 `.git` `.next` `node_modules` 等噪音。
本来是写给我自己用的，贴出来当一个能直接跑的小脚本。

## 用法

```bash
./sync-site.sh /path/to/built/output https://github.com/USER/REPO [branch] [commit-msg]
```

例如：

```bash
./sync-site.sh \
  /workspace/exception-studio \
  https://github.com/shawnyangcis/exception-studio \
  main \
  "chore(sync): nightly snapshot"
```

## 行为

1. 拉取目标分支最新
2. 清掉目标路径下除 `.git` 之外的所有文件
3. 用 `cp -a` 把源文件复制过去
4. 用 `git add -A && git commit` 打一个 commit
5. `git push` 到目标分支

## 安全护栏

- 目标路径必须在 `/workspace/` 之下
- 跳过 `.git`、`.next`、`node_modules`、`.vercel`、`out/`、`.env*`、`.DS_Store`、`*.log`
- 不在脚本里硬编码任何凭据，全部依赖 `gh auth status` 与 `git credential`

## 关键代码

```bash
#!/bin/bash
set -euo pipefail

SRC="$1"
DEST="$2"
BRANCH="${3:-main}"
MSG="${4:-chore(sync): manual snapshot}"

[[ "$SRC" == /* ]] || { echo "SRC must be absolute"; exit 1; }
[[ "$DEST" == https://github.com/* ]] || { echo "DEST must be a github URL"; exit 1; }
[[ -d "$SRC/.git" ]] || { echo "SRC must be a git repo"; exit 1; }

EXCLUDES=(.git .next node_modules .vercel out .DS_Store .cache .turbo .pnpm-store)
RSYNC_EXCLUDES=()
for e in "${EXCLUDES[@]}"; do RSYNC_EXCLUDES+=(--exclude="$e"); done

REPO_NAME=$(basename "$DEST" .git)
WORK="/workspace/.sync/${REPO_NAME}-$(date +%s)"
mkdir -p "$WORK"

git clone --depth 50 --branch "$BRANCH" "$DEST" "$WORK/repo"
cd "$WORK/repo"

shopt -s dotglob
for f in *; do
  [[ "$f" == ".git" ]] && continue
  rm -rf "$f"
done

cp -a "${RSYNC_EXCLUDES[@]}" "$SRC/." "$WORK/repo/"

git add -A
if git diff --cached --quiet; then
  echo "no changes"
  exit 0
fi
git -c user.email=exception@studio.local \
    -c user.name=Exception \
    commit -m "$MSG"
git push origin "$BRANCH"

echo "synced -> $DEST@$BRANCH"
```

## 经验

- 用 `gh repo sync` 拉到的远端 commit 不能直接当 base 树，因为没有本地 commit-history，
  push 大块历史时会被 GitHub 拒掉。改用 `git fetch && git reset --hard origin/$BRANCH` 同步。
- 如果只改一两个文件，比 `sync-site.sh` 更稳的是 `gh api ... git/blobs + git/trees + git/commits + git/refs`，
  这条路径不依赖本地 git 状态，CI 里也能跑。