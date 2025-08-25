
MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM#
$a 
#t%'''  


#Step 1: Transforming the String into a 2D List - this uses hard coding
# def transform_to_2d():
#     list_2d = []
#     row_2d = []
#     for char in MATRIX_STR:
#         if char == "\n":
#             continue
#         else: row_2d.append(char)
#         if len(row_2d) == 3:
#             list_2d.append(row_2d)
#             row_2d = []
#     return list_2d

#Step 1: Transforming the String into a 2D List - this does not use hard coding
def transform_to_2d():
    list_2d = []
    row_2d = []
    for char in MATRIX_STR:
        if char == "\n":
            if row_2d:
                list_2d.append(row_2d)
                row_2d = []  
            continue
        else: row_2d.append(char)
    list_2d.append(row_2d)    
    return list_2d

# Step 2: Processing Columns
def iterate_columns():
    global matrix
    column_text = []
    column_num = 0
    while column_num < len(matrix[0]):
        for row in matrix:
            column_text.append(row[column_num])    
        column_num += 1
    matrix = column_text    

#Step 3: Filtering Alpha Characters + Step 4: Replacing Symbols with Spaces
def filter_alpha():
    temp_string = ''
    sign_counter = 0
    for item in matrix:
        if item.isalpha():
            sign_counter = 0
            temp_string += item
        else:
            sign_counter+=1
            if sign_counter == 2: #hard coded because of the instrutions gave to me
                temp_string += " "
                sign_counter = 0
    return temp_string

# Step 5: Constructing the Secret Message
matrix = transform_to_2d()
iterate_columns()
print(filter_alpha())