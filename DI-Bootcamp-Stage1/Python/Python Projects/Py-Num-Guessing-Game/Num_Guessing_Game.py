import random

def number_guessing_game():
    random_CPU_num = random.randint(1, 100)
    max_attempts = 7
    found = False
    for x in range(1,max_attempts+1):
        player_guess =int(input("Guess A Number Between 1-100: "))
        
        if(player_guess > random_CPU_num):
            print("Too High!")
            print(f"You have {max_attempts - x} attempts left...")
        elif(player_guess < random_CPU_num):
            print("Too Low!")
            print(f"You have {max_attempts - x} attempts left...")
        elif(player_guess == random_CPU_num):
            print(f"Well Done your guess was correct! the number was {random_CPU_num}!")
            found = True
            break
    if(found == False):
        print("You didnt guess the correct number and you have used all you attepts - You LOSE!")
        print(f"The correct Number was {random_CPU_num}")
        play_again()
    else:
        play_again()
        
def play_again():
    player_input = input("Would you like to play again?  type Y for yes OR N for no: ")
    if(player_input == "n" or player_input == "N"):
        print("GoodBye")
    elif(player_input == "y" or player_input == "Y"):
        number_guessing_game()
    else:
        print("Invalide answer")
        play_again()

number_guessing_game()