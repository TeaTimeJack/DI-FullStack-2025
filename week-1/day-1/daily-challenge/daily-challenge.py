import random

user_string = ""
is_user_input_valid = False
while is_user_input_valid == False:
    user_string = input("type anything you like with 10 characters ")
    if  len(user_string) == 10:
        print("Perfect string")
        is_user_input_valid = True
    elif len(user_string) < 10:
        print("String not long enough.")
    else:
        print("String too long.")

#3. Print the First and Last Characters:
print(user_string[0])
print(user_string[-1])

#4. Build the String Character by Character:
pyramid_string = ""
for char in user_string:
    pyramid_string += char
    print(pyramid_string)

#5. Bonus: Jumble the String (Optional)
user_list =[]
for char in user_string:
    user_list.append(char)
#print(user_list)
random.shuffle(user_list)
#print(user_list)

new_string=""
for i in user_list:
    new_string += i
print(new_string)
