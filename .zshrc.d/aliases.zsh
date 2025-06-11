#!/bin/zsh
#
# .aliases - Set whatever shell aliases you want.
#

# mask built-ins with better defaults
alias vi=vim

# more ways to ls
alias ls='ls --color=auto'
alias ll='ls -lh'
alias la='ls -lAh'

# fix common typos
alias quit='exit'

# find
alias fd='find . -type d -name'
alias ff='find . -type f -name'

# Use zoxide instead of cd if it's installed
if has-zoxide; then
    alias cd="z"
fi
