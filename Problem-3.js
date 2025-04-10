// Problem-3: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

//   Output: (examples)
//     1) input a = 1, then output : 1
//     2) input a = 2, then output : 1
//     3) input a = 3, then output : 1, 3, 5
//     4) input a = 4, then output : 1, 3, 5
//     5) input a = 5, then output : 1, 3, 5, 7, 9
//     6) input a = 6, then output : 1, 3, 5, 7, 9
//     .
//     .
//     7) input a = x, then output : 1, 3, 5, 7, .......

const readline = require("readline");
const rl = readline.createInterface(process.stdin);

rl.question("Enter the number:", (num) => {
  let count = Number(num);
  generate(count);
  rl.close();
});

function generate(num) {
  num = num % 2 === 0 ? num - 1 : num;
  let result = "";
  let val = 1;
  for (let i = 0; i < num - 1; i++) {
    result += val + ", ";
    val += 2;
  }
  result += val;
  console.log(`input = ${num}, then output : ${result}`);
}
