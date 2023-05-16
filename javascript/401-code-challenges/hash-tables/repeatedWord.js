const { HashTable } = require('./hashTable');

const repeatedWord = (string) => {
  let hashedString = new HashTable(100);
  let cleanString = string.replace(/[^a-zA-Z ]+/g, '')
  let stringArr = cleanString.split(' ');

  hashedString.set = (key) => {
    let hashValue = hashedString.hash(key);

    if (!hashedString.buckets[hashValue]) {
      hashedString.buckets[hashValue] = {[key]: 1}
    }
    else {
      hashedString.buckets[hashValue][key] = hashedString.buckets[hashValue][key] + 1
    }
  }

  stringArr.forEach(element => {
    hashedString.set(element);
  })

  let mostUsedWord = {placeholder: 0};

  hashedString.buckets.forEach(element => {
    let elementValue = Object.values(element)[0];
    let mostUsedWordValue = Object.values(mostUsedWord)[0];
    if (elementValue > mostUsedWordValue) {
      mostUsedWord = element;
    };
  })

  return mostUsedWord;
}

repeatedWord('Once upon a time, there was a brave princess who...');

module.exports = {
  repeatedWord
}