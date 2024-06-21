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
