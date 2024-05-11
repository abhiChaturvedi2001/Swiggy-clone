import numpy as l

tuple = ()
print(tuple)

tuple1 = 'Geetanjali'
print(tuple1)

tpl = 'Abhishek', 123,'Q1234'
print(tpl)

tpl1 = 'Geetanjali',1234,'Q1232'

# nst = tpl, tpl1, (1,2,3)
# # nst.append('Hello')
# print(nst)

# Q1. differnece between set list and tuple.
# Q2. How can you identified a set , a list and the tuple at the initial level.

set2 = {"pen", "pencil", "eraser", "sharpner", "rulerbar", "pen" };
print(set2)

# // i an in 
# // union 
# # intersect

# operator works with set - , &, ^ | 

set3 = {'Hello','pencil'}
print(set2&set3)
print(set2^set3)
print(set2|set3)
print(set2-set3)
# print(set3.append('heloooddj')) # it is unchangeable and unmutable 
# dictionary

# a dictionary is a collection of keys and values. for a dictionary keys are the unique values while a single key can have multiple values. The dictionary doesn't have any duplicate key values the keys are immutable 
# to assign a values to a key the columns symbol is required. 

dict = {'Name':'VIT Bhopal University', 'Place':'Kotri'}
print("Name:",dict['Name'])
print("Place:",dict['Place'])


# to find the values of any particular key the function name is get() function 
# syntax :- dictionary name.get(key name)

print(dict.get("Name"))
print(dict.get("Name", "Place")) 

# find out all the values irrespective of keys the function name is values

print(dict.values())
# differentiate between get() and values();
# finding the key value with pair own values items()

print(dict.items())

# create a dictionary with the name of batch MCA2023 include course title course code, slot and faculty name in the dictionary and display the course wise faculty

batchMCA2023= {
    "Course":[
        {'Course Title':'Python','Code':'MCA1002','Slot':'A11+A122','Faculty':'Dr. Anjali Mathur'},
        {'Course Title':'Software Testing','Code':'MCA1006','Slot':'D11+D12','Faculty':'Dr.Vipin Jain'},
        {'Course Title':'Software Engineering','Code':'MCA1007','Slot':'W11+W12','Faculty':'Dr. Abha Sharma'}
    ]
}
print(batchMCA2023.get("Course[Course Title]"))

MCA = l.array(['23MCA1001', '23MCA100189','23MCA10028','23MCA1001122'])
print(MCA)

# Q1. find out the 0 index of the array 

print(MCA[0])
print(MCA[2])

# printSlicing 
# create a array including all the odd numbers present between 0 - 20 and display the number present at position numbers 4 5 and 10
# display the position of the numbers 7 13 17

oddNumbers = l.array([1,3,5,7,9,11,13,15,17,19])

for i in range(len(oddNumbers)):
    if i == 4:
        print(oddNumbers[i])
    elif i == 5:
        print(oddNumbers[i])
    elif i == 10:
        print(oddNumbers[i])

print(oddNumbers[7:13:17])

# display the values from 1 - 8 position with the increment of 3 numbers
# display the values from 2 - 9 position with the increment  of 2 numbers

print(oddNumbers[1:8:3])
print(oddNumbers[2:9:2])


# display the numbers of  2 - 7 with the decrement of 2 values
print(oddNumbers[-3:3:-1])

# create a two dimensional array where the first dimesion contains the serial numbers and second dimensipnn contain the even numbers. the size of two dimension array must be 3x3
two_d_array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

arr = l.array([[1,2,3,4],[20,30,40,50]])
print(arr)
print(two_d_array)

three_d_array = l.array([
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18]
    ],
    [
        [19, 20, 21],
        [22, 23, 24],
        [25, 26, 27]
    ]
])

# find out the shape of the array we can use shape() command 
print(three_d_array.size)
print(three_d_array.shape)
# concatenate function the function is used to merge two array values or two arrays. the merging can be done on the basis of access of the array 
# two dimension array is having two access 0 = row and 1 = coloumn 

even = l.array([[2,3,4,5,6], [1,2,3,4,5]])
odd = l.array([[1,3,5,7,9], [6,7,8,9,10]])
total = l.concatenate((even, odd), axis=0)
print(total)

# ndim command  the command is used to provide the dimension of an array 
print(three_d_array.ndim)

# arrange function the function creates a new ARRAY with the size of given numbers one dimensional arrray
new  = l.arange(8)
print(new)

#reshape function the function is used to give a new shape two an array without changing the data 
newone = new.reshape(2,4)
print(newone)


# important reshape concat ndim arange

arrr = l.sort(arr)
print(arrr)




