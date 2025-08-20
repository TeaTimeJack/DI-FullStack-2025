import random

user_string = input("type anything you like with 10 characters")
if  len(user_string) == 10:
    print("Perfect string")
elif len(user_string) < 10:
    print("String not long enough.")
else:
    print("String too long.")

print(user_string[0])
print(user_string[-1])

pyramid_string = ""
for char in user_string:
    pyramid_string += char
    print(pyramid_string)

user_list =[]
for char in user_string:
    user_list.append(char)
print(user_list)
random.shuffle(user_list)
print(user_list)

new_string=""
for i in user_list:
    new_string += i
print(new_string)
