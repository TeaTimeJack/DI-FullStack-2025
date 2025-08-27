#Exercise 1: Favorite Numbers
my_fav_numbers = {2, 4, 6}
print(my_fav_numbers)

my_fav_numbers.add(8)
my_fav_numbers.add(10)
print(my_fav_numbers)

my_fav_numbers.remove(10)
print(my_fav_numbers)

friend_fav_numbers = {1,3,5}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#Exercise 2: Tuple



#Exercise 3: List Manipulation
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
print(basket.count("Apples"))
basket.clear()
print(basket)


#Exercise 4: Floats

list_of_int_and_floats = []
my_float = 1

while len(list_of_int_and_floats) != 8:
        my_float = my_float + 0.5

        list_of_int_and_floats.append(my_float)
print(list_of_int_and_floats)

#Exercise 5: For Loop

numbers=[]
for i in range(1,21):
        print(i)
        numbers.append(i)

for i in numbers:
        if numbers.index(i) %2 == 0:
            print(i)

#Exercise 6: While Loop

while True:
        user_input=input("enter name: ")
        if user_input == "amit":
                break

#Exercise 7: Favorite Fruits

fruits_input = input("enter your favorite fruits: ")
list_of_fruits = []
fruit = ""
for char in fruits_input:
    if char != " ":
        fruit += char
    else:
        list_of_fruits.append(fruit)
        fruit = ""
list_of_fruits.append(fruit)
print(list_of_fruits)

name_fruit = input("name any fruit: ")

if  name_fruit in list_of_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

#Exercise 8: Pizza Toppings

pizza_toppings = []
while True:
    user_topping = input("Choose a topping to add to your pizza:   (to stop type 'quit')")
    if user_topping == "quit":
          break
    pizza_toppings.append(user_topping)
    print(f"Adding {user_topping} to your pizza.")
print(f"your toppings are {pizza_toppings}")
pizza_price = 10
for i in pizza_toppings:
      pizza_price += 2.5
print(f"Your pizza price is ${pizza_price}")

#Exercise 9: Cinemax Tickets

list_of_ages = []
age = ''
user_ages = input("Type the ages of each person who wants to buy a movie ticket: ")
for char in user_ages:
    if char != " ":
        age += char
    else:
        list_of_ages.append(int(age))
        age = ""
list_of_ages.append(int(age))
print(list_of_ages)
total_price = 0
for person_age in list_of_ages:
    if person_age > 12:
        total_price += 15
    elif person_age >= 3 and person_age <= 12:
        total_price += 10
print(f"Your total ticket price is ${total_price}")

#bonus
list_of_ages2 = []
age2 = ''
user_ages2 = input("Type the ages of each person who wants to buy a movie ticket: ")
for char in user_ages2:
    if char != " ":
        age2 += char
    else:
        list_of_ages2.append(int(age2))
        age2 = ""
list_of_ages2.append(int(age2))
print(list_of_ages2)

final_attendees = []
for teen_age in list_of_ages2:
    if teen_age < 16 or teen_age > 21:
        print(f"the person age of {teen_age} is not allowed to wathch this movie")
    else:
        final_attendees.append(teen_age)

print(final_attendees)


#Exercise 10: Sandwich Orders
sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]
# print(sandwich_orders)
for order in sandwich_orders:
    if order == "Pastrami":
        sandwich_orders.remove(order)
# print(sandwich_orders)

finished_sandwiches = []
for preparing in sandwich_orders:
    print(f"I made your {preparing} sandwich.")
    finished_sandwiches.append(preparing)
print(f"list of finished sandwiches {finished_sandwiches}")