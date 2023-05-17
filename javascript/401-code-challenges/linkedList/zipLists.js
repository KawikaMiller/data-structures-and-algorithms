'use strict'

const { LinkedList, Node } = require('./index')

const zipLists = (listA, listB) => {
  if (!listA.head || !listB.head) {
    throw new Error('Invalid argument(s) given')
  } 

  let currentNodeA = listA.head;
  let currentNodeB = listB.head;

  let zippedList = new LinkedList(currentNodeA.value);
  zippedList.append(currentNodeB.value);

  while (currentNodeA.next !== null || currentNodeB.next !== null) {
    // if currentNodeA.next is valid, traverse the list and append the new currentNodeA to zippedList
    if (currentNodeA.next){
      currentNodeA = currentNodeA.next;
      zippedList.append(currentNodeA.value);
    }
    // same as above comment but with currentNodeB
    if (currentNodeB.next){
      currentNodeB = currentNodeB.next;
      zippedList.append(currentNodeB.value);
    }
  }

  return zippedList;
}

module.exports = zipLists;