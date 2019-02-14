var uncommonFromSentences = function (A, B) {
  let words = {};
  let aWords = A.split(' ');
  let bWords = B.split(' ');

  for (let i = 0; i < aWords.length; i++) {
    if (words[aWords[i]]) {
      words[aWords[i]] += 1
    } else {
      words[aWords[i]] = 1;
    }
  }

  for (let j = 0; j < bWords.length; j++) {
    if (words[bWords[j]] !== undefined) {
      words[bWords[j]] += 1;
    } else {
      words[bWords[j]] = 1;
    }
  }

  return Object.keys(words).filter(word => words[word] === 1);
};