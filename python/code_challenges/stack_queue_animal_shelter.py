from data_structures.queue import Queue
from data_structures.invalid_operation_error import InvalidOperationError


class AnimalShelter(Queue):
    def __init__(self):
        super().__init__()

    def enqueue(self, animal):
        if animal.species != 'dog' and animal.species != 'cat':
            raise InvalidOperationError('Shelter only accepts dogs &/o cats')
        
        super().enqueue(animal)

    def dequeue(self, preference):
        if self.is_empty() == True:
            raise InvalidOperationError('Shelter is empty')
        else:
            bq = Queue()

            while self.is_empty() == False:
                if self.peek().species == preference or preference == None:
                    return super().dequeue()
                else:
                    bq.enqueue(super().dequeue())

            self.back = bq.front


class Animal:
    def __init__(self, species):
        self.species = species


class Dog(Animal):
    def __init__(self):
        super().__init__('dog')


class Cat(Animal):
    def __init__(self):
        super().__init__('cat')
