'use strict';

const { HashTable } = require('../hashTable/hashTable');
const { BinaryTree, Node } = require('../trees/binaryTree')

const treeIntersection = (treeA, treeB) => {

  let treeAValues = treeA.preOrder(treeA.root);
  let treeBValues = treeB.preOrder(treeB.root);

  let myHashTable = new HashTable(500);

  treeAValues.forEach(value => {
    myHashTable.set(value, value);
  })

  treeBValues.forEach(value => {
    myHashTable.set(value, value);
  })

  let duplicates = [];

  myHashTable.buckets.forEach(bucket => {
    if (bucket){
      let currentNode = bucket.head.next;
      while(currentNode){
        // JavaScript compares objects by reference - meaning even if two objects have identical `key:value` pairs, comparing them with the `===` operator will always return false because they are two separate/unique objects. By stringifying the values of the Linked List nodes, we can circumvent this quirk of JavaScript and compare if the objects are the "same".
        if(JSON.stringify(bucket.head.value) === JSON.stringify(currentNode.value)){
          duplicates.push(Object.values(bucket.head.value)[0]);
          break;
        } else currentNode = currentNode.next;
      }
    }
  })

  return duplicates;

}

let myTreeA = new BinaryTree(30);
myTreeA.root.left = new Node(9)
myTreeA.root.left.left = new Node(15)
myTreeA.root.left.right = new Node(20)
myTreeA.root.right = new Node(5)
myTreeA.root.right.left = new Node(7)

let myTreeB = new BinaryTree(30);
myTreeB.root.left = new Node(19)
myTreeB.root.left.left = new Node(43)
myTreeB.root.left.right = new Node(20)
myTreeB.root.right = new Node(5)
myTreeB.root.right.left = new Node(17)

console.log(treeIntersection(myTreeA, myTreeB));

module.exports = {
  treeIntersection
}