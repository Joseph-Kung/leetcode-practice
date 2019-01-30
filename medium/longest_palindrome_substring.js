// naive (brute force)
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  let longest = s[0];

  for (let i = 0; i < s.length; i++) {
    let sub = s[i];
    for (let j = i + 1; j < s.length; j++) {
      sub += s[j];
      if (sub.split('') + '' === sub.split('').reverse() + '') {
        if (sub.length >= longest.length) {
          longest = sub;
        }
      };
    }
  }

  return longest;
};


// from center
var longestPalindrome = function (s) {
  let res = '';

  const checkPalindrome = (l, r) => {
    while (l >= 0 && r < s.length) {
      if (s[l] === s[r]) {
        l -= 1;
        r += 1;
      } else {
        break;
      }
    }

    // reset one back to satisfy s[l] === s[r]
    l += 1;
    r -= 1;

    if (r - l + 1 >= res.length) {
      res = s.substring(l, r + 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (i > 0 && s[i] == s[i - 1]) {
      checkPalindrome(i - 1, i);
    }
    checkPalindrome(i, i);
  }
  return res;
};
