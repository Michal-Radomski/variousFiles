//! Node v16!

import { GPU, IKernelRunShortcut } from "gpu.js";
import { getGPUTier, TierResult } from "detect-gpu";

//^ GPU Calculations
const gpu: GPU = new GPU();
// console.log("gpu:", gpu);

//* Example 1
// Create a GPU-accelerated kernel function for matrix addition
const addMatrices: IKernelRunShortcut = gpu
  .createKernel(function (a: number[][], b: number[][]) {
    return a[this.thread.y][this.thread.x] + b[this.thread.y][this.thread.x];
  })
  .setOutput([512, 512]); // Output matrix size

// Initialize two matrices with some values
const matrixA = Array.from({ length: 512 }, () => Array(512).fill(1)) as number[][];
const matrixB = Array.from({ length: 512 }, () => Array(512).fill(2)) as number[][];
// console.log("matrixA:", matrixA);
// console.log("matrixB:", matrixB);

// Perform matrix addition using the GPU
const result = addMatrices(matrixA, matrixB) as number[][];
console.log("result:", result);

//* Example 2
const multiplyMatrix = gpu
  .createKernel(function (a: number[][], b: number[][]) {
    let sum = 0;
    for (let i = 0; i < 512; i++) {
      sum += a[this.thread.y][i] * b[i][this.thread.x];
    }
    return sum;
  })
  .setOutput([512, 512]);

const c = multiplyMatrix(matrixA, matrixB) as number[][];
console.log("c:", c);

//* Example 3
const dotProduct: IKernelRunShortcut = gpu
  .createKernel(function (a: number[], b: number[]) {
    return a[this.thread.x] * b[this.thread.x];
  })
  .setOutput([1000000]); // Size of output

const vectorA = new Array(1000000).fill(1) as number[];
const vectorB = new Array(1000000).fill(2) as number[];

// Perform dot product on the GPU
const result2 = dotProduct(vectorA, vectorB) as number[];
console.log("result2:", result2);
const sum = result2.reduce((acc, val) => acc + val, 0); // Sum the results on CPU
console.log("sum:", sum);

//^ CPU Calculations
function cpuDotProduct(a: number[], b: number[]): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

const vectorC = new Array(1000000).fill(1) as number[];
const vectorD = new Array(1000000).fill(2) as number[];

// Perform dot product on the CPU
const cpuResult: number = cpuDotProduct(vectorC, vectorD);
console.log("cpuResult:", cpuResult);

//* ----
(async () => {
  const gpuTier: TierResult = await getGPUTier();
  console.log("gpuTier:", gpuTier);
})();
