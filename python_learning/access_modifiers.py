#Private Method and Members can't accesed outside of the class
class Student:
    __collegeName="BIT"
    def __init__(self,name,age):
        self.__name=name
        self.__age=age
    def __display(self): 
        return self.__name,self.__age,self.__collegeName
    def dispaly1(self):
        print(self.__name)
        print(self.__display())

s=Student('rahul',23)
s.dispaly1()
#print(s.__name)-->'Student' object has no attribute '__name'
#s.__display()-->'Student' object has no attribute '__display'