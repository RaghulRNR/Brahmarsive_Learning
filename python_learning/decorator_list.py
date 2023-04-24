def decor_greet(func):
    names=["Rahul","Vasanth","Jayanth"]
    def inner(name):
        if name in names:
            func(name)
            print("you are the admin for this application ,you have full access")
        else:
            func(name)
    return inner
@decor_greet
def greet(name):
    print("Hello ...... {}".format(name))

greet("Rahul")