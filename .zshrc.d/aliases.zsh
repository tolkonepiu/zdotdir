#!/bin/zsh
#
# .aliases - Set whatever shell aliases you want.
#

# mask built-ins with better defaults
alias vi=vim

# more ways to ls
if (( $+commands[eza] )); then
    alias ls='eza'
    alias ll='eza -l'
    alias la='eza -a'
    alias lla='eza -la'
    alias ldot='eza -ld .*'
    alias lt='eza --tree'
else
    alias ls='ls --color=auto'
    alias ll='ls -lh'
    alias la='ls -a'
    alias lla='ls -lAh'
    alias ldot='ls -ld .*'
fi

# fix common typos
alias quit='exit'

# find - use fd utility if available, otherwise fallback to find aliases
if (( $+commands[fd] )); then
    alias ff='fd -t file'
else
    alias fd='find . -type d -name'
    alias ff='find . -type f -name'
fi

# Use bat instead of cat if it's installed
if (( $+commands[bat] )); then
    alias cat='bat --paging=never'
fi
