//* 1. Decorator exercise
// function LogClassName(constructor: Function) {
//   console.log(`Class created: ${constructor.name}`);
// }

// @LogClassName
// class MyClass {
//   constructor() {
//     console.log("MyClass instance created");
//   }
// }

// // When you create an instance of MyClass, the decorator will log the class name
// const instance = new MyClass();
// console.log("instance:", instance);

//* 2. Decorator exercise
function LogMethod(_target: any, propertyName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
  const method = propertyDescriptor.value;

  propertyDescriptor.value = function (...args: any[]) {
    console.log(`Call: ${propertyName}(${args.join(", ")})`);
    const result = method.apply(this, args);
    console.log(`Return: ${result}`);
    return result;
  };

  return propertyDescriptor;
}

class MyMath {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const math = new MyMath();
const result = math.add(2, 3); // Logs: Call: add(2, 3) and Return: 5
console.log("result:", result); // Outputs: 5
