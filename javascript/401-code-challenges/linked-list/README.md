# Code Challenge 05 - Linked List Implementation
Create a Linked List data structure consisting of a Node class and a Linked List class. 

The `Node` class should contain two properties: 
- `value`, which can be a value of any data type
- `next`, which is the next `Node` in the linked list

The `LinkedList` class should have one property:
- `head`, which is a `Node` and is the first item of the linked list.

`LinkedList` should also consist of 0 - n amount of `Node`s and should have various methods that allow a user to modify &/o read the data in the list.

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
### Efficiency
- Node

## Solution
- New linked lists can be instantiated with standard javascript class syntax, e.g. `let myLinkedList = new LinkedList(defaultHead)`
  - Passing in a value as the `defaultHead` argument will set that value as the head of the linked list.

- `.append(newValue)` adds a new node to the END / TAIL of the list with a value of `newValue`

- `.insert(newHead)` adds a new node to the BEGINNING / HEAD of the list with a value of `newHead`, and in turn push the pre-existing nodes down the line by one position

- `.includes(searchValue)` searches the the linked list for a given `searchValue` and returns `true` if the value is found or `false` if no value is found.

- `.toString()` will return a string of all the values within the linked list in a format of `HEAD -> ...nodes -> TAIL -> NULL`, where `...nodes` represent each node in the linked list. 
  - E.g. a linked list with the values `red, green, blue, apple, orange, banana` will be returned as `red -> green -> blue -> apple -> orange -> banana -> NULL`