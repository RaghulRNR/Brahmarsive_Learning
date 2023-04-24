def deco_display(func):
    def inner():
        print("#"*50)
        print(" show a function with decorators")
        print("#"*50)
    return inner
@deco_display
def display():
    print("show a function as it is")

display()