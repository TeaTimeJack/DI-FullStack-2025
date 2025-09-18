
for y in range(3):
    stars=""
    for x in range(5):
        if y == 0:
            if x == 2:
                stars+="*"
            else:
                stars+=' '
        elif y == 1:
            if x>0 and x<4:
                stars+="*"
            else:
                stars+=' '
        elif y == 2:
            stars += "*"
    print(stars)


row = 5
collonm = 5

for x in range(row):
    stars = ""
    for y in range(collonm):
        if collonm - y == 1:
            stars+="*"
        else:
            stars+=" "
    print(stars)