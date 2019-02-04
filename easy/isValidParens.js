// Counting solution only works for one type of parenthesis
var isValid = function (s) {
  let leftParen = 0;
  let leftCurly = 0;
  let leftBracket = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') leftParen += 1;
    if (s[i] === ')') leftParen -= 1;

    if (s[i] === '{') leftCurly += 1;
    if (s[i] === '}') leftCurly -= 1;

    if (s[i] === '[') leftBracket += 1;
    if (s[i] === ']') leftBracket -= 1;
  }

  return (leftParen === 0 && leftCurly === 0 && leftBracket === 0) ? true : false;
};

// Using a stack
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')' || s[i] === '(') {
      if (stack.length > 0 && stack[stack.length - 1] === '(' && s[i] === ')') {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }

    if (s[i] === '}' || s[i] === '{') {
      if (stack.length > 0 && stack[stack.length - 1] === '{' && s[i] === '}') {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }

    if (s[i] === ']' || s[i] === '[') {
      if (stack.length > 0 && stack[stack.length - 1] === '[' && s[i] === ']') {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }

  console.log(stack);
  return stack.length === 0 ? true : false;
};