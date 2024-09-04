import crypto, { CipherGCM, DecipherGCM } from "crypto";

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
