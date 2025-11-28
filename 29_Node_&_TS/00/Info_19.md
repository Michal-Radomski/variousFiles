Here is an example of Composition over Inheritance in TypeScript:

```typescript
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
car.start();
```

In this example, instead of having `Car` inherit from `Engine` or `Wheel`, `Car` is composed of these smaller components by
including instances of `Engine` and `Wheel` classes as properties. The `Car` class delegates responsibilities to these
composed objects, which promotes loose coupling and greater flexibility compared to inheritance. This approach is typically
used when the relationship is "has-a" rather than "is-a" as in inheritance.[1]

[1](https://gazar.dev/clean-code/composition-over-inheritance-typescript-best-practice)
[2](https://stackoverflow.com/questions/49002/prefer-composition-over-inheritance)
[3](https://divijsehgal.hashnode.dev/inheritance-vs-composition) [4](https://www.youtube.com/watch?v=nnwD5Lwwqdo)
[5](https://syskool.com/composition-over-inheritance-in-typescript/)
[6](https://www.reddit.com/r/csharp/comments/89js1d/practical_example_of_composition_vs_inheritance/)
[7](https://www.koderhq.com/tutorial/typescript/composition/)
[8](https://dev.to/itnext/learn-and-use-composition-in-javascript-and-typescript-3f17)
[9](https://stackoverflow.com/questions/48757095/typescript-class-composition)
[10](https://www.reddit.com/r/programming/comments/w82f12/why_you_should_favor_composition_over_inheritance/)
