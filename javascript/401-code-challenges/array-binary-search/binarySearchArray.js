'use strict'

const binarySearch = (sortedArr, searchKey) => {
  let leftBound = 0;
  let rightBound = sortedArr.length - 1;
  let middleIdx;

  while (leftBound <= rightBound) {
    middleIdx = Math.floor((leftBound + rightBound) / 2);
    if (sortedArr[middleIdx] < searchKey) {
      leftBound = middleIdx + 1;
    } 
    else if (sortedArr[middleIdx] > searchKey) {
      rightBound = middleIdx - 1;
    }
    else return middleIdx;
  }

  return -1;
}

module.exports = binarySearch;