'use strict'

const Stack = require('./stacks');

const bracketValidation = (string) => {
  let bracketStack = new Stack();
  let curlyCount = 0;
  let roundCount = 0;
  let squareCount = 0;
  [...string].forEach(char => {
    if (char === '{') {
      curlyCount++;
    } else if (char === '}') {
      curlyCount--;
    } else if (char === '[') {
      squareCount++
    } else if (char === ']') {
      squareCount--;
    } else if (char === '(') {
      roundCount++;
    } else if (char === ')') {
      roundCount--;
    }
  })

  if (!curlyCount && !roundCount && !squareCount) {
    return true
  } else {
    return false
  }
}

console.log(bracketValidation('[aaaaaaa]a(asdas){kjahsdkja}'));
console.log(bracketValidation('[](){}'));
console.log(bracketValidation('((()))'));
console.log(bracketValidation('((())'));
console.log(bracketValidation('{]})'));
console.log(bracketValidation('{[}]'));