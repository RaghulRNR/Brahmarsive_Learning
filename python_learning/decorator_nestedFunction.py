def outer():
    print("strating outer funvtion")
    def inner():
        print("Inner function execution")
    inner()
    print("outer function finished")

outer()
