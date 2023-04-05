'use strict'

const insertShiftArray = require('./insertShiftArray')

describe('401 Code Challenge 02, Insert Shift Array', () => {

  test('Should insert a value in the middle of an array with an even length', () => {
    expect(insertShiftArray([1, 2, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
  })

  test('Should insert a value in the middle of an array with an odd length', () => {
    expect(insertShiftArray([1, 2, 3, 5, 6], 4)).toEqual([1, 2, 3, 4, 5, 6]);
  })

  test('Should throw an error if first argument is NOT an array', () => {
    expect(() => insertShiftArray('banana', 'apples').toThrow(Error))
  })

  test('Should insert any kind of value / datatype into the array', () => {
    expect(insertShiftArray([
      1, 
      'apple', 
      'banana', 
      {color: 'red', wheels: 4}
    ], ['charmander', 'bulbasaur', 'squirtle'])).toEqual([
      1, 
      'apple', 
      ['charmander', 'bulbasaur', 'squirtle'], 
      'banana', 
      {color: 'red', wheels: 4}])
  })

})