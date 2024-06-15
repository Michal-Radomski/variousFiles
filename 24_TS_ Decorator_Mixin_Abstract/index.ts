//* 1. Decorator exercise 1
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

//* 2. Decorator exercise 2
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

//* 3. Mixin exercise 1
// type Constructor<T = {}> = new (...args: any[]) => T;

// function Timestamped<TBase extends Constructor>(Base: TBase) {
//   return class extends Base {
//     timestamp = new Date();
//   };
// }

// function Activatable<TBase extends Constructor>(Base: TBase) {
//   return class extends Base {
//     isActive = false;

//     activate() {
//       this.isActive = true;
//     }

//     deactivate() {
//       this.isActive = false;
//     }
//   };
// }

// class User {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, ${this.name}!`);
//   }
// }

// const TimestampedActivatableUser = Timestamped(Activatable(User));

// const user = new TimestampedActivatableUser("Alice");
// user.greet(); // Hello, Alice!
// console.log(user.timestamp); // Current timestamp
// user.activate();
// console.log(user.isActive); // true
// user.deactivate();
// console.log(user.isActive); // false

//* 4. Mixin exercise 2
type Constructor<T = {}> = new (...args: any[]) => T;

function Loggable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
    }

    log(message: string) {
      console.log(`[${new Date().toISOString()}] ${message}`);
    }
  };
}

function Serializable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
    }

    serialize() {
      return JSON.stringify(this);
    }

    static deserialize<T>(this: Constructor, json: string): T {
      return Object.assign(new this(), JSON.parse(json));
    }
  };
}

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const LoggableSerializableProduct = Loggable(Serializable(Product));

const product = new LoggableSerializableProduct("Widget", 19.99);
product.log(`Created product: ${product.name}`);
const serialized = product.serialize();
console.log("serialized:", serialized);

const deserializedProduct = LoggableSerializableProduct.deserialize(serialized);
console.log("deserializedProduct:", deserializedProduct);

//* Abstract Class exercise

abstract class Shape {
  /**
   * Calculates the area of the shape.
   * @abstract
   * @returns The area of the shape.
   */
  abstract calculateArea(): number;

  printDescription(): void {
    console.log(`This is a shape with ${this.getNumberOfSides()} sides.`);
  }

  /**
   * Gets the number of sides the shape has.
   * @abstract
   * @returns The number of sides the shape has.
   */
  protected abstract getNumberOfSides(): number;
}

class Rectangle extends Shape {
  private length: number;
  private width: number;

  /**
   * Initializes a new Rectangle instance with the given length and width.
   * @param length The length of the rectangle.
   * @param width The width of the rectangle.
   */
  constructor(length: number, width: number) {
    super();
    this.length = length;
    this.width = width;
  }

  /**
   * Calculates the area of the rectangle (overridden from Shape).
   * @returns The area of the rectangle.
   */
  calculateArea(): number {
    return this.length * this.width;
  }

  /**
   * Gets the number of sides the rectangle has (overridden from Shape).
   * @returns The number of sides the rectangle has.
   */
  protected getNumberOfSides(): number {
    return 4;
  }
}

class Circle extends Shape {
  private radius: number;

  /**
   * Initializes a new Circle instance with the given radius.
   * @param radius The radius of the circle.
   */
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  /**
   * Calculates the area of the circle (overridden from Shape).
   * @returns The area of the circle.
   */
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  /**
   * Gets the number of sides the circle has (overridden from Shape).
   * @returns The number of sides the circle has.
   */
  protected getNumberOfSides(): number {
    return 0; // A circle has no sides
  }
}

// Example usage
const rectangle = new Rectangle(5, 3);
rectangle.printDescription(); // Output: "This is a shape with 4 sides."
console.log(`Area of rectangle: ${rectangle.calculateArea()}`); // Output: "Area of rectangle: 15"

const circle = new Circle(2.5);
circle.printDescription(); // Output: "This is a shape with 0 sides."
console.log(`Area of circle: ${circle.calculateArea()}`); // Output: "Area of circle: 19.634954084936208"
