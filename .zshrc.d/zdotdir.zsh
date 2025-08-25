#!/bin/zsh

# Function zdotdir
zdotdir() {
    # Check if the first argument is "update"
    if [[ "$1" == "update" ]]; then
        # Check if we should skip git pull
        if [[ -z "$ZDOTDIR_SKIP_UPDATE" ]]; then
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
        fi

        if [[ -z "$ANTIDOTE_SKIP_UPDATE" ]]; then
            # Source Antidote if it's installed in $ZDOTDIR or $HOME; otherwise, skip loading.
            [[ ! -f ${ANTIDOTE_PATH}/antidote.zsh ]] || source ${ANTIDOTE_PATH}/antidote.zsh

            # Check if antidote is installed
            if command -v antidote >/dev/null; then
                echo "Updating antidote bundles..."
                # Update antidote bundles
                antidote update || {
                    echo "Error: Failed to update antidote bundles."
                    return 1
                }
            else
                # If antidote is not installed, notify the user
                echo "Antidote is not installed. Skipping antidote update."
            fi
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
