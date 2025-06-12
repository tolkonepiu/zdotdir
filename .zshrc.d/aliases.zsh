#!/bin/zsh
#
# .aliases - Set whatever shell aliases you want.
#

# mask built-ins with better defaults
alias vi=vim

# more ways to ls
if command -v eza >/dev/null 2>&1; then
    alias la='eza -a'
    alias ll='eza -l'
    alias lla='eza -la'
    alias ls=eza
    alias lt='eza --tree'
else
    alias ls='ls --color=auto'
    alias ll='ls -lh'
    alias la='ls -lAh'
fi

# fix common typos
alias quit='exit'

# find - use fd utility if available, otherwise fallback to find aliases
if command -v fd >/dev/null 2>&1; then
    alias ff='fd -t file'
else
    alias fd='find . -type d -name'
    alias ff='find . -type f -name'
fi

# Use bat instead of cat if it's installed
if command -v bat >/dev/null 2>&1; then
    alias cat="bat"
fi
