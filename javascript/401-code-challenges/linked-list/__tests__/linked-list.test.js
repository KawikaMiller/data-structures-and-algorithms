'use strict';

// Require our linked list implementation
const {LinkedList, Node} = require('../index');

describe('Testing Linked List capabilities', () => {

  test('Can successfully instantiate an empty linked list', () => { 
    let emptyList = new LinkedList();
    expect(emptyList.head.value).toBeFalsy();
  });

  test('The head property will properly point to the first node in the linked list', () => { 
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');

    expect(testList.head.value).toEqual('red');
  });

  test('Can properly APPEND a single node to the end of the list', () => {
    let testList = new LinkedList(1);
    testList.append(2);
 
    expect(testList.toString()).toEqual('1 -> 2 -> NULL')
  });

  test('Can properly APPEND multiple nodes to the end of the list', () => {
    let testList = new LinkedList(1);
    testList.append(2);
    testList.append(3);
    testList.append(4);
    testList.append(5);
 
    expect(testList.toString()).toEqual('1 -> 2 -> 3 -> 4 -> 5 -> NULL')
  });

  test('Can properly INSERT a single node into the linked list', () => { 
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');
    testList.insert('purple');
    expect(testList.toString()).toEqual('purple -> red -> blue -> green -> NULL')
  });

  test('Can properly INSERT multiple nodes into the linked list', () => {
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');

    testList.insert('purple');
    testList.insert('orange');
    testList.insert('yellow');
    expect(testList.toString()).toEqual('yellow -> orange -> purple -> red -> blue -> green -> NULL')
   });

   test('Can properly INSERT BEFORE a given value in the middle of a linked list', () => {
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');
    testList.append('purple');
    testList.append('orange');

    testList.insertBefore('green', 'apples')

    expect(testList.toString()).toEqual('red -> blue -> apples -> green -> purple -> orange -> NULL')
   });

   test('Can properly INSERT BEFORE a node before the first node of a linked list', () => {
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');

    testList.insertBefore('blue', 'apples')


    expect(testList.toString()).toEqual('red -> apples -> blue -> green -> NULL')
   });

   test('Can properly INSERT AFTER a given value in the middle of a linked list', () => {
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');
    testList.append('purple');
    testList.append('orange');

    testList.insertAfter('green', 'apples')

    expect(testList.toString()).toEqual('red -> blue -> green -> apples -> purple -> orange -> NULL')
   });

   test('Can properly INSERT AFTER the last node in a list', () => {
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');

    testList.insertAfter('green', 'apples')

    expect(testList.toString()).toEqual('red -> blue -> green -> apples -> NULL')
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

describe('Testing kthFromEnd method', () => {

  test('if k is greater than travelLength, return null', () => {
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');

    expect(testList.kthFromEnd(3)).toEqual(null)
  })

  test('if k is less than 0, return null', () => {
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');

    expect(testList.kthFromEnd(-1)).toEqual(null)
  })

  test('if k is equal to travelLength, return this.head.value', () => {
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');

    expect(testList.kthFromEnd(2)).toEqual('red')
  })

  test('if travelLength is 0 (e.g. if length of list is 1), return this.head.value', () => {
    let testList = new LinkedList('red');

    expect(testList.kthFromEnd(0)).toEqual('red')
  })

  test('if travelLength is 0 (e.g. if length of list is 1), return this.head.value', () => {
    let testList = new LinkedList('red');
    testList.append('blue');
    testList.append('green');
    testList.append('purple');
    testList.append('orange');

    expect(testList.kthFromEnd(3)).toEqual('blue')
  })

})
