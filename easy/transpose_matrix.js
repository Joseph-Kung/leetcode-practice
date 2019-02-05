// /**
//  * @param {number[][]} A
//  * @return {number[][]}
//  */
var transpose = function (A) {
  let transposed = [];

  for (let col = 0; col < A[0].length; col++) {
    let subArr = [];
    for (let row = 0; row < A.length; row++) {
      subArr.push(A[row][col]);
    }

    transposed.push(subArr);
  }

  return transposed;
};

// O(col x row) time