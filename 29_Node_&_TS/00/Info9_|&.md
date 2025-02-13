In TypeScript, `type C = A | B` and `type C = A & B` define different types based on existing types `A` and `B`. The key
difference lies in how they combine the properties of the constituent types[7].

- **`type C = A | B` (Union Type):**

  - `C` is a union type, meaning it can be either type `A` or type `B`[7].
  - A variable of type `C` must satisfy the properties of either `A` or `B`[7].
  - If `A` and `B` have different properties, you can only safely access properties that are common to both `A` and `B`
    without type assertions[7].
  - Example:

  ```typescript
  type A = { name: string; age: number };
  type B = { name: string; address: string };
  type C = A | B;

  const c1: C = { name: "John", age: 30 }; // Valid, satisfies type A
  const c2: C = { name: "Jane", address: "123 Main St" }; // Valid, satisfies type B
  // const c3: C = { age: 30, address: "123 Main St" }; // Invalid, doesn't satisfy either A or B
  ```

- **`type C = A & B` (Intersection Type):**

  - `C` is an intersection type, meaning it combines the properties of both `A` and `B`[7].
  - A variable of type `C` must satisfy the properties of both `A` and `B` simultaneously[7].
  - If `A` and `B` have different properties, type `C` will have all properties from `A` and all properties from `B`[7].
  - Example:

  ```typescript
  type A = { name: string; age: number };
  type B = { address: string; city: string };
  type C = A & B;

  const c1: C = { name: "John", age: 30, address: "123 Main St", city: "New York" }; // Valid, satisfies both A and B
  // const c2: C = { name: "Jane", age: 25 }; // Invalid, missing properties from type B
  // const c3: C = { address: "456 Elm St", city: "Los Angeles" }; // Invalid, missing properties from type A
  ```

In summary, `|` (union) means "either/or", while `&` (intersection) means "both/and"[7].

Citations: [1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND [2]
https://reflectoring.io/typescript-operators/ [3]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators [4]
https://graphite.dev/guides/typescript-operators [5]
https://stackoverflow.com/questions/70334826/difference-between-and-in-javascript [6]
https://www.tutorialspoint.com/typescript/typescript_operators.htm [7]
https://www.typescriptlang.org/docs/handbook/advanced-types.html [8]
https://www.pullrequest.com/blog/simplifying-conditional-logic-in-typescript-the-power-of-logical-operators-and-null-coalescing/
