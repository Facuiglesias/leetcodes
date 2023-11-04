// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
// non-alphanumeric characters, it reads the same forward and backward.

// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s) {
  const sClean = s.replace(/[^a-z0-9]/gi, "");
  //   console.log(sClean);
  const s2 = [];
  for (i = sClean.length - 1; i > 0; i--) {
    s2.push(sClean[i]);
  }
  console.log(s2.join(""));
  console.log(sClean);

  if (s2.join("") == sClean) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
