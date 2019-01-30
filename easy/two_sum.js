// O(n) time and space

var twoSum = function (nums, target) {
  let diff = {};

  for (let i = 0; i < nums.length; i++) {
    if (diff[nums[i]] !== undefined) {
      return [diff[nums[i]], i]
    } else {
      diff[(target - nums[i])] = i
    }
  }
};