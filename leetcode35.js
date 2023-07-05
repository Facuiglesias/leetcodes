// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

const nums = [1, 3, 5, 6],
  target = 0;

function searchInsert(nums, target) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    } else if (nums[i] < target && nums[i + 1] > target) {
      return i + 1;
    } else if (nums[i] > target) {
      return i;
    }
  }
  return nums.length;
}
console.log(searchInsert(nums, target));
