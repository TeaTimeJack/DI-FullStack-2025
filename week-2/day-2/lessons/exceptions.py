# print('Wrong string")

      
# message = 'Python is fun'
# print(message)

# number = input('give me a number: ')
# secret_number = 55

# if number > secret_number:
#     print('Congrats you won the guessing game')
# else: 
#     print('sorry, try again')

# with try except block


secret_number = 55

while True:
    try:
        number = int(input('give me a number: '))
        if number > secret_number:
            print('Congrats you won the guessing game')
            break
        else:
            print(f'{number} is not the secret number: {secret_number}')
            break
    except Exception as e:
        print(e)
    finally:
        print('finally message')