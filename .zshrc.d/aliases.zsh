#!/bin/zsh
#
# Shell aliases
#

# single character shortcuts
alias _=sudo
alias l=ls
alias g=git

# mask built-ins with better defaults
alias ping='ping -c 5'
alias vi=vim
alias nv=nvim
alias grep="${aliases[grep]:-grep} --exclude-dir={.git,.vscode}"
alias python='/usr/bin/python3'

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

# fix typos
alias get=git
alias quit='exit'
alias cd..='cd ..'
alias zz='exit'

# date/time
alias timestamp="date '+%Y-%m-%d %H:%M:%S'"
alias datestamp="date '+%Y-%m-%d'"
alias isodate="date +%Y-%m-%dT%H:%M:%S%z"
alias utc="date -u +%Y-%m-%dT%H:%M:%SZ"
alias unixepoch="date +%s"

# Use fd utility if available, otherwise fallback to find aliases
if (( $+commands[fd] )); then
    alias ff='fd -t file'
else
    alias fd='find . -type d -name'
    alias ff='find . -type f -name'
fi

# Use bat instead of cat if it's installed
if (( $+commands[bat] )); then
    alias cat='bat --paging=never --decorations never'
fi
