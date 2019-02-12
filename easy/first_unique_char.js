// O(n) time and space

var firstUniqChar = function (s) {
  let counter = {};

  for (let i = 0; i < s.length; i++) {
    if (counter[s[i]] !== undefined) {
      counter[s[i]] += 1;
    } else {
      counter[s[i]] = 1;
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (counter[s[j]] === 1) return j
  }

  return -1;
};