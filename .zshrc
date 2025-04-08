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

# ZSH_CONFIG_PATH - The directory containing Zsh configuration files and plugins.
# This variable allows managing configurations and plugins from a custom directory.
# If not set, it defaults to $ZDOTDIR or $HOME.
export ZSH_CONFIG_PATH="${ZSH_CONFIG_PATH:-${ZDOTDIR:-$HOME}}"

# ANTIDOTE_PATH - The directory where Antidote is installed. If not set, defaults to $ZDOTDIR/.antidote or $HOME/.antidote.
export ANTIDOTE_PATH="${ANTIDOTE_PATH:-${ZDOTDIR:-$HOME}/.antidote}"

# ANTIDOTE_BUNDLE_FILE - The file listing the plugins to be loaded by Antidote.
# Defaults to .zsh_plugins.txt in the Zsh configuration directory.
export ANTIDOTE_BUNDLE_FILE="${ANTIDOTE_BUNDLE_FILE:-${ZSH_CONFIG_PATH}/.zsh_plugins.txt}"

# ANTIDOTE_STATIC_FILE - The file where Antidote compiles all plugins for static loading.
# Defaults to .zsh_plugins.zsh in the Zsh configuration directory.
export ANTIDOTE_STATIC_FILE="${ANTIDOTE_STATIC_FILE:-${ZDOTDIR:-$HOME}/.zsh_plugins.zsh}"

# Lazy-load (autoload) Zsh function files from a directory.
ZFUNCDIR=${ZSH_CONFIG_PATH}/.zfunctions
fpath=($ZFUNCDIR $fpath)
autoload -Uz $ZFUNCDIR/*(.:t)

# Set any zstyles you might use for configuration.
[[ ! -f ${ZSH_CONFIG_PATH}/.zstyles ]] || source ${ZSH_CONFIG_PATH}/.zstyles

# Lazy-load antidote and generate the static load file only when needed
if [[ ! ${ANTIDOTE_STATIC_FILE} -nt ${ANTIDOTE_BUNDLE_FILE} ]]; then
    (
        # Clone and initialize Antidote only if not already present.
        if ! command -v antidote >/dev/null; then
            if [[ ! -d ${ANTIDOTE_PATH} ]]; then
                git clone https://github.com/mattmc3/antidote ${ANTIDOTE_PATH}
            fi
            source ${ANTIDOTE_PATH}/antidote.zsh
        fi
        antidote bundle <${ANTIDOTE_BUNDLE_FILE} >${ANTIDOTE_STATIC_FILE}
    )
fi
source ${ANTIDOTE_STATIC_FILE}

# Source anything in .zshrc.d.
for _rc in ${ZSH_CONFIG_PATH}/.zshrc.d/*.zsh; do
    # Ignore tilde files.
    if [[ $_rc:t != '~'* ]]; then
        source "$_rc"
    fi
done
unset _rc

# To customize prompt, run `p10k configure` or edit .p10k.zsh.
[[ ! -f ${ZSH_CONFIG_PATH}/.p10k.zsh ]] || source ${ZSH_CONFIG_PATH}/.p10k.zsh
