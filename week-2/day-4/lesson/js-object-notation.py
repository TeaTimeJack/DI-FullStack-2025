import json
import os


dir_path = os.path.dirname(os.path.realpath(__file__))

#convert a dict to a json file

my_family = {
    'parents':['Beth', 'Jerry'],
    'children': ['Summer', 'Morty']
}


with open(dir_path+"\\family.json" ,"w", encoding= "utf-8") as f:
    json.dump(my_family, f)


#convert a dict to json string

json_family = json.dumps(my_family)
print(json_family)
print(type(json_family))

#the other way around

with open(dir_path+"\\family.json" ,"r", encoding= "utf-8") as f:
    my_family2 = json.load(f)
print(type(my_family))

