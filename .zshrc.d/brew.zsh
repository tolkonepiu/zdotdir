#!/bin/zsh
if is-macos && ! command -v brew &>/dev/null; then
    return 1
fi
eval "$(brew shellenv)"
