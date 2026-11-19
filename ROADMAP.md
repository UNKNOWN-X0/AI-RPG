# Roadmap

Open directions for the browser RPG with Claude as dungeon master. Each item leaves this file when it ships; git keeps finished plans. Every item has an issue with its plan.

## Direction

A small, dependency-free story game: type what your character does and Claude narrates, with stats that change through tags. Keep the player's key in memory only, keep each turn affordable, and keep the code a handful of plain scripts.

## Now

**Bounded cost per turn** (stated 2026-11-19, [#1](https://github.com/UNKNOWN-X0/AI-RPG/issues/1)). Every turn resends the whole story, so cost and latency grow without limit. *Done when* request size stays bounded, stats survive trimming, and tests cover it.

## Next

**Save and resume** (stated 2026-11-19, [#2](https://github.com/UNKNOWN-X0/AI-RPG/issues/2)). A reload loses the adventure; save the story, never the key.

**Tests in CI** (stated 2026-11-19, [#3](https://github.com/UNKNOWN-X0/AI-RPG/issues/3)). The workflow builds Jekyll and never runs the tests.

## Later

**Streamed replies** (stated 2026-11-19, [#4](https://github.com/UNKNOWN-X0/AI-RPG/issues/4)). Show the narration as it arrives.

**A free provider** (stated 2026-11-19, [#5](https://github.com/UNKNOWN-X0/AI-RPG/issues/5)). Players without a paid Anthropic key can use their own free-tier key from another provider; Claude stays the default.

## Not planned

**Storing the API key.** It stays in memory and is cleared on reload.
