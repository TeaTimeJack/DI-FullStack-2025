from datetime import datetime, date

class Person:
    def __init__(self, first_name, last_name, birth_date):
        self.first_name = self.format_name(first_name)
        self.last_name = self.format_name(last_name)
        self.birth_date = self.parse_birthdate(birth_date)
        self._email = None

    @staticmethod
    def format_name(name):
        return name.capitalize()
    
    @staticmethod
    def parse_birthdate(date_str):
        return datetime.strptime(date_str, '%d-%m-%Y').date()

    @classmethod
    def form_age(cls, first_name, last_name, age:int):
        current_year = datetime.today().year
        birth_year = current_year - age
        birth_date = f"1-01-{birth_year}"
        return cls(first_name, last_name, birth_date)
    
    @property
    def age(self):
        today= date.today()
        age = today.year - self.birth_date.year
        return age
    
    @property
    def email(self):
        gmail = "@gmail.com"
        initial = self.first_name[0].lower()
        email = f"{initial}.{self.last_name.lower()}{gmail}"
        return email

    ###### Dunder Methods ######

    def __str__(self):
        return f"Hello this is {self.first_name} {self.last_name}"

    def __repr__(self):
        return f"{self.__dict__}"
    
    def __eq__(self, other):
        return self.last_name == other.last_name
    
    def __lt__(self, other):
        return self.age < other.age
    



p1 = Person("john", "snow", '21-08-1990')
print(repr(p1))
# print(p1.birth_date)
# print(p1.first_name)
# print(p1.age)
# print(p1.email)

p2 = Person.form_age("aria", "stark", 18)
# print(p2.first_name + " " + p2.last_name)
# print(p2.birth_date)

p3 = Person.form_age("sanas", "stark", 21)

print(p1 > p2)
print(p2 > p3)