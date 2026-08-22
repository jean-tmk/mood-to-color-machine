# Mood to Color Machine

> An emotional spectrum instrument that turns language into a living seven-color atmosphere.

**Live exhibit:** https://jean-tmk.github.io/mood-to-color-machine/

## What it is

This project treats color as an interface for naming feelings. It is useful as a tiny reflective tool, but it is also deliberately playful: the “correct” color for a mood is less important than seeing language become motion, temperature, contrast, and light.

## What a visitor can do

1. Type a feeling, plant, place, natural subject, or literal color word.
2. Adjust intensity to change saturation and contrast.
3. Read the interpretation and seven-color palette.
4. Copy colors or try another phrase and watch the atmosphere transition.

## How it works

- The browser interpreter tokenizes the phrase, scores known semantic color associations, and blends hue angles with a circular mean.
- The palette engine builds seven related hues around the semantic center instead of choosing unrelated swatches.
- Independent Java and R tools audit contrast and semantic spacing so the visual output can be studied outside the browser.

## Repository map

| Path | What it does |
|---|---|
| `.github/workflows/pages.yml` | GitHub Actions workflow that validates, builds, and/or deploys the exhibit. |
| `analysis/emotion_color_audit.csv` | Structured data or generated report consumed by the project or its audits. |
| `analysis/mood_color_analysis.R` | Project configuration or supporting source used by the build/deployment. |
| `index.html` | The deployable HTML shell: metadata, accessible structure, controls, and script/style entry points. |
| `package.json` | Dependency versions and local development/build scripts. |
| `reports/palette-accessibility.txt` | Structured data or generated report consumed by the project or its audits. |
| `src/color-engine.ts` | Browser/application source for the behavior named by this file. |
| `styles/color-tokens.css` | A focused style layer for this named area of the experience. |
| `tools/PaletteAudit.java` | Domain, engine, tooling, or specification source in the repository’s polyglot architecture. |
| `tsconfig.json` | Strict TypeScript compiler settings. |

## Languages and why they are here

Percentages below are calculated from the byte counts currently returned by GitHub Linguist. Tiny language-atlas modules are intentionally isolated from the production frontend.

| Language | GitHub | Role |
|---|---:|---|
| HTML | 75.6% | the dependency-free live shell and inline interaction layer |
| TypeScript | 11.9% | the typed semantic color engine and palette math |
| Java | 6.6% | WCAG contrast auditing |
| R | 4.1% | semantic-spacing analysis and research output |
| CSS | 1.8% | shared color tokens and atmospheric styling |

### About the language atlas

Where present, `polyglot/language-atlas.json` is the machine-readable index of the languages assigned to this repository. `polyglot/languages/` contains one small, independent signature module per assignment, and `polyglot/majority/` contains the larger registry that preserves the intended majority language. These files are documentation and comparative code specimens: the live site does not download or execute them.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:8000` unless the framework development server prints a different local address.

## Privacy and access

- No sign-in is required.
- No API key is required for the live exhibit.
- No visitor text is sent to an AI service.
- Any saved progress stays in local browser storage unless the README explicitly describes an optional external architecture.
- Sound begins only after a user gesture where browser autoplay rules require it.

## Deployment

The public version is a static GitHub Pages deployment. The workflow in `.github/workflows/` is the source of truth for its exact build and publish steps. The favicon is stored with the deployed app so browser tabs and bookmarks use the project’s own mark.
