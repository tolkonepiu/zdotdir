#!/bin/zsh
if ! is-macos || ! command -v brew &>/dev/null; then
    return 1
fi

eval "$(brew shellenv)"

function brews() {
    local formulae="$(brew leaves | xargs brew deps --installed --for-each)"
    local casks="$(brew list --cask 2>/dev/null)"

    local blue="$(tput setaf 4)"
    local bold="$(tput bold)"
    local off="$(tput sgr0)"

    echo "${blue}==>${off} ${bold}Formulae${off}"
    echo "${formulae}" | sed "s/^\(.*\):\(.*\)$/\1${blue}\2${off}/"
    echo "\n${blue}==>${off} ${bold}Casks${off}\n${casks}"
}
