'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.children = [];
  }
}

class kTree {
  constructor(rootValue){
    this.root = new Node(rootValue);
  }

  depthTraversal = (root) => {

    if (root.value % 3 === 0 && root.value % 5 === 0) {
      console.log(root.value)
      root.value = 'FizzBuzz';
      console.log(root.value)
    }
    else if (root.value % 3 !== 0 && root.value % 5 !== 0) {
      console.log(root.value)
      root.value = `${root.value}`;
      console.log(root.value)
    }
    else if (root.value % 3 === 0 && root.value % 5 !== 0){
      console.log(root.value)
      root.value = 'Fizz'
      console.log(root.value)
    }
    else if (root.value % 5 === 0 && root.value % 3 !== 0){
      console.log(root.value)
      root.value = 'Buzz'
      console.log(root.value)
    }

    if(root.children) {
      root.children.forEach(child => {
        this.depthTraversal(child);
      })
    }

  }

  fizzBuzzTree = () => {
    return this.depthTraversal(this.root)
  }
}

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


myKT.fizzBuzzTree();
console.dir(myKT, { depth: null }) 