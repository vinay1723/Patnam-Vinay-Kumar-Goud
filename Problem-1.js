// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//   Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//   Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string

const { stdin } = require("process");
const readline = require("readline");
const rl = readline.createInterface(process.stdin);

console.log(
  "Enter the values and specify the operation as following Example: 1 3 add\n1.add\n2.subtract\n3.multiply\n4.divide"
);

rl.on("line", (val) => {
  const [a, b, operation] = val.split(" ");
  main(Number(a), Number(b), operation);
  rl.close();
});

class Calculator {
  static addition(a, b) {
    return ` addition: ${(a + b).toFixed(2)}`;
  }

  static substraction(a, b) {
    return `Subtraction : ${(a - b).toFixed(2)}`;
  }
  static multiplication(a, b) {
    return `Multiplication: ${(a * b).toFixed(2)}`;
  }

  static division(a, b) {
    if (b === 0) return "Invalid operation division : Zero";
    return `Divion: ${(a / b).toFixed(2)}`;
  }
}

function main(a, b, operation) {
  function calculate() {
    switch (operation) {
      case "add":
        console.log(Calculator.addition(a, b));
        break;
      case "subtract":
        console.log(Calculator.substraction(a, b));
        break;
      case "multiply":
        console.log(Calculator.multiplication(a, b));
        break;
      case "divide":
        console.log(Calculator.division(a, b));
        break;
      default:
        return "Invalid operation";
    }
  }

  calculate();
}
