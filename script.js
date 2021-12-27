// -Destrukturyzacja
const tab = ["Ala", "Ola", "Ela", "Fela"];
const [a, b] = tab;
console.log(5, a, b); //"Ala", "Ola"

const tab1 = ["Ala", "Ola", "Ela", "Fela"];
const [name1, name2, , name4] = tab1;
console.log(9, name1, name2, name4); //"Ala", "Ola", "Fela"

const obj = {
  first_name: "Karol",
  last_name: "Kowalski",
  age: 10,
};
const {first_name, last_name, age} = obj;
console.log(17, obj);

// bez destrukturyzacji:
function showUser(ob) {
  console.log(ob.name);
  console.log(ob.surname);
}
const user = {
  name: "Marcin",
  surname: "Nowak",
};
showUser(user);
// Z destrukturyzacją:
function showUser({name, surname}) {
  console.log(name);
  console.log(surname);
}

const user1 = {
  name: "Marcin",
  surname: "Nowak",
};
showUser(user1);

const hero = {
  name: "Batman",
  realName: "Bruce Wayne",
  address: {
    city: "Gotham",
  },
};
// Object destructuring:
const {
  address: {city},
} = hero;
console.log(52, city); // => 'Gotham'

// -Extracting a dynamic name property
const hero2 = {
  name: "Batman",
  realName: "Bruce Wayne",
};
const prop = "name";
const {[prop]: name} = hero2;
console.log(61, name); // => 'Batman'

// -Dynamic Key
const key = "Code";
const obj2 = {
  hello: "guys",
};
obj2[key] = "Up";
console.log(69, obj2);
// -Dynamic Key ES6 syntax:
const key2 = "Code";
let objA = {
  [key2]: "up",
};
console.log(75, objA);
{
  const obj2 = {a: 1, b: 2, c: 3};
  const letter = "d";
  const number = 4;
  console.log(80, {...obj2, [letter]: number});
}

// -IIFE (Immediately Invoked Function Expression)
(function () {
  let firstVariable = 1;
  let secondVariable = 2;
  console.log(87, firstVariable + secondVariable);
})();

// -Here's a function that takes a number as an argument, calls another function that also takes a number as an argument and returns the product of those two numbers:
function total(num) {
  return function (num2) {
    return num * num2;
  };
}
console.log(96, total(5)(10));

// -The spread syntax “spreads” the array into separate arguments:
console.log(99, Math.max(1, 3, 5)); // 5
console.log(100, Math.max([1, 3, 5])); // NaN
console.log(101, Math.max(...[1, 3, 5])); // 5
let parts = ["shoulders", "knees"];
let lyrics = ["head", ...parts, "and", "toes"];
console.log(104, lyrics); //  ["head", "shoulders", "knees", "and", "toes"]

// -Optional chaining and nullish coalescing
let familyTree = {
  us: {
    children: {},
  },
};
const nullCoalescing = familyTree?.us?.children?.theirChildren ?? "got no kids";
console.log(112, nullCoalescing); //got no kids

// -JavaScript’s && and || logical operators
// userIsLoggedIn && greet() -> jest równe: if(userIsLoggedIn) {greet()}
// The &&-operator evaluates to left hand side expression if it is falsy, otherwise to right hand side expression.

// const name = user.name || 'Guest' -> jest równe: if(!user.name) {const name = "Guest"} else {const name =user.name} lub if(user.name){name=user.name}
// The ||-operator evaluates to left hand side expression if it is truthy, otherwise to right hand side expression.

// -JavaScript double question mark (nullish coalescing) operator (??)
// The nullish coalescing operator simply returns the expression on the right-side of the mark when the expression on the left side is null or undefined
let firstName = null;
let username = firstName ?? "Guest";
console.log(username); // "Guest"

// -Double exclamation mark (!!) -> Double Bang Operator
//  -> !! is not an operator, it’s just the ! operator twice
console.log(!!false); // Evaluates to false.
console.log(!!true); // Evaluates to true.

{
  //- Fetching - short version (works in browser only)
  const URL = "https://jsonplaceholder.typicode.com/users";
  const fetchedURL = await (await fetch(URL)).json();
  console.log("fetchedURL:", fetchedURL);
}
