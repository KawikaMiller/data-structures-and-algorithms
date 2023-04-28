'use strict';

const {Node, kTree} = require('../kAryTree');

describe('Testing k-Ary trees...', () => {

  test('Fizz Buzz code challenge should work correctly..', () => {
    let myKT = new kTree(3);
    myKT.root.children = [
      new Node(12),
      new Node(15),
      new Node(29),
    ];
    myKT.root.children[0].children = [
      new Node(50),
      new Node(34),
      new Node(82),
    ]
    myKT.root.children[0].children[0].children = [
      new Node(13),
      new Node(64),
      new Node(39),
    ]
    myKT.root.children[1].children = [
      new Node(42),
      new Node(93),
      new Node(71),
    ]
    myKT.root.children[2].children = [
      new Node(50),
      new Node(35),
      new Node(70),
    ]
    myKT.fizzBuzzTree()
    expect(myKT.root.value).toBe('Fizz');
    expect(myKT.root.children[1].value).toBe('FizzBuzz');
  })

})