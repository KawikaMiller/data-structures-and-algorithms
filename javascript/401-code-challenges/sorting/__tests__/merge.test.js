'use strict'

const {Merge, MergeSort} = require('../merge/merge');

describe('Testing the MergeSort method...', () => {

  test('Array of [8, 4, 23, 42, 16, 15] should return [ 4, 8, 15, 16, 23, 42 ]', () => {
    let myArr = [8,4,23,42,16,15];
    MergeSort(myArr);
    expect(myArr).toStrictEqual([ 4, 8, 15, 16, 23, 42 ])
  })

  test('Array of [8, 4, 23, 42, 16, 15] should return [ -2, 5, 8, 12, 18, 20 ]', () => {
    let myArr = [20,18,12,8,5,-2];
    MergeSort(myArr);
    expect(myArr).toStrictEqual([ -2, 5, 8, 12, 18, 20 ])
  })

  test('Array of [8, 4, 23, 42, 16, 15] should return [ 5, 5, 5, 7, 7, 12 ]', () => {
    let myArr = [5,12,7,5,5,7];
    MergeSort(myArr);
    expect(myArr).toStrictEqual([ 5, 5, 5, 7, 7, 12 ])
  })

  test('Array of [8, 4, 23, 42, 16, 15] should return [ 2, 3, 5, 7, 11, 13 ]', () => {
    let myArr = [2,3,5,7,13,11];
    MergeSort(myArr);
    expect(myArr).toStrictEqual([ 2, 3, 5, 7, 11, 13 ])
  })

})