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
