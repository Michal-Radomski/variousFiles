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
