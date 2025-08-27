
class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}
    
    def add_animal(self, animal_type, count:int=1):
        if animal_type not in self.animals.keys():
            self.animals[animal_type] = count
        else: self.animals[animal_type] += count

    def get_info(self):
        print(f"{self.name}`s farm")
        print(" ")
        for animal, amount in self.animals.items():
            print(f"{animal} : {amount}")
        print(" ")
        return "E-I-E-I-O!"

macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())



