//* Generic with two type variables
function merge<T, K>(obj1: T, obj2: K): T & K {
  return { ...obj1, ...obj2 };
}

const mergedObject: { name: string } & { age: number } = merge({ name: "John" }, { age: 30 });
console.log(1, "mergedObject.name, mergedObject.age:", mergedObject.name, mergedObject.age);

//* Generic with three type variables
function combine<A, B, C>(arg1: A, arg2: B, arg3: C): [A, B, C] {
  return [arg1, arg2, arg3];
}

const combinedArray: [number, string, boolean] = combine(1, "hello", true);
console.log(
  2,
  "combinedArray[0], combinedArray[1], combinedArray[2]:",
  combinedArray[0],
  combinedArray[1],
  combinedArray[2]
);
