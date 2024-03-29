# Code Challenge 05, 06, 07, 08, 10, 11 - Linked List Implementation
Create a Linked List data structure consisting of a Node class and a Linked List class. 

The `Node` class should contain two properties: 
- `value`, which can be a value of any data type
- `next`, which is the next `Node` in the linked list

The `LinkedList` class should have one property:
- `head`, which is a `Node` and is the first item of the linked list.

`LinkedList` should also consist of 0 - n amount of `Node`s and should have various methods that allow a user to modify &/o read the data in the list.

- [LinkedList Module](./index.js)
- [zippedList Module](./zipLists.js)
- [Stack Module](./stacks.js)
- [Queue Module](./queues.js)
- [pseudoQueue](./pseudoQueue.js)
- [AnimalShelter](./AnimalShelter.js)
- [bracketValidator](./bracketValidator.js)

## Whiteboard Process

### Insert Before / Insert After
![Insert Before and After](./UML_diagram_insertBeforeAfter.JPG)

### kthFromEnd
![kthFromEnd](./UML_diagram_kthFromEnd.JPG)
* Test Cases #4 in diagram should read 'if travelLength = 0' because travelLength of 0 means that the length of the list is 1

### zipLists
![zipLists](./UML_diagram_zipLists.JPG)

### pseudoQueue
![pseudoQueue](./UML_diagram_pseudoQueue.JPG)

### Animal Shelter
![AnimalShelter](./UML_diagram_animalShelter.JPG)

## Approach & Efficiency

### Approach
Since most of the `LinkedList` methods can be successfully accomplished by iterating through the list I stuck with using a `while` loop and applied conditional statments where necessary in order to complete a task.

#### Lab 05
For the `.insert()` method, I knew that since a `LinkedList`'s `head` property is a `Node`, who's `next` property is just a chain of nodes nested within nodes, I could just create a new `LinkedList` and set the `next` property of the `head` Node to be the chain of nodes from the original `LinkedList`, and then use the new chain of nodes as the `head` of the original list.

#### Lab 06

#### Lab 07

#### Lab 08
For the `.zipLists()` method, since the nodes were supposed to be added to the new list alternatively, I knew that I was going to have to traverse each argument list and then add then append those values to the new zipped list before moving the `currentNode` of each argument list to the `next` node. Therefore, I declared two local variables `currentNodeA` and `currentNodeB` to track the `currentNode` of each list. Upon declaration, these local variables are set to their respective `this.head`. Then I declare a new `LinkedList`, called `zippedList`, using `currentNodeA` as it's argument for the constructor. After that, I append `currentNodeB` to the new `LinkedList`. Finally, within a `while` loop, I traverse the each list and, setting `currentNodeA = currentNodeA.next` and `currentNodeB = currentNodeB.next`, and alternatively appending those nodes to `zippedList`.

#### Lab 11
For the `pseudoQueue` class we're using 2 `Stacks` to handle the data. Since stacks use a `First In, Last Out` approach I knew that I could push values into the first stack and then pop those values out and push the popped values into a second stack to reverse the order of the nodes - therefore giving it the illusion of a `First In, First Out` queue.

### Lab 12
I knew that this was going to mimic the workflow of the pseudo queue challenge so the design is essentially the same but with a few more conditional statements to the `dequeue` method.

### Lab 13


### Efficiency
- `Node` and `LinkedList` constructor will be always have a Time and Space efficiency of `O(1)` because they both rely on one parameter/argument in order to be created.

- The methods `.includes()`, `.insertBefore()`, `.insertAfter()`, `.append()`, and `.toString()` 
  - Time and Space efficiency of `O(n)` because they all depend on the length of the list.

- The method `.insert()` will have:
  - Time of `O(1)` because it always creates a new list and then sets the value of the new list's `next` as the original linked list.
  - Space of `O(n)` because the space taken will depend on the length of the list

- The method `.kthFromEnd` will have:
  - Time of `O(n)` because it depends on the length of the list
  - Space of `O(1)` because the size of the function and it's return value is always the same size

#### zipLists

- The method `.zipLists` will have:
  - Time and Space of `O(n^2)` because it depends on the length of both lists given as arguments

#### psuedoQueue
- The method `.enqueue` will have:
  - Time and Space of `O(1)` because it will remain constant since there is only one operation being performed with a single value/argument.

- The method `.dequeue` will have:
  - Time and Space of `O(n)` because it will depend on how many nodes exist inside the pseudoQueue.

#### Animal Shelter
- *Same as pseudoQueue*

## Solution
- New linked lists can be instantiated with standard javascript class syntax, e.g. `let myLinkedList = new LinkedList(defaultHead)`
  - Passing in a value as the `defaultHead` argument will set that value as the head of the linked list.

- `.append(newValue)` adds a new node to the END / TAIL of the list with a value of `newValue`

- `.insert(newHead)` adds a new node to the BEGINNING / HEAD of the list with a value of `newHead`, and in turn push the pre-existing nodes down the line by one position

- `.insertBefore(searchValue, newValue)` adds a new node with the value of `newValue` before the node who's value is `searchValue`

- `.insertAfter(searchValue, newValue)` adds a new node with the value of `newValue` after the node who's value is `searchValue`

- `.includes(searchValue)` searches the the linked list for a given `searchValue` and returns `true` if the value is found or `false` if no value is found.

- `.kthFromEnd(k)` gets the value of a node that is `k` places from the tail of a linked list or returns null if `k` is an invalid argument

- `.toString()` will return a string of all the values within the linked list in a format of `HEAD -> ...nodes -> TAIL -> NULL`, where `...nodes` represent each node in the linked list. 
  - E.g. a linked list with the values `red, green, blue, apple, orange, banana` will be returned as `red -> green -> blue -> apple -> orange -> banana -> NULL`

- `.zipLists()` will take two lists as arguments and return a new LinkedList which alternatively combines the nodes from both lists given as arguments.

- `pseudoQueue.enqueue(arg)` will take one argument and push that argument into StackA; No return value.

- `pseudoQueue.dequeue()` will take no arguments and will iterate through StackA, popping values and pushing them into StackB, until StackA is empty. Finally, it will return the first popped value of StackB.

- `AnimalShelter.enqueue(animal)` will take one argument and push it into the `inAnimals` stack. If the `animal.species` is not a `dog` or `cat` it will throw an error. If `animal.name` is not a `string` it will throw an error.

-`AnimalShelter.dequeue(pref)` will take one argument which represents the preference of animal that a user would like from the shelter. It will iterate through `inAnimals`, popping values and pushing them into `outAnimals` until `inAnimals` is empty. Once that is done, it iterates through `outAnimals` searching for a match to the species preference argument given. If a match is found, it returns the match. If no match is found, it returns null. If no preference argument is given, then it will return the first animal in the pseudoqueue.