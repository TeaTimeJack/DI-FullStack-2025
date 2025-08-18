#Exercise 1 : Return the Largest Number
def find_largest(list):
    largest = -999999
    for num in list:
        if(num > largest):
            largest = num
    return largest
print(find_largest([1, 2, 3, 4]))
print(find_largest([10, 20, 5]))

#Exercise 2 : Check for Letter in Word
def check_letter(word, check):
    for letter in word:
        if(letter == check):
            return True
    return False
print(check_letter("apple", "a"))
print(check_letter("banana", "z"))

#Exercise 3 : Count to a Number
def count_to_number(num):
    for x in range(num):
        print(x+1)
count_to_number(3)
count_to_number(5)