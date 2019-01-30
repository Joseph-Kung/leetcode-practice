// /**
//  * @param {string} s
//  * @return {number}
//  */

// O(n) time and space

var longestPalindrome = function (s) {
  let letters = {};
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]] === 1) {
      letters[s[i]] = 0;
      count += 2;
    } else {
      letters[s[i]] = 1;
    }
  }

  if (count < s.length) {
    count += 1
  }

  return count;
};