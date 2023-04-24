from threading import *
import time
def square(numbers):
    for x in numbers:
        print(x*x)
        time.sleep(1)

def add2(numbers):
    for x in numbers:
        print(x+2)
        time.sleep(1)

startTime=time.time()
print("StartTime={}".format(startTime))
numbers=[1,2,3,4,5,6]
t1=Thread(target=square,name="T1",args=(numbers,))
t2=Thread(target=add2,name="T1",args=(numbers,))

t1.start()
t2.start()

t1.join()
t2.join()

endTime=time.time()

print("Total time=",endTime-startTime)
