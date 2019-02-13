var shortestToChar = function (S, C) {
  let ans = new Array(S.length);
  let prev = -Number.MAX_VALUE;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) prev = i;
    ans[i] = i - prev;
  }

  prev = Number.MAX_VALUE;

  for (let j = S.length - 1; j >= 0; j--) {
    if (S[j] === C) prev = j;
    ans[j] = Math.min(ans[j], prev - j)
  }

  return ans
};