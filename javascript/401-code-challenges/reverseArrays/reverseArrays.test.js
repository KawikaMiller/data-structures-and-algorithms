'use strict'

const reverseArray = require('./reverseArrays');

describe('401 Code Challenge 01, Reversing Arrays', () => {

  test('Should reverse an array of numbers', () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
  });

  test('Should reverse an array of strings', () => {
    expect(reverseArray(['apple', 'orange', 'banana'])).toEqual(['banana', 'orange', 'apple'])
  });

  test('Should throw an error if array is empty', () => {
    expect(reverseArray([])).toEqual('Received an invalid argument')
  });

  test('Should throw an error if argument is not an array', () => {
    expect(reverseArray('anArray')).toEqual('Received an invalid argument')
  });

  test('Should throw an error if argument is not an array', () => {
    expect(reverseArray(100)).toEqual('Received an invalid argument')
  });

  test('Should throw an error if argument is not an array', () => {
    expect(reverseArray({year: 1998, color: 'red', make: 'toyota'})).toEqual('Received an invalid argument')
  });

})