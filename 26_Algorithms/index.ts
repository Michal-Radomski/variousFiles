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

//* Check if all internal arrays in an array of arrays are equal
const arraysAreEqual = (arr1: string[], arr2: string[]) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const allArraysAreEqual = (arrayOfArrays: string[][]) => {
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
