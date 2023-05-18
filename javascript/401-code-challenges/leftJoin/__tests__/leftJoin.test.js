const { leftJoin } = require('../leftJoin');
const { HashTable } = require('../../hashTable/hashTable');

describe('Testing leftJoin function...', () => {

  test("Should return an array of results for 'tall', 'jump', and 'safe' ", () => {
    let A = new HashTable(100);
    A.set('tall', 'big');
    A.set('safe', 'secure');
    A.set('jump', 'vault');

    let B = new HashTable(100);
    B.set('tall', 'small');
    B.set('safe', 'dangerous');
    B.set('run', 'walk');

    expect(leftJoin(A, B)).toStrictEqual([
      { tall: [ 'big', 'small' ] },
      { jump: [ 'vault', null ] },
      { safe: [ 'secure', 'dangerous' ] }
    ])
  })

  test("Should return an array of results for 'diligent', 'fond', 'guide', 'flow', and 'wrath' ", () => {
    let A = new HashTable(1234);
    A.set('diligent', 'employed');
    A.set('fond', 'enamored');
    A.set('guide', 'usher');
    A.set('outfit', 'garb');
    A.set('wrath', 'anger');

    let B = new HashTable(1234);
    B.set('diligent', 'idle');
    B.set('fond', 'averse');
    B.set('guide', 'follow');
    B.set('flow', 'jam');
    B.set('wrath', 'delight');

    expect(leftJoin(A, B)).toStrictEqual(    [
      { guide: [ 'usher', 'follow' ] },
      { outfit: [ 'garb', null ] },
      { wrath: [ 'anger', 'delight' ] },
      { diligent: [ 'employed', 'idle' ] },
      { fond: [ 'enamored', 'averse' ] }
    ])
  })

  test("Should return an array of results for 'tall', 'jump', and 'safe' ", () => {
    let A = new HashTable(123);
    A.set('greedy', 'selfish');
    A.set('red', 'crimson');
    A.set('happy', 'merry');

    let B = new HashTable(123);
    B.set('kind', 'mean');
    B.set('red', 'blue');
    B.set('happy', 'sad');

    expect(leftJoin(A, B)).toStrictEqual([
      { red: [ 'crimson', 'blue' ] },
      { greedy: [ 'selfish', null ] },
      { happy: [ 'merry', 'sad' ] }
    ])
  })

})