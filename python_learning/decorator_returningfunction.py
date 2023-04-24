def outer():
    print("strating outer funvtion")
    def inner():
        print("Inner function execution")
    print("outer function finished")
    return inner

fun=outer()
fun()
