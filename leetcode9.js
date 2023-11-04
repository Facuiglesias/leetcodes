// Given an integer x, return true if x is a palindrome, and false otherwise.

// TIME COMPLEXITY:
// SPACE COMPLEXITY:
//AUXILIAR COMPLEXITY:

function isPalindrome(x) {
  const xStringify = x.toString();
  const xArray = xStringify.split("");
  const xArrayReverse = xArray.reverse();
  const xReverse = xArrayReverse.join("");
  const xReverseInt = parseInt(xReverse);
  if (x[0] == "-") {
    return false;
  } else if (x == xReverseInt) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(121));
