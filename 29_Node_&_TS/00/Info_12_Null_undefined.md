In TypeScript, `null`, `undefined`, and `unknown` are distinct types used to handle different scenarios. Here's how you can
type them:

## Null and Undefined

- **Null and Undefined Types**: These are primitive types in TypeScript. By default, `null` and `undefined` can be assigned
  to any type, but when using the `--strictNullChecks` flag, they are only assignable to themselves, `any`, and `unknown`.
  `undefined` can also be assigned to `void`[1][2].

  ```typescript
  let n: null = null; // Only null can be assigned
  let u: undefined = undefined; // Only undefined can be assigned
  ```

- **Usage in Types**: You can use the union type operator (`|`) to allow a variable to be either a specific type or
  `null`/`undefined`.

  ```typescript
  let value: string | null | undefined = null;
  value = "hello";
  value = undefined;
  ```

## Unknown Type

- **Unknown Type**: Introduced in TypeScript 3.0, `unknown` is a type-safe alternative to `any`. It represents a value that
  could be anything, but unlike `any`, it requires explicit type checking before using its value[7][8].

  ```typescript
  let unknownValue: unknown = "hello";
  // To use unknownValue, you need to check its type first
  if (typeof unknownValue === "string") {
    console.log(unknownValue);
  }
  ```

- **Usage**: Use `unknown` when you're unsure about the type of a value but want to ensure type safety. It's often used with
  type guards to narrow down the type.

## Best Practices

- **Use `undefined` for Optional Values**: In TypeScript, `undefined` is commonly used to represent optional values,
  especially with optional properties (`?`)[3].

  ```typescript
  type Store = { currentUserId?: string };
  ```

- **Use `null` for Explicit Non-Values**: Use `null` when you want to explicitly indicate that a value is absent or has been
  set to a non-value state[3].

- **Enable `strictNullChecks`**: This flag helps prevent common errors by restricting where `null` and `undefined` can be
  assigned[1][5].

- **Prefer `unknown` Over `any`**: For better type safety, use `unknown` instead of `any` when dealing with uncertain
  types[7][8].

Citations: [1] https://www.typescriptlang.org/docs/handbook/basic-types.html [2]
https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html [3]
https://www.reddit.com/r/typescript/comments/11dpu05/undefined_vs_null/ [4] https://www.youtube.com/watch?v=tKGiAxLXDxk [5]
https://www.w3schools.com/typescript/typescript_null.php [6] https://stackoverflow.com/questions/51439843/unknown-vs-any [7]
https://mariusschulz.com/blog/the-unknown-type-in-typescript.html [8]
https://blog.logrocket.com/when-to-use-never-unknown-typescript/

---

Answer from Perplexity:
https://www.perplexity.ai/search/how-to-type-null-undefined-and-EDFHMPNMSxqMSKF5XFpfLQ?utm_source=copy_output
