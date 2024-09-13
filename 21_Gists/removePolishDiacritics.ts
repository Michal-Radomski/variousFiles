//* Remove Polish Diacritics - based on Timetable .pdf printer
const removePolishDiacritics = (str: string): string => {
  const diacriticsPolishMap = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
    Ą: "A",
    Ć: "C",
    Ę: "E",
    Ł: "L",
    Ń: "N",
    Ó: "O",
    Ś: "S",
    Ź: "Z",
    Ż: "Z",
  } as { [key: string]: string };

  const newStr: string = str
    .split("")
    .map((char: string) => diacriticsPolishMap[char as keyof { [key: string]: string }] || char)
    .join("");

  return newStr;
};

// Example usage
const originalString = "Zażółć gęślą jaźń";
const convertedString = removePolishDiacritics(originalString);
console.log("convertedString:", convertedString);
