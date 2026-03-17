const hasValidPeselDate = (pesel: string | number): boolean => {
  pesel = String(pesel);

  // Check the length and if it is just numbers
  if (!/^\d{11}$/.test(pesel)) {
    return false;
  }

  let year: number = parseInt(pesel.substring(0, 2), 10);
  let month: number = parseInt(pesel.substring(2, 4), 10);
  let day: number = parseInt(pesel.substring(4, 6), 10);

  // Decoding the Century from the Month
  let century = 1900;
  if (month > 80 && month < 93) {
    century = 1800;
    month -= 80;
  } else if (month > 20 && month < 33) {
    century = 2000;
    month -= 20;
  } else if (month > 40 && month < 53) {
    century = 2100;
    month -= 40;
  } else if (month > 60 && month < 73) {
    century = 2200;
    month -= 60;
  }

  const fullYear: number = century + year;

  // Checking if the date is correct
  const date = new Date(fullYear, month - 1, day);
  // console.log("date:", date);
  if (date.getFullYear() !== fullYear || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return false;
  }

  // If the date is ok, return true
  return true;
};

const isValidPesel = (pesel: string | number): boolean => {
  pesel = String(pesel);

  // 1. Check the length and if it is just numbers
  if (!/^\d{11}$/.test(pesel)) {
    return false;
  }

  // 2. Weights for the first 10 digits
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(pesel[i], 10) * weights[i];
  }
  // console.log("sum:", sum)

  // 3. Calculate check digit
  const control: number = (10 - (sum % 10)) % 10;
  // console.log("control:", control)

  // 4. Compare with the last digit of the PESEL number
  const compareValue: boolean = control === parseInt(pesel[10], 10);
  if (compareValue === false) {
    return false;
  }

  // Check if date is correct
  return hasValidPeselDate(pesel);
};

// Examples of use
console.log(hasValidPeselDate("64042999928")); // true
console.log(isValidPesel("64042999928")); // true

console.log(hasValidPeselDate("97031003021")); // true
console.log(isValidPesel("97031003021")); // false

console.log(hasValidPeselDate("44444444444")); // false
console.log(isValidPesel("44444444444")); // false
