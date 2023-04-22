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

    valueArray = [...valueArray, ...root.value]

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
    return valueArray = [...valueArray, ...root.value]

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
    this.preOrder(this.root);
    return this.returnArray.includes(searchValue)
  }

}

// let myTree = new BinaryTree('A');
// myTree.root.left = new Node('B')
// myTree.root.left.left = new Node('D')
// myTree.root.left.right = new Node('E')
// myTree.root.right = new Node('C')
// myTree.root.right.left = new Node('F')

// console.log(myTree.preOrder(myTree.root))
// console.log(myTree.inOrder(myTree.root))
// console.log(myTree.postOrder(myTree.root))


// let BST = new BinarySearchTree('A');
// BST.add('B');
// BST.add('C');
// console.log(BST.contains('D'))
// console.log(BST.contains('A'))

module.exports = {Node, BinaryTree, BinarySearchTree}