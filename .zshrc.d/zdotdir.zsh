#!/bin/zsh

# Function zdotdir
zdotdir() {
    # Check if the first argument is "update"
    if [[ "$1" == "update" ]]; then
        # Ensure git is installed
        if ! command -v git >/dev/null; then
            echo "Error: git is not installed." >&2
            return 1
        fi

        # Check if $ZDOTDIR is set and navigate to it
        if [[ -z "$ZDOTDIR" ]]; then
            echo "Error: ZDOTDIR is not set." >&2
            return 1
        fi
        cd "$ZDOTDIR" || {
            echo "Error: Failed to cd into $ZDOTDIR"
            return 1
        }

        # Perform a git pull to update the repository
        echo "Updating zdotdir repository..."
        git pull >/dev/null || {
            echo "Error: Failed to update zdotdir repository."
            return 1
        }

        # Source Antidote if it's installed in $ZDOTDIR or $HOME; otherwise, skip loading.
        [[ ! -f ${ZDOTDIR:-$HOME}/.antidote/antidote.zsh ]] || source ${ZDOTDIR:-$HOME}/.antidote/antidote.zsh

        # Check if antidote is installed
        if command -v antidote >/dev/null; then
            echo "Updating antidote bundles..."
            # Update antidote bundles
            antidote update >/dev/null || {
                echo "Error: Failed to update antidote bundles."
                return 1
            }
        else
            # If antidote is not installed, notify the user
            echo "Antidote is not installed. Skipping antidote update."
        fi
        echo "zdotdir update completed successfully."
    else
        # If no arguments are provided, navigate to $ZDOTDIR
        if [[ -z "$ZDOTDIR" ]]; then
            echo "Error: ZDOTDIR is not set." >&2
            return 1
        fi
        cd "$ZDOTDIR" || {
            echo "Error: Failed to cd into $ZDOTDIR"
            return 1
        }
    fi
}
