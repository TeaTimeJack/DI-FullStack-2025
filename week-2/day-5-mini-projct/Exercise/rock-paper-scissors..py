
from game import Game

def get_user_menu_choice():
    # ... code to display menu and get user choice ...
    while True:
        user_choice = input("1.Play new game\n2.Show scores \n3.Quit \nChoose an option: 1, 2, 3  -  ")
        try:
                user_choice = int(user_choice)
                if user_choice == 1 or user_choice ==2 or user_choice ==3:
                    return user_choice 
                else:print("invalid input, try agin.")
        except ValueError:
             print("invalid input, try agin.")

def print_results(results):
    # ... code to print results in a user-friendly way ...
    print(f"Wins: {results['win']}, Losses: {results['lose']}, Draws: {results['draw']}")
    # ... code to thank user ...
    print("Thank you for playing")

def main():
    # ... code to call all the related functions depending on the user's choice.
    games_results = {
                "win": 0,
                "lose": 0,
                "draw": 0
            } 
    while True:
        num_chosen = get_user_menu_choice()
        if num_chosen == 1:
             game1 = Game()
             result = game1.play()
             games_results[result] +=1
        elif num_chosen == 2:
             print_results(games_results)
        elif num_chosen == 3:
              print_results(games_results)
              break
    # if __name__ == "__main__":
main()

