class SimpleCSPRNG {
  crypto: Crypto;
  state: Uint8Array;
  constructor() {
    // Use crypto module if available
    if (typeof window !== "undefined" && window.crypto) {
      this.crypto = window.crypto;
    } else {
      this.crypto = require("crypto");
    }

    // Initialize the state with a random seed
    this.state = this.getRandomBytes(16);
    console.log("this.state:", this.state);
  }

  // Method to get random bytes
  getRandomBytes(size: number) {
    const buffer = new Uint8Array(size);
    if (this.crypto.getRandomValues) {
      this.crypto.getRandomValues(buffer);
    } else {
      // @ts-ignore
      const randomBytes = this.crypto.randomBytes(size);
      for (let i = 0; i < size; i++) {
        buffer[i] = randomBytes[i];
      }
    }
    return buffer;
  }

  // Method to mix the current state with new entropy
  mixState() {
    const newEntropy = this.getRandomBytes(16);
    for (let i = 0; i < this.state.length; i++) {
      this.state[i] ^= newEntropy[i];
    }
  }

  // Simple hash function (not secure, for demonstration only)
  hash(data: Uint8Array) {
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      hash = (hash * 31 + data[i]) & 0xffffffff;
    }
    return hash;
  }

  // Generate a random number
  getRandomNumber() {
    this.mixState(); // Mix the state with new entropy
    const hash = this.hash(this.state);
    console.log({ hash });
    console.log(hash >>> 0);
    return hash >>> 0; // Convert to unsigned 32-bit integer
  }

  // Generate a random number in a specific range
  getRandomInt(min: number, max: number) {
    const randomNumber = this.getRandomNumber();
    return min + (randomNumber % (max - min + 1));
  }
}

// Example usage
const csprng = new SimpleCSPRNG();
console.log("Random Number:", csprng.getRandomNumber());
console.log("Random Integer between 1 and 100:", csprng.getRandomInt(1, 100));
