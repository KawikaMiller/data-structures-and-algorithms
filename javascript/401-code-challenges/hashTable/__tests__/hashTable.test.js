const {HashTable} = require('../hashTable');

describe('Testing HashTable data structure...', () => {

  let testHashTable = new HashTable(100);

  test('Can set a key:value pair into the hash table with .set() method', () => {
    testHashTable.set('test', 'value');
    let hashValue = testHashTable.hash('test');
    expect(testHashTable.buckets[hashValue].head.value).toStrictEqual({test: 'value'})
  })

  test('.get() returns the the correct data if key DOES exist within hash table ', () => {
    // let hashValue = testHashTable.hash('test');
    expect(testHashTable.get('test')).toStrictEqual({test: 'value'})
  })

  test('.get() returns null if key DOES NOT exist within hash table', () => {
    expect(testHashTable.get('foobar')).toStrictEqual(null)
  })

  test('.has() returns true when key DOES exist within hash table', () => {
    expect(testHashTable.has('test')).toStrictEqual(true)
  })

  test('.has() returns false when key DOES NOT exist within hash table', () => {
    expect(testHashTable.has('foobar')).toStrictEqual(false)
  })

  test('Successfully handles collision within hashtable', () => {
    testHashTable.set('test', 'value2');
    testHashTable.set('test', 'value3');
    let hashValue = testHashTable.hash('test');
    expect(testHashTable.buckets[hashValue].head.value).toStrictEqual({test: 'value'})
    expect(testHashTable.buckets[hashValue].head.next.value).toStrictEqual({test: 'value2'})
    expect(testHashTable.buckets[hashValue].head.next.next.value).toStrictEqual({test: 'value3'})
  })

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    testHashTable.set('test2', 'another1');
    testHashTable.set('apples', '2oranges');
    testHashTable.set('apples', '3oranges');
    testHashTable.set('apples', 'bananas');
    testHashTable.set('fefi', 'fofum');
    testHashTable.set('foo', 'bar');
    expect(testHashTable.keys()).toStrictEqual(['test2', 'apples', 'foo', 'test', 'fefi'])
  })

  test('Successfully retrieves a value from a bucket within the hashtable that has a collision', () => {
    expect(testHashTable.get('test')).toStrictEqual({test: 'value'})
  })

  test('Successfully hash a key to an in-range value', () => {
    let hashA = testHashTable.hash('asuperlongridiculousstring');
    let hashB = testHashTable.hash('ashortstring');
    let hashC = testHashTable.hash('aljdsfsdufijlskdf908324jklfjalsdasd14dasdshdflhsdlfadsf');

    expect(hashA < testHashTable.size).toBeTruthy()
    expect(hashB < testHashTable.size).toBeTruthy()
    expect(hashC < testHashTable.size).toBeTruthy()
  })

})