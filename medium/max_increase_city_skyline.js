// Brute force 
// @param {number[][]} grid
// @return {number}
 
var maxIncreaseKeepingSkyline = function (grid) {
  let sum = 0;
  let leftView = []

  // left and right views
  for (let i = 0; i < grid.length; i++) {
    let subArr = []
    for (let j = 0; j < grid[i].length; j++) {
      subArr.push(grid[j][i]);
    }
    leftView.push(subArr);
  }

  // find difference between smallest skyline
  for (let k = 0; k < grid.length; k++) {
    for (let l = 0; l < grid[k].length; l++) {
      if (Math.max(...grid[k]) < Math.max(...leftView[l])) {
        sum += Math.max(...grid[k]) - grid[k][l];
      } else {
        sum += Math.max(...leftView[l]) - grid[k][l];
      }
    }
  }

  return sum;
};