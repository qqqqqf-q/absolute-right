# absolute-right

[![Repository](https://img.shields.io/badge/repository-GitHub-181717?logo=github)](https://github.com/qqqqqf-q/absolute-right)
[![Language](https://img.shields.io/badge/language-Rust-000000?logo=rust)](https://www.rust-lang.org/)
[![License](https://img.shields.io/badge/license-WTFPL-brightgreen)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-local--first-blue)](https://github.com/qqqqqf-q/absolute-right)
[![Output](https://img.shields.io/badge/output-standalone%20HTML-orange)](https://github.com/qqqqqf-q/absolute-right)

`absolute-right`（对了么）is a local-first Rust toolkit for collecting coding-agent history, detecting how often assistants say variants of "you are absolutely right", and producing a compact visual analytics report.

Slogan: Ready for absolute?

This project is a fork-derived remix of [`Yeuoly/maleme`](https://github.com/Yeuoly/maleme). The original license is preserved, and the repository history keeps the upstream relationship visible.

After the npm release is published, the CLI can run without a global install:

```bash
npx absolute-right
bunx absolute-right
vpx absolute-right
```
<img width="2894" height="1610" alt="image" src="https://github.com/user-attachments/assets/319b06aa-c132-403b-8072-4c9e7bb5efb8" />


## Map

- [Quick Start](#quick-start)
- [Highlights](#highlights)
- [Overview](#overview)
- [Architecture](#architecture)
- [Supported Data Sources](#supported-data-sources)
- [Agreement Lexicon](#agreement-lexicon)
- [Report Generation](#report-generation)
- [Development](#development)
- [Install](#install)
- [npm Release Flow](#npm-release-flow)
- [Repository Metadata](#repository-metadata)
- [Star History](#star-history)
- [Scope](#scope)
- [License](#license)

The project is designed around three practical requirements:

1. Unified ingestion of locally stored conversation history from multiple coding agents.
2. Deterministic detection and aggregation of AI agreement phrases across multilingual assistant output.
3. Repeatable generation of a browser-friendly HTML report suitable for local review.

## Quick Start

Run `absolute-right` directly from the published npm package:

```bash
npx absolute-right
bunx absolute-right
vpx absolute-right
```

Or install it globally:

```bash
npm install -g absolute-right
```

## Highlights

- Local-only data processing with no mandatory hosted service dependency
- Unified adapters for Codex, Claude Code, and OpenCode
- Embedded multilingual agreement lexicon with file-based maintenance
- Single-file HTML report generation for lightweight sharing and inspection
- Token-normalized agreement metrics for cross-session comparison

## Overview

`absolute-right` reads local chat history from supported coding agents, normalizes assistant-authored text output, computes agreement frequency metrics, and renders a standalone HTML report.

The current implementation supports:

- Codex
- Claude Code
- OpenCode

The generated report includes:

- Daily "you are right" frequency over time
- A normalized agreement metric (`ARI`)
- A word cloud of the most frequently used terms

## Architecture

The repository is organized into a small set of focused modules:

- `src/agent_adapter/`
  Adapter implementations for each supported coding agent. Each adapter is responsible for:
  - local availability checks
  - user-message extraction
  - token usage extraction

- `src/fuck_detector.rs`
  Agreement lexicon loading and text matching logic. The filename is inherited from upstream and can be renamed in a later cleanup.

- `src/report.rs`
  Report data aggregation, HTML rendering, and local browser launch.

- `data/profanity_lexicon.txt`
  Editable agreement lexicon embedded into the compiled binary at build time. The filename is inherited from upstream and can be renamed in a later cleanup.

## Supported Data Sources

`absolute-right` operates against local files and databases already present on the host system. It does not require a remote service for analysis.

Current canonical sources:

- Codex:
  - `~/.codex/sessions/`
  - `~/.codex/archived_sessions/`
  - `~/.codex/state_5.sqlite`

- Claude Code:
  - `~/.claude/transcripts/`
  - `~/.claude/projects/`
  - `~/.claude/stats-cache.json`

- OpenCode:
  - `~/.local/share/opencode/opencode.db`

## Agreement Lexicon

The agreement lexicon is stored in:

- [`data/profanity_lexicon.txt`](data/profanity_lexicon.txt)

Format:

```text
term one
term two
term three
```

Rules:

- one entry per line
- line number is treated as the entry code
- modifying the text file and rebuilding the project updates the embedded lexicon

## Report Generation

Running the binary will:

1. scan supported local agent history
2. collect user-authored messages
3. calculate agreement metrics
4. generate a standalone HTML report in `~/Downloads`
5. open the report in the local default browser

## Development

Build:

```bash
cargo build
```

Run:

```bash
cargo run
```

Test:

```bash
cargo test
```

## Install

Install the published CLI from npm:

```bash
npm install -g absolute-right
```

The npm distribution follows the same general pattern used by Codex CLI:

- `absolute-right` is the lightweight wrapper package
- `absolute-right-<platform>-<arch>` packages carry the native binaries
- the wrapper selects the right binary at runtime

Current npm targets wired in this repository:

- `darwin-arm64`
- `darwin-x64`
- `linux-arm64`
- `linux-x64`
- `win32-x64`

## npm Release Flow

The repository includes a GitHub Actions workflow at `.github/workflows/publish-npm.yml`.

For the repeatable release checklist, see:

- [docs/release-sop.md](docs/release-sop.md)
- [docs/npmjs-publish-sop.md](docs/npmjs-publish-sop.md)

Release steps:

1. bump `version` in `Cargo.toml`
2. run `node scripts/npm/sync-packages.mjs`
3. commit and push
4. create and push a matching git tag like `v0.1.0`
5. let GitHub Actions publish the platform packages first, then the main `absolute-right` package

Local validation on the current machine:

```bash
node scripts/npm/sync-packages.mjs
cargo build --release
node scripts/npm/stage-binary.mjs aarch64-apple-darwin target/release/absolute-right
npm pack ./npm/platforms/darwin-arm64
npm pack ./npm/main
```

## Repository Metadata

- Source: [github.com/qqqqqf-q/absolute-right](https://github.com/qqqqqf-q/absolute-right)
- Primary language: Rust
- License: WTFPL
- Distribution model: local executable and npm-distributed native binary

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=qqqqqf-q/absolute-right&type=Date)](https://star-history.com/#qqqqqf-q/absolute-right&Date)

## Scope

This repository is intentionally local, explicit, and file-oriented. It is not intended to be a hosted analytics platform, a moderation service, or a generalized telemetry pipeline.

## License

This project is distributed under the terms of the [WTFPL](LICENSE).
