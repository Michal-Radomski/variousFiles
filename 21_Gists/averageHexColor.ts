//* Based on averageHexColor (TC-Webapp)

interface RGB {
  r: number;
  g: number;
  b: number;
}

//* Calculate average colors of routes
export const averageHexColor = (colors: string[]): string => {
  function hexToRgb(hex: string): RGB {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, "");

    // Parse the hex color
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  }

  function rgbToHex(r: number, g: number, b: number): string {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
  }

  const total: RGB = { r: 0, g: 0, b: 0 };
  const count: number = colors.length;

  for (const color of colors) {
    const { r, g, b } = hexToRgb(color);
    total.r += r;
    total.g += g;
    total.b += b;
  }

  const avgR: number = Math.round(total.r / count);
  const avgG: number = Math.round(total.g / count);
  const avgB: number = Math.round(total.b / count);

  return rgbToHex(avgR, avgG, avgB);
};

const colorsArray = [
  "#FF5733", // Vibrant Red-Orange
  "#33FF57", // Bright Green
  "#3357FF", // Deep Blue
  "#F1C40F", // Sunny Yellow
  "#8E44AD", // Rich Purple
  "#E74C3C", // Bold Red
  "#3498DB", // Sky Blue
  "#2ECC71", // Emerald Green
  "#F39C12", // Warm Orange
  "#D35400", // Dark Orange
];
const averageColor = averageHexColor(colorsArray);
console.log("averageColor:", averageColor); // '#988963'
