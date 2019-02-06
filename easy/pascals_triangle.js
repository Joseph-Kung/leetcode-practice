var generate = function (numRows) {
  if (numRows === 0) return [1];
  let ans = [1];

  let prev = generate(numRows - 1);

  for (let i = 0; i < prev.length; i++) {
    if (prev[i + 1]) {
      ans.push(prev[i] + prev[i + 1]);
    } else {
      ans.push(1);
    }
  }

  return ans;
};