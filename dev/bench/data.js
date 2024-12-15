window.BENCHMARK_DATA = {
  "lastUpdate": 1734260844982,
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
          "id": "63f77e19e4df3d9d462aee2c950e916edae72c4f",
          "message": "Add is-wakatime-installed check, enhanced `brew.zsh` by adding the `brews` function",
          "timestamp": "2024-12-07T03:21:25+08:00",
          "tree_id": "cf266a3f844b0f36f13801ac2a11ec827a5eca6d",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/63f77e19e4df3d9d462aee2c950e916edae72c4f"
        },
        "date": 1733513036715,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.216,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 126.947,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 4.402,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 0.988,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 40.318,
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
          "id": "1bee20ade44556c4177971fcbefc469d0205dacf",
          "message": "Remove Wakatime installation check and update Wakatime plugin source",
          "timestamp": "2024-12-07T04:00:11+08:00",
          "tree_id": "9014246e031937a4b201953a94e19208bd4b6d05",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/1bee20ade44556c4177971fcbefc469d0205dacf"
        },
        "date": 1733515310949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.853,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 129.279,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 4.021,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 1.044,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 42.574,
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
          "id": "a2fc131f660271dd7afba783db307d52977f6482",
          "message": "Update GitHub Actions workflow to include Ubuntu support for Zsh benchmarks",
          "timestamp": "2024-12-07T04:14:25+08:00",
          "tree_id": "6ba93afbfdc662249cdabf9d3c8b13295d3a3a3f",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/a2fc131f660271dd7afba783db307d52977f6482"
        },
        "date": 1733516226419,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 17.328,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 143.509,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 3.987,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 1.121,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 52.766,
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
          "id": "9c4773d7ec61f06658e0b27b12183d839d9d282e",
          "message": "Added environment variable `TERM: screen-256color` to ensure proper terminal emulation compatibility",
          "timestamp": "2024-12-07T04:29:42+08:00",
          "tree_id": "5fd6c226be64682721a23bd341a2ead5b68fed99",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/9c4773d7ec61f06658e0b27b12183d839d9d282e"
        },
        "date": 1733517144397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 15.114,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 126.088,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 4.502,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 0.949,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 42.171,
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
          "id": "17ba8746dd6040b91487bc8ca26cec6e3111062a",
          "message": "Optimized Zsh plugin initialization by adding ez-compinit plugin",
          "timestamp": "2024-12-07T04:37:50+08:00",
          "tree_id": "535c78e5895794a1c9925e7a552fb3b960d3ca94",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/17ba8746dd6040b91487bc8ca26cec6e3111062a"
        },
        "date": 1733517596736,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 15.682,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 149.952,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 4.383,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 1.137,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 46.163,
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
          "id": "26bd5dddaae5b6461f5c4136d200b6fce7a36032",
          "message": "Removed Ubuntu benchmarking job from the Zsh benchmark workflow",
          "timestamp": "2024-12-07T06:31:38+08:00",
          "tree_id": "c82303a6cdd94ffd31ead137cfbf73d0eab0ff92",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/26bd5dddaae5b6461f5c4136d200b6fce7a36032"
        },
        "date": 1733524419232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 22.473,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 147.109,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 3.525,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 1.112,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 42.401,
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
          "id": "db7834728a7b1c2e8ff5177705e66db2a332d90e",
          "message": "Update error status colors to use global `red` variable in `.p10k.zsh`",
          "timestamp": "2024-12-08T15:12:28+08:00",
          "tree_id": "a1e3aa65b675fac6d74942b6e6de1ef674187472",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/db7834728a7b1c2e8ff5177705e66db2a332d90e"
        },
        "date": 1733642057695,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 14.934,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 136.756,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 4.199,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 1.204,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 42.28,
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
          "id": "3508beb93a24ee30b2363e3df8397f94cd489cb1",
          "message": "Update .zsh_plugins.txt to add new zsh-plugins\n\n- Added `zsh-users/zsh-completions` to improve shell completions. This plugin is set with `kind:fpath` and a `path:src` to correctly locate and use completions scripts.\n- Introduced three plugins for enhancing ZSH functionality with fish-like features:\n  - `zdharma-continuum/fast-syntax-highlighting` for on-the-fly command syntax highlighting.\n  - `zsh-users/zsh-autosuggestions` to provide command suggestions based on command history.\n  - `zsh-users/zsh-history-substring-search` allows using Up/Down keys to search through the command history based on the substring entered.",
          "timestamp": "2024-12-08T15:33:47+08:00",
          "tree_id": "9fef8e96d55908a6317d34c5a99ea1b12722ff0b",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/3508beb93a24ee30b2363e3df8397f94cd489cb1"
        },
        "date": 1733643345149,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 15.578,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 193.165,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 18.267,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.805,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 56.11,
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
          "id": "46d75a432d25c89800f9ad0f20d853d29688ad8b",
          "message": "Add conditional loading logic for plugins in zsh configuration",
          "timestamp": "2024-12-08T18:38:17+08:00",
          "tree_id": "72d1c3a9d52387f73f3164aea3ae803431649ef1",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/46d75a432d25c89800f9ad0f20d853d29688ad8b"
        },
        "date": 1733654441677,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 14.761,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 176.884,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 12.402,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.17,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 52.777,
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
          "id": "c8b07f1caa13a34f4eb2228ae01aa859823b9e39",
          "message": "Add Renovate config",
          "timestamp": "2024-12-08T18:47:44+08:00",
          "tree_id": "ce16e66b2f97308361bc01c365794adf415855b4",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/c8b07f1caa13a34f4eb2228ae01aa859823b9e39"
        },
        "date": 1733654964195,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 14.864,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 186.396,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 12.508,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.139,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 55.795,
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
          "id": "563f1b65155cc2895eb96a4f942ed8be78e48eb3",
          "message": "Optimize Zsh benchmark workflow by ignoring irrelevant paths",
          "timestamp": "2024-12-08T18:50:52+08:00",
          "tree_id": "a3b2017923a47eec8cecee938f0602904cb41fdb",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/563f1b65155cc2895eb96a4f942ed8be78e48eb3"
        },
        "date": 1733655167444,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 18.705,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 178.946,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 18.105,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 4.979,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 52.39,
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
          "id": "04a4593e2a600591c0d2ca8fafbabf1243792234",
          "message": "Add editorconfig and GitHub Actions linters, update YAML linting rules (#6)\n\n* Add editorconfig and GitHub Actions linters, update YAML linting rules\n\n* Fix lint errors\n\n* Update GitHub Actions workflows and .zshrc indentation\n\n* Removed the `-ci` flag from `shfmt_flags`\n\n* Add shellcheck configuration for zsh\n\n* Removed the ShellCheck job from the GitHub Actions workflow",
          "timestamp": "2024-12-08T21:24:24+08:00",
          "tree_id": "adcf7f7487021f583a535a9ad21a1a8d37554652",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/04a4593e2a600591c0d2ca8fafbabf1243792234"
        },
        "date": 1733664341571,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 14.769,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 177.652,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 17.861,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.012,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 52.911,
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
          "id": "45e343c049f148367e044006d8cd9f9f88aa708d",
          "message": "Fix check for wakatime-cli existence in Zsh functions",
          "timestamp": "2024-12-08T21:27:52+08:00",
          "tree_id": "38119e891763ba824f0fd325ce92b10ad2d68451",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/45e343c049f148367e044006d8cd9f9f88aa708d"
        },
        "date": 1733664600399,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 15.807,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 184.209,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 19.215,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.213,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 53.336,
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
          "id": "9e93af199728b7c08c7a08bda72baa59ce6cdbc2",
          "message": "Added new zstyle configurations for the ez-compinit plugin in the .zstyles file.\n  - Specified 'compstyle' as 'zshzoo'.\n  - Enabled 'use-cache' with a value of 'yes'.",
          "timestamp": "2024-12-09T05:13:00+08:00",
          "tree_id": "b0769117ddb16a8d6e3a4a087e33595e00450e6d",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/9e93af199728b7c08c7a08bda72baa59ce6cdbc2"
        },
        "date": 1733692477745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.667,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 162.297,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 15.01,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.163,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 52.584,
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
          "id": "446a0bc317c52f8d7a37a070a761522336fd52a1",
          "message": "Add ```tolkonepiu/catppuccin-powerlevel10k-themes``` themes",
          "timestamp": "2024-12-14T17:54:10+08:00",
          "tree_id": "a004b65990d6a3042c0cf73dbfef4ec925907576",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/446a0bc317c52f8d7a37a070a761522336fd52a1"
        },
        "date": 1734170128848,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.098,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 177.57,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 21.838,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.261,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 56.959,
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
          "id": "35cad7746df45d12a5c6d069c8bc995dff96f95a",
          "message": "Switch to rainbow theme",
          "timestamp": "2024-12-15T18:52:57+08:00",
          "tree_id": "79ee04372c627c717a659cf768e355be00a6a407",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/35cad7746df45d12a5c6d069c8bc995dff96f95a"
        },
        "date": 1734260060741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 14.283,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 182.745,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 28.208,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.356,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 57.872,
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
          "id": "e3c7b4ee9081991eb7a0246de4d4a59f8888149a",
          "message": "Add zdotdir function",
          "timestamp": "2024-12-15T19:06:01+08:00",
          "tree_id": "c0559b683e1c57c20bf29c49106e62ba51386b3d",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/e3c7b4ee9081991eb7a0246de4d4a59f8888149a"
        },
        "date": 1734260843599,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 15.278,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 205.486,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 23.196,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.788,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 66.323,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}