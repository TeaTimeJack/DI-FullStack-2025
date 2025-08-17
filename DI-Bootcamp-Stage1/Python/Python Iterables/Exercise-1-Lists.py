my_list = [1,2,3,4]
for value in my_list:
    print(value)

for value in my_list:
    print(value*20)

name_list = ["Elie", "Tim", "Matt"]
for name in name_list:
    print(name[0])

my_list_2 = [1,2,3,4,5,6]
print(my_list_2[1::2])

my_list_3 = [3,4,5,6]
returned_list = []
for num in my_list:
    if(num in my_list_3):
        returned_list.append(num)
print(returned_list)

reversed_words=[]
for word in name_list:
    word = word.lower()
    reversed_words.append(word[::-1])
print(reversed_words) 

string_1, string_2 ="first", "third"
new_string = []
for letter in string_1:
    if(letter in string_2):
        new_string.append(letter)
print(new_string)

for x in range(12,100,12):
    print(x)

for letter in "amazing":
    if(letter =="a"):
        continue
    elif(letter =="e"):
        continue
    elif (letter =="i"):
        continue
    elif( letter =="o"):
        continue
    elif(letter =="u"):
        continue
    print(letter)


generate_1 = []
while (len(generate_1) <= 3):
    insude_list = []
    for x in range(0,3):
        insude_list.append(x)
    generate_1.append(insude_list)
print(generate_1)

generate_2 = []
while (len(generate_2) <= 10):
    insude_list = []
    for x in range(0,10):
        insude_list.append(x)
    generate_2.append(insude_list)
print(generate_2)