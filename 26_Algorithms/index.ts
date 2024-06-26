//* 01. Add two periods of time
interface TimePeriod {
  hours: number;
  minutes: number;
}

// Function to parse a time period string like "2h 44min"
function parseTimePeriod(time: string): TimePeriod {
  const timeRegex = /(\d+)h\s*(\d+)min/;
  const match = time.match(timeRegex);

  if (!match) {
    throw new Error("Invalid time format");
  }

  return {
    hours: parseInt(match[1], 10),
    minutes: parseInt(match[2], 10),
  };
}

// Function to add two time periods
function addTimePeriods(time1: string, time2: string): TimePeriod {
  const period1 = parseTimePeriod(time1);
  const period2 = parseTimePeriod(time2);

  // Convert both time periods to minutes
  const totalMinutes = period1.hours * 60 + period1.minutes + (period2.hours * 60 + period2.minutes);

  // Convert total minutes back to hours and minutes
  const resultHours = Math.floor(totalMinutes / 60);
  const resultMinutes = totalMinutes % 60;

  return {
    hours: resultHours,
    minutes: resultMinutes,
  };
}

// Example usage
const time1 = "2h 44min";
const time2 = "1h 30min";

const result = addTimePeriods(time1, time2);
console.log(`Total Time: ${result.hours}h ${result.minutes}min`); // Output: Total Time: 4h 14min

//* 02. Check if all internal arrays in an array of arrays are equal
const arraysAreEqual = (arr1: string[], arr2: string[]): boolean => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const allArraysAreEqual = (arrayOfArrays: string[][]): boolean => {
  if (arrayOfArrays.length < 2) return true;
  for (let i = 1; i < arrayOfArrays.length; i++) {
    if (!arraysAreEqual(arrayOfArrays[0], arrayOfArrays[i])) {
      return false;
    }
  }
  return true;
};

// Example usage:
const arrayOfArrays = [
  ["12", "5:109:00", "14"],
  ["12", "5:109:00", "14"],
  ["12", "5:109:00", "14"],
];

console.log("allArraysAreEqual(arrayOfArrays):", allArraysAreEqual(arrayOfArrays)); // true or false

//* 03. To find elements that exist in every internal array in an array of arrays
const arrOfArr = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["1", "2", "3", "4"],
  ["1", "2", "3", "4", "5"],
  ["1", "2", "3", "9"],
];

const findCommonElements = (arrayOfArrays: string[][]): string[] => {
  if (arrayOfArrays.length === 0) return [];

  // Take the first array as a reference
  const firstArray: string[] = arrayOfArrays[0];

  // Filter elements that are present in every array
  return firstArray.filter((element) => arrayOfArrays.every((arr: string[]) => arr.includes(element)));
};

const commonElements = findCommonElements(arrOfArr);
console.log("commonElements:", commonElements); // Output: ["1", "2", "3"]

{
  //* 04. To calculate how many times each element exists globally in an array of arrays
  const arrOfArr = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["1", "2", "3", "4"],
    ["1", "2", "3", "4", "5"],
    ["1", "2", "3", "9"],
  ];

  const countGlobalOccurrences = (arrayOfArrays: string[][]) => {
    const frequencyCounter = {} as { [key: string]: number };

    arrayOfArrays.forEach((innerArray: string[]) => {
      innerArray.forEach((element: string) => {
        if (frequencyCounter[element]) {
          frequencyCounter[element]++;
        } else {
          frequencyCounter[element] = 1;
        }
      });
    });

    return frequencyCounter;
  };

  const globalOccurrences = countGlobalOccurrences(arrOfArr);
  console.log("globalOccurrences:", globalOccurrences); // Output: { '1': 4, '2': 4, '3': 4, '4': 3, '5': 2, '6': 1, '7': 1, '8': 1, '9': 2 }
}

{
  //* 05. To get a list of items that exist n or more times in an array of arrays
  const arrOfArr = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["1", "2", "3", "4"],
    ["1", "2", "3", "4", "5"],
    ["1", "2", "3", "9"],
  ];
  const n = 4;

  const countGlobalOccurrences = (arrayOfArrays: string[][]) => {
    const frequencyCounter = {} as { [key: string]: number };

    arrayOfArrays.forEach((innerArray) => {
      innerArray.forEach((element) => {
        if (frequencyCounter[element]) {
          frequencyCounter[element]++;
        } else {
          frequencyCounter[element] = 1;
        }
      });
    });

    return frequencyCounter;
  };

  const getItemsWithMinOccurrences = (arrayOfArrays: string[][], minOccurrences: number) => {
    const globalOccurrences = countGlobalOccurrences(arrayOfArrays);
    return Object.keys(globalOccurrences).filter((key) => globalOccurrences[key] >= minOccurrences);
  };

  const itemsWithFourOrMoreOccurrences: string[] = getItemsWithMinOccurrences(arrOfArr, n);
  console.log("itemsWithFourOrMoreOccurrences:", itemsWithFourOrMoreOccurrences); // Output: ['1', '2', '3']
}

{
  //* 06. To find the longest array that has the most occurrences in an array of arrays
  const arr = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["1", "2", "3", "4"],
    ["1", "2", "3", "4", "5"],
    ["1", "2", "3", "4", "5"],
    ["1", "2", "3", "9"],
  ];

  const findLongestMostFrequentArray = (arrayOfArrays: string[][]): string[] => {
    const map = new Map<string, number>();

    // Count the frequency of each array
    arrayOfArrays?.forEach((innerArray: string[]) => {
      const key: string = JSON.stringify(innerArray);
      if (map.has(key)) {
        map.set(key, map?.get(key)! + 1);
      } else {
        map.set(key, 1);
      }
    });

    // Find the maximum frequency
    let maxFrequency = 0;
    map?.forEach((value: number) => {
      if (value > maxFrequency) {
        maxFrequency = value;
      }
    });

    // Find all arrays with the maximum frequency
    const mostFrequentArrays = [] as string[][];
    map?.forEach((value: number, key: string) => {
      if (value === maxFrequency) {
        mostFrequentArrays.push(JSON.parse(key));
      }
    });

    // Find the longest array among the most frequent arrays
    let longestArray = [] as string[];
    mostFrequentArrays?.forEach((innerArray: string[]) => {
      if (innerArray.length > longestArray.length) {
        longestArray = innerArray;
      }
    });

    return longestArray;
  };

  const result = findLongestMostFrequentArray(arr);
  console.log("result:", result); // Output: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
}
