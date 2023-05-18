'use strict';

const {HashTable} = require('../hashTable/hashTable');

const leftJoin = (leftTable, rightTable) => {

  if (leftTable instanceof HashTable && rightTable instanceof HashTable){
    let uniqueKeys = leftTable.keys();
    let leftJoinData = [];

    uniqueKeys.forEach(key => {
      let valueB = rightTable.get(key);
      let valueA = leftTable.get(key)
      let values;

      if (valueB) {
        values = [valueA[key], valueB[key]];
      } else {
        values = [valueA[key], null]
      }
      
      leftJoinData.push( {[key]: values} );
    })

    return leftJoinData;
  } else {
    console.error('Both arguments of .leftJoin() must be a HashTable');
  }
}

let A = new HashTable(100);
A.set('tall', 'big');
A.set('safe', 'secure');
A.set('jump', 'vault');

let B = new HashTable(100);
B.set('tall', 'small');
B.set('safe', 'dangerous');
B.set('run', 'walk');

console.log(leftJoin(A, B))

module.exports = {
  leftJoin
}