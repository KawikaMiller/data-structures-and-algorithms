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

// warm up 401 class 38
const validateInOrderBST = (valueArray, rootValue) => {
  let middle = valueArray.findIndex(value => value === rootValue);
  let left = valueArray.slice(0, middle)
  let right = valueArray.slice(middle + 1)

  if (left.every(value => value < rootValue) && right.every(value => value > rootValue)) {
    return true
  } else return false;

}

// let myBST = new BinarySearchTree(5)
// myBST.root.left = new Node(3)
// myBST.root.left.left = new Node(1)
// myBST.root.left.right = new Node(4)

// myBST.root.right = new Node(6)
// myBST.root.right.left = new Node(8)
// myBST.root.right.right = new Node(10)

// let valueArray = myBST.inOrder(myBST.root)
// console.log(validateInOrderBST(valueArray, 2))


module.exports = {Node, BinaryTree, BinarySearchTree}