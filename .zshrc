#!/bin/zsh
#
# .zshrc - Zsh file loaded on interactive shell sessions.
#

# Enable Powerlevel10k instant prompt. Should stay close to the top of .zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
    source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# ZSH_CONFIG_DIR - The directory containing Zsh configuration files and plugins.
# This variable allows managing configurations and plugins from a custom directory.
# If not set, it defaults to $ZDOTDIR or $HOME.
export ZSH_CONFIG_DIR="${ZSH_CONFIG_DIR:-${ZDOTDIR:-$HOME}}"

# Lazy-load (autoload) Zsh function files from a directory.
ZFUNCDIR=${ZSH_CONFIG_DIR}/.zfunctions
fpath=($ZFUNCDIR $fpath)
autoload -Uz $ZFUNCDIR/*(.:t)

# Set any zstyles you might use for configuration.
[[ ! -f ${ZSH_CONFIG_DIR}/.zstyles ]] || source ${ZSH_CONFIG_DIR}/.zstyles

# Lazy-load antidote and generate the static load file only when needed
if [[ ! ${ZDOTDIR:-$HOME}/.zsh_plugins.zsh -nt ${ZSH_CONFIG_DIR}/.zsh_plugins.txt ]]; then
    (
        # Clone and initialize Antidote only if not already present.
        if ! command -v antidote >/dev/null || [[ ! -d ${ZDOTDIR:-$HOME}/.antidote ]]; then
            if [[ ! -d ${ZDOTDIR:-$HOME}/.antidote ]]; then
                git clone https://github.com/mattmc3/antidote ${ZDOTDIR:-$HOME}/.antidote
            fi
            source ${ZDOTDIR:-$HOME}/.antidote/antidote.zsh
        fi
        antidote bundle <${ZSH_CONFIG_DIR}/.zsh_plugins.txt >${ZDOTDIR:-$HOME}/.zsh_plugins.zsh
    )
fi
source ${ZDOTDIR:-$HOME}/.zsh_plugins.zsh

# Source anything in .zshrc.d.
for _rc in ${ZSH_CONFIG_DIR}/.zshrc.d/*.zsh; do
    # Ignore tilde files.
    if [[ $_rc:t != '~'* ]]; then
        source "$_rc"
    fi
done
unset _rc

# To customize prompt, run `p10k configure` or edit .p10k.zsh.
[[ ! -f ${ZSH_CONFIG_DIR}/.p10k.zsh ]] || source ${ZSH_CONFIG_DIR}/.p10k.zsh
