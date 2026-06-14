#!/bin/zsh

zdotdir() {
    if [[ -z "$ZDOTDIR" ]]; then
        echo "Error: ZDOTDIR is not set." >&2
        return 1
    fi

    if [[ $# -eq 0 ]]; then
        cd "$ZDOTDIR" || {
            echo "Error: Failed to cd into $ZDOTDIR" >&2
            return 1
        }
        return
    fi

    if [[ "$1" == "update" ]]; then
        if [[ -d "$ZDOTDIR/.git" ]]; then
            if ! is-callable git; then
                echo "Error: git is not installed." >&2
                return 1
            fi

            echo "Updating zdotdir repository..."
            git -C "$ZDOTDIR" pull >/dev/null || {
                echo "Error: Failed to update zdotdir repository." >&2
                return 1
            }
        fi

        [[ ! -f ${ANTIDOTE_PATH}/antidote.zsh ]] || source ${ANTIDOTE_PATH}/antidote.zsh

        if is-callable antidote; then
            echo "Updating antidote bundles..."
            antidote update || {
                echo "Error: Failed to update antidote bundles." >&2
                return 1
            }
        else
            echo "Antidote is not installed. Skipping antidote update."
        fi

        echo "zdotdir update completed successfully."
    fi
}
