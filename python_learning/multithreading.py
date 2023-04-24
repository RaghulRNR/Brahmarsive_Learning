from threading import *
def display():
    for i in range(10):
        print('Hello world by T1 ', current_thread().getName())

t1=Thread(target=display)
t1.start()

for i in range(10):
    print('Hello world by MT', current_thread().getName())