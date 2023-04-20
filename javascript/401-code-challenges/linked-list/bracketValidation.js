'use strict'

const Stack = require('./stacks');

const bracketValidation = (string) => {
  let bracketStack = new Stack();

  // break the string into individual characters
  let stringArr = [...string];
  
  // iterate through the array of string characters
  for(const char of stringArr){
    
    // if the character is an opening bracket, push it into the stack
    if (char.match(/\{|\[|\(/)) {
      bracketStack.push(char)

    // if the character is a close bracket, check to see if the stack is currently empty
    } else if (char.match(/\}|\]|\)/)) {

      // if the stack is currently empty and the next character is a closing bracket then we know that is an invalid way of using brackets so return false and stop the loop
      if (bracketStack.isEmpty()) {
        return false;
      }

      // get the top value of our stack
      let openBracket = bracketStack.peek();

      // compare top value of stack to current character, if they match bracket types then pop the top value from the stack
      if (openBracket === '[' && char === ']') {
        bracketStack.pop();
      } else if(openBracket === '{' && char === '}') {
        bracketStack.pop();
      } else if(openBracket === '(' && char === ')') {
        bracketStack.pop();
      }
    }
  }

  // if there are no more open brackets left in the stack, then we know that every opening bracket had a corresponding closing bracket and we know the string is valid and return true, if not it's invalid and return false
  if (bracketStack.isEmpty()){
    return true
  } else {
    return false
  }

}

module.exports = bracketValidation;