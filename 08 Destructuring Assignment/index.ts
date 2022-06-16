interface Test {
  a: {b: {c: {d: number}}};
}

const test: Test = {
  a: {
    b: {c: {d: 4}},
  },
};

const test2: Object = test.a.b.c;

console.log({test2});

const test3: Object = test["a"]["b"]["c"];

console.log({test3});

const {
  a: {
    b: {c},
  },
} = test;

console.log({c});
