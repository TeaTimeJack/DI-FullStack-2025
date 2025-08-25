import random


#Exercise 1: What Are You Learning?

def display_message():
    print("I am learning about functions in Python.")
display_message()

# Exercise 2: What’s Your Favorite Book?

def favorite_book(title):
    print(f"One of my favorite books is {title}.")
favorite_book("Alice in Wonderland")

#Exercise 3: Some Geography

def describe_city(city, country:str = "Unknown"):
    print(f"The city of {city} is in the country {country}.")
describe_city("Reykjavik", "Iceland")
describe_city("Paris")

#Exercise 4: Random

def compare_numbers(number:int):
    random_num = random.randint(1,100)
    if random_num == number:
        print(f"Success! the number realy was {random_num}!")
    else:
        print(f"Fail! the random number: {random_num}, your number: {number}")
compare_numbers(25)

#Exercise 5: Let’s Create Some Personalized Shirts!

def make_shirt(size:str ="Large", text:str = "I love Python"):
    print(f"You picked a shirt of size '{size}' whith a text of '{text}'.")
make_shirt("Large")
make_shirt("Medium")
make_shirt("Small", "I love my Daddy and Mommy")
#bonus
make_shirt(text="Hello!", size="Small")

#Exercise 6: Magicians…

magicians_name = ["Harry Houdini","David Blaine", "Criss Angel"]

def show_magicians(magicians = magicians_name):
    for name in magicians:
        print(name)

def make_great():
    for i, name in enumerate(magicians_name):
        magicians_name[i] = f"The Great: {name}"

make_great()
show_magicians()

#Exercise 7: Temperature Advice

def get_random_temp():
    return round(random.uniform(-10,40), 2)

def main():
    random_temp = get_random_temp()
    print(f"The temperature right now is {random_temp} degrees Celsius.")
    if random_temp <= 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif random_temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif random_temp <= 23:
        print("Nice weather.")
    elif random_temp <= 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It’s really hot! Stay cool.")
        
main()