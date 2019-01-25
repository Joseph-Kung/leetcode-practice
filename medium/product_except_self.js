// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

// O(n) runtime and O(n) space
var productExceptSelf = function (nums) {
  const ans = new Array(nums.length).fill(1);

  let upCount = 1;
  _.range(nums.length).forEach(idx => {
    ans[idx] *= upCount;
    upCount *= nums[idx];
  })

  let downCount = 1;
  _.range(nums.length).reverse().forEach(idx => {
    ans[idx] *= downCount;
    downCount *= nums[idx];
  })

  return ans;
};