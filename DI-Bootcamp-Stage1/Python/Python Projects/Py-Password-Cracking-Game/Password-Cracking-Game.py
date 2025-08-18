import string

lowercase_alphabet = string.ascii_lowercase

def find_two_letter():
    for first_letter in lowercase_alphabet:
        first_letter
        for second_letter in lowercase_alphabet:
            second_letter
            # unzip_with_7z(path, password =first+second)
            # if(unzip_with_7z(path, password =first+second) == true):
            #     print(Password Found!)
            #     break
            print(first_letter+second_letter)
find_two_letter()    