first = "Hello World"
#This is a comment
print("I AM A COMPUTER!")

if(1<2 and 4>2):
    print("Math is fun")

string_length = "What's my length?"
print(len(string_length))

small_case = "i am shouting!"
print(small_case.upper())

string_num = "1000"
print(int(string_num))

num_four = 4
print(f"{num_four}real")
print(3 * "cool")
# print(1/0)
print(type([]))

name = input("type in your name")
print (name)

choose_num = int(input("pick a number"))
print(f" You picked {choose_num}")
if (choose_num<0):
    print("That number is less than 0!")
elif(choose_num>0):
    print("That number is greater than 0!")
else:
    print("You picked 0!")        

# i = 0
# for letter in "apple":
#     if(letter == "l"):
#         print(i)
#     else:
#         i=i+1
print("apple".index("l"))

# contains_y = False
# for letter in "xylophone":
#     if(letter == "y"):
#         contains_y = True
# print(contains_y)  
print("y" in "xylophone")      

my_string = "This is a comment."
print(my_string.islower()) 