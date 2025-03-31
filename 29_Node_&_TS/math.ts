export {};
//^ JS Math object exercises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

//* 01. Math.hypot(a, b)
// Returns the square root of the sum of the squares of its arguments (√(a² + b²)). This is useful for calculating the length of the hypotenuse of a right triangle.
const length = Math.hypot(3, 4); // Returns 5
console.log({ length });

//* 02. Math.pow(x, y)
// Returns the value of x to the power of y.
const result = Math.pow(2, 3); // Returns 8
console.log({ result });

//* 03. Math.abs(x)
// Returns the absolute value of x.
const absolute = Math.abs(-5); // Returns 5
console.log({ absolute });

//* 04. Math.sin(x), Math.cos(x), Math.tan(x)
// These methods return the sine, cosine, and tangent of an angle in radians.
const sine = Math.sin(Math.PI / 2); // Returns 1
const cosine = Math.cos(Math.PI); // Returns -1
const tangent = Math.tan(Math.PI / 4); // Returns 1
console.log({ sine, cosine, tangent });

//* 05. Math.min() and Math.max()
// Return the smallest or largest of zero or more numbers.
const minVal = Math.min(10, 20, 30); // Returns 10
const maxVal = Math.max(10, 20, 30); // Returns 30
console.log({ minVal, maxVal });

//* 06. Math.random()
// Returns a random number between 0 (inclusive) and 1 (exclusive).
const randomNum = Math.random(); // Returns a random number between 0 and 1
console.log({ randomNum });

//* 07. Math.round(x), Math.ceil(x), Math.floor(x)
// Round x to the nearest integer, round up to the nearest integer, or round down to the nearest integer, respectively
const rounded = Math.round(4.7); // Returns 5
const ceilVal = Math.ceil(4.2); // Returns 5
const floorVal = Math.floor(4.7); // Returns 4
console.log({ rounded, ceilVal, floorVal });

//* 08. Constants
// Math.PI: The ratio of a circle's circumference to its diameter (approximately 3.14159).
// Math.E: Euler's number (approximately 2.71828).
const circumference = Math.PI * 10; // Calculates the circumference of a circle with radius 10
const exponential = Math.E ** 2; // Raises Euler's number to the power of 2
console.log({ circumference, exponential });
console.log("Math.PI, Math.E:", Math.PI, Math.E);
