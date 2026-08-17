export type ColorMeaning = {
  hue: number;
  saturation: number;
  label: string;
  family: "emotion" | "botanical" | "nature" | "literal";
};

export type ColorReading = ColorMeaning & {
  lightness: number;
  matches: string[];
};

export const COLOR_MEANINGS: Record<string, ColorMeaning> = {
  sad: { hue: 214, saturation: 58, label: "Rain Blue", family: "emotion" },
  angry: { hue: 1, saturation: 88, label: "Fever Red", family: "emotion" },
  mad: { hue: 4, saturation: 86, label: "Hot Vermilion", family: "emotion" },
  melancholy: { hue: 224, saturation: 38, label: "Melancholy Slate", family: "emotion" },
  jealous: { hue: 114, saturation: 68, label: "Jealous Green", family: "emotion" },
  hopeful: { hue: 47, saturation: 83, label: "Hopeful Gold", family: "emotion" },
  calm: { hue: 190, saturation: 54, label: "Quiet Cyan", family: "emotion" },
  anxious: { hue: 29, saturation: 82, label: "Nervous Amber", family: "emotion" },
  love: { hue: 344, saturation: 78, label: "Tender Rouge", family: "emotion" },
  rose: { hue: 348, saturation: 76, label: "Rose Petal", family: "botanical" },
  sunflower: { hue: 48, saturation: 92, label: "Sunflower Gold", family: "botanical" },
  lavender: { hue: 268, saturation: 48, label: "Lavender Bloom", family: "botanical" },
  sage: { hue: 112, saturation: 25, label: "Garden Sage", family: "botanical" },
  monstera: { hue: 137, saturation: 66, label: "Monstera Leaf", family: "botanical" },
  ocean: { hue: 199, saturation: 78, label: "Ocean Blue", family: "nature" },
  forest: { hue: 139, saturation: 58, label: "Forest Canopy", family: "nature" },
  sunset: { hue: 18, saturation: 84, label: "Sunset Coral", family: "nature" },
};

const circularMean = (hues: number[]) => {
  const radians = hues.map(h => h * Math.PI / 180);
  const x = radians.reduce((sum, value) => sum + Math.cos(value), 0);
  const y = radians.reduce((sum, value) => sum + Math.sin(value), 0);
  return Math.round((Math.atan2(y, x) * 180 / Math.PI + 360) % 360);
};

export function interpretColor(text: string, intensity = 72): ColorReading | null {
  const tokens = text.toLowerCase().match(/[a-z-]+/g) ?? [];
  const matches = tokens.filter(token => COLOR_MEANINGS[token]);
  if (!matches.length) return null;
  const meanings = matches.map(token => COLOR_MEANINGS[token]);
  return {
    hue: circularMean(meanings.map(item => item.hue)),
    saturation: Math.round(Math.min(94, meanings.reduce((sum, item) => sum + item.saturation, 0) / meanings.length * .62 + intensity * .38)),
    lightness: Math.round(72 - intensity * .14),
    label: meanings.length === 1 ? meanings[0].label : "Complex Emotional Weather",
    family: meanings.length === 1 ? meanings[0].family : "emotion",
    matches,
  };
}

export function paletteHues(center: number): number[] {
  return [-72, -42, -20, 0, 22, 46, 78].map(offset => (center + offset + 360) % 360);
}
