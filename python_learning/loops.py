#While loop
counter=1
flag=True
while flag:
    counter=counter+1
    if counter==3:
        continue
    if counter>=10:
        flag=False
        break
    print(counter)
    
else:
    print(flag)

#For Loop in string:-
for i in "werrtyuy":
    print(i)



