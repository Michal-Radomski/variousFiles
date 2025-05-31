const arr: string[] = [];
let latestTitle: string | null = null;

// Fetch data every 1 second
setInterval(() => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      latestTitle = json.title;
      // console.log("Fetched title:", latestTitle);
    });
}, 1000);

// Push into array every 5 seconds
setInterval(() => {
  if (latestTitle !== null) {
    arr.push(latestTitle);
    console.log("arr:", arr, arr.length);
  }
}, 5000);
