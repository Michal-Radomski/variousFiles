//* Function to generate a key
export async function generateKey(): Promise<CryptoKey> {
  const key: CryptoKey = await window.crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true, // extractable
    ["encrypt", "decrypt"] // key usages
  );
  // console.log({ key });
  return key;
}

//* Function to encrypt data
export async function encryptData(
  key: CryptoKey,
  data: string
): Promise<{
  ciphertext: ArrayBuffer;
  iv: Uint8Array;
}> {
  const iv: Uint8Array = window.crypto.getRandomValues(new Uint8Array(12)); // Initialization vector
  const encodedData: Uint8Array = new TextEncoder().encode(data); // Encode data to Uint8Array
  const ciphertext: ArrayBuffer = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key, // the key
    encodedData // the data to encrypt
  );
  // console.log({ iv, encodedData, ciphertext });
  return { ciphertext, iv }; // return both ciphertext and iv
}

//* Function to decrypt data
export async function decryptData(key: CryptoKey, ciphertext: BufferSource, iv: Uint8Array): Promise<string> {
  const decryptedData: ArrayBuffer = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key, // the key
    ciphertext // the data to decrypt
  );
  // console.log({ decryptedData });
  const decrypted: string = new TextDecoder().decode(decryptedData); // decode and return the original data
  // console.log({ decrypted });
  return decrypted;
}

//* Example usage -> App.tsx
// (async () => {
//   const key: CryptoKey = await generateKey(); // Generate a key
//   const message: string = "Hello, World!"; // Message to encrypt

//   const { ciphertext, iv } = await encryptData(key, message); // Encrypt the message
//   console.log({ ciphertext, iv });
//   const encrypted: Uint8Array = new Uint8Array(ciphertext);
//   console.log("Encrypted:", encrypted); // Log the encrypted data

//   const decryptedMessage: string = await decryptData(key, ciphertext, iv); // Decrypt the message
//   console.log("Decrypted:", decryptedMessage); // Log the original message
// })();
