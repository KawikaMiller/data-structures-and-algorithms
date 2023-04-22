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
    this.returnArray = [];
  }

  preOrder = (root) => {

    // console.log(root.value)
    this.returnArray = [...this.returnArray, root.value]
    
    if (root.left !== null) {
      this.preOrder(root.left)
    };

    if (root.right !== null){
      this.preOrder(root.right)
    };

  }

  inOrder = (root) => {

    if (root.left !== null) {
      this.inOrder(root.left)
    };

    // console.log(root.value)
    this.returnArray = [...this.returnArray, root.value];

    if (root.right !== null){
      this.inOrder(root.right)
    };

  }

  postOrder = (root) => {

    if (root.left !== null) {
      this.postOrder(root.left)
    };

    if (root.right !== null){
      this.postOrder(root.right)
    };

    // console.log(root.value)
    this.returnArray = [...this.returnArray, root.value]

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

// myTree.preOrder(myTree.root)
// console.log(myTree.returnArray)
// myTree.returnArray = [];
// myTree.inOrder(myTree.root)
// console.log(myTree.returnArray)
// myTree.returnArray = [];
// myTree.postOrder(myTree.root)
// console.log(myTree.returnArray)
// myTree.returnArray = [];

// let BST = new BinarySearchTree('A');
// BST.add('B');
// BST.add('C');
// console.log(BST.contains('D'))
// console.log(BST.contains('A'))

module.exports = {Node, BinaryTree, BinarySearchTree}