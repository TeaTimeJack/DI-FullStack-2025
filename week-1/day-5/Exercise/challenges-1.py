

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
