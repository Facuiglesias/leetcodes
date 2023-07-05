// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

const s = "   fly me   to   the moon  ";

function lengthOfLastWord(s) {
  let i = 0;
  const sToArr = s.split(" ");
  while (i < sToArr.length) {
    if (sToArr[i] == "") {
      sToArr.splice(i, 1);
    } else {
      ++i;
    }
  }
  console.log(sToArr);
  const arrLastElement = sToArr.slice(-1);
  const elementToString = arrLastElement.toString();
  return elementToString.length;
}

console.log(lengthOfLastWord(s));
