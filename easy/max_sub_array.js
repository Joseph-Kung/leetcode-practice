// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var maxSubArray = function (nums) {
  if (nums.length === 0) return 0;
  let largest = nums[0];
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) largest = nums[i];
    if (currSum + nums[i] >= 0) {
      currSum += nums[i];
      if (currSum > largest) largest = currSum;
    } else {
      currSum = 0;
    }
  }

  return largest;
};