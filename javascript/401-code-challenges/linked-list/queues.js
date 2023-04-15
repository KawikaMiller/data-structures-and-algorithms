'use strict'

const {LinkedList, Node} = require('./index')

class Queue extends LinkedList {
  constructor(value){
    super();
    this.front = new Node(value)
    this.back = new Node();
  }

  enqueue = (newValue) => {
    if(!this.front.value) {
      this.front.value = newValue;
    } else {
      let newBack = new Node(newValue);
      this.back.next = newBack;
      this.back = newBack;
    }
  }

  dequeue = () => {
    let oldFront = this.front;
    this.front = this.front.next;
    oldFront.next = null;
    return oldFront.value;
  }

  peek = () => {
    return this.front.value;
  }

  isEmpty = () => {
    if (!this.front) {
      return true;
    } else return false;
  }

}

module.exports = Queue;