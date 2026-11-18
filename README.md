# AI RPG Adventure

[![Live site](https://img.shields.io/badge/live%20site-GitHub%20Pages-2ea44f?logo=github)](https://unknown-x0.github.io/AI-RPG/)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Anthropic API](https://img.shields.io/badge/AI-Anthropic%20API-D97757)](https://docs.anthropic.com/en/api/messages)

A small browser-based fantasy RPG. Claude acts as the dungeon master: describe what your character does, read the story response, and follow your health, attack, defense, and gold as the adventure unfolds.

**[Open AI RPG Adventure →](https://unknown-x0.github.io/AI-RPG/)**

## Features

- Free-form player actions and quick-action buttons.
- A fantasy adventure guided by Claude.
- Health, attack, defense, and gold displayed as you play.
- Responses can update stats with tags such as `[HEALTH: -15]` and `[GOLD: +25]`.

## Getting started

Open the [live site](https://unknown-x0.github.io/AI-RPG/), or clone the repository and open `index.html` with a local server such as VS Code's Live Server extension. There is no build step or package installation.

Enter an Anthropic API key on the start screen to begin. The key is kept in memory for the current page session and is cleared when the page reloads. The browser sends requests directly to Anthropic; never publish your key or commit it to this repository. API usage may incur charges under your Anthropic account.

## Customize

- Change the starting player stats and inventory in `js/state.js`.
- Edit the dungeon-master instructions in `js/setup.js`.
- Adjust the Claude model and request settings in `js/api.js`.
- Add stat tags in `js/stats.js` and explain them in the prompt in `js/setup.js`.

## Tests

```sh
node --test tests/*.test.cjs
```

The tests load the scripts against a fake page and a stubbed API, and check setup, turns, stat tags, retries, and error handling without network access.

## Project structure

```text
index.html       Page structure and ordered script loading
styles.css       Layout and visual styles
js/state.js      Game state and player stats
js/dom.js        References to page elements
js/setup.js      Startup, key entry, and quick actions
js/adventure.js  Story requests, player turns, and loading state
js/api.js        Anthropic Messages API request
js/stats.js      Stat-tag parsing and display updates
js/ui.js         Story messages and page startup
tests/           Functionality tests (node --test)
```

The JavaScript files are classic scripts that share one page scope. Keep their loading order in `index.html` when adding or moving a module.
