from data_structures.linked_list import LinkedList, Node
from data_structures.invalid_operation_error import InvalidOperationError

class Queue:
    """
    Put docstring here
    """

    def __init__(self):
        # initialization here
        super().__init__()
        self.front = None
        self.back = None

    def __str__(self):

        values = []
        current = self.front

        while current != None:
            values.append(f'{current.value}')
            current = current.next

        valuesString = ' <- '.join(values)
        return 'FRONT <- ' + valuesString + ' <- BACK'

    def is_empty(self):
       if self.front == None:
           return True
       else: return False

    def enqueue(self, value):
        if self.is_empty() == True:
            self.front = Node(value)
            self.back = self.front
        else:
            newBack = Node(value)
            self.back.next = newBack
            self.back = newBack

    def dequeue(self):
        if self.is_empty() == True:
            raise InvalidOperationError()
        else:
            oldFront = self.front
            self.front = self.front.next
            oldFront.next = None
            return oldFront.value

    def peek(self):
        if self.is_empty() == True:
            raise InvalidOperationError()
        else:
            return self.front.value