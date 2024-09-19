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

//* 3
{
  // Reactive Programming in TypeScript (for browsers)
  // import { fromEvent } from "rxjs";
  // import { map } from "rxjs/operators";
  // // Create an observable from a button click event
  // const button = document.getElementById("myButton");
  // const buttonClicks$ = fromEvent(button, "click");
  // // Transform the event stream to emit the current timestamp
  // const timestamps$ = buttonClicks$.pipe(map(() => new Date().toISOString()));
  // // Subscribe to the observable to react to button clicks
  // timestamps$.subscribe((timestamp) => {
  //   console.log(`Button clicked at: ${timestamp}`);
  // });
}

{
  // Simple Logic Programming with TypeScript
  type Fact = { subject: string; predicate: string; object: string };
  type Rule = { if: Fact[]; then: Fact[] };

  // Define some facts
  const facts: Fact[] = [
    { subject: "Socrates", predicate: "is", object: "a man" },
    { subject: "All men", predicate: "are", object: "mortal" },
  ];

  // Define a rule
  const rules: Rule[] = [
    {
      if: [{ subject: "Socrates", predicate: "is", object: "a man" }],
      then: [{ subject: "Socrates", predicate: "is", object: "mortal" }],
    },
  ];

  // Simple inference engine
  function infer(facts: Fact[], rules: Rule[]): Fact[] {
    const inferredFacts: Fact[] = [];

    for (const rule of rules) {
      const conditionsMet: boolean = rule.if.every((condition) =>
        facts.some(
          (fact: Fact) =>
            fact.subject === condition.subject && fact.predicate === condition.predicate && fact.object === condition.object
        )
      );

      if (conditionsMet) {
        inferredFacts.push(...rule.then);
      }
    }

    return inferredFacts;
  }

  // Run inference
  const newFacts = infer(facts, rules);
  console.log({ newFacts }); // Output: [{ subject: 'Socrates', predicate: 'is', object: 'mortal' }]
}
