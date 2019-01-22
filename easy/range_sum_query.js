// 
// @param {number[]} nums
//
//  Your NumArray object will be instantiated and called as such:
//  var obj = Object.create(NumArray).createNew(nums)
//  var param_1 = obj.sumRange(i,j)
// 

// BruteForce 
var NumArray = function (nums) {
  this.data = nums;
};

 
NumArray.prototype.sumRange = function (i, j) {
  let sum = 0;
  for (let k = i; k <= j; k++) {
    sum += this.data[k];
  }

  return sum;
};



 