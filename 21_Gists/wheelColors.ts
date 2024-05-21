//* Based on getTriadicColors (TC-Webapp)
//* https://en.wikipedia.org/wiki/Color_wheel

// How to use:
// Get 3 colors to red every 90deg (Square Colors)
const redHexColor = "#ff0000"; // red in hex
const threeNewColors = getWheelColors(redHexColor, 3);
console.log("threeNewColors:", threeNewColors); // threeNewColors: [ '#80ff00', '#00ffff', '#8000ff' ]

interface RGB {
  r: number;
  g: number;
  b: number;
}

function hexToRgb(hex: string): RGB {
  // console.log({ hex });
  hex = hex.replace("#", "");

  // Parse hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return { r, g, b };
}

function rgbToHex({ r, g, b }: RGB): string {
  // Convert RGB values to HEX format
  const componentToHex = (c: number) => {
    const hex = c.toString(16);
    // console.log({ c, hex });
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

// Helper function to convert HSL to RGB
function hueToRgb(hue: number): RGB {
  const c = 1;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = 0;
  let r, g, b;

  if (hue >= 0 && hue < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (hue >= 60 && hue < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (hue >= 120 && hue < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (hue >= 180 && hue < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (hue >= 240 && hue < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

// Helper function to convert RGB to HSL and extract hue
function rgbToHue({ r, g, b }: RGB): number {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let hue: number;

  if (max === min) {
    hue = 0; // achromatic (gray)
  } else {
    const delta = max - min;
    switch (max) {
      case r:
        hue = ((g - b) / delta) % 6;
        break;
      case g:
        hue = (b - r) / delta + 2;
        break;
      case b:
        hue = (r - g) / delta + 4;
        break;
      default:
      // console.log({ hue });
    }
    hue = Math.round(hue! * 60);
  }

  return hue >= 0 ? hue : hue + 360;
}

//* Get Triadic Colors
// function getTriadicColors(hexColor: string): string[] {
//   // Convert HEX color to RGB
//   const { r, g, b } = hexToRgb(hexColor);

//   // Calculate triadic colors (120 degrees apart on the color wheel)
//   const hue1 = (rgbToHue({ r, g, b }) + 120) % 360;
//   const hue2 = (rgbToHue({ r, g, b }) + 240) % 360;

//   // Convert hues back to RGB
//   const { r: r1, g: g1, b: b1 } = hueToRgb(hue1);
//   const { r: r2, g: g2, b: b2 } = hueToRgb(hue2);

//   // Convert RGB to hex format
//   const triadicColor1 = rgbToHex({ r: r1, g: g1, b: b1 });
//   const triadicColor2 = rgbToHex({ r: r2, g: g2, b: b2 });

//   return [triadicColor1, triadicColor2];
// }

//* Get Wheel Colors
function getWheelColors(hexColor: string, numberOfNewColors: number): string[] {
  // Convert HEX color to RGB
  const { r, g, b } = hexToRgb(hexColor);

  // Calculate hueArray, e.g. triadic colors (120 degrees apart on the color wheel)
  const hueArray = [] as number[];
  for (let i = 0; i < numberOfNewColors; i++) {
    const hueI = (rgbToHue({ r, g, b }) + ((i + 1) * 360) / (numberOfNewColors + 1)) % 360;
    hueArray.push(hueI);
  }

  // Convert hues back to RGB
  const rbgColorsArray: RGB[] = hueArray.map((hue: number) => hueToRgb(hue));
  // console.log("rbgColorsArray:", rbgColorsArray);

  // Convert RGB to hex format
  const hexColorsArray: string[] = rbgColorsArray.map((rbgColor: RGB) => rgbToHex(rbgColor));
  // console.log("hexColorsArray:", hexColorsArray);

  return hexColorsArray;
}
