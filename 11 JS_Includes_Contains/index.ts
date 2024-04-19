import jsdom from "jsdom";

const str = "string";
console.log('str.includes("string"):', str.includes("string")); // true

//* Browser only
// const h1 = document.createElement("h1");
// const h1Content = document.createTextNode("Hi there and greetings!");
// h1.appendChild(h1Content);
// console.log("h1:", h1);
// console.log(h1.classList.contains("test"));
// h1.classList.add("test");
// console.log(h1.classList.contains("test"));

const { JSDOM } = jsdom;
new JSDOM(
  `<body>
  <div id="content"></div>
  <script>
    const h1 = document.createElement("h1");
    const h1Content = document.createTextNode("Hi there and greetings!");
    h1.appendChild(h1Content);
    console.log("h1:", h1);
    console.log('h1.classList.contains("test"):', h1.classList.contains("test")); //* false
    h1.classList.add("test");
    console.log("h1:", h1);
    console.log('h1.classList.contains("test"):', h1.classList.contains("test")); //* true
  </script>
</body>`,
  { runScripts: "dangerously" }
);
