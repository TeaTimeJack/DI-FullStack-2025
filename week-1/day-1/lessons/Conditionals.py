# name = input("whats your name? ")
# if len(name) < 5:
#     print("you have a short name")
# else:
#     print("your name is over 5 letters long") 


user_num = int(input("type a number between 1-100 "))

# if user_num % 3 == 0:
#     print("Fizz" ,end="")
# if user_num % 5 == 0:
#     print("Buzz")

if user_num % 3 == 0  and user_num % 5 == 0:
    print("FizzBuzz")
elif user_num % 3 == 0:
    print("Fizz")
elif user_num % 5 == 0:
    print("Buzz")