list1 = [5, 10, 15, 20, 25, 50, 20]
index = list1.index(20)
if index >= 0:
    list1[index] = 200
print(list1)


a_tuple = (10, 20, 30, 40)
a, b, c, d = a_tuple
print(a) # should print 10
print(b) # should print 20
print(c) # should print 30
print(d) # should print 40

fav_color = {"green", "blue", "red"}
fav_color.add("purple")
print(fav_color)
friend_color = {"yellow", "blue", "orange"}
print(fav_color.intersection(friend_color))
fav_color.clear()
print(fav_color)