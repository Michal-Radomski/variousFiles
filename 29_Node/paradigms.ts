//* 1
{
  // Declarative approach using array methods
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Use the filter method to get even numbers
  const evenNumbers: number[] = numbers.filter((num) => num % 2 === 0);

  console.log("evenNumbers:", evenNumbers); // Output: [2, 4, 6, 8, 10]
}

{
  // Imperative approach using a loop
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers: number[] = [];

  // Use a for loop to find even numbers
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  console.log("evenNumbers:", evenNumbers); // Output: [2, 4, 6, 8, 10]
}

//*2
{
  // Object-Oriented Programming (OOP) in TypeScript
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    makeSound() {
      console.log(`The ${this.name} makes a sound.`);
    }
  }

  class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
      super(name);
      this.breed = breed;
    }

    makeSound() {
      console.log(`The ${this.breed} dog named ${this.name} barks.`);
    }
  }

  const dog = new Dog("Buddy", "Golden Retriever");
  dog.makeSound(); // Output: The Golden Retriever dog named Buddy barks.
}

{
  // Functional Programming in TypeScript
  const numbers: number[] = [1, 2, 3, 4, 5];

  // Using higher-order functions
  const doubledNumbers = numbers.map((num) => num * 2);
  console.log({ doubledNumbers }); // Output: [2, 4, 6, 8, 10]

  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log({ evenNumbers }); // Output: [2, 4]

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log({ sum }); // Output: 15
}

{
  // Procedural Programming in TypeScript
  let count: number = 0;

  function incrementCount(): void {
    count++;
  }

  function decrementCount(): void {
    count--;
  }

  function printCount(): void {
    console.log(`Count: ${count}`);
  }

  incrementCount();
  incrementCount();
  printCount(); // Output: Count: 2

  decrementCount();
  printCount(); // Output: Count: 1
}
