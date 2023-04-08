'use strict';

// Require our linked list implementation
const {LinkedList, Node} = require('../index');

describe('Testing Linked List capabilities', () => {

  test('Can successfully instantiate an empty linked list', () => { 
    let emptyList = new LinkedList();
    expect(emptyList.head.value).toBeFalsy();
  });

  test('Can properly insert into the linked list', () => { 
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');
    testList.insert('purple');
    expect(testList.toString()).toEqual('purple -> red -> blue -> green -> NULL')
  });

  test('The head property will properly point to the first node in the linked list', () => { 
    let testList = new LinkedList('red');

    expect(testList.head.value).toEqual('red');
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');

    testList.insert('purple');
    testList.insert('orange');
    testList.insert('yellow');
    expect(testList.toString()).toEqual('yellow -> orange -> purple -> red -> blue -> green -> NULL')
   });

  test('Will return true when finding a value within the linked list that exists', () => { 
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');

    expect(testList.includes('red')).toBe(true);
    expect(testList.includes('blue')).toBe(true);
    expect(testList.includes('green')).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');

    expect(testList.includes('yellow')).toBe(false);
    expect(testList.includes('orange')).toBe(false);
    expect(testList.includes('purple')).toBe(false);
   });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');

    expect(testList.toString()).toEqual('red -> blue -> green -> NULL');
   });
});
