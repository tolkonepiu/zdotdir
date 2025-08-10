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

<div align="center">

[![First command prompt lag](https://img.shields.io/endpoint?url=https%3A%2F%2Fzdot-metrics.popov.wtf%2Fapi%2Fmetrics%2Ffirst_prompt_lag_ms&style=flat-square&labelColor=45475a)](https://zdot-metrics.popov.wtf/)&nbsp;
[![First command lag](https://img.shields.io/endpoint?url=https%3A%2F%2Fzdot-metrics.popov.wtf%2Fapi%2Fmetrics%2Ffirst_command_lag_ms&style=flat-square&labelColor=45475a)](https://zdot-metrics.popov.wtf/)&nbsp;
[![Command lag](https://img.shields.io/endpoint?url=https%3A%2F%2Fzdot-metrics.popov.wtf%2Fapi%2Fmetrics%2Fcommand_lag_ms&style=flat-square&labelColor=45475a)](https://zdot-metrics.popov.wtf/)&nbsp;
[![Input lag](https://img.shields.io/endpoint?url=https%3A%2F%2Fzdot-metrics.popov.wtf%2Fapi%2Fmetrics%2Finput_lag_ms&style=flat-square&labelColor=45475a)](https://zdot-metrics.popov.wtf/)&nbsp;
[![Exit time](https://img.shields.io/endpoint?url=https%3A%2F%2Fzdot-metrics.popov.wtf%2Fapi%2Fmetrics%2Fexit_time_ms&style=flat-square&labelColor=45475a)](https://zdot-metrics.popov.wtf/)

</div>
<!-- markdownlint-enable -->

## Description

This Zsh configuration uses [antidote](https://antidote.sh/) as the
plugin manager and [powerlevel10k](https://github.com/romkatv/powerlevel10k)
with
[my custom theme](https://github.com/tolkonepiu/catppuccin-powerlevel10k-themes)
based on the [Catppuccin](https://github.com/catppuccin/catppuccin) color
palette.

Performance is measured using [zsh-bench](https://github.com/romkatv/zsh-bench),
and full benchmark results are available
[here](https://tolkonepiu.github.io/zdotdir/dev/bench).

## Installation

Clone this repository to `$ZDOTDIR`, and then make `~/.zshenv` source
`$ZDOTDIR/.zshenv`.

```zsh
# clone this repository
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
