# # print("hello world")

# # print("The answer is", 42)  # String and integer
# # print(3.14, "is a float")  # Float and string
# # print(True)  # Boolean (True/False)

# # x = 5
# # print(x)

# # # Taking user input and storing it in the variable user_name
# # user_name = input("Enter your name: ")

# # # Displaying the input
# # print("Hello and good morning", user_name)

# # #Exercise 1: Variable Declaration and input() and print()
# # age = input("Enter your Age:")
# # print(user_name, " You are ",age ,"Years old!")

# # #Exercise - Python Data Types
# # print(10+3)
# # print(15-7)
# # print(4*8)
# # print(18/3)
# # print(11//4)
# # print(9%4)
# # print(6**3)
# # print(-12)

# #Exercise 2- Python Data Types
# fruits = ["apple", "banana", "orange", "pair"]
# print(fruits[1])

# num_set = {12, 14, 16, 18, 20}
# print(num_set)

# star_wars = ("Luke Skywalker", "Darth Vader", "Leia Organa", "Yoda", "Han Solo")
# print(star_wars[2])

# woman_dic = {
#     "name": "Alice",
#     "age": 23,
#     "adress": "New York",
#     "alive": True
# }

# print(woman_dic)
# print(woman_dic["alive"])


# age = 16

# if age >= 18:
#     print("You are an adult.")
# elif age >= 13:
#     print("You are a teenager.")


# name = "Matt"
# if name == "Matt":
#     print("Your name is Matt")
# elif name == John:
#     print("Your name is John")
# print("Bye!")

# Prompt the user for input
secret_word = input("Guess the secret word: ")

# Check the input and respond accordingly
if secret_word == "Python":
    print("Correct! You guessed the secret word!")
elif secret_word == "Java":
    print("Not quite, but close!")
else:
    for letter in secret_word:
        print(letter)