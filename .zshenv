#!/bin/zsh
#
# .zshenv - Zsh environment file, loaded always.
#

# NOTE: .zshenv needs to live at ~/.zshenv, not in $ZDOTDIR!

# Set ZDOTDIR if you want to re-home Zsh.
export XDG_CONFIG_HOME=${XDG_CONFIG_HOME:-$HOME/.config}
export XDG_DATA_HOME=${XDG_DATA_HOME:-$HOME/.local/share}
export XDG_CACHE_HOME=${XDG_CACHE_HOME:-$HOME/.cache}
export ZDOTDIR=${ZDOTDIR:-$XDG_CONFIG_HOME/zsh}

# ZSH_CONFIG_PATH - The directory containing Zsh configuration files and plugins.
# This variable allows managing configurations and plugins from a custom directory.
# If not set, it defaults to $ZDOTDIR or $HOME.
export ZSH_CONFIG_PATH="${ZSH_CONFIG_PATH:-${ZDOTDIR}}"

# ANTIDOTE_PATH - The directory where Antidote is installed. If not set, defaults to $ZDOTDIR/.antidote.
export ANTIDOTE_PATH="${ANTIDOTE_PATH:-${ZDOTDIR}/.antidote}"

# ANTIDOTE_BUNDLE_FILE - The file listing the plugins to be loaded by Antidote.
# Defaults to .zsh_plugins.txt in the Zsh configuration directory.
export ANTIDOTE_BUNDLE_FILE="${ANTIDOTE_BUNDLE_FILE:-${ZSH_CONFIG_PATH}/.zsh_plugins.txt}"

# ANTIDOTE_STATIC_FILE - The file where Antidote compiles all plugins for static loading.
# Defaults to .zsh_plugins.zsh in the Zsh configuration directory.
export ANTIDOTE_STATIC_FILE="${ANTIDOTE_STATIC_FILE:-${ZDOTDIR}/.zsh_plugins.zsh}"

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
