# Mood to Color Machine

An emotional spectrum instrument that translates feelings, plants, natural subjects, and literal color words into animated seven-color palettes.

## The laboratory

- **JavaScript** runs the live semantic interpreter, interaction, animation, and clipboard tools.
- **TypeScript** defines the typed color model, circular hue blending, and palette generation source in `src/color-engine.ts`.
- **CSS** powers the atmospheric interface; reusable design-system tokens live in `styles/color-tokens.css`.
- **Java** audits generated hex palettes for WCAG contrast pairings with `tools/PaletteAudit.java`.
- **R** analyzes semantic hue spacing and produces an emotion-color audit dataset with `analysis/mood_color_analysis.R`.
- **HTML** provides the accessible, dependency-free GitHub Pages shell.

The repository includes the R-produced semantic-spacing dataset at
`analysis/emotion_color_audit.csv` and the Java-produced WCAG report at
`reports/palette-accessibility.txt`. The live header carries a quiet stack
signature so the multi-language architecture is visible without changing the
composition of the experience.

## Run the research tools

```bash
npm install
npm run typecheck
npm run audit:java
npm run analyze:r
```

The live experience is deployed automatically from `main` through GitHub Pages.
