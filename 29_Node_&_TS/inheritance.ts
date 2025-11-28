class Engine {
  start(): void {
    console.log("Engine started");
  }
}

class Wheel {
  rotate(): void {
    console.log("Wheel rotating");
  }
}

class Car {
  private engine: Engine;
  private wheels: Wheel[];

  constructor() {
    this.engine = new Engine();
    this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  start(): void {
    this.engine.start();
    this.wheels.forEach((wheel) => wheel.rotate());
    console.log("Car started");
  }
}

const car = new Car();
console.log("car:", car);
car.start();
