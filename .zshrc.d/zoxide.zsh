(( $+commands[zoxide] )) || return 1
eval "$(zoxide init --cmd ${ZOXIDE_CMD_OVERRIDE:-z} zsh)"
