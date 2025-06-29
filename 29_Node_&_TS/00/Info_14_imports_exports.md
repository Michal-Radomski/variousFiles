In CommonJS, the equivalents for the ES6 module export statements:

- `export default redisClient`
- `export const redisClient`

are as follows:

## Equivalent for `export default redisClient`

This ES6 syntax exports `redisClient` as the default export. In CommonJS, the equivalent is to assign the object directly to
`module.exports`:

```js
module.exports = redisClient;
```

This means when another file requires this module, it will get the `redisClient` object directly:

```js
const redisClient = require("./redisClientFile");
```

## Equivalent for `export const redisClient`

This ES6 syntax exports `redisClient` as a named export. In CommonJS, this is done by adding a property to the `exports`
object:

```js
exports.redisClient = redisClient;
```

Or equivalently:

```js
module.exports.redisClient = redisClient;
```

Then, when requiring this module, you destructure the named export:

```js
const { redisClient } = require("./redisClientFile");
```

## Summary Table

| ES6 Export Syntax            | CommonJS Equivalent                  | Importing in CommonJS                        |
| ---------------------------- | ------------------------------------ | -------------------------------------------- |
| `export default redisClient` | `module.exports = redisClient;`      | `const redisClient = require('./file');`     |
| `export const redisClient`   | `exports.redisClient = redisClient;` | `const { redisClient } = require('./file');` |

## Additional Notes

- ES6 default exports become a `default` property on the `exports` object in transpiled CommonJS, but the common practice is
  to assign directly to `module.exports` for default exports in pure CommonJS[1][5].
- You can combine default and named exports in CommonJS by assigning the default export to `module.exports` and attaching
  named exports as properties, e.g.:

```js
module.exports = redisClient;
module.exports.someOtherExport = someOtherValue;
```

- In practice, for redis clients in Node.js, many projects export the client as a named export object for easier
  destructuring and clarity[6].

This approach ensures compatibility and clarity when migrating or interoperating between ES6 modules and CommonJS modules.

[1] https://stackoverflow.com/questions/40294870/module-exports-vs-export-default-in-node-js-and-es6 [2]
https://stackoverflow.com/questions/43669723/how-make-const-variable-available-to-other-file/43670067 [3]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export [4]
https://github.com/redis/node-redis/issues/1865 [5] https://nodejs.org/api/modules.html [6]
https://stackoverflow.com/questions/73253638/how-to-export-redis-in-nodejs-to-different-routes [7]
https://blog.andrewbran.ch/default-exports-in-commonjs-libraries/ [8]
https://mgregersen.dk/converting-a-typescript-project-from-cjs-to-esm-the-ultimate-how-to/ [9]
https://www.typescriptlang.org/docs/handbook/modules/appendices/esm-cjs-interop.html [10]
https://www.typescriptlang.org/docs/handbook/2/modules.html
