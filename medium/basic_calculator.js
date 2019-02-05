// /**
//  * @param {string} s
//  * @return {number}
//  */
var calculate = function (s) {
  let stack = [];
  const chars = splitChars(s);
  let ans = 0;
  let sign = '+';

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '+') {
      sign = '+';
      continue;
    } else if (chars[i] === '-') {
      sign = '-';
      continue;
    } else if (chars[i] === '*') {
      sign = '*';
      continue;
    } else if (chars[i] === '/') {
      sign = '/';
      continue;
    }

    if (sign === '+') {
      stack.push(chars[i]);
    } else if (sign === '-') {
      stack.push(-chars[i]);
    } else if (sign === '/') {
      let prev = stack.pop();
      if (prev < 0) {
        stack.push(Math.ceil(prev / chars[i]))
      } else {
        stack.push(Math.floor(prev / chars[i]));
      }
    } else if (sign === '*') {
      stack.push(stack.pop() * chars[i]);
    }
  }
  console.log(stack)
  for (let i = 0; i < stack.length; i++) {
    ans += stack[i];
  }

  return ans;
};

const splitChars = str => {
  str = str.trim();
  console.log(str);
  let result = [];
  let tempStr = '';
  const operators = ['+', '-', '*', '/'];

  for (let i = 0; i < str.length; i++) {
    if (!operators.includes(str[i])) {
      tempStr += str[i];
      if (i === str.length - 1) result.push(parseInt(tempStr));
    } else {
      result.push(parseInt(tempStr));
      result.push(str[i]);
      tempStr = '';
    }
  }

  return result;
}