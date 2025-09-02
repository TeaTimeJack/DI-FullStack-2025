
import string

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, the_word):
        list_text = self.text.split()
        count = 0
        for word in list_text:
            if word == the_word:
                count+=1
        if count == 0:
            return None
        return count
    
    def most_common_word(self):
        list_text = self.text.split()
        count_each_dict = {}
        for word in list_text:
             if word not in count_each_dict.keys():
                 count_each_dict[word] = 1
             else:
                 count_each_dict[word] += 1

        highset_value_key = ""
        highst_value = 0
        for key,val in count_each_dict.items():
            if val > highst_value:
                highset_value_key = key
                highst_value = val
        return highset_value_key
    
    def unique_words(self):
        list_text = self.text.split()
        unigue_words = set(list_text)
        return unigue_words
    
    def from_file(self,file_path):
        with open(file_path ,"r", encoding= "utf-8") as f:
            text_content = f.read()
            text1 = TextModification(text_content)
            return text1



class TextModification(Text):
    def __init__(self, text):
        super().__init__(text)

    def remove_punctuation(self):
        punct_char = string.punctuation
        clean_text = self.text
        for char in punct_char:
            clean_text = clean_text.replace(char, '')
        return clean_text
        
    def remove_stop_words(self):
        stop_words= ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"]
        no_stop_words = []
        for word in self.text.split():
            if word not in stop_words:
                no_stop_words.append(word)
        return_string =" ".join(no_stop_words)
        return return_string



text_demo = " me me me me me me, me Use+ a string!! method or regular expressions to expressions remove punctuation expressions from or the text attribute."
text1 = TextModification(text_demo)
print(text1.word_frequency("the"))
print(text1.most_common_word())
print(text1.unique_words())

print(text1.text)
print(text1.remove_punctuation())
print(text1.text)

print(text1.remove_stop_words())