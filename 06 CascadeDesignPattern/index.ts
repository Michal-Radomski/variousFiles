//* https://medium.com/tiny-code-lessons/javascript-cascade-design-pattern-990b1a761ff4

let string: string = "string cheese";
let string2: string = string.split("").reverse().join();
console.log("string2:", string2);

//* ---

function number(this: any, value: number): void {
  this.value = value;
  this.plus = function (sum) {
    this.value += sum;
    return this;
  };
  this.return = function () {
    return this.value;
  };
  console.log("this:", this);
  return this;
}
number.prototype.minus = function (min) {
  this.value -= min;
  return this;
};
console.log("new number(5).plus(1).minus(2).return():", new number(5).plus(1).minus(2).return()); // 4

//* ---

function init(number: number) {
  let _Key: number = Math.random() * 100;
  let n = {
    value: number,
    plus: function (sum) {
      n.value += sum;
      return n;
    },
    return: function () {
      return n.value;
    },
  };
  return n;
}
console.log("init(1).plus(1).plus(2).return():", init(1).plus(1).plus(2).return()); // 4

// * ---

{
  let Calc = function (this: any): void {
    this.result = 0 as number;
    console.log("this:", this);

    this.add = function () {
      for (let x = 0; x < arguments.length; x++) {
        this.result += arguments[x];
      }
      return this;
    };

    this.sub = function () {
      for (let x = 0; x < arguments.length; x++) {
        this.result -= arguments[x];
      }
      return this;
    };

    this.multiply = function () {
      if (this.result == 0) this.result = 1;
      for (let x = 0; x < arguments.length; x++) {
        this.result *= arguments[x];
      }
      return this;
    };

    this.div = function () {
      if (this.result == 0) return this;
      for (let x = 0; x < arguments.length; x++) {
        this.result /= arguments[x];
      }
      return this;
    };

    this.eq = function () {
      return this.result;
    };
  };

  let cal1 = new Calc();

  console.log("cal1.add(3).sub(1).add(2):", cal1.add(3).sub(1).add(2)); // Here result = 4;
}
