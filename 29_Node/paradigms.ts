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
