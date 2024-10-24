import crypto, { CipherGCM, DecipherGCM } from "crypto";
import { Buffer } from "buffer";

//* Function to generate a key
function generateKey(): Buffer {
  const generatedKey: Buffer = crypto.randomBytes(32);
  // console.log("generatedKey:", generatedKey);
  return generatedKey; // 256 bits key for AES-256
}

//* Function to encrypt data
function encryptData(key: Buffer, data: string): { [key: string]: string } {
  const iv: Buffer = crypto.randomBytes(12); // Initialization vector
  const cipher: CipherGCM = crypto.createCipheriv("aes-256-gcm", key, iv);
  // console.log({ iv, cipher });

  let encrypted: string = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");
  // console.log({ encrypted });

  const tag: Buffer = cipher.getAuthTag(); // Get the authentication tag
  // console.log({ tag });
  return { iv: iv.toString("hex"), encryptedData: encrypted, tag: tag.toString("hex") };
}

//* Function to decrypt data
function decryptData(key: Buffer, iv: string, encryptedData: string, tag: string): string {
  const decipher: DecipherGCM = crypto.createDecipheriv("aes-256-gcm", key, Buffer.from(iv, "hex"));
  // console.log({ decipher });
  decipher.setAuthTag(Buffer.from(tag, "hex"));

  let decrypted: string = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");
  // console.log({ decrypted });
  return decrypted; // Return the original data
}

// Example usage
const key: Buffer = generateKey(); // Generate a key
const message: string = "Hello, World!"; // Message to encrypt

const { iv, encryptedData, tag } = encryptData(key, message); // Encrypt the message
console.log({ iv, encryptedData, tag });
console.log("Encrypted:", encryptedData); // Log the encrypted data

const decryptedMessage: string = decryptData(key, iv, encryptedData, tag); // Decrypt the message
console.log("Decrypted:", decryptedMessage); // Log the original message

//* Base64 - browsers
{
  const myString = "Hello, World!";
  const base64Encoded = btoa(myString);
  console.log({ base64Encoded }); // Outputs: "SGVsbG8sIFdvcmxkIQ=="
}
{
  function encodeToBase64(str: string): string {
    return btoa(unescape(encodeURIComponent(str))); //! The signature '(string: string): string' of 'unescape' is deprecated.ts(6387)
  }

  const myString = "Hello, 🌍!";
  const base64Encoded = encodeToBase64(myString);
  console.log({ base64Encoded }); // Outputs: "SGVsbG8sIPCfjI0h"
}

{
  const base64Encoded = "SGVsbG8sIFdvcmxkIQ==";
  const decodedString = atob(base64Encoded);
  console.log({ decodedString }); // Outputs: "Hello, World!"
}

{
  function decodeFromBase64(str: string): string {
    return decodeURIComponent(escape(atob(str))); //! The signature '(string: string): string' of 'escape' is deprecated.ts(6387)
  }

  const base64Encoded = "SGVsbG8sIPCfjI0h";
  const decodedString = decodeFromBase64(base64Encoded);
  console.log({ decodedString }); // Outputs: "Hello, 🌍!"
}

//* Base64 - Node
{
  // Original string
  const originalString = "Hello, World!";

  // Create a buffer from the string
  const buffer = Buffer.from(originalString, "utf8");
  // console.log({ buffer });

  // Encode to Base64
  const base64Encoded = buffer.toString("base64");
  console.log({ base64Encoded }); // Outputs: "SGVsbG8sIFdvcmxkIQ=="
  console.log(buffer.toString("utf8")); // Hello, World!
  console.log(buffer.toString("hex")); // 48656c6c6f2c20576f726c6421
}

{
  // Base64 encoded string
  const base64Encoded = "SGVsbG8sIFdvcmxkIQ==";

  // Create a buffer from the Base64 string
  const decodedBuffer = Buffer.from(base64Encoded, "base64");
  // console.log({ decodedBuffer });

  // Decode to original string
  const decodedString = decodedBuffer.toString("utf8");
  console.log({ decodedString }); // Outputs: "Hello, World!"
  console.log(decodedBuffer.toString("base64")); // SGVsbG8sIFdvcmxkIQ==
  console.log(decodedBuffer.toString("hex")); // 48656c6c6f2c20576f726c6421
}

//* Hash + Salt
// Hashing a Password
const hashPassword = (password: string): { salt: string; hashedPassword: string } => {
  const salt = crypto.randomBytes(16).toString("hex"); // Generate a random salt
  const iterations = 100000; // Number of iterations
  const keylen = 64; // Length of the derived key
  const digest = "sha256"; // Hash function

  const hashedPassword = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString("hex");

  return { salt, hashedPassword }; // Return both the salt and hashed password
};

// Example usage
const { salt, hashedPassword } = hashPassword("mySecurePassword");
console.log("Salt:", salt);
console.log("Hashed Password:", hashedPassword);

// Verifying a Password
const verifyPassword = (
  inputPassword: crypto.BinaryLike | string,
  storedHash: string,
  storedSalt: crypto.BinaryLike | string
): boolean => {
  const iterations = 100000; // Must match the original number of iterations
  const keylen = 64; // Must match the original key length
  const digest = "sha256"; // Must match the original hash function

  const hashedInputPassword: string = crypto
    .pbkdf2Sync(inputPassword, storedSalt, iterations, keylen, digest)
    .toString("hex");
  // console.log({ hashedInputPassword });

  return hashedInputPassword === storedHash; // Compare hashes
};

// Example usage
const isMatch = verifyPassword("mySecurePassword", hashedPassword, salt);
console.log("Password Match:", isMatch); // Outputs: true or false

//* Pepper example
{
  const pepper = "mySecretPepper"; // Should be kept secret
  const password = "mySecurePassword";
  const salt = crypto.randomBytes(16).toString("hex"); // Generate a random salt
  const iterations = 100000; // Number of iterations
  const keylen = 64; // Length of the derived key
  const digest = "sha256"; // Hash function

  const hashedPassword = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString("hex");
  const hashedPasswordWithPepper = crypto.pbkdf2Sync(password + pepper, salt, iterations, keylen, digest).toString("hex");
  console.log({ hashedPassword, hashedPasswordWithPepper });
}
