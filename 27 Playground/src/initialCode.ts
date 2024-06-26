export const initialCode: string = /* .js file Escaped Characters: The newline characters (\n) and backticks (`) */ `
const bits = {
  bit_0: 0,
  bit_1: 1,
  showBits() {
    return \`Bits are: \${this.bit_0} and \${this.bit_1}\`;
  },
};

class Person {
  constructor(name, motto) {
    this.name = name;
    this.motto = motto;
  }
  says() {
    return \`\${this.name} says: \\n \${this.motto}\`;
  }
}

const personBobMarley = new Person("Bob Marley", "No Woman, No Cry");

console.log(personBobMarley.says());

class Programmer extends Person {
  codes() {
    return bits.showBits();
  }
}
const person_MR = new Programmer("Michal Radomski", "No Code No Fun");
console.log(\`\${person_MR.says()} and \\n \${person_MR.codes()}\`);`;
