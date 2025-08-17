try_name = "amit"
print(len(try_name))

username = input("Enter a UserName: ")

while(not 0<len(username)<12):
    username = input("Enter a UserName less then 12 char: ")
    while(" " in username):
        username = input("Enter a UserName most not contain spaces: ")
        while(not username.isalpha):
            username = input("Enter a UserName most not contain spaces: ")

print(f"Your Valid UserName is {username}")