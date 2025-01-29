//* Example 1: Normalizing a String with Diacritics
const str: string = "héllò";
const strNFC: string = str.normalize("NFC");
const strNFD: string = str.normalize("NFD");
const strNFKC: string = str.normalize("NFKC");
const strNFKD: string = str.normalize("NFKD");

console.log("NFC:", strNFC); // Output: NFC: héllò
console.log("NFD:", strNFD); // Output: NFD: héllò
console.log("NFKC:", strNFKC); // Output: NFKC: héllò
console.log("NFKD:", strNFKD); // Output: NFKD: héllò

//* Example 2: Comparing Canonically Equivalent Strings
const string1 = "\u00F1"; // ñ
const string2 = "\u006E\u0303"; // ñ
console.log(`${string1}, ${string2}`);

console.log(string1.normalize("NFD") === string2.normalize("NFD")); // Output: true
console.log(string1.normalize("NFC") === string2.normalize("NFC")); // Output: true

//* Example 3: Removing Diacritics
const normalizeString = (str: string): string => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const airports = ["São Paulo", "Los Ángeles", "München"];
const filter = "sao";

const filteredOptions = airports.filter((option: string) => {
  return normalizeString(option).includes(normalizeString(filter));
});

console.log("filteredOptions:", filteredOptions); // Output: ["São Paulo"]
