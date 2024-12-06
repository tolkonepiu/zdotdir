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

# more ways to git
alias gl='git pull'
alias gp='git push'
alias glg='git log --graph --pretty="%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset" --date=short'

# fix common typos
alias quit='exit'

# find
alias fd='find . -type d -name'
alias ff='find . -type f -name'
