// /**
//  * @param {number[][]} points
//  * @param {number} K
//  * @return {number[][]}
//  */

var kClosest = function (points, K) {
  // Javascript sort method does not work comparing numbers. Must do a comparison if using numbers
  let sorted = points.sort((point1, point2) => Math.sqrt(((point1[0]) ** 2) + ((point1[1]) ** 2)) - Math.sqrt(((point2[0]) ** 2) + ((point2[1]) ** 2)));
  return sorted.slice(0, K)
};