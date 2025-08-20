# Exercise 1 : Hello World-I love Python
print(("Hello world\n" *4)+ ("I Love python\n" *4))

#Exercise 2 : What is the Season ?

user_input = int(input("choose a month (type 1-12) "))
if  user_input <=5 and user_input >=3:
    print("the season is SPRING")
elif user_input <=8 and user_input >=6:
    print("the season is SUMMER")
elif user_input <=11 and user_input >=9:
    print("the season is AUTUMN")
elif user_input <=12 and user_input <=2:
    print("the season is Winter")