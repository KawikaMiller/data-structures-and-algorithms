'use strict';

const {Node, BinaryTree, BinarySearchTree} = require('../binaryTree');
const breadthFirst = require('../breadthFirst')

describe('Testing Binary Trees..' , () => {
  
  test('Can isntantiate an empty tree', () => {
    let myBT = new BinaryTree();
    expect(myBT.root.value).toBeFalsy();
  })

  test('Can instantiate tree with single root node', () => {
    let myBT = new BinaryTree('A');
    expect(myBT.root.value).toBe('A')
  })

  test('Can successfully add left and right nodes to Binary Search Tree', () => {
    let myBST = new BinarySearchTree('A');
    myBST.add('B');
    myBST.add('C');
    expect(myBST.root.value).toBe('A');
    expect(myBST.root.left.value).toBe('B');
    expect(myBST.root.right.value).toBe('C')
  })

  test('Can successfully return a collection from a pre-order traversal', () => {
    let myTree = new BinaryTree('A');
    myTree.root.left = new Node('B')
    myTree.root.left.left = new Node('D')
    myTree.root.left.right = new Node('E')
    myTree.root.right = new Node('C')
    myTree.root.right.left = new Node('F')
    expect(myTree.preOrder(myTree.root)).toStrictEqual([ 'A', 'B', 'D', 'E', 'C', 'F' ])
  })

  test('Can successfully return a collection from a in-order traversal', () => {
    let myTree = new BinaryTree('A');
    myTree.root.left = new Node('B')
    myTree.root.left.left = new Node('D')
    myTree.root.left.right = new Node('E')
    myTree.root.right = new Node('C')
    myTree.root.right.left = new Node('F')
    expect(myTree.inOrder(myTree.root)).toStrictEqual([ 'D', 'B', 'E', 'A', 'F', 'C' ])
  })

  test('Can successfully return a collection from a post-order traversal', () => {
    let myTree = new BinaryTree('A');
    myTree.root.left = new Node('B')
    myTree.root.left.left = new Node('D')
    myTree.root.left.right = new Node('E')
    myTree.root.right = new Node('C')
    myTree.root.right.left = new Node('F')
    expect(myTree.postOrder(myTree.root)).toStrictEqual([ 'D', 'E', 'B', 'F', 'C', 'A' ])
  })

  test('Contains method returns proper responses', () => {
    let myBST = new BinarySearchTree('A');
    myBST.add('B');
    myBST.add('C');
    expect(myBST.contains('C')).toBe(true);
    expect(myBST.contains('D')).toBe(false);
  })

  test('maxValue method returns the correct number', () => {
    let myBT = new BinaryTree(10);
    myBT.root.left = new Node(9);
    myBT.root.left.left = new Node(15);
    myBT.root.left.right = new Node(20);
    myBT.root.right = new Node(5);
    myBT.root.right.left = new Node(7);
    expect(myBT.maxValue()).toBe(20);
  })

  test ('Breadth first traversal works and returns array of values', () => {
    let myBT = new BinaryTree(10);
    myBT.root.left = new Node(9);
    myBT.root.left.left = new Node(15);
    myBT.root.left.right = new Node(20);
    myBT.root.right = new Node(5);
    myBT.root.right.left = new Node(7);
    expect(breadthFirst(myBT)).toStrictEqual([10, 9, 5, 15, 20, 7]);
  })

})