#!/usr/bin/env bash
# Integration checks use temporary local remotes; no GitHub access or real workspace changes.
set -euo pipefail
script=$(cd "$(dirname "$0")/.." && pwd)/sync-workspace.sh
fixture=$(mktemp -d)
export GIT_CONFIG_GLOBAL="$fixture/gitconfig" GIT_CONFIG_NOSYSTEM=1
export GIT_AUTHOR_NAME='Sync Test' GIT_AUTHOR_EMAIL='sync-test@example.invalid'
export GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME" GIT_COMMITTER_EMAIL="$GIT_AUTHOR_EMAIL"
git config --global protocol.file.allow always
mkdir -p "$fixture/remotes" "$fixture/seeds" "$fixture/caller with spaces"
repos=(shenwan-blog blog-admin Homepage FoodDiary Merger-Plus MyBlog)
for repo in "${repos[@]}"; do
  git init -q --bare --initial-branch=main "$fixture/remotes/$repo.git"
  git init -q --initial-branch=main "$fixture/seeds/$repo"
  printf 'initial\n' > "$fixture/seeds/$repo/content.txt"
  git -C "$fixture/seeds/$repo" add content.txt
  if [[ $repo == shenwan-blog ]]; then
    cp "$script" "$fixture/seeds/$repo/sync-workspace.sh"
    git -C "$fixture/seeds/$repo" add sync-workspace.sh
  fi
  git -C "$fixture/seeds/$repo" commit -qm initial
  git -C "$fixture/seeds/$repo" remote add origin "$fixture/remotes/$repo.git"
  git -C "$fixture/seeds/$repo" push -q -u origin main
  git config --global "url.$fixture/remotes/$repo.git.insteadOf" "https://github.com/ShenWan0906/$repo.git"
done
cd "$fixture/caller with spaces"
bash "$script" --dry-run > "$fixture/dry.log"
[[ ! -e ShenWan_Studio ]]
bash "$script" > "$fixture/clone.log" 2>&1
workspace="$PWD/ShenWan_Studio"
for repo in "${repos[@]}"; do [[ -d $workspace/$repo/.git ]]; done
printf 'remote update\n' >> "$fixture/seeds/Homepage/content.txt"
git -C "$fixture/seeds/Homepage" commit -qam update
git -C "$fixture/seeds/Homepage" push -q
printf '\n# self-update fixture\n' >> "$fixture/seeds/shenwan-blog/sync-workspace.sh"
git -C "$fixture/seeds/shenwan-blog" commit -qam self-update
git -C "$fixture/seeds/shenwan-blog" push -q
cd "$workspace/shenwan-blog"
bash ./sync-workspace.sh > "$fixture/update.log" 2>&1
[[ ! -e $PWD/ShenWan_Studio ]]
[[ $(git rev-parse HEAD) == "$(git -C "$fixture/seeds/shenwan-blog" rev-parse HEAD)" ]]
grep -q '6 succeeded/planned, 0 skipped, 0 failed' "$fixture/update.log"
[[ $(git -C "$workspace/Homepage" rev-parse HEAD) == "$(git -C "$fixture/seeds/Homepage" rev-parse HEAD)" ]]
# Dirty and untracked files must survive; all other projects still get processed.
printf 'local edit\n' >> "$workspace/FoodDiary/content.txt"
printf 'untracked\n' > "$workspace/MyBlog/local.txt"
if bash "$script" > "$fixture/dirty.log" 2>&1; then exit 1; fi
[[ $(tail -n 1 "$workspace/FoodDiary/content.txt") == 'local edit' ]]
[[ -f $workspace/MyBlog/local.txt ]]
grep -q '4 succeeded/planned, 2 skipped, 0 failed' "$fixture/dirty.log"
# Diverged history must not produce a merge, rebase, or reset.
printf 'local commit\n' >> "$workspace/Merger-Plus/content.txt"
git -C "$workspace/Merger-Plus" commit -qam local
before=$(git -C "$workspace/Merger-Plus" rev-parse HEAD)
printf 'remote commit\n' >> "$fixture/seeds/Merger-Plus/content.txt"
git -C "$fixture/seeds/Merger-Plus" commit -qam remote
git -C "$fixture/seeds/Merger-Plus" push -q
if bash "$script" > "$fixture/diverged.log" 2>&1; then exit 1; fi
[[ $(git -C "$workspace/Merger-Plus" rev-parse HEAD) == "$before" ]]
grep -q '3 succeeded/planned, 2 skipped, 1 failed' "$fixture/diverged.log"
git -C "$workspace/blog-admin" checkout -q --detach
git -C "$workspace/Homepage" branch --unset-upstream
git -C "$workspace/shenwan-blog" remote set-url origin https://example.invalid/other.git
if bash "$script" --dry-run > "$fixture/branches.log" 2>&1; then exit 1; fi
grep -q '1 succeeded/planned, 5 skipped, 0 failed' "$fixture/branches.log"
mkdir -p "$fixture/occupied/ShenWan_Studio/shenwan-blog"
printf 'keep\n' > "$fixture/occupied/ShenWan_Studio/shenwan-blog/local.txt"
cd "$fixture/occupied"
if bash "$script" > "$fixture/occupied.log" 2>&1; then exit 1; fi
[[ $(cat ShenWan_Studio/shenwan-blog/local.txt) == keep ]]
grep -q '5 succeeded/planned, 1 skipped, 0 failed' "$fixture/occupied.log"
printf 'PASS: dry run, six clones, nested cwd, spaces, fast-forward, self-update, dirty/untracked preservation, divergence, detached HEAD, missing upstream, unexpected origin, occupied directory.\nLogs: %s\n' "$fixture"
