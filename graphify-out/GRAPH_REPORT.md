# Graph Report - AI-RPG  (2026-11-19)

## Corpus Check
- 13 files · ~3,724 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 2, .css 1)

## Summary
- 92 nodes · 96 edges · 12 communities (8 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a730ff6a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- AI RPG Interface
- DOM Bindings
- API and Functionality Tests
- Jekyll CI Workflow
- adventure.js
- setup.js
- Roadmap
- Character Stats
- api.js
- Game State
- Project instructions

## God Nodes (most connected - your core abstractions)
1. `Roadmap` - 6 edges
2. `initGame()` - 5 edges
3. `AI RPG Adventure page` - 5 edges
4. `callClaudeAPI()` - 4 edges
5. `saveApiKey()` - 4 edges
6. `steps` - 4 edges
7. `setupProviderPicker()` - 3 edges
8. `showGameArea()` - 3 edges
9. `el()` - 3 edges
10. `sendPlayerAction()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `initGame()` --indirect_call--> `sendPlayerAction()`  [INFERRED]
  js/setup.js → js/adventure.js
- `Anthropic API key entry` --references--> `API key stays in memory for the page session`  [EXTRACTED]
  index.html → README.md
- `Game stats panel` --references--> `Health, attack, defense, and gold stats`  [EXTRACTED]
  index.html → README.md
- `Story response panel` --references--> `Claude as dungeon master`  [EXTRACTED]
  index.html → README.md

## Import Cycles
- None detected.

## Communities (12 total, 4 thin omitted)

### Community 0 - "AI RPG Interface"
Cohesion: 0.14
Nodes (13): AI RPG Adventure page, Anthropic API key entry, Game stats panel, Player action input, Quick action buttons, Story response panel, AI RPG Adventure README, Bracketed tags update player stats (+5 more)

### Community 1 - "DOM Bindings"
Cohesion: 0.14
Nodes (13): apiKeyInput, apiSetup, attackSpan, defenseSpan, gameArea, goldSpan, healthSpan, loading (+5 more)

### Community 2 - "API and Functionality Tests"
Cohesion: 0.16
Nodes (7): assert, el(), element(), fs, rpg(), { test }, vm

### Community 3 - "Jekyll CI Workflow"
Cohesion: 0.14
Nodes (13): runs-on, steps, jobs, build, name, branches, branches, name (+5 more)

### Community 4 - "adventure.js"
Cohesion: 0.83
Nodes (3): sendPlayerAction(), setAdventureBusy(), startAdventure()

### Community 5 - "setup.js"
Cohesion: 0.57
Nodes (6): fieldValue(), initGame(), saveApiKey(), setupProviderPicker(), showGameArea(), showProviderFields()

### Community 6 - "Roadmap"
Cohesion: 0.29
Nodes (6): Direction, Later, Next, Not planned, Now, Roadmap

### Community 9 - "api.js"
Cohesion: 0.53
Nodes (5): activeProvider(), callAnthropic(), callClaudeAPI(), callOpenAICompatible(), PROVIDERS

## Knowledge Gaps
- **5 isolated node(s):** `Player action input`, `Quick action buttons`, `Bracketed tags update player stats`, `Browser sends requests directly to Anthropic`, `Free-form player actions`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 49 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `Player action input`, `Quick action buttons`, `Bracketed tags update player stats` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `AI RPG Interface` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `DOM Bindings` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `Jekyll CI Workflow` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._