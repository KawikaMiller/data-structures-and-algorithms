# Code Challenge: Class 27


[hashTable.js](./hashTable.js)
Implement a Hashtable Class with the following methods:

- `set`
  - Arguments: key, value
  - Returns: nothing
  - This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  - Should a given key already exist, replace its value from the value argument given to this method.

- `get`
  - Arguments: key
  - Returns: Value associated with that key in the table

- `has`
  - Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.

- `keys`
  - Returns: Collection of keys

- `hash`
  - Arguments: key
  - Returns: Index in the collection for that key

## Whiteboard Process

### .get() & .has()

![.get() UML](./UML_hashtable_get.JPG)

- `.get()` and `.has()` effectively follow the same logic but the main difference is that:
  - `.get()` returns either a `key:pair` value OR `null`
  - `.has()` returns either `true` OR `false` 

### .set()
![.set() UML](./UML_hashtable_set.JPG)

### .keys()

![.keys() UML](./UML_hashtable_keys.JPG)

## Approach and Efficiency

### .get(key) and .has()
- **Approach:**
  - Since we know that the value of any bucket will be a linked list in order to account for potential collisions, we know that we can traverse the linked list to find a specific key if we need to.
  - Once we identify the specific bucket we need to read from, we can then check if the `head.value[key]` of the linked list within the bucket matches the `key` argument given to the `.get()` method. 
    - If it does, we return `head.value`. If not, we continue to traverse the linked list and check if `node.value[key]` matches `key`. 
    - If we make it to the end of the linked list without finding a match, we return null.

  -`.has()` follows the same logic but returns `true` or `false` instead of a `key:pair` value or `null`

- **Efficiency:** 

  - Time of O(1 + (n-1)) because the hashValue takes us directly to the bucket that we need to read from, however if that bucket has collisions then we need to traverse a linked list to find the correct key

  - Space of O(1) because we are only returning one `key:value` pair

### .set()
- **Approach:**
  - Since we know that the value of any bucket will be a linked list in order to account for potential collisions, we know that we will either be setting the value of the head of the linked list OR be appending a new node to the end of the linked list.
  - Once we identify the specific bucket we need to set a value to, we can then check if `bucket.head` is a truthy value.
    - If it IS NOT truthy, then we know we need to instantiate a new linked list as the value of the bucket, and then set the `head` of the linked list as the `key:value` pair.
    - If it IS truthy, then we know that we need to append the `key:value` pair to the end of the linked list.

- **Efficiency:**

  - Time of O(1 + (n-1)) because the hashValue takes us directly to the bucket that we need to set our key:value pair to, however if that bucket has collisions then we need to traverse the linked list in order to append the key:value pair to the linked list.
  
  - Space - O(1) because we are only returning setting one key:value pair

### .keys()
- **Approach:**
  - We know that at bare minimum we're going to have to iterate through the entire `buckets` array but we also have to account for any bucket that has a linked list with multiple values - which we will have to traverse as well and check all of it's keys.
  - Therefore, we know that we'll have a triply-nested loop. 
    - One loop to iterate through each bucket
    - One loop to iterate through all the keys within a bucket and put them inside of an array
    - A final loop to check if the array of keys from the 2nd loop already exist in the output array

- **Efficiency:**

  - Time - O(n * n) because we have to iterate through every bucket and potentially every node inside of the linked lists inside of each bucket.

  - Space - O(n * n) because at the very most there would be a unique key for every single bucket and there could be a unique key for every node inside of the linked list inside of the bucket


## Solution

```
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
      return null
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
        } else return null
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
    let uniqueKeys = [];

    this.buckets.forEach(bucket => {
      //if bucket.head is truthy, then we know that it has a LinkedList as it's value
      if(bucket.head){
        // begin to traverse the linked list
        let currentNode = bucket.head
        
        while(currentNode){
          // assuming the value of our bucket.head is an object, it can potentially have more than one key:value pair
          let bucketValueKeys = Object.keys(bucket.head.value);

          // for every key, we check if that key already exists within the 'uniqueKeys' array
          bucketValueKeys.forEach(key => {
            // add the key to the 'uniqueKeys' array if it DOES NOT already exist within the array
            if(!uniqueKeys.includes(key)){
              uniqueKeys.push(key)
            }
          })
          
          // once we're done iterating through one node of a linkedlist, we check if there is another node following
          if (currentNode.next) {
            currentNode = currentNode.next;
          } else break;
        }

      }
    })

    return uniqueKeys;
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
```