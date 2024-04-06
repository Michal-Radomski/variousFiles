class Test {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age * 2;
  }

  print() {
    console.log(`This is: ${this.name}, age of ${this.age}`);
  }
}

const test = new Test("test", 20);
console.log("test:", test);
test.print();
