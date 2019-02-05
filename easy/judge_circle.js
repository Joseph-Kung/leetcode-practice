// O(n) time, O(1) space
var judgeCircle = function (moves) {
  let horizontal = 0;
  let vertical = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'L') horizontal -= 1;
    if (moves[i] === 'R') horizontal += 1;

    if (moves[i] === 'U') vertical += 1;
    if (moves[i] === 'D') vertical -= 1;
  }

  return (horizontal === 0 && vertical === 0) ? true : false;
};