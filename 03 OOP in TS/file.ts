// Tutorial: https://www.youtube.com/watch?v=fsVL_xrYO0w

//+ Functional Programming: pure functions
let num: number = 123;

function ToString(val: any): string {
  return val.toString();
}

const string: string = ToString(num);
console.log("string:", string);

const data = Object.freeze([1, 2, 3, 4, 5, 6]);

//- Higher Order Functions
//- A function that takes at least a function as its argument(s), and/or returns a new function.
const addEmoji = (val: any): string => ToString(val) + "😀";

const emojiData = data.map(addEmoji);

console.log("emojiData:", emojiData);

//- Function Composition (Compound Function)
//- It's the ability to combine behaviors together in a specific order, transforming data little by little from an initial shape into a new one.

const appendEmoji = (fixed: string) => (dynamic: string) => fixed + dynamic;
const rain = appendEmoji("🌧️");
const sun = appendEmoji("🌞");
console.log(rain("today"));
console.log(sun("tomorrow"));

//+ Object Oriented Programming
class Emoji {
  icon: string;
  constructor(icon: string) {
    this.icon = icon;
  }
}
const sun2: Emoji = new Emoji("🌞");
console.log("sun2:", sun2);

//- Static Method

class Emoji2 {
  static addOneTo(val: number) {
    return 1 + val;
  }
}
console.log("Emoji2.addOneTo(1):", Emoji2.addOneTo(1));

//- Inheritance (dziedziczenie z wyższej klasy) vs Composition (dzielenie wyższej klasy na mniejsze obiekty)
//- Inheritance

class Human {
  constructor(public name: string) {
    this.name = name;
  }
  sayHi() {
    return `Hello, ${this.name}`;
  }
}
const prezes = new Human("Prezes Pis");
console.log("prezes.sayHi():", prezes.sayHi());

class SuperHuman extends Human {
  heroName: string;
  constructor(name: string) {
    super(name);
    this.heroName = `HERO ${name}`;
  }
  superPower() {
    return `${this.heroName} pops trays 🔥🔥🔥`;
  }
}
const pele = new SuperHuman("Pele");
console.log("pele.superPower():", pele.superPower());
console.log("pele.sayHi():", pele.sayHi());

//- Composition
function applyMixins(derivedCtor: any, baseCtor: any[]) {
  baseCtor.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

const hasName = (name: string) => {
  return {name};
};
const canSayHi = (name: string) => {
  return {
    sayHi: () => `Hello, ${name}`,
  };
};

const Person = function (name: string) {
  return {
    ...hasName(name),
    ...canSayHi(name),
  };
};
const person = Person("Michal");
console.log("person.sayHi():", person.sayHi());

class CanSayHi {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  sayHi() {
    return `Hello ${this.name}`;
  }
}

class HasSuperPower {
  constructor(heroName: string) {
    this.heroName = heroName;
  }
  heroName: string;
  super_power() {
    return `${this.heroName} 🔥🔥🔥`;
  }
}

class SuperHero implements CanSayHi, HasSuperPower {
  heroName: string;
  constructor(public name: string) {
    this.heroName = `SUPER ${name}`;
  }
  sayHi!: () => string;
  super_power!: () => string;
}

applyMixins(SuperHero, [CanSayHi, HasSuperPower]);
const ts = new SuperHero("TypeScript");

console.log("ts.super_power():", ts.super_power());
