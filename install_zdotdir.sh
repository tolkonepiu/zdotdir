#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${BASH_VERSION:-}" ]]; then
  printf 'This installer must be run with bash. Try: bash %s\n' "$0" >&2
  exit 1
fi

timestamp="$(date +%Y%m%d-%H%M%S)"

ensure_history_file() {
  local allow_seed="${1:-0}"
  local histdir_backup hist_candidate candidate

  if [[ -d "$new_histfile" ]]; then
    histdir_backup="${new_histfile}.dir-backup-${timestamp}"
    printf ' • flattening history directory %s -> %s\n' "$new_histfile" "$histdir_backup"
    mv "$new_histfile" "$histdir_backup"

    hist_candidate=''
    for candidate in ".zsh_history" "zsh_history"; do
      if [[ -f "$histdir_backup/$candidate" ]]; then
        hist_candidate="$histdir_backup/$candidate"
        break
      fi
    done

    if [[ -n "$hist_candidate" ]]; then
      cp -p "$hist_candidate" "$new_histfile"
    else
      : >"$new_histfile"
    fi

    if ! rmdir "$histdir_backup" 2>/dev/null; then
      printf '   retained backup with extra contents at %s\n' "$histdir_backup"
    fi
  fi

  if [[ "$allow_seed" == "1" && -f "$legacy_histfile" ]]; then
    if [[ ! -e "$new_histfile" ]]; then
      printf ' • seeding history from %s\n' "$legacy_histfile"
      cp -p "$legacy_histfile" "$new_histfile"
    elif [[ ! -s "$new_histfile" ]]; then
      printf ' • populating empty history from %s\n' "$legacy_histfile"
      cp -p "$legacy_histfile" "$new_histfile"
    fi
  fi

  if [[ ! -e "$new_histfile" ]]; then
    printf ' • creating empty history file at %s\n' "$new_histfile"
    : >"$new_histfile"
  fi

  if [[ -f "$new_histfile" ]]; then
    chmod 600 "$new_histfile" 2>/dev/null || true
  fi
}

resolve_repo() {
  local input="$1"
  if [[ "$input" == git@* || "$input" == *://* || "$input" == /* || "$input" == .* ]]; then
    printf '%s\n' "$input"
  elif [[ "$input" =~ ^[^/]+/[^/]+$ ]]; then
    local trimmed="${input%.git}"
    printf 'https://github.com/%s.git\n' "$trimmed"
  else
    printf '%s\n' "$input"
  fi
}

repo_input="${ZDOTDIR_REPO:-https://github.com/tolkonepiu/zdotdir.git}"
local_repo=""

if [[ "$repo_input" == "~"* ]]; then
  repo_candidate="${HOME}${repo_input:1}"
else
  repo_candidate="$repo_input"
fi

if [[ -d "$repo_candidate" ]]; then
  local_repo="$(cd "$repo_candidate" && pwd -P)"
elif [[ -d "$PWD/$repo_input" ]]; then
  local_repo="$(cd "$PWD/$repo_input" && pwd -P)"
fi

if [[ -n "$local_repo" ]]; then
  repo="$local_repo"
else
  repo="$(resolve_repo "$repo_input")"
fi

target="${ZDOTDIR_TARGET:-$HOME/.config/zsh}"
if [[ "$target" == "~"* ]]; then
  target="${HOME}${target:1}"
fi
target_parent="$(dirname "$target")"

zshenv="$HOME/.zshenv"
zshenv_backup="$HOME/.zshenv.pre-zdotdir"

printf '==> Installing zdotdir from %s\n' "$repo"

command -v git >/dev/null || { echo 'git is required on PATH' >&2; exit 1; }
command -v zsh >/dev/null || { echo 'zsh is required on PATH' >&2; exit 1; }

mkdir -p "$target_parent"

if [[ -f "$zshenv" ]]; then
  if [[ ! -f "$zshenv_backup" ]]; then
    printf ' • backing up %s -> %s\n' "$zshenv" "$zshenv_backup"
    cp -p "$zshenv" "$zshenv_backup"
  else
    local_backup="${zshenv_backup}.${timestamp}"
    printf ' • backing up %s -> %s\n' "$zshenv" "$local_backup"
    cp -p "$zshenv" "$local_backup"
  fi
fi

if [[ -d "$target" ]]; then
  target_backup="${target}.pre-zdotdir-${timestamp}"
  printf ' • existing %s found; moving to %s\n' "$target" "$target_backup"
  mv "$target" "$target_backup"
fi

if [[ -n "$local_repo" ]]; then
  printf ' • copying local repository from %s\n' "$local_repo"
  mkdir -p "$target"
  (
    cd "$local_repo"
    tar -cf - .
  ) | (
    cd "$target"
    tar -xf -
  )
else
  printf ' • cloning repository\n'
  git clone --depth=1 "$repo" "$target"
fi

printf ' • writing %s\n' "$zshenv"
cat <<EOF >"$zshenv"
export ZDOTDIR="$target"
. "\$ZDOTDIR/.zshenv"
EOF

printf ' • ensuring XDG directories exist\n'
mkdir -p \
  "${HOME}/.local/share/zsh" \
  "${HOME}/.local/state" \
  "${HOME}/.cache/zsh" \
  "${HOME}/.xdg" \
  "${HOME}/Projects"

legacy_histfile="${HOME}/.zsh_history"
new_histfile="$target/.zsh_history"
ensure_history_file 1

antidote_path="$target/.antidote"
if [[ ! -d "$antidote_path" ]]; then
  printf ' • installing Antidote plugin manager\n'
  git clone --depth=1 https://github.com/mattmc3/antidote "$antidote_path"
fi

export ZDOTDIR="$target"
export INSTALL_ZDOTDIR_DEBUG="${INSTALL_ZDOTDIR_DEBUG:-0}"

if [[ "$INSTALL_ZDOTDIR_DEBUG" == "1" ]]; then
  printf ' • priming plugins with timing (INSTALL_ZDOTDIR_DEBUG=1)\n'
else
  printf ' • priming plugins (this may print diagnostics)\n'
fi

zsh -f <<'ZSH' || true
  set -eu
  set -o pipefail
  source "$ZDOTDIR/.zshenv"
  source "$ANTIDOTE_PATH/antidote.zsh"

  if [[ "${INSTALL_ZDOTDIR_DEBUG}" == "1" ]]; then
    while IFS= read -r plugin; do
      [[ -z "$plugin" || "$plugin" == '#'* ]] && continue
      local_start=$EPOCHREALTIME
      printf '   -> %s ...' "$plugin"
      print -- "$plugin" | antidote bundle >/dev/null
      local_duration=$(( EPOCHREALTIME - local_start ))
      printf ' %.2fs\n' "$local_duration"
    done < "$ANTIDOTE_BUNDLE_FILE"
  fi

  antidote bundle <"$ANTIDOTE_BUNDLE_FILE" >"$ANTIDOTE_STATIC_FILE"
ZSH

ensure_history_file 0

printf '==> zdotdir installation complete. Run "exec zsh" in your shell to start using it.\n'
