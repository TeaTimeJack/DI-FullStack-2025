#Exercise 1 : Add Two Numbers
def add_two_numbers(num_1, num_2):
    return num_1+num_2
print(add_two_numbers(3,5))
print(add_two_numbers(10,20))

#Exercise 2 : Print a Greeting
def great(name):
    print(f"Hi there {name}!")
great("Alice")
great("Bob")

#Exercise 3 : Check if Number is Even or Odd
def check_even_odd(num):
    if(num%2 == 0):
        print("This number is EVEN")
    else:
        print("This number is ODD")
check_even_odd(4)
check_even_odd(7)

#Exercise 4 : Sum of Numbers in a List
def sum_list(list):
    sum=0
    for num in list:
        sum+=num
    return sum
print(sum_list([1,2,3,4]))
print(sum_list([5,5,5]))

#Exercise 5 : Print Days of the Week
def print_days():
    days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    for day in days_of_week:
        print(day)
print_days()

#Exercise 6 : Check if Number is Positive, Negative, or Zero
def check_sign(num):
    if(num > 0):
        print("Posiive")
    elif(num < 0):
        print("Negative")
    else:
        print("Zero")
check_sign(10)
check_sign(-5)
check_sign(0)

#Exercise 7 : Repeat a Word
def repeat_word(word, times):
    for x in range(times):
        print(word)
repeat_word("hello", 3)
repeat_word("goodbay", 2)