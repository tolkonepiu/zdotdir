#!/bin/zsh
#
# .zshenv - Zsh environment file, loaded always.
#

export ZDOTDIR=${ZDOTDIR:-$XDG_CONFIG_HOME/zsh}

# XDG
export XDG_CONFIG_HOME=${XDG_CONFIG_HOME:-$HOME/.config}
export XDG_DATA_HOME=${XDG_DATA_HOME:-$HOME/.local/share}
export XDG_CACHE_HOME=${XDG_CACHE_HOME:-$HOME/.cache}
export XDG_STATE_HOME=${XDG_STATE_HOME:-$HOME/.local/state}
export XDG_RUNTIME_DIR=${XDG_RUNTIME_DIR:-$HOME/.xdg}
export XDG_PROJECTS_DIR=${XDG_PROJECTS_DIR:-$HOME/Projects}

# The directory containing Zsh configuration files and plugins.
# This variable allows managing configurations and plugins from a custom directory.
export ZSH_CONFIG_PATH="${ZSH_CONFIG_PATH:-${ZDOTDIR}}"

# The directory where Antidote is installed.
export ANTIDOTE_PATH="${ANTIDOTE_PATH:-${ZDOTDIR}/.antidote}"

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
