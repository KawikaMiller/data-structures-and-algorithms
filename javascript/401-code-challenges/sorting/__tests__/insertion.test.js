'use strict'

const {Insert, InsertionSort} = require('../insertion/insertion');

describe('Testing the InsertionSort method...', () => {

  test('Array of [8, 4, 23, 42, 16, 15] should return [ 4, 8, 15, 16, 23, 42 ]', () => {
    expect(InsertionSort([8,4,23,42,16,15])).toStrictEqual([ 4, 8, 15, 16, 23, 42 ])
  })

  test('Array of [8, 4, 23, 42, 16, 15] should return [ -2, 5, 8, 12, 18, 20 ]', () => {
    expect(InsertionSort([20,18,12,8,5,-2])).toStrictEqual([ -2, 5, 8, 12, 18, 20 ])
  })

  test('Array of [8, 4, 23, 42, 16, 15] should return [ 5, 5, 5, 7, 7, 12 ]', () => {
    expect(InsertionSort([5,12,7,5,5,7])).toStrictEqual([ 5, 5, 5, 7, 7, 12 ])
  })

  test('Array of [8, 4, 23, 42, 16, 15] should return [ 2, 3, 5, 7, 11, 13 ]', () => {
    expect(InsertionSort([2,3,5,7,13,11])).toStrictEqual([ 2, 3, 5, 7, 11, 13 ])
  })

})