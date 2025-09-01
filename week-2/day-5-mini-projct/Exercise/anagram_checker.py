file_path = "/week-2/day-5-mini-projct/Exercise/sowpods.txt"

with open(file_path, 'r') as file:
    file_lines = file.readlines()
    print(file_lines)

# class AnagramChecker:
#     def __init__(self):
#         self.list_of_words = 