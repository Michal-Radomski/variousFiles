import { MathNumericType, mean, median, std } from "mathjs";

const data: number[] = [10, 20, 30, 40, 50];

// Calculate Mean
const average: number = mean(data);
console.log(`Mean: ${average}`); // Output: Mean: 30

// Calculate Median
const med: number = median(data);
console.log(`Median: ${med}`); // Output: Median: 30

// Calculate Standard Deviation
const standardDeviation: MathNumericType[] = std(data);
console.log(`Standard Deviation: ${standardDeviation}`); // Output: Standard Deviation: 15.811388300841896
