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



module.exports = {
  leftJoin
}