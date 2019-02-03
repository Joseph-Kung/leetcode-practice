// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var threeSum = function (nums) {
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    let currArr = nums.slice(0, i).concat(nums.slice(i + 1, nums.length - 1));
    currArr = currArr.sort((a, b) => a - b);
    let diff = 0 - nums[i];
    let isSum = findSum(currArr, diff, nums[i]);

    if (isSum.length > 0) {
      let trio = isSum.map(arr => arr = arr.sort((a, b) => a - b));
      trio.forEach(arr => {
        if (!ans.some(el => el + '' === arr + '')) {
          ans.push(arr)
        }
      })
    }
  }

  return ans;
};

const findSum = (arr, target, third) => {
  let ans = [];
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    if (arr[low] + arr[high] === target) {
      ans.push([arr[low], arr[high], third]);
      low += 1;
    }
    else if (arr[low] + arr[high] > target) {
      high -= 1;
    } else {
      low += 1;
    }
  }

  return ans;
};