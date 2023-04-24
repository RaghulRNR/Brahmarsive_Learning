#Dynamic argumanents:
def add(*argv):
    sum=0
    for arg in argv:
        sum=sum+arg
    return sum

print(add(1,2,3))

#keyword argument:

def addkey(**kwargs):
    for key, value in kwargs.items():
        print(key,value)

addkey(fi=1,se=2,th=3)

#*argv and **kwargs

def addb(*argv,**kwargs):
    for args in argv:
        print(args)
    for key,value in kwargs.items():
        print(key,value)
    for key in kwargs.items():
        print(key)

addb(1,2,4,f=1,s=2,t=3)