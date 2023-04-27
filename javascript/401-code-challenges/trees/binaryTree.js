'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(nodeValue) {
    this.root = new Node(nodeValue);
  }

  preOrder = (root) => {

    let valueArray = [root.value]
    
    if (root.left !== null) {
      valueArray = [...valueArray, ...this.preOrder(root.left)]
    };

    if (root.right !== null){
      valueArray = [...valueArray, ...this.preOrder(root.right)]
    };

    return valueArray

  }

  inOrder = (root) => {

    let valueArray = [];

    if (root.left !== null) {
      valueArray = [...valueArray, ...this.inOrder(root.left)]
    };

    valueArray = [...valueArray, root.value]

    if (root.right !== null){
      valueArray = [...valueArray, ...this.inOrder(root.right)]
    };

    return valueArray;

  }

  postOrder = (root) => {

    let valueArray = [];

    if (root.left !== null) {
      valueArray = [...valueArray, ...this.postOrder(root.left)]
    };

    if (root.right !== null){
      valueArray = [...valueArray, ...this.postOrder(root.right)]
    };

    // console.log(root.value)
    return valueArray = [...valueArray, root.value]

  }

  maxValue = () => {
    let values = this.inOrder(this.root);
    let maxValue = 0;
    if (!values.length) {
      return null
    }
    values.forEach(value => {
      if (value > maxValue) {
        maxValue = value;
      }
    })
    return maxValue;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(rootValue) {
    super(rootValue);
  }

  add = (newValue) => {
    if(this.root.left === null) {
      this.root.left = new Node(newValue)
    }
    else if(this.root.right === null) {
      this.root.right = new Node(newValue)
    }
  }

  contains = (searchValue) => {
    return this.preOrder(this.root).includes(searchValue)
  }

}

// let myTree = new BinaryTree(30);
// myTree.root.left = new Node(9)
// myTree.root.left.left = new Node(15)
// myTree.root.left.right = new Node(20)
// myTree.root.right = new Node(5)
// myTree.root.right.left = new Node(7)

// console.log(myTree.preOrder(myTree.root))
// console.log(myTree.inOrder(myTree.root))
// console.log(myTree.postOrder(myTree.root))
// console.log(myTree.maxValue());

module.exports = {Node, BinaryTree, BinarySearchTree}