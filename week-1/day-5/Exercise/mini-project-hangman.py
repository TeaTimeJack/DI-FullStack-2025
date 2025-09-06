
# Instructions
# The computer choose a random word and mark stars for each letter of each word.
# Then the player will guess a letter.
# If that letter is in the word(s) then the computer fills the letter in all the correct positions of the word.
# If the letter isn’t in the word(s) then add a body part to the gallows (head, body, left arm, right arm, left leg, right leg).
# The player will continue guessing letters until they can either solve the word(s) (or phrase) or all six body parts are on the gallows.
# The player can’t guess the same letter twice.

import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
# word = random.choice(wordslist) 
### YOUR CODE STARTS FROM HERE ###
gallows = ("head", "body", "left arm", "right arm", "left leg", "right leg")
number_of_mistakes = 0
max_mistakes = 6

def cpu_random_word(list):
    random_word = random.choice(list)
    letters_stars = ["*" for x in range(len(random_word))]
    word_and_star = {
        "word": random_word,
        "star": letters_stars
        }
    return word_and_star

def print_stars(word_star_dict):
    string_stars = "".join(word_star_dict["star"])
    print(string_stars)

def change_stars_in_dict(user_letter, word_star_dict):
    for index, letter in enumerate(word_star_dict["word"]):
        if letter == user_letter:
            word_star_dict["star"][index] = letter
    return word_star_dict
            
def comper_star_string_and_print_gallows(star_string_before_guess, dict_after_guess):
    global number_of_mistakes
    string_stars_compare = "".join(dict_after_guess["star"])
    if star_string_before_guess == string_stars_compare:
        number_of_mistakes += 1
        print(f"{gallows[0:number_of_mistakes]}")
        print(f'You have {max_mistakes - number_of_mistakes} left...')
    else: 
        print("You are right, This letter is in the word!")
        if number_of_mistakes > 0:
            print(f"{gallows[0:number_of_mistakes]}")
        print(f'You still have {max_mistakes - number_of_mistakes} left...')


        

def main():
    random_dict = cpu_random_word(wordslist)
    # print(random_dict)
    # print(string_stars)
    letters_gusses=[]
    #start the wile loop here!
    while True:
        string_stars = "".join(random_dict["star"])
        print(f"Find the hiddin word: ")
        print_stars(random_dict)
        if letters_gusses:
            print(f"Letters geussed: {letters_gusses}")
        user_letter = input("Type a Letter: ")
        if user_letter not in letters_gusses:
            letters_gusses.append(user_letter)
            random_dict = change_stars_in_dict(user_letter,random_dict)
            # print(random_dict)
            comper_star_string_and_print_gallows(string_stars, random_dict)
            if number_of_mistakes == 6:
                print(f"You lost! \nThe hiddin word was {random_dict['word']}")
                break
            if "*" not in random_dict["star"]:
                print(f"You Win! \nThe hiddin word was {random_dict['word']}")
                break
        else: print("You allready guessed this letter, Try another one...")    
    print('the game has ended \n Thank you for playing!')    


main()