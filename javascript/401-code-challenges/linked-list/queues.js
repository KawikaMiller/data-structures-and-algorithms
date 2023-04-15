'use strict'

const {LinkedList, Node} = require('./index')

class Queue extends LinkedList {
  constructor(value){
    super();
    this.front = new Node(value);
    this.back = new Node(value);
  }

  enqueue = (newValue) => {
    if(this.isEmpty()) {
      this.front = new Node (newValue);
      this.back = new Node (newValue);
    } else {
      let newBack = new Node(newValue);
      this.back.next = newBack;
      this.back = newBack;
    }
  }

  dequeue = () => {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue empty queue')
    } else {
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

module.exports = Queue;