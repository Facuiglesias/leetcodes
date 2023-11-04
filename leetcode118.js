// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown

const numsRows = 5;
const result = [];

function generate(n) {
  for (let i = 0; i < numsRows; i++) {
    const element = [];
    for (let j = 0; j < i + 1; j++) {
      // if (i > 1) {
      //   const value = [];
      //   for (let k = 0; k < i - 1; k++) {
      //     const sum = result[i - 1];
      //     console.log(sum[k]);
      //     console.log(sum[k + 1]);
      //     value.push(sum[k] + sum[k + 1]);
      //   }
      //   element.push(1);
      //   element.push(value);
      //   element.push(1);
      //   break;
      // }
      let row = 1;
      element.push(row);
    }
    result.push(element);
  }
  console.log(result.length);
  return result;
}

console.log(generate(numsRows));
