from data_structures.stack import Stack


def multi_bracket_validation(string):
  
    bracket_stack = Stack()
    string_list = [*string]

    for char in string_list:
        if char == '{' or char =='[' or char == '(':
            bracket_stack.push(char)
        elif char == '}' or char ==']' or char == ')':
            if bracket_stack.is_empty() == True:
                return False
            else:
                open_bracket = bracket_stack.peek()

                if open_bracket == '[' and char == ']':
                    bracket_stack.pop()
                elif open_bracket == '{' and char == '}':
                    bracket_stack.pop()
                elif open_bracket == '(' and char == ')':
                    bracket_stack.pop()

    return bracket_stack.is_empty()

    
