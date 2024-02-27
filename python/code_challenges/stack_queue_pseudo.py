from data_structures.stack import Stack
from data_structures.invalid_operation_error import InvalidOperationError


class PseudoQueue:
    
    def __init__(self):
        self.stack_a = Stack()
        self.stack_b = Stack()

    def __str__(self):
        print('A: ', str(self.stack_a))
        print('B: ', str(self.stack_b))

    def enqueue(self, value):
        self.stack_a.push(value)

    def dequeue(self):
        if self.stack_a.is_empty() == True and self.stack_b.is_empty() == True:
            raise InvalidOperationError()
        elif self.stack_b.is_empty() == True:
            while self.stack_a.is_empty() == False:
                self.stack_b.push(self.stack_a.pop())
        return self.stack_b.pop()