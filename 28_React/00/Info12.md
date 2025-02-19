In JavaScript and TypeScript, the return values of functions can be `void`, `null`, or `undefined`, each serving different
purposes and conveying distinct meanings. Here's a breakdown of the differences:

## Definitions

1. **Void**:

   - The `void` type indicates that a function does not return a value that will be used. It is often used in TypeScript to
     signify that the return value of a function is not meant to be utilized.
   - When a function is declared with a return type of `void`, it can still return `undefined` implicitly, but this is not
     the primary focus of the function's purpose.

2. **Null**:

   - `null` is an intentional assignment value that represents the absence of any object value. It indicates that a variable
     has been explicitly set to "no value."
   - You can assign `null` to variables to denote that they are intentionally empty or have no relevant object.

3. **Undefined**:
   - `undefined` means that a variable has been declared but has not yet been assigned a value. It signifies that the
     variable exists but lacks a defined value.
   - Functions that do not explicitly return a value will return `undefined` by default.

## Key Differences

| Aspect              | Void                         | Null                            | Undefined                    |
| ------------------- | ---------------------------- | ------------------------------- | ---------------------------- |
| **Meaning**         | No usable return value       | Intentionally no value          | Not yet assigned a value     |
| **Assignment**      | Cannot be assigned           | Can be assigned                 | Automatically assigned       |
| **Usage Context**   | Function declarations        | Explicitly indicating emptiness | Uninitialized variables      |
| **Return Behavior** | Implicitly returns undefined | Can be returned explicitly      | Returned when no value given |

## Practical Examples

- **Using Void**:

  ```typescript
  function logMessage(message: string): void {
    console.log(message);
    // No return statement needed
  }
  ```

- **Using Null**:

  ```javascript
  function findUser(id) {
    // Assume user not found
    return null; // Explicitly indicates no user found
  }
  ```

- **Using Undefined**:
  ```javascript
  function getUser(id) {
    let user; // Declared but not initialized
    if (id === 1) {
      user = { name: "Alice" };
    }
    return user; // Returns undefined if id is not 1
  }
  ```

## Conclusion

Understanding the distinctions between `void`, `null`, and `undefined` helps in writing clearer and more predictable code.
Use `void` for functions that do not return values, `null` for intentionally empty values, and `undefined` for uninitialized
variables. This clarity can prevent bugs and enhance code maintenance.

Citations: [1] https://dev.to/za-h-ra/the-difference-between-null-and-undefined-in-javascript-51gc [2]
https://www.schibsted.pl/blog/javascript-dilemma/ [3]
https://stackoverflow.com/questions/74932375/what-is-the-difference-between-void-never-null-and-undefined-in-typescript-wh
[4] https://dev.to/dorin/js-the-difference-between-undefined-null-and-void-0-2l5a [5]
https://www.reddit.com/r/typescript/comments/11dpu05/undefined_vs_null/ [6]
https://coreui.io/blog/what-is-the-difference-between-null-and-undefined-in-javascript/ [7]
https://www.reddit.com/r/typescript/comments/126lvz4/typescript_the_many_types_of_nothing_a_post_about/ [8]
https://teamtreehouse.com/library/typescript-basics/the-any-void-null-and-undefined-typesIn JavaScript and TypeScript, the
return values of functions can be `void`, `null`, or `undefined`, each serving different purposes and conveying distinct
meanings. Here's a breakdown of the differences:

## Definitions

1. **Void**:

   - The `void` type indicates that a function does not return a value that will be used. It is often used in TypeScript to
     signify that the return value of a function is not meant to be utilized.
   - When a function is declared with a return type of `void`, it can still return `undefined` implicitly, but this is not
     the primary focus of the function's purpose.

2. **Null**:

   - `null` is an intentional assignment value that represents the absence of any object value. It indicates that a variable
     has been explicitly set to "no value."
   - You can assign `null` to variables to denote that they are intentionally empty or have no relevant object.

3. **Undefined**:
   - `undefined` means that a variable has been declared but has not yet been assigned a value. It signifies that the
     variable exists but lacks a defined value.
   - Functions that do not explicitly return a value will return `undefined` by default.

## Key Differences

| Aspect              | Void                         | Null                            | Undefined                    |
| ------------------- | ---------------------------- | ------------------------------- | ---------------------------- |
| **Meaning**         | No usable return value       | Intentionally no value          | Not yet assigned a value     |
| **Assignment**      | Cannot be assigned           | Can be assigned                 | Automatically assigned       |
| **Usage Context**   | Function declarations        | Explicitly indicating emptiness | Uninitialized variables      |
| **Return Behavior** | Implicitly returns undefined | Can be returned explicitly      | Returned when no value given |

## Practical Examples

- **Using Void**:

  ```typescript
  function logMessage(message: string): void {
    console.log(message);
    // No return statement needed
  }
  ```

- **Using Null**:

  ```javascript
  function findUser(id) {
    // Assume user not found
    return null; // Explicitly indicates no user found
  }
  ```

- **Using Undefined**:
  ```javascript
  function getUser(id) {
    let user; // Declared but not initialized
    if (id === 1) {
      user = { name: "Alice" };
    }
    return user; // Returns undefined if id is not 1
  }
  ```

## Conclusion

Understanding the distinctions between `void`, `null`, and `undefined` helps in writing clearer and more predictable code.
Use `void` for functions that do not return values, `null` for intentionally empty values, and `undefined` for uninitialized
variables. This clarity can prevent bugs and enhance code maintenance.

Citations: [1] https://dev.to/za-h-ra/the-difference-between-null-and-undefined-in-javascript-51gc [2]
https://www.schibsted.pl/blog/javascript-dilemma/ [3]
https://stackoverflow.com/questions/74932375/what-is-the-difference-between-void-never-null-and-undefined-in-typescript-wh
[4] https://dev.to/dorin/js-the-difference-between-undefined-null-and-void-0-2l5a [5]
https://www.reddit.com/r/typescript/comments/11dpu05/undefined_vs_null/ [6]
https://coreui.io/blog/what-is-the-difference-between-null-and-undefined-in-javascript/ [7]
https://www.reddit.com/r/typescript/comments/126lvz4/typescript_the_many_types_of_nothing_a_post_about/ [8]
https://teamtreehouse.com/library/typescript-basics/the-any-void-null-and-undefined-types
