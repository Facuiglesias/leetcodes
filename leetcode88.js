// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.

// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

const nums1 = [0],
  m = 0,
  nums2 = [1],
  n = 1;

// let result = [];
// const nums1Without0 = nums1.filter((item) => item != 0);
// const nums2Without0 = nums2.filter((item) => item != 0);
// while (nums1Without0.length || nums2Without0.length) {
//   if (nums1Without0[0] < nums2Without0[0]) {
//     //   console.log("nums1 => " + nums1Without0);
//     //   console.log("nums2 => " + nums2Without0);
//     result.push(nums1Without0[0]);
//     nums1Without0.shift();
//   } else if (nums2Without0[0] < nums1Without0[0]) {
//     //   console.log("nums1 => " + nums1Without0);
//     //   console.log("nums2 => " + nums2Without0);
//     result.push(nums2Without0[0]);
//     nums2Without0.shift();
//   } else if (nums1Without0[0] == nums2Without0[0]) {
//     //   console.log("nums1 => " + nums1Without0);
//     //   console.log("nums2 => " + nums2Without0);
//     result.push(nums1Without0[0]);
//     nums1Without0.shift();
//     result.push(nums2Without0[0]);
//     nums2Without0.shift();
//   } else if (!nums1Without0[0]) {
//     result.push(nums2Without0[0]);
//     nums2Without0.shift();
//   } else if (!nums2Without0[0]) {
//     result.push(nums1Without0[0]);
//     nums1Without0.shift();
//   }
// }
// while (nums1.length > 0) {
//   nums1.pop();
// }
// for (i = 0; i < result.length; i++) {
//   nums1.push(result[i]);
// }
// return nums1;

function merge(nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
    nums1[m + i] = nums2[i];
  }
  nums1.sort(function (a, b) {
    return a - b;
  });
  console.log(nums1);
}

console.log(merge(nums1, m, nums2, n));
