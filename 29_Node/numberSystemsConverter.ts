const convertNumberSystem = (value: string, fromBase: number, toBase: number): string => {
  // Validate the input bases
  const validBases = [2, 8, 10, 16];
  if (!validBases.includes(fromBase) || !validBases.includes(toBase)) {
    throw new Error(`Invalid base. Supported bases are: ${validBases.join(", ")}`);
  }

  // Convert the input value to decimal (base 10)
  let decimalValue: number;
  switch (fromBase) {
    case 2:
      decimalValue = parseInt(value, 2);
      break;
    case 8:
      decimalValue = parseInt(value, 8);
      break;
    case 10:
      decimalValue = parseInt(value, 10);
      break;
    case 16:
      decimalValue = parseInt(value, 16);
      break;
    default:
      throw new Error(`Unsupported base: ${fromBase}`);
  }

  // Convert the decimal value to the target base
  let result: string;
  switch (toBase) {
    case 2:
      result = decimalValue.toString(2);
      break;
    case 8:
      result = decimalValue.toString(8);
      break;
    case 10:
      result = decimalValue.toString(10);
      break;
    case 16:
      result = decimalValue.toString(16).toUpperCase(); // Uppercase for hex
      break;
    default:
      throw new Error(`Unsupported base: ${toBase}`);
  }

  return result;
};

// Example usage:
console.log('convertNumberSystem("1010", 2, 10):', convertNumberSystem("1010", 2, 10)); // Output: "10"
console.log('convertNumberSystem("10", 10, 2):', convertNumberSystem("10", 10, 2)); // Output: "1010"
console.log('convertNumberSystem("A", 16, 10):', convertNumberSystem("A", 16, 10)); // Output: "10"
console.log('convertNumberSystem("8", 10, 8):', convertNumberSystem("8", 10, 8)); // Output: "10"
console.log('convertNumberSystem("80", 16, 10):', convertNumberSystem("80", 16, 10)); // Output: "128"
console.log('convertNumberSystem("FF", 16, 10):', convertNumberSystem("FF", 16, 10)); // Output: "255"
console.log('convertNumberSystem("FF", 16, 2):', convertNumberSystem("FF", 16, 2)); // Output: "11111111"
console.log('convertNumberSystem("11111111", 2, 16):', convertNumberSystem("11111111", 2, 16)); // Output: "FF"
