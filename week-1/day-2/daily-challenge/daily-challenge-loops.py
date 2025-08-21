#Challenge 1: Multiples of a Number
number_input = int(input("pick a number "))
length_input = int(input("pick a length "))
output_list =[]
for i in range(1,length_input+1):
    output_list.append(number_input * i)
print(output_list)

#Challenge 2: Remove Consecutive Duplicate Letters

string_input = input("type what ever you like: ")
print(string_input)
new_string = ""
for i in range(len(string_input)-1):
    if string_input[i] != string_input[i+1]:
        new_string += string_input[i]
new_string += string_input[-1]
print(new_string)