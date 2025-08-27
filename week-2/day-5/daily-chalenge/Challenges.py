
#Challenge 1: Sorting

#Step 1: Get Input
user_input = input("type words that are separated by commas: ")

#Step 2: Split the String
splited_input = user_input.split(",")
#Step 3: Sort the List
splited_input.sort()
#Step 4: Join the Sorted List
        # sorted_string=""
        # for word in splited_input:
        #     if sorted_string == "":
        #         sorted_string+=word
        #     else: sorted_string+=","+word
sorted_string = ",".join(splited_input)
#Step 5: Print the Result
print(sorted_string)

# Expected Output:
# If the input is 'without,hello,bag,world', the output should be 'bag,hello,without,world'.

#Challenge 2: Longest Word
#Step 1: Define the Function
def find_longest_word(the_sentence):
    #Step 2: Split the Sentence into Words
    split_sentence = the_sentence.split(" ")
    #Step 3: Initialize Variables
    longest_word = "" 
    word_longest_length = 0
    for word in split_sentence:         #Step 4: Iterate Through the Words
        if len(word) > word_longest_length: #Step 5: Compare Word Lengths
            longest_word = word
            word_longest_length = len(word)
    return longest_word                        #Step 6: Return the Longest Word

print(find_longest_word("Margaret's toy is a pretty doll."))
print(find_longest_word("A thing of beauty is a joy forever."))
print(find_longest_word("Forgetfulness is by all means powerless!"))