'use strict'

const reverseArray = (arr) => {
  if (arr.length && typeof arr !== 'string') {
    let revArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
      revArr.push(arr[i]);
    }
    return revArr;    
  } else {
    // line below was not working correctly? Saying that it was receiving an incorrect argument
    // throw new Error('Received an invalid argument');
    return 'Received an invalid argument'
  }
}

module.exports = reverseArray;