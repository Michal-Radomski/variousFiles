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

// -Optional chaining and null coalescing
let familyTree = {
  us: {
    children: {},
  },
};
const nullCoalescing = familyTree?.us?.children?.theirChildren ?? "got no kids";
console.log(112, nullCoalescing); //got no kids
