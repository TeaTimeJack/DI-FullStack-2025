#Exercise 1: Converting Lists into Dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

expected_output = {}
for i in range(len(keys)):
    expected_output[keys[i]] = values[i]
print(expected_output)

#Or #Exercise 1: Converting Lists into Dictionaries
expected_output_2 = dict(zip(keys, values))
print(expected_output_2)


#Exercise 2: Cinemax #2
family = {"rick": 43, 
          'beth': 13, 
          'morty': 5, 
          'summer': 8}
total_price = 0
for name,age in family.items():
    if age >= 3 and age <=12:
        print(f"{name}`s price is $10")
        total_price += 10
    elif age > 12:
        print(f"{name}`s price is $15")
        total_price += 15
    else:
        print(f"{name}`s price is Free!")
print(f"${total_price}")

#Exercise 2: Cinemax #2 BONUS

family_input_dict = {}
while True:
    family_input_name = input("type a name: if your done type 'q'")
    if family_input_name == 'q':
        break
    family_input_age = input("type the age of that name: ")
    family_input_dict[family_input_name] = int(family_input_age)

print(family_input_dict)

total_price_bonus = 0
for name,age in family_input_dict.items():
    if age >= 3 and age <=12:
        print(f"{name}`s price is $10")
        total_price_bonus += 10
    elif age > 12:
        print(f"{name}`s price is $15")
        total_price_bonus += 15
    else:
        print(f"{name}`s price is Free!")
print(f"${total_price_bonus}")


#Exercise 3: Zara

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue", 
        "Spain": "red", 
        "US": ["pink", "green"]
    }    
}

brand["number_stores"] = 2
client = brand["type_of_clothes"]
print(f"{brand['name']} clients are {client[0]}, {client[1]}, {client[2]}, and {client[3]}.")
brand["country_creation"] = "Spain"
if brand["international_competitors"]:
    brand["international_competitors"].append("Desigual")
del brand["creation_date"]    
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(brand.keys())

#Bonus:
more_on_zara = {
    "creation_date" : 1975,
    "number_stores": 7002
}
brand.update(more_on_zara)
print(brand)

#Exercise 4: Disney Characters

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

users_dict_1 = {}
for name in enumerate(users):
    users_dict_1[name[1]] = name[0]
print (users_dict_1)

users_dict_2 = {}
for name in enumerate(users):
    users_dict_2[name[0]] = name[1]
print (users_dict_2)

users.sort()
users_dict_3 = {}
for name in enumerate(users):
    users_dict_3[name[1]] = name[0]
print (users_dict_3)
