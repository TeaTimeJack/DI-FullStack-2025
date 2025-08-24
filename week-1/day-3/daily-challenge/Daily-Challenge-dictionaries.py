#Challenge 1: Letter Index Dictionary

user_input = input("Enter A word: ")
word_dict={}

for i, letter in enumerate(user_input):
    if letter in word_dict:
        word_dict[letter].append(i)
    else:
        word_dict[letter] = [i]
print(word_dict)       

#Challenge 2: Affordable Items

items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "0"

#2. Data Cleaning:
clean_items_purchase = {}
for key, price in items_purchase.items():
    cleen_price = price.replace("$","")
    cleen_price = cleen_price.replace(",","")
    cleen_price = int(cleen_price)
    clean_items_purchase[key]=cleen_price
#print(clean_items_purchase)       

clean_wallet = wallet.replace("$","")
clean_wallet = clean_wallet.replace(",","")
clean_wallet = int(clean_wallet)
#print(clean_wallet)  

#3. Determining Affordable Items:
affordable_items = []
for key, value in clean_items_purchase.items():
    if value <= clean_wallet:
        affordable_items.append(key)
#print(affordable_items)

#4. Sorting and Output:
affordable_items.sort()
if len(affordable_items) <= 0:
    print("Nothing")
else:    
    print(affordable_items)