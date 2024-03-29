'use strict';

// Create a class called AnimalShelter that only holds cats and dogs
// Shelter operates using First In, First Out approach

const Stack = require('./stacks');
 
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
        if ((this.outAnimals.peek().species === pref && foundMatch === null) || 
        (!pref && foundMatch === null)) {
          foundMatch = this.outAnimals.peek();
          this.outAnimals.pop();
        } else {
          this.inAnimals.push(this.outAnimals.pop().value);
        }
      }
      return foundMatch;
    }
  }
}

module.exports = {AnimalShelter, Animal};