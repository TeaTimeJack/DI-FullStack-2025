
from anagram_checker import AnagramChecker
from string import ascii_letters as alph

def is_valide_string(string):
    for note in string:
        if note not in alph:
            return False
    return True

while True:
    user_input1 = input("To Choose a word type 'S' (start), To Exit type 'E': ")
    if user_input1 == "S" or user_input1 == "s":
        while True:
            user_input = input("type a word with no spaces, no number and no special charecters: ")
            user_input = user_input.strip()
            if is_valide_string(user_input):
                user_anagram = AnagramChecker(user_input)
                print(f"YOUR WORD: {user_anagram.word}")
                if user_anagram.is_valid_word():
                    print(f"this is a valid English word.")
                    print_sring = ", ".join(user_anagram.get_anagrams())
                    # for word in user_anagram.get_anagrams():
                    #     if print_sring == "":
                    #         print_sring+= word
                    #     else:
                    #         print_sring += f", {word}"
                    print(f"Anagrams for your word: {print_sring}.")
                    break
            elif not is_valide_string(user_input):
                print("not a valid INPUT")
    elif user_input1 == "E" or user_input1 == "e":
        print("Bye Bye!")
        break




    
