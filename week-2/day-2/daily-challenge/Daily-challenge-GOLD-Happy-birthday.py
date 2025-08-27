#Daily challenge GOLD : Happy birthday
import datetime
date_now = datetime.datetime.now()

user_date_input = input("Type your birthday in format: DD.MM.YYYY: ")
user_input_day = int(user_date_input[0] + user_date_input[1])
user_input_month = int(user_date_input[3] + user_date_input[4])
user_input_year = int(user_date_input[6] + user_date_input[7] + user_date_input[8] + user_date_input[9])
#print(f"day: {user_input_day} month: {user_input_month} year: {user_input_year}")
your_full_date = datetime.datetime(user_input_year, user_input_month, user_input_day)

your_age = int(date_now.strftime("%G")) - user_input_year   
if int(your_full_date.strftime("%j")) > int(date_now.strftime("%j")):
    your_age = your_age -1
#print(your_age)

last_number_your_age = your_age % 10
number_of_space_sides = 11 - last_number_your_age


print(" "*4 + "_"*(int(number_of_space_sides/2)) + "i" *last_number_your_age + "_"*(int(number_of_space_sides/2)))
print(" "*3 + "|:H:a:p:p:y:|")
print(" " + "__|" + "_"*11 + "|__")
print("|" + "^"*17 + "|")
print("|:B:i:r:t:h:d:a:y:|")
print("|" + " "*17 + "|")
print("~"*19)