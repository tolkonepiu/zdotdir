# zdotdir

## Installation

Clone this project to `$ZDOTDIR`, and then make `~/.zshenv` source `$ZDOTDIR/.zshenv`.

```zsh
# clone this project
ZDOTDIR=~/.config/zsh
git clone https://github.com/tolkonepiu/zdotdir $ZDOTDIR

# source the .zshenv from ZDOTDIR
[[ -f ~/.zshenv ]] && mv -f ~/.zshenv ~/.zshenv.bak
echo ". $ZDOTDIR/.zshenv" > ~/.zshenv

# start a new zsh session
zsh
```
