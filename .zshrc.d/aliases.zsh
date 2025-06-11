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

# find - use fd utility if available, otherwise fallback to find aliases
if command -v fd >/dev/null 2>&1; then
    alias ff='fd -t file'
else
    alias fd='find . -type d -name'
    alias ff='find . -type f -name'
fi

# Use zoxide instead of cd if it's installed
if has-zoxide; then
    alias cd="z"
fi
