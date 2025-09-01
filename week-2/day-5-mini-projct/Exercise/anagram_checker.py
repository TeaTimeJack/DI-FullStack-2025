
class AnagramChecker:
    def __init__(self, user_word):
        self.list_of_words = self.make_list_from_txt_file()
        self.word = self.make_word_capitalised(user_word)

    @staticmethod
    def make_list_from_txt_file():
        file_path = "week-2/day-5-mini-projct/Exercise/sowpods.txt"
        text_file_list=[]
        with open(file_path, 'r') as file:
            lines = file.readlines()
        for line in lines:
            text_file_list.append(line.strip())
        return text_file_list
    
    @staticmethod
    def make_word_capitalised(word):
        cap_word = word.upper()
        return cap_word

    def is_valid_word(self):
        if self.word in self.list_of_words:
            return True
        else: return False

    def is_anagram(self, word2):
        if len(self.word) == len(word2):
            for letter in self.word:
                if letter not in word2:
                    return False
            for letter in word2:
                if letter not in self.word:
                    return False    
            return True 
        else: return False

    def get_anagrams(self):
        if self.is_valid_word():
            list_of_anagrams = []
            for word in self.list_of_words:
                if word == self.word:
                    continue
                if self.is_anagram(word):
                    list_of_anagrams.append(word.lower())
            return list_of_anagrams
        else:
            return None

# ana1 =AnagramChecker("kiss")
# print(len(ana1.list_of_words))
# print(ana1.is_valid_word())
# print(ana1.get_anagrams())

