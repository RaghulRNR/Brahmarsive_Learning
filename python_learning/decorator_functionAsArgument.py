def f1(func):
    print("f1 function")
    func()

def x1():
    print("x1 function")

def x2():
    print("x2 function")

f1(x1)
f1(x2)

