// Factory Example
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class CarFactory {
  static createCar(make, model) {
    return new Car(make, model);
  }
}

const myCar = CarFactory.createCar("Toyota", "Corolla");
