interface Color {
  color: string;
  count: number;
}

interface ColorCount {
  [key: string]: Color;
}

const countColorFrequencies = (colors: string[]): Color[] => {
  const colorCounts = {} as ColorCount;

  colors.forEach((color: string) => {
    if (colorCounts[color]) {
      colorCounts[color].count++;
    } else {
      colorCounts[color] = { color, count: 1 };
    }
  });
  // console.log("colorCounts:", colorCounts);

  return Object.values(colorCounts);
};

const getDominantColors = (colors: string[], n = 2): string[] => {
  const colorCounts: Color[] = countColorFrequencies(colors);
  colorCounts.sort((a: Color, b: Color) => b.count - a.count);

  return colorCounts.slice(0, n).map(({ color }) => color);
};

// Example usage
const hexColors = ["#FF0000", "#00FF00", "#0000FF", "#FF0000", "#00FF00", "#FF00FF", "#FF0000"];
const dominantColor: string[] = getDominantColors(hexColors, 1);
console.log("dominantColor:", dominantColor); //* [ '#FF0000' ]
