def decor_add(fun):
    def inner(a,b):
        print("#"*50)
        print("The sum of {} and {} is ".format(a,b),end='')
        fun(a,b)
        print("#"*50)
    return inner
@decor_add
def add(a,b):
    print(a+b)

add(10,20)