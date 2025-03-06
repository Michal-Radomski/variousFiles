The key difference between `@ts-expect-error` and `@ts-ignore` in TypeScript lies in their behavior and intended use:

### **@ts-ignore**

- Suppresses all TypeScript errors on the next line, regardless of whether an error exists or not.
- Does not provide feedback if there is no error to suppress, which can lead to forgotten or unnecessary directives remaining
  in the code.
- Useful in situations where you want to ignore an error without expecting it to be resolved soon or when working with larger
  projects where errors might be less predictable[1][2].

### **@ts-expect-error**

- Suppresses errors on the next line, but with an additional safeguard: if there is no error to suppress, the compiler will
  throw a warning (`Unused '@ts-expect-error' directive`).
- Introduced in TypeScript 3.9, it is more precise and helps developers track when an error has been resolved, ensuring
  unnecessary directives are removed.
- Recommended for use in test code, smaller projects, or scenarios where the error is expected to be temporary and fixed
  soon[1][2][3].

### **Comparison Table**

| Feature           | @ts-ignore                     | @ts-expect-error                |
| ----------------- | ------------------------------ | ------------------------------- |
| Suppresses errors | Yes                            | Yes                             |
| Warns if no error | No                             | Yes                             |
| Use case          | Larger projects, unknown fixes | Temporary/test code scenarios   |
| Risk              | Can hide future errors         | Minimal risk of unused comments |

In general, `@ts-expect-error` is preferred for its stricter behavior, while `@ts-ignore` is more flexible but riskier if not
managed carefully[1][2][3].

Citations: [1] https://timmousk.com/blog/typescript-ignore-next-line/ [2]
https://help.klocwork.com/2023/en-us/reference/js.ts.prefer.ts.expect.error.htm [3]
https://www.totaltypescript.com/workshops/typescript-pro-essentials/annotations-and-assertions/the-ts-expect-error-directive-in-typescript
[4] https://www.totaltypescript.com/concepts/how-to-use-ts-expect-error [5]
https://dev.to/maafaishal/ts-expect-error-over-ts-ignore-in-typescript-5140 [6]
https://typescript-eslint.io/rules/prefer-ts-expect-error/ [7] https://www.youtube.com/watch?v=HdZALRZzjrQ [8]
https://www.stefanjudis.com/today-i-learned/the-difference-ts-ignore-and-ts-expect-error/

In addition to `@ts-expect-error` and `@ts-ignore`, TypeScript provides other directive comments to manage type checking.
Here are the main ones:

### **1. @ts-nocheck**

- Disables TypeScript type checking for the entire file.
- Useful for legacy files or when migrating to TypeScript incrementally.
- Example:
  ```typescript
  // @ts-nocheck
  const x = "This will not be checked by TypeScript";
  ```

### **2. @ts-check**

- Enables TypeScript type checking for a file, even if it has a `.js` extension.
- Commonly used in JavaScript files to enforce stricter type checking.
- Example:
  ```javascript
  // @ts-check
  const x = "This will now be checked by TypeScript";
  ```

### **Comparison of Directives**

| Directive          | Purpose                                        | Scope       |
| ------------------ | ---------------------------------------------- | ----------- |
| `@ts-ignore`       | Suppresses errors on the next line             | Single line |
| `@ts-expect-error` | Suppresses errors but warns if no error exists | Single line |
| `@ts-nocheck`      | Disables type checking for the file            | Entire file |
| `@ts-check`        | Enables type checking in `.js` files           | Entire file |

These directives allow developers to manage TypeScript checks flexibly, especially during migrations or when dealing with
legacy codebases.

Citations: [1] https://dev.to/maafaishal/ts-expect-error-over-ts-ignore-in-typescript-5140 [2]
https://www.totaltypescript.com/workshops/typescript-pro-essentials/annotations-and-assertions/the-ts-ignore-directive-in-typescript
[3] https://dev.to/15five/how-to-temporarily-ignore-errors-during-a-typescript-migration-doe [4]
https://stackoverflow.com/questions/55632954/ignore-all-errors-in-a-typescript-file [5]
https://www.typescriptlang.org/docs/handbook/2/understanding-errors.html [6]
https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html [7]
https://engineering.udacity.com/handling-errors-like-a-pro-in-typescript-d7a314ad4991?gi=452c646cd320 [8]
https://dev.to/stanlisberg/7-common-errors-and-possible-fix-every-typescript-developers-should-know-5585
