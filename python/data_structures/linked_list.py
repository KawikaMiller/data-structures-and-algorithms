class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    """
    Put docstring here
    """

    def __init__(self):
        # initialization here
        self.head = None

    # function that runs when str() is called on a LinkedList
    # example: str(LinkedList)
    def __str__(self):
        if self.head == None:
            return 'NULL'
        
        listValueArr = []
        current = self.head

        while current != None:
            listValueArr.append(f'{'{ '}{current.value}{' }'}')
            current = current.next
        
        listString = ' -> '.join(listValueArr)
        return listString + ' -> NULL'

    def insert(self, new_head_value):
        new = LinkedList()
        new.head = Node(new_head_value)
        new.head.next = self.head
        self.head = new.head

    def reverse(self):
        # reverses the order of linked list
        prev = None
        current = self.head
        next = None

        while current != None:
            next = current.next
            current.next = prev
            prev = current
            current = next

        self.head = prev

    def includes(self, value):
        current = self.head
        while current != None:
            if current.value == value:
                return True
            elif current.next != None:
                current = current.next
            else: 
                return False


class TargetError:
    pass
