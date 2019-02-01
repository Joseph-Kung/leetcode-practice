// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// O(n^2) time and O(n) space
// dynamic programming
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  let longest = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    let j = 0;
    while (j < i) {
      if (nums[j] < nums[i]) {
        longest[i] = Math.max(longest[j] + 1, longest[i]);
      }
      j += 1;
    }
  }

  return Math.max(...longest);
};