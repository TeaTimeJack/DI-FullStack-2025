import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728

##first_num  second_num
##sort the list (low to high)
##sliding doors from first and last
##if the sum is higher then target - divaid and concer only with the right door
##if found a pair, go to next index with left 
##if left door is at the same index as the first pair riht door
##end the funtion.