// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements
// in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

let nums = [1, 1, 2];

function removeDuplicates(x) {
  let k = 0;
  const nums2 = [];

  for (let i = 1; i < x.length; i++) {
    if (x[i] != x[i + 1]) {
      nums2.push(x[i]);
    }
  }

  nums = nums2;

  return (k = nums2.length);
}

console.log(removeDuplicates(number));
console.log(number);
