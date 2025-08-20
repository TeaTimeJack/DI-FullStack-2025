#Exercise 1 : Hello World
print("Hello World\n"*4)

#Exercise 2 : Some Math
print((99^3)*8)

#Exercise 3 : What is the output ?
print(5 < 3) #False
print(3 == 3) #True
print(3 == "3") #False
#print("3" > 3)  #type error
print("Hello" == "hello")  #False

#Exercise 4 : Your computer brand
computer_brand = "ASUS"
print(f"I have a {computer_brand} computer")

#Exercise 5 : Your information
name = "Amit"
age = 34
shoe_size = 43
info = f"My name is {name} im {age} years old and my shoe size is {shoe_size}"
print(info)

#Exercise 6 : A & B
a = 5
b = 2
if a > b:
    print("Hello world")

#Exercise 7 : Odd or Even
user_number = int(input("type a number "))
if user_number % 2 == 0:
    print("Even")
else:
    print("odd")

#Exercise 8 : What’s your name ?
name_input = input("whats your name? ")
my_name = "Amit"

if name_input == my_name:
    print("i cant belive we have the SAME NAME!")
else:
    print("we have difrent names")

#Exercise 9 : Tall enough to ride a roller coaster
users_height = int(input("What is your heigt? "))
if users_height > 145:
    print("you are tall enough to ride this roller coaster")
else:
     print("you need to grow some more to ride this roller coaster")   