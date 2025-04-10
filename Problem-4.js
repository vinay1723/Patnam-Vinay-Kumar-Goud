// Problem-4: Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//   (examples)
//   input: [1,2,8,9,12,46,76,82,15,20,30]
//   Output:
//     {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}

const readline = require("readline");
const rl = readline.createInterface(process.stdin);

rl.question("Enter the space separated list of integers", (val) => {
  const nums = val.split(" ").map(Number);
  console.log(MultiplesCount(nums));
  rl.close();
});

function MultiplesCount(nums) {
  let count = {};
  //setting multiple count for 1-9 numbers as 0 in count object
  for (let i = 1; i <= 9; i++) {
    count[i] = 0;
  }
  //For each num in nums array undergoing checking if it is a multiple of any number from 1-9
  for (let num of nums) {
    for (let i = 1; i <= 9; i++) {
      if (num % i === 0) {
        count[i] += 1;
      }
    }
  }

  return count;
}
