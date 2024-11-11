import { cache } from "react";

// Calculate the square of a number and cache the result
const square = cache(async (num: number): Promise<number> => {
  console.log(`Calculating the square of ${num}`);
  return num * num;
});

// Usage
export const cacheExamples = async (): Promise<void> => {
  const result1 = await square(5); // Calculates and caches
  const result2 = await square(5); // Returns cached result
  console.log({ result1 }); // Output: 25
  console.log({ result2 }); // Output: 25 (no recalculation)
};
