import os from "os";

(function getSystemInfo(): void {
  console.log("OS platform:", os.platform());
  console.log("OS release:", os.release());
  console.log("OS type:", os.type());
  console.log("CPU architecture:", os.arch());
  console.log("CPU cores:", os.cpus().length);
  console.log("Total memory_MB:", os.totalmem() / 1024 / 1024, "MB");
  console.log("Free memory_MB:", os.freemem() / 1024 / 1024, "MB");
  console.log("Total memory_GB:", os.totalmem() / 1024 / 1024 / 1024, "GB");
  console.log("Free memory_GB:", os.freemem() / 1024 / 1024 / 1024, "GB");
  console.log("Network interfaces:", os.networkInterfaces());
  console.log("Home directory:", os.homedir());
  console.log("Current user:", os.userInfo().username);
  console.log("System uptime:", (os.uptime() / 3600).toFixed(2), "hours");
  console.log("Temp directory:", os.tmpdir());
  console.log("EOL:", os.EOL === "\n" ? "LF" : "CRLF");
})();

// Check if the system has enough memory for a task
function hasEnoughMemoryForTask(requiredMemoryGB: number): boolean {
  const freeMemoryGB = os.freemem() / 1024 / 1024 / 1024;
  return freeMemoryGB >= requiredMemoryGB;
}
console.log("Has 4GB free memory:", hasEnoughMemoryForTask(4));

{
  //* Function to encode a string to base64 - Browser
  const encodeToBase64 = (str: string): string => {
    return btoa(str);
  };

  // Function to decode a base64 string
  const decodeFromBase64 = (base64: string): string => {
    return atob(base64);
  };

  // Example usage
  const originalString = "Hello, World!";
  const encodedString = encodeToBase64(originalString);
  const decodedString = decodeFromBase64(encodedString);

  console.log("Original String in Browser:", originalString);
  console.log("Encoded String in Browser:", encodedString);
  console.log("Decoded String in Browser:", decodedString);
}

{
  //* Function to encode a string to base64 - Node.js
  const encodeToBase64 = (str: string): string => {
    return Buffer.from(str, "utf-8").toString("base64");
  };

  // Function to decode a base64 string
  const decodeFromBase64 = (base64: string): string => {
    return Buffer.from(base64, "base64").toString("utf-8");
  };

  // Example usage
  const originalString = "Hello, World!";
  const encodedString = encodeToBase64(originalString);
  const decodedString = decodeFromBase64(encodedString);

  console.log("Original String in Node:", originalString);
  console.log("Encoded String in Node:", encodedString);
  console.log("Decoded String in Node:", decodedString);
}

{
  //* Example of atob and btoa in TypeScript
  // btoa: Encode a string to base64
  function encodeToBase64(input: string): string {
    try {
      return btoa(input);
    } catch (error) {
      console.error("Error encoding to base64:", error);
      return "";
    }
  }

  // atob: Decode a base64 string
  function decodeFromBase64(input: string): string {
    try {
      return atob(input);
    } catch (error) {
      console.error("Error decoding from base64:", error);
      return "";
    }
  }

  // Usage examples
  const originalString: string = "Hello, World!";

  // Encoding
  const encodedString: string = encodeToBase64(originalString);
  console.log("Encoded:", encodedString);

  // Decoding
  const decodedString: string = decodeFromBase64(encodedString);
  console.log("Decoded:", decodedString);
}

//* Date validation
function isValidDate(dateStr: string): boolean {
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
}

console.log('isValidDate("2024-08-03"):', isValidDate("2024-08-03")); // true
console.log('isValidDate("foo"):', isValidDate("foo")); // false
console.log('isValidDate("2024/15/03"):', isValidDate("2024/15/03")); // false

const invalidDate: Date = new Date("foo");
// console.log("invalidDate:", invalidDate);

if (invalidDate.toString() === "Invalid Date") {
  console.log("The date is invalid.");
}

function checkDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return date.toString();
}

console.log('checkDate("foo"):', checkDate("foo")); // Invalid Date
console.log('checkDate("2024-08-03"):', checkDate("2024-08-03")); // Valid date string representation

{
  //* Nested optional chaining

  //* Using optional chaining with destructuring
  // interface User {
  //   name?: string;
  //   address?: {
  //     street?: string;
  //     city?: string;
  //   };
  // }

  // const user: User = {
  //   name: "Alice",
  //   address: {
  //     street: "123 Main St",
  //     // city is missing
  //   },
  // };
  // console.log("user:", user);

  // const { name, address: { street, city } = {} } = user;
  // const cityName = city ?? "City not provided"; // Using nullish coalescing to provide a default value

  // console.log({ name }); // Alice
  // console.log({ street }); // 123 Main St
  // console.log({ cityName }); // City not provided
  // console.log({ city }); // undefined

  //* Safely accessing nested properties
  interface Data {
    user: {
      profile: {
        name: string;
        preferences?: {
          theme?: string;
          theme2?: string;
        };
      };
    };
  }

  const data: Data = {
    user: {
      profile: {
        name: "Bob",
        preferences: {
          theme: "dark",
          // theme2: "light",
        },
      },
    },
  };
  console.log("data:", data);

  const { user: { profile: { name, preferences: { theme, theme2 } = {} } = {} } = {} } = data;

  console.log({ name }); // Bob
  console.log({ theme }); // dark
  console.log({ theme2 }); // undefined
}

//* Wait 2 seconds example
(async function dalay(): Promise<void> {
  console.log("Waiting for 2 seconds...");
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
  console.log("2 seconds have passed!");
})();

//* Works only in Browser (Firefox - for today 2024-08-20)
// console.log(Math.f16round(1.5)); // Output: 1.5
// console.log(Math.f16round(1.337)); // Output: 1.3369140625
// console.log(Math.f16round(100000)); // Output: Infinity

console.log(Math.fround(1.5)); // Output: 1.5
console.log(Math.fround(1.337)); // Output: 1.3370000123977661
console.log(Math.fround(100000)); // Output: 100000

interface HeuristicNode {
  x: number;
  y: number;
}

function heuristicFunction(a: HeuristicNode, b: HeuristicNode): number {
  // Using the Manhattan distance as a heuristic
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

// Example usage
const start: HeuristicNode = { x: 0, y: 0 };
const goal: HeuristicNode = { x: 5, y: 5 };

const distance = heuristicFunction(start, goal);
console.log(`Heuristic distance from start to goal: ${distance}`);
