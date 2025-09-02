import os

##old school syntax
# try:
#     f = open('secrets.txt')
#     secret_data = f.read()
#     # secret_data is a string
#     print(secret_data)
# except:
#     raise ValueError("didnt find the file :)")
# finally:
#     f.close()

#modern way
dir_path = os.path.dirname(os.path.realpath(__file__))
# print(dir_path)
# with open(dir_path+"\secrets.txt", 'a' , encoding= "utf-8") as f:
#     f.write("\nthis is from python file")
#     print("content succefuly added")
    
# for i in range(5):
with open(dir_path+"\star-wars.txt" ,"r", encoding= "utf-8") as f:
    text_content = f.readlines()
    cleaned_list = [line.strip() for line in text_content]
    print(cleaned_list)
    

    darth = cleaned_list.count("Darth")
    luke = cleaned_list.count("Luke")
    lea = cleaned_list.count("Lea")

    print("Darth: ",darth, "Luck: ", luke, "Lea: ", lea)

with open(dir_path+"\star-wars.txt" ,"a", encoding= "utf-8") as f:
    f.write("\nAmit")
    