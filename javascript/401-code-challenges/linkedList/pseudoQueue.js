'use strict'

const Stack = require('./stacks')
const { Node } = require('./index')

class PseudoQueue {
  constructor(value){
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue = (value) => {
    this.stackA.push(value);
  }

  dequeue = () => {
    if (this.stackA.isEmpty() && this.stackB.isEmpty()) {
      throw new Error('PseudoQueue is empty');
    } else {
      while(!this.stackA.isEmpty()) {
        this.stackB.push(this.stackA.pop().value);
      }
    }
    return this.stackB.pop();
  }
}
