import random

#Exercise 1: Pets
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

#Step 1: Create the Siamese Class
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
cat1 = Bengal("BEN", 3)
cat2 = Chartreux("CHAR", 4)
cat3 = Siamese("SI", 2)
all_cats = [cat1, cat2, cat3]

sara_pets = Pets(all_cats)
sara_pets.walk()


#Exercise 2: Dogs
class Dog:
    def __init__(self,name, age:int, weight:int):
        self.name = name
        self.age = age
        self.weight = weight
        
    def bark(self):
        return self.name + " is barking"
    
    def run_speed(self):
        return self.weight / self.age * 10
    
    def fight(self, other_dog):
        if (self.run_speed()*self.weight) > (other_dog.run_speed()*other_dog.weight):
            return f"{self.name} Won the Fight!"
        elif (self.run_speed()*self.weight) < (other_dog.run_speed()*other_dog.weight):
            return f"{self.name} Won the Fight!"
        else: return "ITS A TIE!"

dog1 = Dog("REX", 5, 20)
dog2 = Dog("JOH", 6, 18)
dog3 = Dog("MIKE", 4, 24)

print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog2))

#Exercise 3: Dogs Domesticated
#type this in a diffrent file and import the class 'Dogs'
class PetDog(Dog):
    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
    
    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        string_to_print = f"{self.name} "
        for dog in args:
            string_to_print += f"and {dog.name} "
        string_to_print += "all play together"
        print(string_to_print)
        

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            random_index = random.randint(0,3)
            print(tricks[random_index])

pet_dog1 = PetDog("Mika", 8, 10, False)
pet_dog1.train()
pet_dog1.play(dog1,dog2,dog3)
pet_dog1.do_a_trick()

#Exercise 4: Family and Person Classes
#Step 1: Create the Person Class
class Person:
    def __init__(self, first_name, age:int, last_name=""):
        self.first_name = first_name
        self.last_name = last_name
        self.age = int(age)

    def is_18(self):
        if self.age >= 18:
            return True
        else: return False

#Step 2: Create the Family Class
class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_person = Person(first_name, age, self.last_name)
        self.members.append(new_person)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else: print("Sorry, you are not allowed to go out with your friends.")
    
    def family_presentation(self):
        print(f"The {self.last_name} Family")
        for member in self.members:
            print(f"{member.first_name}, {member.age} years old")

my_family = Family("Jackson")
my_family.born("Amit", 35)
my_family.born("Lital", 34)
my_family.born("Tohar", 6)
my_family.born("Yuval", 4)
my_family.born("Shahar", 1)

my_family.check_majority("Lital")
my_family.check_majority("Tohar")
my_family.family_presentation()