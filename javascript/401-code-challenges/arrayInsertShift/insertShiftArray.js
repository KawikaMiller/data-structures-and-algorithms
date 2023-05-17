'use strict'

const insertShiftArray = (ogArr, newValue) => {
  if (!Array.isArray(ogArr)) {
    throw new Error('Invalid argument, first argument needs to be an array')
  }

  let newArr = [];
  let i = 0;
  let middleIdx = ogArr.length / 2;

  for (; i < middleIdx; i++){
    newArr.push(ogArr[i])
  }

  newArr.push(newValue);

  for(; i < ogArr.length; i++) {
    newArr.push(ogArr[i])
  }

  return newArr;
}

module.exports = insertShiftArray;