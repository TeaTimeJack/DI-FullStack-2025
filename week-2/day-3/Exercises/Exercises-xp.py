

import string
import random
import datetime
import math
from faker import Faker


#Exercise 1: Currencies

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    #Your code starts HERE
    def __str__(self):
        return f"{self.amount} {self.currency}"
    
    def __int__(self):
        return int(self.amount)
    
    def __repr__(self):
        return f"{self.__dict__}"
    
    def __add__(self, other):
            if type(other) == int:
                temp = self.amount + other
                return temp
            else: 
                if self.currency == other.currency:
                    temp = self.amount + other.amount
                    return temp
                else:
                    print( TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}"))

    def __iadd__(self, other):
        if type(other) == int:
            self.amount += other
            return self
        else: 
            temp = self.amount + other.amount
            self.amount = temp
            return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

#the comment is the expected output
print(c1)
# '5 dollars'
print(int(c1))
# 5
print(repr(c1))
# '5 dollars'
print(c1 + 5)
# 10
print(c1 + c2)
# 15
print(c1) 
# 5 dollars
c1 += 5
print(c1)
# 10 dollars
c1 += c2
print(c1)
# 20 dollars
print(c1 + c3)
# TypeError: Cannot add between Currency type <dollar> and <shekel>



## Exercise 3: String module

all_letters = string.ascii_lowercase
random_string =""
lenght_rnd_string = 5
for i in range(lenght_rnd_string):
    index = random.randint(0,len(all_letters))
    letter = all_letters[index]
    random_string += letter
print(random_string)

##Exercise 4: Current Date
today = datetime.date.today()
print(today)

#Exercise 5: Amount of time left until January 1st
the_start_of_year = datetime.date(today.year+1,1,1)
days_till_start = 365 - int(today.strftime('%j'))
print(days_till_start)

##Exercise 6: Birthday and minutes

def miniuts_alive(year, month, day):
    user_birthday = datetime.datetime(year, month, day)
    today = datetime.datetime.today()
    time_diff = today - user_birthday
    print(math.floor(time_diff.total_seconds()/60))
miniuts_alive(1990,9,24)

##Exercise 7: Faker Module

user_list = []
def add_users(num):
    for i in range(num):
        fake = Faker()
        user_dict = {}
        user_dict["name"] = fake.name()
        user_dict["address"] = fake.address()
        user_dict["language_code"] = fake.language_code()
        user_list.append(user_dict)

add_users(2)
print(user_list)