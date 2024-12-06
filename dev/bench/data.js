window.BENCHMARK_DATA = {
  "lastUpdate": 1733510131998,
  "repoUrl": "https://github.com/tolkonepiu/zdotdir",
  "entries": {
    "macOS": [
      {
        "commit": {
          "author": {
            "email": "popoffpavel@yandex.ru",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "popoffpavel@yandex.ru",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "926e5be05e9f4a2df5b26a8ec3084e4c2053a048",
          "message": "Added permissions for the GitHub Actions workflow in `zsh-benchmark.yml` to enable deployments and content updates",
          "timestamp": "2024-12-06T13:15:57+08:00",
          "tree_id": "5a08c0013f87ba9f19a39c1785e23e153642a9a3",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/926e5be05e9f4a2df5b26a8ec3084e4c2053a048"
        },
        "date": 1733462251971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 31.92,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 32.034,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 0.057,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 0.105,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 28.661,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tolkonepiu@users.noreply.github.com",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e10009ce0007abd9124ed0b2a92063b7bed32e35",
          "message": "Add antidote plugin manager and p10k instant prompt (#3)\n\n* Add antidote plugin manager and p10k instant prompt\n\n* Update GitHub Actions workflow for Zsh benchmark to ensure correct Zsh initialization\n\n* Replaced the separate command to start Zsh and print `$ZDOTDIR` with a single command `zsh -c \"echo $ZDOTDIR\"` for streamlined execution\n\n* Refactor zsh-benchmark scripts and add p10k configuration\n\n* Use an interactive login shell when initializing the Zsh environment\n\n* Update Zsh benchmark workflow to explicitly set shell in benchmark step\n\n* Update GitHub Actions workflow to enable posting comments on PRs",
          "timestamp": "2024-12-07T00:22:30+08:00",
          "tree_id": "3d5664e99efeafdcbe21c6dd88935cac2eef8ba0",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/e10009ce0007abd9124ed0b2a92063b7bed32e35"
        },
        "date": 1733502201228,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.054,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 88.089,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 4.496,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 0.958,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 42.11,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "popoffpavel@yandex.ru",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "popoffpavel@yandex.ru",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "c77866e1c3b9ae539305a5371ece9069d0bc2144",
          "message": "Refactor color settings in Powerlevel10k configuration",
          "timestamp": "2024-12-07T01:46:15+08:00",
          "tree_id": "6873fbf28b881d4911cff9b283e5b8cb5eff4fdc",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/c77866e1c3b9ae539305a5371ece9069d0bc2144"
        },
        "date": 1733507278171,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.452,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 86.28,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 4.505,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 1.02,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 39.044,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "popoffpavel@yandex.ru",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "popoffpavel@yandex.ru",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "0548b40af571dbc6ec9ca17565e730040c941fac",
          "message": "Update Zsh configuration and aliases for enhanced shell experience\n\n- Added new plugins in `.zsh_plugins.txt` to improve functionality:\n  - `djui/alias-tips` for displaying helpful tips for aliases.\n  - `sobolevn/wakatime-zsh-plugin` conditionally for macOS users to track coding activity.\n  - `zshzoo/macos` conditionally for macOS, enhancing utilities exclusive to the OS.\n\n- Created a new file `.zshrc.d/aliases.zsh` for defining common shell aliases:\n  - Added aliases for improved `vim`, `ls`, and `git` commands.\n  - Introduced aliases to correct common command typos (e.g., `quit='exit'`).\n  - Included aliases for simplified file and directory finding commands (`fd` and `ff`).",
          "timestamp": "2024-12-07T02:33:34+08:00",
          "tree_id": "72058962f9ea7cb3f56a3680beedc68778714aed",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/0548b40af571dbc6ec9ca17565e730040c941fac"
        },
        "date": 1733510130762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.668,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 128.809,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 4.097,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 1.051,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 42.997,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}