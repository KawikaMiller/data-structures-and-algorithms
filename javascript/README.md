# Data Structures and Algorithms

## Language: `JavaScript`

### Folder and Challenge Setup

Each type of code challenge has slightly different instructions. Please refer to the notes and examples below for instructions for each DS&A assignment type.

### Data Structure: New Implementation

- Create a new folder under the `javascript` level, with the name of the data structure and complete your implementation there
  - i.e. `linkedList`
- Implementation (the data structure "class")
  - The implementation of the data structure must be named `index.js`
  - Your implementation must be completed as a proper ES6 Class, and exported as a node module
    - Class Name must be `ProperCase`
    - Class Methods must be `camelCase`

    ```javascript
    class LinkedList {
      constructor() {
        // code
      }

      methodName() {
        // code
      }

    }
    module.exports = LinkedList;
    ```

- Tests
  - Create folder named `__tests__` and within it, a test file called `[data-structure].test.js`
    - i.e. `__tests__/linkedList.test.js`
    - Your tests will then need to require the data structure you're testing
      - i.e. `const LinkedList = require('../index');

### Data Structure: Extending an implementation

- Work within the data structure implementation
- Create a new method within the class that solves the code challenge
  - Remember, you'll have access to `this` within your class methods
- Tests
  - You will have folder named `__tests__` and within it, a test file called `[data-structure].test.js`
    - i.e. `__tests__/linkedList.test.js`
    - Add to the tests written for this data structure to cover your new method(s)

### Code Challenge / Algorithm

Code challenges should be completed within a folder named `code-challenges` under the `javascript` level

- Daily Setup:
  - Create a new folder under the `javascript` level, with the name of the code challenge
    - Each code challenge assignment identifies the branch name to use, for example 'find-maximum-value'
    - For clarity, create your folder with the same name, ensuring that it's `kebab-cased`
    - i.e. For a challenge named 'find-maximum-value', create the folder:`code-challenges/find-maximum-value`
  - Code Challenge Implementation
    - Each code challenge requires a function be written, for example "find maximum value"
    - Name the actual challenge file with the name of the challenge, in `kebab-case`
      - i.e. `find-maximum-value.js`
    - Reminder: Your challenge file will then need to require the data structure you're using to implement
      - i.e. `const LinkedList = require('../linkedList');
    - Your challenge function name is up to you, but it's recommended that you use camel case
      - i.e. `function findMaximumValue(list) { ... }`
    - Be sure to export your function so that you can write tests
  - Tests
    - Create folder named `__tests__` and within it, a test file called `[challenge].test.js`
      - i.e. `__tests__/find-maximum-value.test.js`
      - Your test file would require the challenge file found in the directory above, which has your exported function
        - i.e. `const reverse = require('../find-maximum-value.js');

## Running Tests

If you setup your folders according to the above guidelines, running tests becomes a matter of deciding which tests you want to execute.  Jest does a good job at finding the test files that match what you specify in the test command

From the `data-structures-and-algorithms/javascript` folder, execute the following commands:

- **Run every possible test** - `npm test`
- **Run a test for a data structure** - `npm test linkedList`
- **Run a test for a specific challenge** - `npm test reverse-ll`

#### Live Tests

Note that when you check your code into GitHub, all of your tests will automatically execute. These results should match your own, and will be found on the  **Actions** tab

## 401 Code Challenges

### Reverse Arrays
- [401 Code Challenge 01: Reverse Arrays](./reverseArrays/README.md)

### Insert Shift Array
- [401 Code Challenge 02: Insert Shift Arrays](./array-insert-shift/README.md)

### Binary Search Array
- [401 Code Challenge 03: Binary Search Arrays](./array-binary-search/README.md)

### Linked Lists
- [401 Code Challenge 05 - 07: Linked Lists](./401-code-challenges/linkedList/index.js)
- [401 Code Challenge 08: Zip Lists](./401-code-challenges/linkedList/zipLists.js)
- [401 Code Challenge 10: Stacks](./401-code-challenges/linkedList/stacks.js)
- [401 Code Challenge 10: Queues](./401-code-challenges/linkedList/queues.js)
- [401 Code Challenge 11: pseudoQueues](./401-code-challenges/linkedList/pseudoQueue.js)
- [401 Code Challenge 12: AnimalShelter](./401-code-challenges/linkedList/AnimalShelter.js)
- [401 Code Challenge 13: bracketValidator](./401-code-challenges/linkedList/bracketValidator.js)

### Binary Trees & Binary Search Trees
- [401 Code Challenge 15: Binary Trees and Binary Search Trees](./401-code-challenges/trees/binaryTree.js)
- [401 Code Challenge 16: Find The Maximum Value of a Binary Tree](./401-code-challenges/trees/binaryTree.js)
- [401 Code Challenge 17: Breadth First Traversal on Binary Tree](./401-code-challenges/trees/breadthFirst.js)
- [401 Code Challenge 18: Conduct FizzBuzz on a K-Ary Tree](./401-code-challenges/trees/kAryTree.js)

### Sorting Algorithms & Hash Tables
- [401 Code Challenge 26: InsertionSort](./401-code-challenges/sorting/insertion/insertion.js)
- [401 Code Challenge 27: MergeSort](./401-code-challenges/sorting/merge/merge.js)
- [401 Code Challenge 28: Compare](./401-code-challenges/sorting/comparisons/sort.js)
- ~~401 Code Challenge 29 : Mock Interview~~
- [401 Code Challenge 30: HashTables](./401-code-challenges/hash-tables/hashTable.js)
- [401 Code Challenge 31: HashTables - Repeated Word](./401-code-challenges/hash-tables/repeatedWord/repeatedWord.js)
- [401 Code Challenge 32: Tree Intersection](./401-code-challenges/treeIntersection/tree-intersection.js)
- [401 Code Challenge 33: HashTables - Left Join](./401-code-challenges/leftJoin/leftJoin.js)
- ~~401 Code Challenge 34 : Mock Interview~~

### Graphs
- [401 Code Challenge 35: Graph (Directed Graph, Adjacency List)](./401-code-challenges/graph/graph.js)
- [401 Code Challenge 36: Breadth First Traversal)](./401-code-challenges/graph/graph.js)
- [401 Code Challenge 37: businessTrip())](./401-code-challenges/graph/businessTrip/businessTrip.js)
- [401 Code Challenge 38: Depth First Traversal (preOrder))](./401-code-challenges/graph/graph.js)