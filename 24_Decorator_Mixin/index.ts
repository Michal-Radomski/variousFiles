//* 1. Decorator exercise
function LogClassName(constructor: Function) {
  console.log(`Class created: ${constructor.name}`);
}

@LogClassName
class MyClass {
  constructor() {
    console.log("MyClass instance created");
  }
}

// When you create an instance of MyClass, the decorator will log the class name
const instance = new MyClass();
console.log("instance:", instance);
