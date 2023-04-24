from abc import abstractmethod,ABC
#abstarct method
class Demo(ABC):
    @abstractmethod
    def start(self):
       pass
class Demo1(Demo):
    pass
#d=Demo1()-->Can't instantiate abstract class Demo1 with abstract method start
class Demo2(Demo):
    def start(self):
        return "Start method"

d2=Demo2()
print(d2.start())
#d2=Demo1()