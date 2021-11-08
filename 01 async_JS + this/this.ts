export {}; //+ For TS file only

// function someFunction() {
//   this; // <- global, window
// }
// const obj = {
//   someFunction() {
//     this; // zależy od kontekstu; obj.someFunction -> kontekstem jest obj !!!
//   },
// };
// Funkcja strzałkowa nie tworzy kontekstu, więc this jest tym samym co poziom wyżej!!!

const that: any = this;

console.log(this); //- w Node: module.exports (czyli TUTAJ {} ) a w przeglądarce: window
// Funkcja jest w obiekcie -> this obiektem z kontekstu (z lewej strony)
// This w zwykłej funkcji -> this jest obiektem globalnym: Node {}, przeglądarka: window
// This w funkcji strzałkowej -> this nie zmienia kontekstu
const person = {
  name: "Tom",
  showName: function () {
    console.log(this.name); //Tom
  },
};
person.showName();
const person1 = {
  name: "Tom1",
  showName() {
    console.log(this.name); //Tom1
  },
  address: {
    city: "Warsaw",
    street: "Złota",
    showAddress: function () {
      console.log(`${this.city} ${this.street}`); //Warsaw Złota
    },
  },
};
person1.showName(); // kontekst wywołania funkcji: to co po lewej stronie funkcji
person1.address.showAddress();
// Funkcje strzałkowe nie tworzą kontekstu
const person2 = {
  name: "Tom2",
  showName() {
    console.log(this.name); //Tom2
    const logName = () => {
      console.log("logName:", this.name); //logName jest nieosiągalne
    };
  },
  address: {
    city: "Warsaw",
    street: "Złota",
    log: console.log(this),
    showAddress: () => {
      console.log(`That city + that street: ${that.city} ${that.street}`); // undefined undefined
      console.log(this); // {}
    },
  },
};
person2.address.showAddress();
person2.address.log; // tu nie będzie nic lub {} a w przeglądarce byłoby to window
person2.showName();

const person3 = {
  name: "Tom3",
  showName: function () {
    const logName = function (this: any) {
      // Undefined lub kod nieosiągalny
      console.log("this.name dla person3", this.name);
    };
  },
};
person3.showName();

const dog = {
  name: "Spike",
  showName: person.showName,
};
dog.showName(); // Spike -> bo kontekstem jest dog

const Dog = {
  name: "Spike2",
  showThisDog: () => {
    console.log(this); // {}/window bo funkcja strzałkowa nie zmienia kontekstu
  },
};
Dog.showThisDog();

const Cat: any = function (this: any) {
  this.name = "Mruczek";
};
Cat.prototype.showThisCat = function () {
  console.log("this w Cat:", this); //this w Cat: Cat {name: "Mruczek"}
};
const cat = new Cat(); // gdy jest new to jest KLASA w JS
cat.showThisCat(); //metoda w klasie -> tu nic nie ma!!
