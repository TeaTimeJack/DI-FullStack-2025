human_years = int(input("Enter Human Years here:"))
cat_years = 0 
dog_years = 0

if(human_years==1):
    cat_years = 15
    dog_years = 15
elif(human_years==2):
    cat_years = 15 + 9
    dog_years = 15 + 9
elif(human_years>2):
    cat_years = 15 + 9 + (human_years-2)*4
    dog_years = 15 + 9 + (human_years-2)*5    

print([human_years, cat_years, dog_years])    