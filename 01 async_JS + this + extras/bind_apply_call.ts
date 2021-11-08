export {};
//- Tutorial: https://www.youtube.com/watch?v=TQXZL4bvw9Q

const human: any = {
  name: "Michal",
  sayName() {
    console.log(`My name is ${this.name}`);
  },
  sayFullName: function (surname: string) {
    console.log(`My name is ${this.name} ${this.surname ? this.surname : surname}`);
  },
  sayFullName2: function (surname: string) {
    console.log(`My name is ${this.name} ${this.surname ? this.surname : surname}`);
  },
  //- To samo co wyżej
  sayName2: function () {
    console.log(`My name is ${this.name}`);
  },
};
human.sayName();
human.sayName2();

//- call()
const personA = {
  name: "John",
};
const personB = {
  name: "Donald",
};
human.sayName.call(personA); //My name is John -> kontekst jest zmieniony

const people = [
  {
    name: "John",
    surname: "King",
  },
  {
    name: "Donald",
  },
];
people.forEach((p) => human.sayName.call(p));

//- apply()
people.forEach((p) => human.sayFullName.apply(p, ["Kowalski"])); //My name is John King, My name is Donald Kowalski

//- bind() // To samo bo apply - funkcja nie wykona się od razu tylko w momencie uruchomienia!
const people2 = people;
people2.forEach((p) => {
  const peopleBind = human.sayFullName2.bind(p, "Kowalski"); //My name is John King, My name is Donald Kowalski - ale dopiero w momencie uruchomienia!
  peopleBind();
});
