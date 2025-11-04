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
[on the benchmark page](https://tolkonepiu.github.io/zdotdir/dev/bench).

## Installation

### Requirements

Make sure these are installed _before_ running the automated installer:

- Git (for cloning plugins and updates): `brew install git`
- Meslo Nerd Font (bundled with Powerlevel10k) so the prompt renders correctly
- Optional but recommended tooling:
  - `wakatime-cli` – enables terminal usage tracking via the bundled WakaTime plugin
  - Visual Studio Code (or VS Code Insiders) – required for shell integration support
  - `zoxide` (`brew install zoxide`) – fast directory jumping aliased to `cd`
  - `eza`, `fd`, `bat` (`brew install eza fd bat`) – unlock richer aliases; without them, standard `ls/find/cat` aliases are used
- The rest of the plugins are fetched automatically by Antidote; no manual setup needed.

> Tip: for a consistent look, apply a Catppuccin profile/theme in your terminal (iTerm2 or Apple Terminal) and grab colors from [Catppuccin](https://github.com/catppuccin/catppuccin).

### Automated

Run the helper script from **bash** (not from zsh) to avoid interaction with
your current session:

```bash
cd zdotdir
bash ./install_zdotdir.sh
```

The installer:

- clones the configured repository (default:
  `https://github.com/tolkonepiu/zdotdir.git`) into
  `${ZDOTDIR_TARGET:-$HOME/.config/zsh}`;
- backs up `~/.zshenv` to `~/.zshenv.pre-zdotdir` and writes a loader that
  sources the new configuration;
- seeds `${ZDOTDIR}/.zsh_history` from an existing `~/.zsh_history` so
  autosuggestions are available immediately;
- primes Antidote and Powerlevel10k caches by launching a one-off zsh session.

You can override the defaults:

```bash
# clone a fork
ZDOTDIR_REPO=my-user/zdotdir bash ./install_zdotdir.sh

# or target a custom location
ZDOTDIR_TARGET="$HOME/.local/share/zsh" bash ./install_zdotdir.sh

# enable per-plugin timing output
INSTALL_ZDOTDIR_DEBUG=1 bash ./install_zdotdir.sh
```

### Manual

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

## Uninstall

Use the cleanup script (again from **bash**) to restore your previous setup:

```bash
cd zdotdir
CLEAN_ZDOTDIR_REMOVE_CACHES=1 bash ./cleanup_zdotdir.sh
```

It restores `~/.zshenv` from the backup the installer created, moves the
`${ZDOTDIR_TARGET}` directory aside, and optionally removes Antidote and zcompdump
caches when `CLEAN_ZDOTDIR_REMOVE_CACHES=1`.

## License

See [LICENSE](./LICENSE)
