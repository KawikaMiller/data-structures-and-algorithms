'use strict'

const {Node, BinaryTree, BinarySearchTree} = require('./binaryTree')

class Queue{
  constructor(value){
    this.front = new Node(value);
    this.back = this.front;
  }

  enqueue = (newValue) => {
    if(this.isEmpty()) {
      if(newValue instanceof Node) {
        this.front = newValue;
        this.back = this.front;
      } else {
        this.front = new Node (newValue);
        this.back = this.front;        
      }
    } else {
        if(newValue instanceof Node) {
          let newBack = newValue;
          this.back.next = newBack;
          this.back = newBack;
        } else {
          let newBack = new Node(newValue);
          this.back.next = newBack;
          this.back = newBack;          
        }
    }
  }

  dequeue = () => {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue empty queue')
    } else if (this.front.next === null){
      let oldFront = this.front;
      this.front = null;
      this.back = null;
      return oldFront;
    } 
    else {
      let oldFront = this.front;
      this.front = this.front.next;
      oldFront.next = null;
      return oldFront;      
    }
  }

  peek = () => {
    if (this.isEmpty()) {
      throw new Error('Cannot peek empty queue')
    } else {
      return this.front.value;
    }
  }

  isEmpty = () => {
    if (!this.front || !this.front.value) {
      return true;
    } else return false;
  }

}

const breadthFirst = (tree) => {
  const nodeQueue = new Queue();
  nodeQueue.front = tree.root
  let breadthArray = [];

  while (!nodeQueue.isEmpty()) {
    let oldFront = nodeQueue.dequeue()
    breadthArray = [...breadthArray, oldFront.value];
    if (oldFront.left) {
      nodeQueue.enqueue(oldFront.left)
    }
    if (oldFront.right) {
      nodeQueue.enqueue(oldFront.right)
    }
  }

  return breadthArray;
}

let myTree = new BinaryTree(30);
myTree.root.left = new Node(9)
myTree.root.left.left = new Node(15)
myTree.root.left.right = new Node(20)
myTree.root.right = new Node(5)
myTree.root.right.left = new Node(7)

console.log(breadthFirst(myTree))

module.exports = breadthFirst;