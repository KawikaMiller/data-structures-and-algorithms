'use strict'

const Merge = (left, right, arr) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if(left[i] <= right[j]){
      arr[k] = left[i];
      i++;
    }
    else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  if(i === left.length) {
    for(; j < right.length; j++){
      arr[k] = right[j];
      k++;
    }
  }
  else {
    for(; i < left.length; i++){
      arr[k] = left[i];
      k++;
    }
  }

}

const MergeSort = (arr) => {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.floor(n/2);
    let left = [];
    let right = [];
    for(let i = 0; i < mid; i++){
      left.push(arr[i]);
    }
    for(let i = mid; i < arr.length; i++){
      right.push(arr[i]);
    }
    MergeSort(left);
    MergeSort(right);
    Merge(left, right, arr);
  }
}

let myArr = [8, 4, 23, 42, 16, 15];
MergeSort(myArr);
console.log(myArr)

module.exports = {
  Merge,
  MergeSort
}