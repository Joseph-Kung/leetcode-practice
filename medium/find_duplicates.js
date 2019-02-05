// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

// O(n) time and space
var findDuplicates = function (nums) {
  let counter = {};
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (counter[nums[i]] !== undefined) {
      ans.push(nums[i]);
    } else {
      counter[nums[i]] = 1;
    }
  }

  return ans;
};