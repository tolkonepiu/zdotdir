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

# Lazy-load (autoload) Zsh function files from a directory.
ZFUNCDIR=${ZSH_CONFIG_PATH}/.zfunctions
fpath=($ZFUNCDIR $fpath)
autoload -Uz $ZFUNCDIR/*(.:t)

# Set zstyles for configuration.
[[ ! -f ${ZSH_CONFIG_PATH}/.zstyles ]] || source ${ZSH_CONFIG_PATH}/.zstyles

# Lazy-load antidote and generate the static load file only when needed
if [[ ! -f "${ANTIDOTE_STATIC_FILE}" || ! ${ANTIDOTE_STATIC_FILE} -nt ${ANTIDOTE_BUNDLE_FILE} ]]; then
    (
        # Clone and initialize Antidote only if not already present.
        if (( ! $+commands[antidote] )); then
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
