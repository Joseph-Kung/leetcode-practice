// O(n)
// Similar to substrings with min/max k unique characters
// Two pointers and a sliding window

var totalFruit = function (tree) {
  let start = 0, end = 0;
  let seen = { [tree[0]]: 1 };
  let windowSize = 1;

  for (let i = 1; i < tree.length; i++) {
    if (seen[tree[i]] !== undefined) {
      seen[tree[i]] += 1;
    } else {
      seen[tree[i]] = 1;
    }

    end += 1;

    while (Object.keys(seen).length > 2) {
      seen[tree[start]] -= 1;
      if (seen[tree[start]] === 0) delete seen[tree[start]];
      start += 1;
    }

    if (end - start + 1 > windowSize) {
      windowSize = end - start + 1;
    }

  }
  return windowSize;
};