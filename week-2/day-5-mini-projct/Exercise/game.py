
import random

class Game:
    def get_user_item(self):
        # ... code to get and validate user input ...
        valid_choices = ["R","r","P","p","S","s"]
        the_choice = ""
        while the_choice == "":
            user_input = input("Type:\n'R' - for Rock \n'P' - for Paper \n'S' - for Scissors \n(to exit type 'E'): ")
            if user_input == valid_choices[0] or user_input == valid_choices[1]:
                the_choice = "rock"
            elif user_input == valid_choices[2] or user_input == valid_choices[3]:
                the_choice = "paper"
            elif user_input == valid_choices[4] or user_input == valid_choices[5]:
                the_choice = "scissors"
            elif user_input == "E" or user_input =="e":
                print("Bye Bye!")
                break
        # ... code to return user's choice ...
        return the_choice
    
    def get_computer_item(self):
        # ... code to generate computer's choice ...
        cpu_options = ["rock", "paper", "scissors"]
        cpu_choice = random.choice(cpu_options)
        # ... code to return computer's choice ...
        return cpu_choice
    
    def get_game_result(self, user_item, computer_item):
        # ... code to determine and return game result ...
        if user_item == computer_item:
            return "draw"
        winning_combinations = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
        }
        if winning_combinations[user_item] == computer_item:
            return "win"
        else: return "lose"
        
    def play(self):
        # ... code to get user and computer choices ...
        user_choice = self.get_user_item()
        cpu_choice = self.get_computer_item()
        # ... code to determine game result ...
        game_result = self.get_game_result(user_choice, cpu_choice)
        # ... code to print game outcome ...
        if game_result == "win" or game_result == "lose":
            print(f"You {game_result.title()}!")
        else:
            print("Its a Draw...")
        # ... code to return game result ...
        return game_result

# game1 = Game()s
# game1.play()


# if user_item == computer_item:
        #     return "draw"
        # if user_item == "rock":
        #     if computer_item == "scissors":
        #         return "win"
        #     else:return "lose"
        # elif user_item == "paper":
        #     if computer_item == "rock":
        #         return "win"
        #     else:return "lose"
        # else :
        #     if computer_item == "paper":
        #         return "win"
        #     else:return "lose"