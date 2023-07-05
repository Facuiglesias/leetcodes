// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

const digits = [
  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
];

function plusOne(digits) {
  let change = 0;
  if (digits.length < 16) {
    const value = parseInt(digits.join("")) + 1;
    const arr = value.toString();
    return arr.split("");
  } else {
    const reverseArr = digits.reverse();
    for (i = 0; reverseArr[i] == 9; i++) {
      reverseArr[i] = 0;
      change++;
      if (reverseArr[i + 1] == undefined) {
        reverseArr.push(1);
        return reverseArr.reverse();
      }
    }
    reverseArr[change] += 1;
    return reverseArr.reverse();
  }
}
console.log(plusOne(digits));
