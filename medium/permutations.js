// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var permute = function (nums) {
  if (nums.length <= 1) return [nums];

  let first = nums[0];
  let ans = [];
  perms = permute(nums.slice(1, nums.length));

  perms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      let left = perm.slice(0, i);
      let right = perm.slice(i, perm.length);

      let merge = left.concat([first]).concat(right);
      ans.push(merge);
    }
  })
  return ans;
};