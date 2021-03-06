const readline = require("readline");
const {stdin: input, stdout: output} = require("process");
var path = require("path");

//* Methods to display directory: __dirname, __filename and process.cwd()
console.log("__dirname:    ", __dirname);
console.log("process.cwd() : ", process.cwd());
console.log("./ : ", path.resolve("./"));
console.log("filename: ", __filename);

//* Fetching with Node18
const testingFetchWithNode18 = async function () {
  const response: Response = await fetch("https://ipwhois.app/json/?objects=ip,country,city");
  if (response.ok) {
    const data: {ip: string; country: string; city: string} = await response.json();
    console.log(`You IP is: ${data.ip}, you are in: ${data.country}, ${data.city}`);
  }
};

testingFetchWithNode18();

//* Readline with Node18
const nodeReadLine = async function () {
  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.setPrompt(`What is your name? `);
  rl.prompt();
  rl.on("line", (name: string) => {
    console.log(`Your name is: ${name}`);
    rl.close();
  });
};

setTimeout(nodeReadLine, 1500);
