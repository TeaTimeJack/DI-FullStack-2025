given_list = [("name","Elie"),("job","Instructor")]
dict_created = dict(given_list)
print(dict_created)


list_1 = ["CA", "NJ", "RI"]
list_2 = ["California", "New Jersey", "Rhode Island"]
dic_created_2={}
for i in range(len(list_1)):
    dic_created_2[list_1[i]] = list_2[i]
print(dic_created_2)

dic_created_3 = {}
vowels = ["a","e","i","o","u"]
for letter in vowels:
    dic_created_3[letter] = 0 
print(dic_created_3)

dic_created_4 = {}
uppercase_alphabet = [chr(i) for i in range(ord('A'), ord('Z') + 1)]
for i in range(len(uppercase_alphabet)):
    dic_created_4[i+1] = uppercase_alphabet[i]
print(dic_created_4)

bonus_string = "awesome sauce"
dic_created_bonus = {}
counter = 0

for vowel in vowels:
    for letter in bonus_string:
        if(letter == vowel):
            counter = counter+1
    dic_created_bonus[vowel] = counter
    counter = 0
print(dic_created_bonus)            