interface Test {
  a: { b: { c: { d: number } } };
}

const test: Test = {
  a: {
    b: { c: { d: 4 } },
  },
};

const test2: Object = test.a.b.c;

console.log({ test2 });

const test3: Object = test["a"]["b"]["c"];

console.log({ test3 });

const {
  a: {
    b: { c },
  },
} = test;

console.log({ c });

//* Destructive assignment with optional chaining
const obj = {
  foo: {
    bar: {
      baz: "value",
    },
  },
};

// Without optional chaining and destructuring
const value1 = obj.foo && obj.foo.bar && obj.foo.bar.baz;
console.log(value1); // Outputs: 'value'

// With optional chaining and destructuring
const {
  foo: {
    bar: { baz },
  },
} = obj ?? {};
console.log(baz); // Outputs: 'value
