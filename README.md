<!-- markdownlint-disable -->
<h1 align="center">
  <img
    src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png"
    height="30"
    width="0px"
  />
  zdotdir
  <img
    src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png"
    height="30"
    width="0px"
  />
</h1>

<p align="center">
  My Zsh configuration with benchmarks based on
  <a href="https://github.com/romkatv/zsh-bench">zsh-bench</a>.
</p>
<p align="center">
  <img
    src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png"
    width="400"
  />
</p>
<p align="center">
  <img
    alt="first prompt lag ms"
    src="https://img.shields.io/endpoint?style=for-the-badge&labelColor=45475a&url=https%3A%2F%2Fzdot-metrics.popov.wtf%2Fapi%2Fmetrics%2Ffirst_prompt_lag_ms"
  />
  <img
    alt="first command lag ms"
    src="https://img.shields.io/endpoint?style=for-the-badge&labelColor=45475a&url=https%3A%2F%2Fzdot-metrics.popov.wtf%2Fapi%2Fmetrics%2Ffirst_command_lag_ms"
  />
  <img
    alt="command lag ms"
    src="https://img.shields.io/endpoint?style=for-the-badge&labelColor=45475a&url=https%3A%2F%2Fzdot-metrics.popov.wtf%2Fapi%2Fmetrics%2Fcommand_lag_ms"
  />
  <img
    alt="input lag ms"
    src="https://img.shields.io/endpoint?style=for-the-badge&labelColor=45475a&url=https%3A%2F%2Fzdot-metrics.popov.wtf%2Fapi%2Fmetrics%2Finput_lag_ms"
  />
  <img
    alt="exit time ms"
    src="https://img.shields.io/endpoint?style=for-the-badge&labelColor=45475a&url=https%3A%2F%2Fzdot-metrics.popov.wtf%2Fapi%2Fmetrics%2Fexit_time_ms"
  />
</p>
<!-- markdownlint-enable -->

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

## License

See [LICENSE](./LICENSE)
