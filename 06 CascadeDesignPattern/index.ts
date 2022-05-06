//* https://medium.com/tiny-code-lessons/javascript-cascade-design-pattern-990b1a761ff4

let string: string = "string cheese";
let string2: string = string.split("").reverse().join();
console.log("string2:", string2);

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
