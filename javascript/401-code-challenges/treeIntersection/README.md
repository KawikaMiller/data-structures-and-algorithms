# Code Challenge: Class 27

[treeIntersection.js](./tree-intersection.js)

Write a function called `treeIntersection` that takes two binary trees as parameters. Find common values in 2 binary trees using a HashTable as part of the algorithm.

Arguments: BinaryTree1, BinaryTree2
Return: Array of duplicate values

## Whiteboard Process

**Tree Intersection Whiteboard**
![.treeIntersection() UML](./UML_treeIntersection.JPG)

**Refersher on How Binary Tree Depth Traversal Works**
![preOrder](../trees/UML_diagram_preOrder.JPG)

## Approach and Efficiency

- **Approach:**
  - I already knew that the depth traversal methods on the binary tree data structure would return an array of values - therefore I could create two variables `treeAValues` and `treeBValues` and set them to the return value of `.preOrder()` of their respective trees.
  - Since we were supposed to implement hash tables in our algorithm/solution, I knew that any duplicate values in either of the arrays would be hashed to the same bucket within the hash table.
  - Therefore, knowing that a bucket will hold a Linked List and that duplicate values will get hashed to the same bucket - its safe to assume that if `head.next` is truthy, it's most likely a duplicate number.
  - In order to verify that it is, we check if the bucket has a linked list inside of it. If it does, then we check if `head.next` is truthy. If it is, then we traverse the linked list and compare the `head.value` to each subsequent node's value and if we find a match then we break out of the loop and add `head.value` to the array of returned duplicate values.

- **Efficiency:** 

  - Time: O(n * x) where `n` represents the length of `HashTable.buckets` and `x` represents the length of the LinkedList within any given bucket. (I think this notation makes sense? Not entirely sure how to write the notation when there's a nested loop but the nested loop is of a different length than the outer loop)

  - Space: O(n) where `n` represents the length of the array of returned duplicate values.

## Solution

```
const treeIntersection = (treeA, treeB) => {

  let treeAValues = treeA.preOrder(treeA.root);
  let treeBValues = treeB.preOrder(treeB.root);

  let myHashTable = new HashTable(1234);

  treeAValues.forEach(value => {
    myHashTable.set(value, value);
  })

  treeBValues.forEach(value => {
    myHashTable.set(value, value);
  })

  let duplicates = [];


  myHashTable.buckets.forEach(bucket => {
    if (bucket){
      let currentNode = bucket.head.next;
      while(currentNode){
        if(JSON.stringify(bucket.head.value) === JSON.stringify(currentNode.value)){
          duplicates.push(Object.values(bucket.head.value)[0]);
          break;
        } else currentNode = currentNode.next;
      }
    }
  })

  return duplicates;

}
```