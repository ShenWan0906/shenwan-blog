#!/usr/bin/env bash
# Run with Git Bash on Windows, or Bash on macOS/Linux. Paths follow the caller's cwd.
# Parse the whole function before pulling: shenwan-blog may update this script itself.
main() {
set -u

usage() {
  cat <<'EOF'
Usage: bash /path/to/sync-workspace.sh [--dry-run]
Outside ShenWan_Studio: create ./ShenWan_Studio and clone missing repositories.
Inside ShenWan_Studio (or any of its subdirectories): update that workspace.
Existing repositories are updated on their current branch using its origin upstream.
Dirty repositories, unexpected origins and branches without upstreams are skipped.
--dry-run: inspect and print actions without creating directories or using the network.
EOF
}

dry_run=false
case "${1:-}" in
  '') ;;
  --dry-run) dry_run=true ;;
  -h|--help) usage; exit 0 ;;
  *) usage >&2; exit 2 ;;
esac
if (( $# > 1 )); then usage >&2; exit 2; fi
command -v git >/dev/null 2>&1 || { printf 'ERROR: Git is required.\n' >&2; exit 1; }

current=$(pwd -P) || exit 1
workspace=''
ancestor=$current
while :; do
  if [[ ${ancestor##*/} == ShenWan_Studio ]]; then workspace=$ancestor; break; fi
  [[ $ancestor == / ]] && break
  ancestor=$(dirname "$ancestor")
done
workspace=${workspace:-"$current/ShenWan_Studio"}
repos=(shenwan-blog blog-admin Homepage FoodDiary Merger-Plus MyBlog)
ok=0
skipped=0
failed=0
printf 'Workspace: %s\n' "$workspace"
if ! $dry_run; then mkdir -p "$workspace" || exit 1; fi

for repo in "${repos[@]}"; do
  target="$workspace/$repo"
  url="https://github.com/ShenWan0906/$repo.git"
  printf '\n[%s]\n' "$repo"
  if [[ ! -e $target && ! -L $target ]]; then
    if $dry_run; then
      printf 'PLAN: clone %s into %s\n' "$url" "$target"
      ok=$((ok + 1))
    elif git clone -- "$url" "$target"; then
      ok=$((ok + 1))
    else
      printf 'ERROR: clone failed; inspect any partial directory before retrying.\n' >&2
      failed=$((failed + 1))
    fi
    continue
  fi
  # Refuse symlinks and ordinary directories rather than accidentally operating on a parent repo.
  if [[ -L $target || ! -d $target/.git || -L $target/.git ]]; then
    printf 'SKIP: target is not an independent repository directory.\n'
    skipped=$((skipped + 1)); continue
  fi
  if ! origin=$(git -C "$target" config --get remote.origin.url); then
    printf 'ERROR: cannot read origin. Check Git ownership/access errors above.\n' >&2
    failed=$((failed + 1)); continue
  fi
  case "${origin%.git}" in
    "https://github.com/ShenWan0906/$repo"|"git@github.com:ShenWan0906/$repo"|"ssh://git@github.com/ShenWan0906/$repo") ;;
    *) printf 'SKIP: origin does not match ShenWan0906/%s.\n' "$repo"
       skipped=$((skipped + 1)); continue ;;
  esac
  if ! status=$(git -C "$target" status --porcelain --untracked-files=normal); then
    failed=$((failed + 1)); continue
  fi
  if [[ -n $status ]]; then
    printf 'SKIP: uncommitted or untracked files; commit or stash them yourself first.\n'
    skipped=$((skipped + 1)); continue
  fi
  if ! branch=$(git -C "$target" symbolic-ref --quiet --short HEAD); then
    printf 'SKIP: detached HEAD.\n'; skipped=$((skipped + 1)); continue
  fi
  if ! upstream=$(git -C "$target" rev-parse --abbrev-ref --symbolic-full-name '@{upstream}' 2>/dev/null); then
    printf 'SKIP: branch %s has no upstream.\n' "$branch"
    skipped=$((skipped + 1)); continue
  fi
  if [[ $upstream != origin/* ]]; then
    printf 'SKIP: upstream is not on origin.\n'; skipped=$((skipped + 1)); continue
  fi
  if $dry_run; then
    printf 'PLAN: fast-forward %s from %s\n' "$branch" "$upstream"
    ok=$((ok + 1))
  elif git -C "$target" -c rebase.autoStash=false -c merge.autoStash=false pull --ff-only --no-rebase; then
    ok=$((ok + 1))
  else
    printf 'ERROR: update failed (network, authorization or diverged history); continuing.\n' >&2
    failed=$((failed + 1))
  fi
done
printf '\nResult: %s succeeded/planned, %s skipped, %s failed.\n' "$ok" "$skipped" "$failed"
# A partial update must be visible to callers and automation.
(( skipped == 0 && failed == 0 ))
}

main "$@"
