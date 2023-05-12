'use strict'

const { LinkedList, Node } = require('../linked-list/index');

class HashTable {
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  set = (key, value) => {
    let hashValue = this.hash(key);

    if (!this.buckets[hashValue]) {
      this.buckets[hashValue] = new LinkedList({[key]: value})
    }
    else {
      this.buckets[hashValue].append({[key]: value})
    }
  }

  get = (key) => {
    let hashValue = this.hash(key);

    if (!this.buckets[hashValue]){
      return undefined
    }
    // imitate the LinkedList method .includes(), but instead of returning a boolean we return the value from the bucket
    else {
      let currentNode = this.buckets[hashValue].head;
      while(currentNode) {
        if (currentNode.value[key]) {
          return currentNode.value;
        }
        else if (currentNode.next) {
          currentNode = currentNode.next
        } else return undefined
      }
    }
  }

  has = (key) => {
    let hashValue = this.hash(key);

    // if there is nothing stored at bucket[hashValue] then we immediately know that the key does not exist within the hash table
    if (!this.buckets[hashValue]) {
      return false;
    } 
    // imiate the LinkedList method .includes() but we are only searching for if the key exists in the node's value 
    else {
      let currentNode = this.buckets[hashValue].head;
      while(currentNode) {
        if (currentNode.value[key]) {
          return true;
        }
        else if (currentNode.next) {
          currentNode = currentNode.next
        } else return false
      }
    }
  }

  keys = () => {

  }

  hash = (key) => {

    let spreadKey = [...key];
    let hashedKeys = [];

    spreadKey.forEach((k, idx) => {
      hashedKeys.push(key.charCodeAt(idx))
    })

    return hashedKeys.reduce((previousValue, currentValue) => previousValue * currentValue, 1) * 599 % this.buckets.length;

  }

}

let myHashTable = new HashTable(100);

// console.log(myHashTable.hash('test'))
// myHashTable.hash('test');
myHashTable.set('test', 'value');
myHashTable.set('test', 'value2');
console.log(myHashTable.get('test'));
// console.log(myHashTable.has('test'));
// console.log(myHashTable.buckets[60].head)