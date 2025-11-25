window.BENCHMARK_DATA = {
  "lastUpdate": 1764080560486,
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
          "id": "937b22180c2af34c6d2d4c08430b869f1eec8108",
          "message": "Add key bindings for history substring search in zsh",
          "timestamp": "2024-12-16T23:37:33+08:00",
          "tree_id": "333b4a3368eb204bf8b521cf3dc6ad9fdfe90118",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/937b22180c2af34c6d2d4c08430b869f1eec8108"
        },
        "date": 1734363547090,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 14.162,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 185.041,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 26.625,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.347,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 64.972,
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
          "id": "9415fade9ff92ec78d94589790c6da4a00288b72",
          "message": "- Added `ohmyzsh/ohmyzsh path:plugins/kubectl` under the Aliases section in `.zsh_plugins.txt`\n- The addition of this plugin will enhance command-line productivity by providing alias features for kubectl commands.\n\nAdd kubectl aliases from ohmyzsh",
          "timestamp": "2024-12-16T23:44:52+08:00",
          "tree_id": "d4250c7369b2bb50088884bdfb5260817e30ab2e",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/9415fade9ff92ec78d94589790c6da4a00288b72"
        },
        "date": 1734364012281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 14.192,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 184.422,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 25.296,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.403,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 61.571,
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
          "id": "a885c812fbdc8cf84dbceb3459e270f267253490",
          "message": "Update zsh configuration for plugin extension and alias addition\n\n- Added the `autojump` plugin to `.zsh_plugins.txt` to enhance navigation capabilities in the shell environment by allowing quick directory jumping.\n- Introduced a new alias `pass` in `.zshrc.d/aliases.zsh`, mapped to `gopass`, which simplifies the command for accessing the password manager.",
          "timestamp": "2025-03-25T19:56:03+08:00",
          "tree_id": "cd418ea5dded70cd470238d54a8451d5d713fc16",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/a885c812fbdc8cf84dbceb3459e270f267253490"
        },
        "date": 1742903869138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.926,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 186.966,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 27.64,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.3,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 73.753,
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
          "id": "0d387596b8fecb159c537af28eb3530fbf692daf",
          "message": "Optimize plugin loading and configuration management in Zsh setup\n\n- Defer loading for various plugins in `.zsh_plugins.txt` to improve shell start-up time. Added `kind:defer` to plugins like `djui/alias-tips`, `ohmyzsh/ohmyzsh` (for `kubectl` and `autojump`), `tolkonepiu/wakatime-zsh-plugin`, `zshzoo/macos`, `zdharma-continuum/fast-syntax-highlighting`, `zsh-users/zsh-autosuggestions`, and `zsh-users/zsh-history-substring-search`.\n- Introduced `ZSH_CONFIG_DIR` in `.zshrc` to centralize configuration management, allowing for custom configuration directories that default to `$ZDOTDIR` or `$HOME` if not set.\n- Updated configuration paths to use `ZSH_CONFIG_DIR` for sourcing `.zstyles`, `.zshrc.d` files, and `.p10k.zsh`, enhancing flexibility in config file locations.\n- Modified Antidote plugin manager initialization to lazy-load based on the timestamp of `.zsh_plugins.zsh` against `.zsh_plugins.txt`. This change ensures plugins are loaded only when necessary by checking if the configuration files are newer than the script generated by Antidote, thus reducing redundant loading and improving shell start-up performance.",
          "timestamp": "2025-03-31T04:49:43+08:00",
          "tree_id": "b5689f85149717dd777b2d2c5467615ff6f8da14",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/0d387596b8fecb159c537af28eb3530fbf692daf"
        },
        "date": 1743368003810,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.669,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 97.005,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 25.972,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.157,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 41.228,
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
          "id": "a632054b75fee8cc5f25c6c412e2857112c8f751",
          "message": "Add Antidote plugin sourcing to zdotdir function in zsh config",
          "timestamp": "2025-03-31T05:08:51+08:00",
          "tree_id": "93b3595f592f12650a68c2674b8ca9c94cea6472",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/a632054b75fee8cc5f25c6c412e2857112c8f751"
        },
        "date": 1743369025562,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.818,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 99.056,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 25.405,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.151,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 40.977,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "be0b874da9b30c30aa20cc3fc77b1f93b7493c65",
          "message": "Add ANTIDOTE_* variables for Antidote",
          "timestamp": "2025-04-08T14:00:49+07:00",
          "tree_id": "7a4dcde347c9b482ca0a305efe29c06d4bafbdcf",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/be0b874da9b30c30aa20cc3fc77b1f93b7493c65"
        },
        "date": 1744095734064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.811,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 96.027,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 27.878,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.227,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 40.409,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "938e9939618c75fc0c3eae41d4d319933f4a7f53",
          "message": "Move envs from ```.zshrc``` to ```.zshenv```",
          "timestamp": "2025-04-09T13:58:36+07:00",
          "tree_id": "1e4e0fbd7935c5274a1d743c52ace1d4430f55a8",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/938e9939618c75fc0c3eae41d4d319933f4a7f53"
        },
        "date": 1744182013073,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 16.931,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 126.712,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 27.124,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 6.48,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 54.19,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "c0401c8c491f1fe6b788d83f312bd2f28f0e501e",
          "message": "Add SKIP_UPDATE parameters in zdotdir function",
          "timestamp": "2025-04-09T14:00:43+07:00",
          "tree_id": "212ccc41c9349aecf65fe573c131b94fa72d64ca",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/c0401c8c491f1fe6b788d83f312bd2f28f0e501e"
        },
        "date": 1744182134124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.649,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 93.993,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 28.436,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.206,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 40.746,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "75a035d8787e5cce84627d1dc215c3c4d0267bb4",
          "message": "Add aliases from omz plugins",
          "timestamp": "2025-04-10T14:05:09+07:00",
          "tree_id": "9736ceada87dd75ddd2c96a5efdf9ef380447361",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/75a035d8787e5cce84627d1dc215c3c4d0267bb4"
        },
        "date": 1744268796851,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.412,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 72.671,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 27.488,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.081,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 21.74,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "b68298eb49db92b967244bc5fe0824762eec3d39",
          "message": "Disable defer loading for git, kubectl and brew",
          "timestamp": "2025-04-10T14:12:20+07:00",
          "tree_id": "f276e8a48814a54ebf77d9bb1685bc8e0d1418c2",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/b68298eb49db92b967244bc5fe0824762eec3d39"
        },
        "date": 1744269233449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.46,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 85.492,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 29.572,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.36,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 32.579,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "76055feebad6a184f72f192fa0f8ba75fe946074",
          "message": "Fix antidote lazy loading in Nix enviroment",
          "timestamp": "2025-04-10T15:12:07+07:00",
          "tree_id": "af24574a60ee7141e5073bd76adb7f30167669b2",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/76055feebad6a184f72f192fa0f8ba75fe946074"
        },
        "date": 1744272842653,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 15.232,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 359.516,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 26.103,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.258,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 360.199,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "f17d83ca9164d1f17589c57c8c35e0e704acef39",
          "message": "Fix ANTIDOTE_BUNDLE_CACHE env",
          "timestamp": "2025-04-10T15:16:14+07:00",
          "tree_id": "e4f89598fb9c778278c1e75f0e7546007eaedf38",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/f17d83ca9164d1f17589c57c8c35e0e704acef39"
        },
        "date": 1744273066211,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 16.08,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 439.4,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 29.438,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.712,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 435.278,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "a67aaa9b27e74281d35c70630f9e62599cfc4c1c",
          "message": "Change antidote bundle cache file location",
          "timestamp": "2025-04-10T15:21:47+07:00",
          "tree_id": "66cf161e97e25c32251050493cfc17f20778124f",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/a67aaa9b27e74281d35c70630f9e62599cfc4c1c"
        },
        "date": 1744273411909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 14.16,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 382.689,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 30.697,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.565,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 361.623,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "58da442844edf0b313c02baa4b12b7ba85b9d39a",
          "message": "Doc spell fixes",
          "timestamp": "2025-04-10T15:41:02+07:00",
          "tree_id": "472bccd31b96dcd1ec9c5b77e5894a5d53ba3832",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/58da442844edf0b313c02baa4b12b7ba85b9d39a"
        },
        "date": 1744274785885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 14.524,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 399.762,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 29.052,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.675,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 415.84,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "38e34cdf7161a60e8b48752eb0656a54c4206c00",
          "message": "Add omz aliases plugin",
          "timestamp": "2025-04-10T15:56:04+07:00",
          "tree_id": "d033c3ec84ff2ed1a373774c1bf6eeb847501946",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/38e34cdf7161a60e8b48752eb0656a54c4206c00"
        },
        "date": 1744275453077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 15.554,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 384.892,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 26.829,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.707,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 405.142,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "6a3d3ca452ebabf6c13357cec16e02bb40e6ad10",
          "message": "Revert antidote loading logic",
          "timestamp": "2025-04-10T21:33:52+07:00",
          "tree_id": "8233fb32ec5b1d985cf03f6555a554a73d128765",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/6a3d3ca452ebabf6c13357cec16e02bb40e6ad10"
        },
        "date": 1744295715174,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.638,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 84.869,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 27.72,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.279,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 32.916,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "4334ee1f25f1fff8487051699bcccc1216c6e273",
          "message": "Switch to zstyle theme configuration",
          "timestamp": "2025-05-06T10:13:01+08:00",
          "tree_id": "03c383399f230983a29a04934072366848b35e43",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/4334ee1f25f1fff8487051699bcccc1216c6e273"
        },
        "date": 1746497681152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.042,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 83.572,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 22.372,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.18,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 31.967,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "465718807a09dfe83593d023dc4dd2728ce60dee",
          "message": "Add conditional cd alias for zoxide and zoxide zsh integration",
          "timestamp": "2025-06-11T16:26:42+08:00",
          "tree_id": "e390411d89f00a31c4283e693ed8c83f300a27fd",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/465718807a09dfe83593d023dc4dd2728ce60dee"
        },
        "date": 1749630557295,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.055,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 83.682,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 17.994,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.349,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 37.115,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "96d186f64bd18f2b9da08d058558169227e6e671",
          "message": "Improve find aliases with fd utility integration",
          "timestamp": "2025-06-11T16:37:12+08:00",
          "tree_id": "d9f2b3cad746647edad421de8fb5d91836b008dd",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/96d186f64bd18f2b9da08d058558169227e6e671"
        },
        "date": 1749631102868,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.687,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 88.243,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 19.28,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.452,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 33.99,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "8d719128fe2fd1ab746d235208f8e846c535374e",
          "message": "Fix condition for fd",
          "timestamp": "2025-06-11T16:44:32+08:00",
          "tree_id": "107aa9c68a29b9ef5c67eec498ee18b8080dc9fd",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/8d719128fe2fd1ab746d235208f8e846c535374e"
        },
        "date": 1749631552029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.083,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 86.485,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 23.039,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.298,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 35.746,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "5d9cea98f8d85dbb1f4f3a159902bc9e3e3adaf9",
          "message": "Fix naming for tools",
          "timestamp": "2025-06-11T19:16:31+08:00",
          "tree_id": "71b70aa022a75343ea7afc4fd0d38de9ddd280cf",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/5d9cea98f8d85dbb1f4f3a159902bc9e3e3adaf9"
        },
        "date": 1749640665537,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.392,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 79.295,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 22.8,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.462,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 37.362,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "b60de80d59e2f95dd07ba6c624125e1a80d2700f",
          "message": "Add bat alias",
          "timestamp": "2025-06-11T21:10:23+08:00",
          "tree_id": "55998c061230d84e2b3f306bdebe528f55e5153f",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/b60de80d59e2f95dd07ba6c624125e1a80d2700f"
        },
        "date": 1749647499088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.852,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 97.959,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 18.339,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.447,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 34.598,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "b285e2d9eb5b38b90c57a3e2bb5a8060ce9030a5",
          "message": "Remove autojump integration, add aliases for eza",
          "timestamp": "2025-06-12T21:23:52+08:00",
          "tree_id": "446c34099b5c001a28304d4d4ce519a380f893a3",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/b285e2d9eb5b38b90c57a3e2bb5a8060ce9030a5"
        },
        "date": 1749734739554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 14.45,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 99.774,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 17.051,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 6.343,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 42.48,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "167ca95e1d2821f27c6b428f88943bd4291bbf31",
          "message": "Use ZOXIDE_CMD_OVERRIDE instead of alias",
          "timestamp": "2025-06-13T00:04:52+08:00",
          "tree_id": "6ce4f232aaf05b17d2e8c951f2c49547be2e4f35",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/167ca95e1d2821f27c6b428f88943bd4291bbf31"
        },
        "date": 1749744371945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.495,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 82.893,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 16.226,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.486,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 35.666,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "f8ac38d79fa5572a949c34dd36e7f6d49a6c24c8",
          "message": "Switch to zsh-users/zsh-syntax-highlighting",
          "timestamp": "2025-07-28T01:26:38+08:00",
          "tree_id": "a749ea56df634121dfa61fc357007f86a88d9f60",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/f8ac38d79fa5572a949c34dd36e7f6d49a6c24c8"
        },
        "date": 1753637285321,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.782,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 84.088,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 15.16,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 12.314,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 33.284,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "324fbd4da04e4ab9fc9aec81b784d0db470779d8",
          "message": "And return back to zdharma-continuum/fast-syntax-highlighting",
          "timestamp": "2025-07-28T01:32:34+08:00",
          "tree_id": "6ce4f232aaf05b17d2e8c951f2c49547be2e4f35",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/324fbd4da04e4ab9fc9aec81b784d0db470779d8"
        },
        "date": 1753637630117,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.801,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 81.095,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 22.468,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.146,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 32.909,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "8e1584c53d50df6c9125ac28fe1a3afa12f1f883",
          "message": "Add vscode-shell-integration zsh plugin",
          "timestamp": "2025-08-02T01:36:51+08:00",
          "tree_id": "7f15f5bfe0ccee783e54529c75f719e289e93d43",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/8e1584c53d50df6c9125ac28fe1a3afa12f1f883"
        },
        "date": 1754069913995,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.048,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 80.168,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 17.602,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.196,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 35.37,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "43a880b86d9e79727df0827be91e12701e6eabe3",
          "message": "Add tailscale ohmyzsh plugin",
          "timestamp": "2025-08-05T20:53:22+08:00",
          "tree_id": "141a812e0d044debb4b8b65712bbb85a2329b638",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/43a880b86d9e79727df0827be91e12701e6eabe3"
        },
        "date": 1754398484244,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.378,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 78.92,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 21.213,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.047,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 32.66,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "c1634f1cb781c154159bc862a5416eecdc23e292",
          "message": "Define ZSH_CACHE_DIR for caching completions and compatibility with oh-my-zsh plugins",
          "timestamp": "2025-08-05T21:19:16+08:00",
          "tree_id": "153cffaa980cf998a134ba9402229e0bc6d51092",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/c1634f1cb781c154159bc862a5416eecdc23e292"
        },
        "date": 1754400089874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.282,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 78.554,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 21.88,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.4,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 32.905,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "6d24eb7c5483a369f299751daf4ab458e92035e3",
          "message": "Revert \"Add tailscale ohmyzsh plugin\"\n\nThis reverts commit 43a880b86d9e79727df0827be91e12701e6eabe3.",
          "timestamp": "2025-08-05T21:44:37+08:00",
          "tree_id": "7f15f5bfe0ccee783e54529c75f719e289e93d43",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/6d24eb7c5483a369f299751daf4ab458e92035e3"
        },
        "date": 1754401540861,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.564,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 77.961,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 15.445,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.566,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 32.915,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "472af88d238cbee3ae6787bfa3675f7af4b4f9bb",
          "message": "Switch from `command -v` to `$+commands`, remove `not-warp` condition, add `zoxide` initialization",
          "timestamp": "2025-08-05T22:10:41+08:00",
          "tree_id": "97585038df5a1a7bf1cac88c8f19a5e218e24be9",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/472af88d238cbee3ae6787bfa3675f7af4b4f9bb"
        },
        "date": 1754403197338,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.762,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 83.148,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 6.779,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 4.129,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 33.494,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "3544a1fd2fbedefb56c9b4b20d52399987a841fa",
          "message": "Remove dots",
          "timestamp": "2025-08-05T22:14:01+08:00",
          "tree_id": "6cdbe43cb4326db61bee7e24888d128ca38cf508",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/3544a1fd2fbedefb56c9b4b20d52399987a841fa"
        },
        "date": 1754403413737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.061,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 75.245,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 18.657,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 4.956,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 32.797,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "43d3954dfde938399a83f0149d3aa7e12d87dc5b",
          "message": "feat: improve zsh configuration structure and aliases\n\n- Reorganize .zsh_plugins.txt with better categorization and comments\n- Add keybindings and history plugins from belak/zsh-utils\n- Add getantidote/use-omz for OMZ compatibility\n- Add tailscale plugin and improve defer loading\n- Fix aliases.zsh with consistent ldot alias for both eza/ls\n- Switch history-substring-search to vi-mode bindings (j/k)\n- Improve overall performance with proper defer attributes",
          "timestamp": "2025-08-06T01:13:30+08:00",
          "tree_id": "f8d88f0d964e6a9d57e1a7d6fb3353a43a1f00a3",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/43d3954dfde938399a83f0149d3aa7e12d87dc5b"
        },
        "date": 1754414154687,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 15.35,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 563.617,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 63.024,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.92,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 92.084,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "e89eff1bf67d7382fc53166d7c48fb7c40f33124",
          "message": "Remove belak/zsh-utils keybindings and history plugins",
          "timestamp": "2025-08-06T02:45:31+08:00",
          "tree_id": "0981672309ae2638c0af8e2dace03e34d98def6b",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/e89eff1bf67d7382fc53166d7c48fb7c40f33124"
        },
        "date": 1754419615827,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.802,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 467.299,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 47.325,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.328,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 71.98,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "57386c96adc13b70058ec19ff8211d4cddabfb01",
          "message": "Remove tailscale plugin",
          "timestamp": "2025-08-06T02:48:50+08:00",
          "tree_id": "99221e47417bd77486772dd78c9722dd55247c63",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/57386c96adc13b70058ec19ff8211d4cddabfb01"
        },
        "date": 1754419833683,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.73,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 471.137,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 56.129,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.502,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 73.35,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "02719d354c45aad2567e49e94ec8ae9f4fc417b4",
          "message": "Remove useomz plugin",
          "timestamp": "2025-08-06T02:51:25+08:00",
          "tree_id": "9399ecc12f7173ce7ebeca68a844fa032e1855bf",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/02719d354c45aad2567e49e94ec8ae9f4fc417b4"
        },
        "date": 1754419954473,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.8,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 72.605,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 20.602,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 6.271,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 26.553,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "ffdea9f594f60431c4195a0b5feba090ec138e3c",
          "message": "Revert \"feat: improve zsh configuration structure and aliases\"\n\nThis reverts commit 43d3954dfde938399a83f0149d3aa7e12d87dc5b.",
          "timestamp": "2025-08-06T03:07:30+08:00",
          "tree_id": "6cdbe43cb4326db61bee7e24888d128ca38cf508",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/ffdea9f594f60431c4195a0b5feba090ec138e3c"
        },
        "date": 1754420950078,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 15.405,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 103.484,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 16.755,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 6.084,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 42.455,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "915985b8ec65ac8ea6df3dedc9ee00961da5cbfd",
          "message": "Optimize plugin loading and improve aliases",
          "timestamp": "2025-08-06T03:17:17+08:00",
          "tree_id": "029c1c4177bca54968e1997ee010847465492884",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/915985b8ec65ac8ea6df3dedc9ee00961da5cbfd"
        },
        "date": 1754421511100,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 13.31,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 70.457,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 21.38,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.286,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 23.347,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "12aa47b5fb3e60d46b1df2dac2f3532b4665c20b",
          "message": "feat: disable paging for bat alias to preserve the default behavior",
          "timestamp": "2025-08-06T14:39:18+08:00",
          "tree_id": "228233b4c44cd3ee3e042e29dd498926ed06f766",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/12aa47b5fb3e60d46b1df2dac2f3532b4665c20b"
        },
        "date": 1754462431451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 15.711,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 90.623,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 17.79,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.611,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 28.548,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "2c3af0cd56bd59d0b4118430b40f018d34c46e9a",
          "message": "chore: tweak Renovate config, CI linters, and zsh setup\n\n- Renovate: add helpers:pinGitHubActionDigests and remove customManagers\n- CI: switch reviewdog actions to fail_level=error and drop shfmt job\n- zsh: refine .zshrc comment, expand aliases, improve history-substring-search keybindings",
          "timestamp": "2025-08-09T12:56:08+08:00",
          "tree_id": "a39cbf6944502e7b50e8bcd8e09c469a81e5400e",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/2c3af0cd56bd59d0b4118430b40f018d34c46e9a"
        },
        "date": 1754715450933,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.981,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 72.011,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 15.71,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.038,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 23.861,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "9a4955bb76107562e90f34391caaf5530c37468a",
          "message": "fix(zsh): use  in bindkey loop to avoid 'no such keymap ''",
          "timestamp": "2025-08-09T13:35:33+08:00",
          "tree_id": "8251b15a5bbfe6bdbd20e910d68b53eef2aa1b02",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/9a4955bb76107562e90f34391caaf5530c37468a"
        },
        "date": 1754717799490,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.729,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 69.634,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 15.495,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.27,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 22.632,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "47f6fd113395dee8e6bed11e17eed1551673516e",
          "message": "Add Zsh history configuration\n\nIntroduce a dedicated Zsh history config that: enables extended_history, suppresses duplicates, trims blanks, appends history incrementally, and disables share_history/beeps. Also sets HISTFILE, HISTSIZE, and SAVEHIST to manage history storage.",
          "timestamp": "2025-08-09T13:44:51+08:00",
          "tree_id": "338fdd57a0593e33f2f4c78142e386b6abbf9d42",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/47f6fd113395dee8e6bed11e17eed1551673516e"
        },
        "date": 1754718366286,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.804,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 66.939,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 15.802,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.341,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 23.967,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "fdf485d5c7639e714da335c80a608bad32a1d4dd",
          "message": "Add LICENSE, add description",
          "timestamp": "2025-08-10T14:26:17+08:00",
          "tree_id": "50166c9655957415ca01a94a6176f3a0147741a2",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/fdf485d5c7639e714da335c80a608bad32a1d4dd"
        },
        "date": 1754807269969,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.088,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 65.294,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 15.364,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.045,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 22.522,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "0671ad4e9e74ed44e97ccddcc3be255a13b9149a",
          "message": "Move README to base path",
          "timestamp": "2025-08-10T14:27:49+08:00",
          "tree_id": "9a58440e8d2cbf9032e5fe1da79217ab3ab497af",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/0671ad4e9e74ed44e97ccddcc3be255a13b9149a"
        },
        "date": 1754807341754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.901,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 69.352,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 21.689,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 4.98,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 22.542,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "f61148e5c95d190c82f014c7bddc03940c08d6b5",
          "message": "Add metrics badges",
          "timestamp": "2025-08-10T15:29:15+08:00",
          "tree_id": "85b50da37fc7c795ccf54197f2c48360966fec9d",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/f61148e5c95d190c82f014c7bddc03940c08d6b5"
        },
        "date": 1754811025210,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.629,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 69.169,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 22.028,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.033,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 22.73,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "d845c26caa4bf07de553ba4be268e1f174dae903",
          "message": "Update README",
          "timestamp": "2025-08-10T16:00:47+08:00",
          "tree_id": "dc94056439b4c3e78a509b017c66d1f90b2675df",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/d845c26caa4bf07de553ba4be268e1f174dae903"
        },
        "date": 1754812916564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 12.455,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 67.72,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 20.545,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.17,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 22.717,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "fcbae44b3d7ed695903cfd88f6f6cd1557b5171c",
          "message": "Add editor plugin from `mattmc3/zsh_custom`",
          "timestamp": "2025-08-15T12:35:57+08:00",
          "tree_id": "2e8243c61397bc178b5dfca3a3563f35f56a6f3b",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/fcbae44b3d7ed695903cfd88f6f6cd1557b5171c"
        },
        "date": 1755232634151,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 17.466,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 94.556,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 43.724,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 6.103,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 37.322,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "1552e01be4e2eddf947f31c8eb5ab005b52bf56a",
          "message": "Revert \"Add editor plugin from `mattmc3/zsh_custom`\"\n\nThis reverts commit fcbae44b3d7ed695903cfd88f6f6cd1557b5171c.",
          "timestamp": "2025-08-15T12:42:17+08:00",
          "tree_id": "a7f06b280312117a133cf8f29e7bd0b2807f3b63",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/1552e01be4e2eddf947f31c8eb5ab005b52bf56a"
        },
        "date": 1755233008894,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 19.226,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 101.225,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 21.424,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 6.793,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 34.47,
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
          "id": "92ee0187dfc9b760032c2720385da1fe54ea4835",
          "message": "feat: add belak/zsh-utils editor plugin (#11)",
          "timestamp": "2025-08-15T13:12:36+08:00",
          "tree_id": "4fa554979bc4bb4202ce241736921ddbcb1160f2",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/92ee0187dfc9b760032c2720385da1fe54ea4835"
        },
        "date": 1755234826665,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 18.528,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 94.464,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 33.625,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.885,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 33.537,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "bede29c8cd8ce6f73b1dd8bac26c571113b173df",
          "message": "Return dir initialization in .zshenv",
          "timestamp": "2025-08-24T00:27:18+08:00",
          "tree_id": "3f3bff2c31e9a84e84e385e24d577b20c94eed8d",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/bede29c8cd8ce6f73b1dd8bac26c571113b173df"
        },
        "date": 1755966506198,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 16.48,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 86.629,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 25.381,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.814,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 29.05,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "008aaf8fb54e655bab97849d482f37d0071efb36",
          "message": "Fix with ZDOTDIR env",
          "timestamp": "2025-08-25T21:22:33+08:00",
          "tree_id": "92fb56fdeb60e627213239862a44ab5db0cb646a",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/008aaf8fb54e655bab97849d482f37d0071efb36"
        },
        "date": 1756128254721,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 20.061,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 103.481,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 26.126,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 6.49,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 37.529,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "60b41b2c13a1cf020faccc4fce9e45ab6396cc36",
          "message": "Enable log for `antidote update`",
          "timestamp": "2025-08-25T21:24:42+08:00",
          "tree_id": "4fc016ec918ae74c4a2a86fe821e55ebef8b351c",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/60b41b2c13a1cf020faccc4fce9e45ab6396cc36"
        },
        "date": 1756128369892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 16.272,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 83.769,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 30.012,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.257,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 28.125,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "karleowne@gmail.com",
            "name": "Anatolii Karlov",
            "username": "karle0wne"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77679d545a3cd64d596b6a0d21ab8554b2f52204",
          "message": "fix HISTFILE (#15)\n\n* fix HISTFILE, add installer\n\n* Updated the python alias\n\n* configures Antidote to cache clones\n\n* add bash <(curl\n\n* brew formulas pre install\n\n* Revert \"brew formulas pre install\"\n\nThis reverts commit 7abca7101b85df6f906a68778dc67771b8a85a08.\n\n* Revert \"add bash <(curl\"\n\nThis reverts commit a24fc51904e0c5ad206ee10b4119c4365f8af782.\n\n* Revert \"configures Antidote to cache clones\"\n\nThis reverts commit b66cd62ccb9574f6c2f18b376d40c590ffdeaed1.\n\n* Revert \"Updated the python alias\"\n\nThis reverts commit ea7160be9a5cbc353cbfa3e96e195cd0384ff0ba.\n\n* Revert \"fix HISTFILE, add installer\"\n\nThis reverts commit efc67bd6c47a0c44eeda96b1e5cf26f9051bfff7.\n\n* HISTFILE fix",
          "timestamp": "2025-11-07T19:25:23+08:00",
          "tree_id": "38d43f6a960b669ad8a4b4f85e0d7eb7386e20ad",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/77679d545a3cd64d596b6a0d21ab8554b2f52204"
        },
        "date": 1762514792490,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 18.873,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 101.352,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 31.293,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 6.506,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 34.189,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "e3c73814b8b2d099179234bfd88966081f40bc9c",
          "message": "feat: set Powerlevel10k instant prompt to quiet outside HOME directory",
          "timestamp": "2025-11-25T21:54:07+08:00",
          "tree_id": "4f944888590f7b80cb87471114acb78a5047f3a1",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/e3c73814b8b2d099179234bfd88966081f40bc9c"
        },
        "date": 1764078911819,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 18.738,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 92.541,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 33.107,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 5.689,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 32.932,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "committer": {
            "email": "me@popov.wtf",
            "name": "Pavel Popov",
            "username": "tolkonepiu"
          },
          "distinct": true,
          "id": "dcc34ff226469f513a173b9ffa966eb7078a4898",
          "message": "feat: initialize direnv before Powerlevel10k instant prompt",
          "timestamp": "2025-11-25T22:21:22+08:00",
          "tree_id": "8274591f681608a540baf3c8378ccb5fda8cce19",
          "url": "https://github.com/tolkonepiu/zdotdir/commit/dcc34ff226469f513a173b9ffa966eb7078a4898"
        },
        "date": 1764080558608,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "first_prompt_lag_ms",
            "value": 21.337,
            "unit": "ms"
          },
          {
            "name": "first_command_lag_ms",
            "value": 102.999,
            "unit": "ms"
          },
          {
            "name": "command_lag_ms",
            "value": 30.103,
            "unit": "ms"
          },
          {
            "name": "input_lag_ms",
            "value": 6.361,
            "unit": "ms"
          },
          {
            "name": "exit_time_ms",
            "value": 37.182,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}