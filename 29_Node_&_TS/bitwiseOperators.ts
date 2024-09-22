//* 1. Bitwise AND (&): Compares each bit of two numbers and returns a new number whose bits are set to 1 only if both corresponding bits are 1.
const a = 5; // Binary: 0101
const b = 3; // Binary: 0011
console.log(1, "a & b:", a & b); // Output: 1 (Binary: 0001)

//* 2. Bitwise OR (|): Compares each bit of two numbers and returns a new number whose bits are set to 1 if at least one of the corresponding bits is 1.
console.log(2, "a | b:", a | b); // Output: 7 (Binary: 0111)

//* 3. Bitwise XOR (^): Compares each bit of two numbers and returns a new number whose bits are set to 1 if only one of the corresponding bits is 1.
console.log(3, "a ^ b:", a ^ b); // Output: 6 (Binary: 0110)

//* 4. Bitwise NOT (~): Flips all the bits of the operand, turning 0s into 1s and vice versa.
console.log(4, "~a:", ~a); // Output: -6 (Binary: ...11111010)

//* 5. Left Shift (<<): Shifts the bits of a number to the left by a specified number of positions.
//* Each shift to the left effectively multiplies the number by 2.
console.log(5, "a << 1:", a << 1); // Output: 10 (Binary: 1010)

//* 6. Right Shift (>>): Shifts the bits of a number to the right by a specified number of positions,
//* discarding bits on the right and filling in from the left based on the sign of the number.
console.log(6, "a >> 1:", a >> 1); // Output: 2 (Binary: 0010)

//* 7 Unsigned Right Shift (>>>): Similar to right shift but fills in zeros from the left regardless of the sign
console.log(7, "-8 >>> 2:", -8 >>> 2); // Output: 1073741820 (Binary representation changes)
