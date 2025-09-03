import os
import random
import json

dir_path = os.path.dirname(os.path.realpath(__file__))

#Exercise 1: Random Sentence Generator
#step1:
def get_words_from_file():
    list_of_words = []
    with open(dir_path+"\words.txt" ,"r", encoding= "utf-8") as f:
        text_content = f.readlines()
        list_of_words = [word.strip() for word in text_content]
        return list_of_words

# print(get_words_from_file())
def get_random_sentence(length):
    list_of_words = get_words_from_file()
    sentence = ""
    for times in range(length):
        random_word = random.choice(list_of_words)
        if sentence == "":
            sentence+= random_word
        else:
            sentence += " " + random_word
    sentence = sentence.lower()
    return sentence

# print(get_random_sentence(5))

def main():
    print("This program generates a random sentence of a specified length from a word list.")
    user_input = int(input("Type a sentence length betweem 2-20: "))
    if user_input <= 1 or user_input >20:
          return "ERROR - you didnt put a valide input."
    else:
        output = get_random_sentence(user_input)
        print(output)
        return output

main()

# Exercise 2: Working with JSON

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

loaded_sample = json.loads(sampleJson)
print(type(loaded_sample))
print(loaded_sample["company"]["employee"]["payable"]["salary"])
loaded_sample["company"]["employee"]["birth_date"] = "YYYY-MM-DD"
loaded_sample["company"]["employee"]["birth_date"] = "1990-09-24"

print(loaded_sample)

with open(dir_path+"\ex-json-file.json" ,"w", encoding= "utf-8") as f:
    json.dump(loaded_sample, f, indent="\t")
   