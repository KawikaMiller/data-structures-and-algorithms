'use strict';

// Create a class called AnimalShelter that only holds cats and dogs
// Shelter operates using First In, First Out approach

const {Node} = require('./index');
const Stack = require('./stacks');
const Queue = require('./queues')
 
class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.inAnimals = new Stack();
    this.outAnimals = new Stack(); 
  }

  enqueue = (animal) => {
    if (animal.species !== 'dog' && animal.species !== 'cat') {
      throw new Error('Animal must be a dog or a cat')
    }

    if (typeof animal.name !== 'string') {
      throw new Error('Animal must have a name (string)')
    }

    this.inAnimals.push(animal);
  }

  dequeue = (pref) => {
    // if shelter is empty, throw error
    if (this.inAnimals.isEmpty() && this.outAnimals.isEmpty()) {
      throw new Error('Shelter is empty')
    // else, create a new stack and a copy of the stack of animals in the shelter
    } else {
    // iterate through the shelter stack, reverse the order (to get first in on top of stack)
      while(!this.inAnimals.isEmpty()) {
        this.outAnimals.push(this.inAnimals.pop().value)
      }
    // when done re-ordering the stack, check from top to bottom of the animal matches the preference
    // if it matches, return that animal
    // if not, pop the animal from the temporary 'outAnimals' stack and move on to the next one.
      let foundMatch = null;
      while(!this.outAnimals.isEmpty()) {
        if (this.outAnimals.peek().species === pref && foundMatch === null) {
          foundMatch = this.outAnimals.peek().value;
          this.outAnimals.pop();
        } else {
          this.inAnimals.push(this.outAnimals.pop().value);
        }
      }
      return foundMatch;
    }

    // else {
    //   if (!this.inAnimals.isEmpty() && this.outAnimals.isEmpty()) {

    //     while (!this.inAnimals.isEmpty()) {

    //       this.outAnimals.push(this.inAnimals.pop().value);

    //     }        
    //   }

    //   else if (!this.inAnimals.isEmpty() && !this.outAnimals.isEmpty()) {
    //     let newOutStack = new Stack();

    //     while (!this.inAnimals.isEmpty()) {

    //       newOutStack.push(this.inAnimals.pop().value);

    //     }

    //     newOutStack.top.next = this.outAnimals;

    //     this.outAnimals = newOutStack;
    //   }

    // }
  }
}

let myShelter = new AnimalShelter();

myShelter.enqueue(new Animal('dog', 'Fido'));
myShelter.enqueue(new Animal('cat', 'Peanut'));
myShelter.enqueue(new Animal('dog', 'Snoopy'));
console.log('PRE_DEQUEUE: ', myShelter.inAnimals)
console.log('DEQUEUE: ',myShelter.dequeue('dog'))
console.log('MY ANIMAL SHELTER: ', myShelter.inAnimals)

// console.log(myShelter.animals.top)