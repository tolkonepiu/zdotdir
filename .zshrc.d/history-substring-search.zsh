#!/bin/zsh
[[ -v terminfo ]] || zmodload zsh/terminfo

# Vi
bindkey -M vicmd "k" history-substring-search-up
bindkey -M vicmd "j" history-substring-search-down

# Emacs and Vi
for _keymap in 'emacs' 'viins'; do
  bindkey -M "$_keymap" "$terminfo[kcuu1]" history-substring-search-up
  bindkey -M "$_keymap" "$terminfo[kcud1]" history-substring-search-down
done
unset _keymap
