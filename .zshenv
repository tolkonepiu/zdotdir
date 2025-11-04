#!/bin/zsh
#
# .zshenv - Zsh environment file, loaded always.
#

export ZDOTDIR=${ZDOTDIR:-$HOME/.config/zsh}

# XDG
export XDG_CONFIG_HOME=${XDG_CONFIG_HOME:-$HOME/.config}
export XDG_DATA_HOME=${XDG_DATA_HOME:-$HOME/.local/share}
export XDG_CACHE_HOME=${XDG_CACHE_HOME:-$HOME/.cache}
export XDG_STATE_HOME=${XDG_STATE_HOME:-$HOME/.local/state}
export XDG_RUNTIME_DIR=${XDG_RUNTIME_DIR:-$HOME/.xdg}
export XDG_PROJECTS_DIR=${XDG_PROJECTS_DIR:-$HOME/Projects}

# Fish-like dirs
: ${__zsh_config_dir:=${ZDOTDIR:-${XDG_CONFIG_HOME:-$HOME/.config}/zsh}}
: ${__zsh_user_data_dir:=${XDG_DATA_HOME:-$HOME/.local/share}/zsh}
: ${__zsh_cache_dir:=${XDG_CACHE_HOME:-$HOME/.cache}/zsh}

# Ensure Zsh directories exist.
() {
  local zdir
  for zdir in $@; do
    [[ -d "${(P)zdir}" ]] || mkdir -p -- "${(P)zdir}"
  done
} __zsh_{config,user_data,cache}_dir XDG_{CONFIG,CACHE,DATA,STATE}_HOME XDG_{RUNTIME,PROJECTS}_DIR

# The directory containing Zsh configuration files and plugins.
# This variable allows managing configurations and plugins from a custom directory.
export ZSH_CONFIG_PATH="${ZSH_CONFIG_PATH:-${ZDOTDIR}}"

# The directory where Antidote is installed.
export ANTIDOTE_PATH="${ANTIDOTE_PATH:-${ZDOTDIR}/.antidote}"
export ANTIDOTE_HOME="${ANTIDOTE_HOME:-${XDG_CACHE_HOME:-$HOME/.cache}/antidote}"

# The file listing the plugins to be loaded by Antidote.
export ANTIDOTE_BUNDLE_FILE="${ANTIDOTE_BUNDLE_FILE:-${ZSH_CONFIG_PATH}/.zsh_plugins.txt}"

# The file where Antidote compiles all plugins for static loading.
export ANTIDOTE_STATIC_FILE="${ANTIDOTE_STATIC_FILE:-${ZDOTDIR}/.zsh_plugins.zsh}"

# Override the default command that zoxide uses.
export ZOXIDE_CMD_OVERRIDE="${ZOXIDE_CMD_OVERRIDE:-cd}"

# Ensure path arrays do not contain duplicates.
typeset -gU path fpath

# Set the list of directories that zsh searches for commands.
path=(
  $HOME/{,s}bin(N)
  $HOME/.local/{,s}bin(N)
  /opt/{homebrew,local}/{,s}bin(N)
  /usr/local/{,s}bin(N)
  $path
)
