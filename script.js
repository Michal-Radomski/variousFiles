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
const { first_name, last_name, age } = obj;
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
function showUser({ name, surname }) {
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
  address: { city },
} = hero;
console.log(52, city); // => 'Gotham'

// -Extracting a dynamic name property
const hero2 = {
  name: "Batman",
  realName: "Bruce Wayne",
};
const prop = "name";
const { [prop]: name } = hero2;
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
  const obj2 = { a: 1, b: 2, c: 3 };
  const letter = "d";
  const number = 4;
  console.log(80, { ...obj2, [letter]: number });
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

//+ Fetching - short version (works in browser only)
{
  const URL = "https://jsonplaceholder.typicode.com/users";
  const fetchedURL = await (await fetch(URL)).json();
  console.log("fetchedURL:", fetchedURL);
}

//- Execute one function after another is finished
//* 1. Using a Callback
{
  function one(callback) {
    setTimeout(function () {
      console.log("first function executed");
      callback();
    }, 3000);
  }
  function two() {
    console.log("second function executed");
  }
  one(two);
}

//* 2. Using a Promise
{
  function one() {
    return new Promise(function (resolve, _reject) {
      setTimeout(function () {
        console.log("first function executed");
        resolve();
      }, 3000);
    });
  }
  function two() {
    console.log("second function executed");
  }
  one().then(two);
}

{
  //+ Quick JS Reminder
  //* Switch
  console.log(new Date().getDay());

  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default:
      day = "Unknown day";
  }
  console.log({ day });

  //* Break + Continue
  let text0 = "";
  for (let i = 0; i < 6; i++) {
    if (i === 3) {
      console.log("3");
    }
    text0 += "The number is " + i + " ";
  }
  console.log(text0);

  let text = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) {
      break;
    }
    text += "The number is " + i + " ";
  }
  console.log(text);

  let text2 = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) {
      continue;
    }
    text2 += "The number is " + i + " ";
  }
  console.log(text2);

  //* Array destructuring
  let [a, b] = [10, 20];
  console.log({ a, b });

  //* Object creation
  // 1. Object Literal
  let person = { firstName: "Mich", lastName: "Rad" };
  console.log(person);
  // 2. Using the "new" keyword
  let person2 = new Object();
  console.log(person2);
  person2.firstName = "Mich";
  person2.lastName = "Rad";
  console.log(person2);
  delete person2.firstName;
  console.log(person2);
  // 3. Constructor method
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  console.log({ myMother });
  console.log({ myFather });

  //* While loop
  {
    let text3 = "";
    let i = 0;
    while (i < 5) {
      text3 += "The number is " + i;
      i++;
    }
    console.log(text3);
  }

  //* Do...while loop -> is used when you want to run a code block at least one time
  let text4 = "";
  let i = 0;
  do {
    text4 += i + " ";
    i++;
  } while (i < 1);
  console.log(text4);

  //* For loop
  {
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let text = "";
    for (let i = 0; i < cars.length; i++) {
      text += cars[i] + " ";
    }
    console.log(text);
  }

  //* For...of loop
  {
    let text = "";
    const cars = ["BMW", "Volvo", "Mini"];
    for (let x of cars) {
      text += x + " ";
    }
    console.log(text);
  }

  //* For...in loop
  {
    const person = { fname: "John", lname: "Doe", age: 25 };
    let text = "";
    for (let x in person) {
      text += person[x] + " ";
    }
    console.log(text);
  }

  //* Creation Phase and Execution Phase
  console.log(name3);
  var name3 = "Mich";

  //* Hoisting
  logger();
  function logger() {
    console.log("logger");
  }
  //* Scope -> block scope {}, function scope and global scope
}
