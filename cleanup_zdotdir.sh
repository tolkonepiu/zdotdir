#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${BASH_VERSION:-}" ]]; then
  printf 'This cleanup script must be run with bash. Try: bash %s\n' "$0" >&2
  exit 1
fi

timestamp="$(date +%Y%m%d-%H%M%S)"
target="${ZDOTDIR_TARGET:-$HOME/.config/zsh}"
if [[ "$target" == "~"* ]]; then
  target="${HOME}${target:1}"
fi

zshenv="$HOME/.zshenv"
zshenv_backup="$HOME/.zshenv.pre-zdotdir"

printf '==> Removing zdotdir configuration\n'

if [[ -f "$zshenv" ]]; then
  if grep -q '\.zshenv"' "$zshenv" && grep -q 'ZDOTDIR=' "$zshenv"; then
    removal_backup="${zshenv}.removed-${timestamp}"
    printf ' • backing up %s -> %s\n' "$zshenv" "$removal_backup"
    cp -p "$zshenv" "$removal_backup"
    rm -f "$zshenv"
  else
    printf ' • %s does not look like a zdotdir loader; leaving in place\n' "$zshenv"
  fi
fi

if [[ -f "$zshenv_backup" ]]; then
  printf ' • restoring %s -> %s\n' "$zshenv_backup" "$zshenv"
  mv -f "$zshenv_backup" "$zshenv"
else
  printf ' • no %s found; nothing to restore\n' "$zshenv_backup"
fi

if [[ -d "$target" ]]; then
  removed_path="${target}.removed-${timestamp}"
  printf ' • moving %s -> %s\n' "$target" "$removed_path"
  mv "$target" "$removed_path"
else
  printf ' • %s not found; nothing to remove\n' "$target"
fi

if [[ "${CLEAN_ZDOTDIR_REMOVE_CACHES:-0}" == "1" ]]; then
  for cache in \
    "$HOME/Library/Caches/antidote" \
    "$HOME/.cache/zsh"
  do
    if [[ -d "$cache" ]]; then
      printf ' • removing cache %s\n' "$cache"
      rm -rf "$cache"
    fi
  done
else
  printf ' • caches kept (set CLEAN_ZDOTDIR_REMOVE_CACHES=1 to delete Antidote & zcompdump caches)\n'
fi

printf '==> zdotdir cleanup complete\n'
