'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
  }

  // 
  
  // Iterates through the entire linked list. | 'traverse' was used in the demo but the instructions on canvas say to create a method called 'to string' which essentially accomplish the same thing. Commented out 'traverse' just in case they were supposed to both be in here.

  // traverse = () => {
  //   let currentNode = this.head;
  //   while (currentNode) {
  //     console.log(currentNode.value);
  //     currentNode = currentNode.next
  //   }
  //   console.log('End of linked list')
  // }

  // returns a string of the entire linked list's contents
  toString = () => {
    let listValueArr = [];
    let currentNode = this.head;
    while(currentNode) {
      listValueArr.push(currentNode.value)
      currentNode = currentNode.next
    }
    let listString = listValueArr.join(' -> ')
    return `${listString} -> NULL`
  }

  // iterates through the list and attempts to find a value to return, if no value is found returns null
  includes = (searchValue) => {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === searchValue) {
        return true;
      } else if (currentNode.next) {
        currentNode = currentNode.next
      } else return false;
    }
  }

  // adds a node to the end of the list
  append = (newValue) => {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.next === null) {
        currentNode.next = new Node(newValue);
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  // inserts a new node to the beginning of the list (replaces head, moves previous head + all other nodes 1 position down the list)
  insert = (newHeadValue) => {
    let newList = new LinkedList(newHeadValue);
    newList.head.next = this.head;
    this.head = newList.head;
  }

}

module.exports = {LinkedList, Node};
