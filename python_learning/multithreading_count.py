from threading import *
import  time
def dispaly():
    print(current_thread().name,'...strated')
    time.sleep(1)
    print(current_thread().name, '...ended')
print('The number of active thread counts=',active_count())
t1=Thread(target=dispaly,name='T1')
t2=Thread(target=dispaly,name='T2')
t3=Thread(target=dispaly,name='T3')
t4=Thread(target=dispaly,name='T4')
t1.start()
t2.start()
t3.start()
t4.start()

print('The number of active thread counts=',active_count())
time.sleep(10)
print('The number of active thread counts=',active_count())