

# ex 1
a_list = [1,2,3,4,5,]
a_list[2] = "hi"
a_list.insert(3,"world")
print(a_list)

# ex 2
a_string = "Hi there Mom you look Nice"
# ex 3

def count_upper_and_low(str):
    rtrn_obj={
        "upper":0,
        "lower":0,
        "spaces":0
    }
    for l in str:
        if l.isupper():
            rtrn_obj["upper"] +=1
        elif l.islower():
            rtrn_obj["lower"] +=1
        elif l == " ":
            rtrn_obj["spaces"] +=1
    print(f"lower: {rtrn_obj['lower']} , upper: {rtrn_obj['upper']} , spaces: {rtrn_obj['spaces']}")    
count_upper_and_low(a_string)

# ex 4
def my_sum(arr):
    sum =0
    for num in arr:
        sum+=num
    print(sum)    
    return  sum
my_sum([1,5,4,2]) 

# ex 5
def find_max(arr):
    max = 0
    for num in arr:
        if num > max:
            max = num
    print(max)
    return max
find_max([0,1,3,50])

# ex 6
def factorial(num):
    fact = 1
    for x in range(num):
        fact += fact * x
    print(fact)
    return fact
factorial(4)

# ex 7
def list_count(arr,elm):
    count = 0
    for element in arr:
        if elm == element:
            count +=1
    print(count)
    return count
list_count(['a','a','t','o'],'a')

# ex 9 
def is_mono(arr):
    going_up = False
    going_down = False
    for i,num in enumerate(arr):
        if i == len(arr)-1:
            if going_up or going_down:
                print(True)
                return True
        if going_up == False and going_down == False:
            if num > arr[i+1]:
                going_down = True
            elif num < arr[i+1]:
                going_up = True
            else:
                continue
        if going_up:
            if num > arr[i+1]:
                print(False)
                return False
        if going_down:
            if num < arr[i+1]:
                print(False)
                return False
is_mono([7,6,5,5,2,0])
is_mono([2,3,3,3])
is_mono([1,2,0,4])

# ex 11 
int_and_string_list = [1,2,"a","b","c",3,"d",4,5,"e"]
int_arr =[]
str_arr =[]
for elm in int_and_string_list:
    if isinstance(elm,int):
        int_arr.append(elm)
    elif isinstance(elm,str):
        str_arr.append(elm)
print(int_arr)
print(str_arr)

# Exercise 12
def is_palindrome(word):
    word_arr = list(word)
    word_arr.reverse()
    reverst_word = "".join(word_arr)
    if reverst_word == word:
        return True
    return False
print(is_palindrome('radar'))
print(is_palindrome('John'))

# EX 13

def sum_over_k(sentence,k):
    length_count = 0
    word_count = 0
    for letter in sentence:
        if letter != " ":
            length_count += 1
        elif letter == " ":
            if length_count > k:
                word_count += 1
            length_count = 0
    if length_count > k:
        word_count += 1        
    print(word_count)
sum_over_k('Do or do not there is no try',2)

# ex 14

def dict_avg(dict):
    sum = 0
    amount = 0
    for val in dict.values():
        amount += 1
        sum += val
    print(int(sum/amount))
    return int(sum/amount)
dict_avg({'a': 1,'b':2,'c':8,'d': 1})

# EX 15 
def common_div(num1, num2):
    return_arr = []
    smaller = 0
    if num1 < num2:
        smaller = num1
    else:
        smaller = num2

    for x in range(2,smaller+1):
        if num1%x == 0 and num2%x == 0:
            return_arr.append(x)
    print(return_arr)
    return return_arr
common_div(10,20)

# ex 16
def is_prime(num):
    for x in range(2,num):
        if num%x == 0:
            return False
    return True
print(is_prime(11))

# ex 17

def weird_print(list):
    weird_arr = [i for i in range(len(list)) if i == list[i] and i%2 == 0]
    print(weird_arr)
weird_print([1,2,2,3,4,5])

# ex 18

# def type_count(*args):
#     return_objct = {
#         "int":0,
#         "str":0,
#         "float":0,
#         "bool":0
#     }
#     for argument in args:
#         print(argument)
#         for key in return_objct.keys():
#             print(key)
#             if isinstance(argument, key):
#                 return_objct[key]+=1
#     print(return_objct)            
# type_count(1,'string',1.0,True,False)

# ex 19



# ex 20
def convert_to_password(password):
    return_string =""
    for x in range(len(password)):
        return_string+="*"
    print(return_string)

convert_to_password("mypassword")