'use strict'

const Insert = (array, value) => {
  let i = 0;
  let temp = 0;
  while (value > array[i]) {
    i++;
  }
  while (i < array.length) {
    temp = array[i];
    array[i] = value;
    value = temp;
    i++;
  }
  array[i] = value;
}

const InsertionSort = (array) => {
  let sorted = [];
  sorted[0] = array[0];
  for(let i = 1; i < array.length; i++) {
    Insert(sorted, array[i]);
  }
  return sorted;
}

// console.log(InsertionSort([8,4,23,42,16,15]));
// console.log(InsertionSort([20,18,12,8,5,-2]));
// console.log(InsertionSort([5,12,7,5,5,7]));
// console.log(InsertionSort([2,3,5,7,13,11]));

module.exports = {
  Insert,
  InsertionSort
}