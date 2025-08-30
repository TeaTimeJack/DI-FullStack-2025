#OOP - Inheritance

class Animal: #the parent class

    def __init__(self, name, family, legs = None):
        self.name = name
        self.family = family
        self.legs = legs

    def sleep(self):
        return f'{self.name} is sleeping (parent class)'
    
    def run(self):
        return f'{self.name} is running'

    
class Dog(Animal): #the child class

    def __init__(self, name, family, legs, age, trained):
        super().__init__(name, family, legs)
        self.age = age
        self.trained = trained
    
    def sleep(self):
        return f'{self.name} is sleeping (dog class)'

    def fetch_ball(self):
        return f'{self.name} is running for the ball'

class DogPet(Dog):
    pass

class Cat(Animal):

    def sleep(self):
        base_msg = super().sleep()
        return f'{base_msg} on the roof'
    
class Alien:

    def __init__(self, planet, super_power):
        self.planet = planet
        self.super_power = super_power

    def fly(self):
        return f'{self.name} is flying'
    
    def sleep(self):
        return f'{self.name} is sleeping (alien class)'
   
    
#Multiple Inheritance
class AlienDog(Alien, Dog):
    def __init__(self, name, family, legs, age, trained, planet, super_power):
        Alien.__init__(self, planet, super_power)
        Dog.__init__(self, name, family, legs, age, trained)


dog1 = Dog('Rex', 'Canine', 4, 10, True)
print(dog1.legs)
print(dog1.sleep())
dog1.fetch_ball()

horse1 = Animal('Spirit', 'Equidae', 4)
# horse1.fetch_ball()

#create the method sleep() on the child class, change the "(parent class)" to "child class"
# call the method on the dog1 object

cat1 = Cat('Lola', 'Felidae', 4)
print(cat1.sleep())

my_pet = DogPet('Lessy', 'Canine', 4, 5, False)
print(my_pet.run())

alien_dog1 = AlienDog('Xuxa', 'Canine', 6, 523, True, 'Jupyter', 'fly')
print(alien_dog1.fly())
print(alien_dog1.fetch_ball())
print(alien_dog1.run())
print(alien_dog1.sleep())