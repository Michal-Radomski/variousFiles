export {}; //+ For TS file only
var fetch = require("node-fetch-commonjs");

// -1. Exercises written during the tutorial: https://www.youtube.com/watch?v=_9vgd9XKlDQ
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response: {json: () => string}) => response.json())
  .then((json: string) => console.log(json));

const LoadData = async (): Promise<any> => {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const res = await fetch(url);
    console.log(res.ok);
    const data = await res.json();
    console.log("data:", data);
  } catch (err) {
    console.log(err);
  }
};
const data2 = LoadData();
console.log("data2,", data2);

const LoadData2 = async (): Promise<any> => {
  try {
    const url2 = "https://jsonplaceholder.typicode.com/todos/2";
    const url3 = "https://jsonplaceholder.typicode.com/todos/2";
    const url4 = "https://jsonplaceholder.typicode.com/todos/4";
    const results = await Promise.all([fetch(url2), fetch(url3), fetch(url4)]);
    const dataPromises = results.map((result) => result.json());
    const finalData = await Promise.all(dataPromises);
    console.log("finalData:", finalData);
    return finalData;
  } catch (error) {
    console.log(error);
  }
};
LoadData2();

//- 2. Exercises written during the tutorial https://www.youtube.com/watch?v=PoRJizFvM7s
//- 2.1

type Post = {title: string; body: string};

const posts = [
  {title: "Post 1", body: "This is Post One"},
  {title: "Post 2", body: "This is Post Two"},
];
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post: Post) => {
      output = output += `${(post.title, post.body)}`;
    });
    console.log(output);
  }, 1000);
}
function createPost(post: Post) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error, Something went wrong!");
      }
    }, 2000);
  });
}
createPost({title: "Post 3", body: "This is Post Three"})
  .then(getPosts)
  .catch((error) => {
    console.log(error);
  });

const promise1 = Promise.resolve("Hello World!");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "GoodBye");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users/1").then((res: {json: () => any}) => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log("values:", values);
});

console.log("----Async/Await----");
// Async/Await
async function init() {
  await createPost({title: "Post 4", body: "This is Post Four"});
  console.log("Async/Await");
  getPosts();
}
init();

// Async/Await/Fetch
async function fetchUser(): Promise<any> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const data3 = await res.json();
  console.log("data3:", data3);
}
console.log("Async/Await/Fetch");
fetchUser();
