class Dog:
    
    #the constructor function
    def __init__(self, breed, nickname, color, age, is_trained=False):
        print(self)
        self.breed = breed
        self.nickname = nickname
        self.color = color
        self.age = age
        self.is_trained = is_trained

    def rename_dog(self, new_name):
        self.nickname = new_name
        print(f"This dog`s name is now {self.nickname}")

#creating an object from the class Dog:
dog1 = Dog('chowchow', 'lion', 'orange', 5)
dog2 = Dog('collie', 'laddy', 'bege and white', 15, True)

print(dog1.color) #dot notation to access the attributes of the object

print(dog1.__dict__)
print(dog2.__dict__)

dog1.rename_dog("Tiger")
print(dog1.__dict__)

# self is the internal dictionary that has the properties from the class
# {breed: -----, nickname: -------, color: -------}

#create a new attribute to the Dog class called "is_trained" the value is a boolean and the default is False
#then run the code again. What happens with the objects that were created before this new attribute was added?