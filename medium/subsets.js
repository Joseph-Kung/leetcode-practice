// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */


var subsets = function (nums) {
  if (nums.length === 0) return [[]];
  let first = nums[0];
  let subs = subsets(nums.slice(1, nums.length));

  return subs.concat(subs.map(sub => [first].concat(sub)));
};