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

//* Heuristic Function Exercise
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

//* The do...while loop guarantees that the code block will execute at least once, even if the condition is false on the first evaluation.
let i: number = 0;

do {
  console.log({ i });
  i++;
} while (i < 5);

//* In operator
// 1. Checking Property Existence: the operator allows you to determine if a specific property exists within an object or its prototype chain
const car = { make: "Honda", model: "Accord" };
console.log('"make" in car:', "make" in car); // true
console.log('"year" in car:', "year" in car); // false

// 2. Type Guard for Narrowing Types: It helps narrow down union types based on whether a specific property exists in an object
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

const fish: Fish = {
  swim: function (): void {
    console.log("Fish swims");
  },
};

const bird: Bird = {
  fly: function (): void {
    console.log("Birds flies");
  },
};

function move(pet: Fish | Bird): void {
  if ("swim" in pet) {
    pet.swim(); // TypeScript knows 'pet' is of type 'Fish' here
  } else {
    pet.fly(); // TypeScript knows 'pet' is of type 'Bird' here
  }
}

move(fish); // Fish swims
move(bird); // Birds flies

// Tuple
type User = [string, number];

// Initialize a tuple
let user: User;

// Assign values to the tuple
user = ["Alice", 30]; // Correct

// Accessing elements
// console.log(user[0]); // Outputs: Alice
// console.log(user[1]); // Outputs: 30
console.log("user:", user);

// Attempting to assign incorrect types will result in an error
// user = [30, "Alice"]; // Error: Type 'number' is not assignable to type 'string'.

//* Find vs Filter
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const evenNumbers: number[] = numbers.filter((number: number) => number % 2 === 0);
console.log("evenNumbers:", evenNumbers); // Output: [2, 4, 6]

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const person: Person | undefined = people.find((p: Person) => p.age === 30);
console.log("person:", person); // Output: { name: 'Bob', age: 30 }

//* Interface Error
// Standard Error Interface below
//* interface Error {
//*   name: string;
//*   message: string;
//*   stack?: string;
//* }

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log("data:", data))
  .catch((error: unknown) => {
    // console.error("error:", error);
    if (error instanceof Error) {
      console.error("error?.name:", error?.name);
      console.error("error?.message:", error?.message);
      console.error("error?.stack:", error?.stack);
      console.error("error?.cause:", error?.cause);
    }
  });

class CustomError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message); // Call the parent constructor
    this.statusCode = statusCode;

    // Set the prototype explicitly
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

// Usage
try {
  throw new CustomError("An error occurred", 404);
} catch (error) {
  if (error instanceof CustomError) {
    console.log(`Error: ${error.message}, Status Code: ${error.statusCode}`);
  } else {
    console.log("Unknown error:", error);
  }
}

//* Throw Error
(async function getData(): Promise<void> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log("data:", data);
  } catch (error) {
    if (error instanceof Error) {
      console.error("error?.name:", error?.name);
      console.error("error?.message:", error?.message);
    }
  } finally {
    console.log("Job getData done!");
  }
})();

(async function getData2(): Promise<void> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log("data:", data);
  } catch (error) {
    throw new Error("getData2 Error");
  } finally {
    console.log("Job getData2 done!");
  }
})();
