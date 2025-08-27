
#Exercise 1: Cats
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = int(cat_age)

# Step 1: Create cat objects
cat1 = Cat("Tom", 13)
cat2 = Cat("Wiskers" , 5)
cat3 = Cat("Jerry", 8)

# Step 2: Create a function to find the oldest cat
def find_oldest_cat(cat1, cat2, cat3):
    # ... code to find and return the oldest cat ...
    oldest_cat = None
    oldest_age = 0
    for cat in [cat1, cat2, cat3]:
        if cat.age > oldest_age:
            oldest_cat = cat
            oldest_age = cat.age
    print(f"The oldest cat is {oldest_cat.name} and he is {oldest_cat.age} years old")

# Step 3: Print the oldest cat's details
find_oldest_cat(cat1, cat2, cat3)

#Exercise 2 : Dogs
class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height
    
    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height*2} cm high!")
    
davids_dog = Dog("Bob", 25)
sarahs_dog = Dog("Snowy", 35)

print(davids_dog.name)
print(sarahs_dog.name)
davids_dog.bark()
davids_dog.jump()
sarahs_dog.bark()
sarahs_dog.jump()

#Exercise 3 : Who’s the song producer?
class Song:
    def __init__(self, lyrics:list):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

#Exercise 4 : Afternoon at the Zoo
class Zoo:
    def __init__(self , zoo_name, animals=[]):
        self.name = zoo_name
        self.animals = animals
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        for animal in self.animals:
            print(animal)
    
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        self.dict_animals = {}
        for animal in self.animals:
            if animal[0] not in self.dict_animals.keys():
                self.dict_animals[animal[0]] =[animal]
            else: self.dict_animals[animal[0]].append(animal)
        return self.dict_animals
    
    def get_groups(self):
        print(self.dict_animals)


# my_zoo = Zoo("My Zoo")
# my_zoo.add_animal("tiger")
# my_zoo.add_animal("bear")
# my_zoo.add_animal("monkey")
# my_zoo.add_animal("tiger")
# my_zoo.add_animal("bird")
# my_zoo.add_animal("crock")
# my_zoo.add_animal("aligator")
# my_zoo.sort_animals()
# my_zoo.get_groups()
# my_zoo.sell_animal("monkey")
# my_zoo.sort_animals()
# my_zoo.get_groups()

# Step 2: Create a Zoo instance
brooklyn_safari = Zoo("Brooklyn Safari")

# Step 3: Use the Zoo methods
brooklyn_safari.add_animal("Giraffe")
brooklyn_safari.add_animal("Bear")
brooklyn_safari.add_animal("Baboon")
brooklyn_safari.get_animals()
brooklyn_safari.sell_animal("Bear")
brooklyn_safari.get_animals()
brooklyn_safari.sort_animals()
brooklyn_safari.get_groups()