from data_structures.linked_list import LinkedList, Node
from data_structures.invalid_operation_error import InvalidOperationError

class Stack(LinkedList):
    """
    Put docstring here
    """

    def __init__(self):
        # calling super() allows the Stack to inherit all the properties and methods of the LinkedList
        super().__init__()
        self.top = None

    def is_empty(self):
        if self.top == None:
            return True
        else: return False

    def push(self, value):
        if self.is_empty() == True:
            self.top = Node(value)
        else:
            new_top = Node(value)
            new_top.next = self.top
            self.top = new_top

    def pop(self):
        if self.is_empty() == False:
            popped = self.top.value
            self.top = self.top.next
            return popped
        else:
            raise InvalidOperationError('Method not allowed on empty collection')
        
    def peek(self):
        if self.is_empty() == False:
            return self.top.value
        else:
            raise InvalidOperationError('Method not allowed on empty collection')


