
import math

class Circle:
    def __init__(self, radius = None, diameter =None):
        if diameter and radius == None:
            radius = round(diameter/2,2)
        self.radius = self.format_radius(radius)


    @staticmethod
    def format_radius(radius):
        return round(radius,2)

    @property
    def area(self):
        return round(3.14*self.radius**2) 
    
    def __str__(self):
            return f"Circle Radius: {self.radius} Area: {self.area}"
        
    def __add__(self,other):
        sum_area = self.area + other.area
        sum_radius = math.sqrt(sum_area/3.14)
        # print(f"Circle Radius: {sum_radius} Area: {sum_area}")
        return Circle(sum_radius)
    
    def __lt__(self, other):
        return self.area < other.area
    
    def __eq__(self, other):
        return self.area == other.area
    
    
c1 = Circle(5)
print(c1)
c2 = Circle(2)
print(c2)
c3 = c1 + c2
print(c3)
c4 = Circle(diameter=4)

print(c1>c2)
print(c1==c2)
print(c4==c2)

circles_list = [c1, c2, c3, c4]
def print_list(list):
    for circle in list:
        print(circle)
print_list(circles_list)
print("##### after sorting ######")
circles_list.sort()
print_list(circles_list)

