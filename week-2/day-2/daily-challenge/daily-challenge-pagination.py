import math


#Step 1: Create the Pagination Class
class Pagination:
    def __init__(self, items=None, page_size=10):
        if items == None:
            items = []
        self.items = items
        self.page_size = page_size
        self.current_idx = 0
        self.number_of_pages = math.ceil(len(self.items)/self.page_size)

#Step 3: Implement the get_visible_items() Method

    # def get_visible_items(self):
    #     visible_items = []
    #     start_index = self.current_idx * self.page_size
    #     while len(visible_items) != self.page_size:
    #         if start_index < self.number_of_pages+1:
    #             visible_items.append(self.items[start_index])
    #             start_index+=1
    #         else: break
    #     return visible_items
    
    def get_visible_items(self):
        visible_items = self.items[self.current_idx*self.page_size:self.current_idx*self.page_size+self.page_size]
        print(visible_items)
        return self.items[self.current_idx*self.page_size:self.current_idx*self.page_size+self.page_size]

# Step 4: Implement Navigation Methods
    def go_to_page(self, page_num):
        if page_num > self.number_of_pages:
            print(ValueError("that page is higher then the maximum page"))
        elif page_num <= 0 :
            print(ValueError("page needs to be higher then 0"))
        else:self.current_idx = page_num-1
    
    def first_page(self):
        self.current_idx = 0
        return self
    
    def last_page(self):
        self.current_idx = self.number_of_pages -1
        return self

    def next_page(self):
        if self.current_idx != self.number_of_pages -1:
            self.current_idx +=1
            return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
            return self
    
#Step 5: Add a Custom __str__() Method
    def string_it(self):
        for item in self.get_visible_items():
            print(item)
        


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)
# p.string_it()
print(p.next_page().next_page().next_page().get_visible_items())
# print(p.get_visible_items())

# p.next_page()
# print(p.get_visible_items())

# p.last_page()
# print(p.get_visible_items())

# p.go_to_page(10)
# print(p.current_idx + 1)

# p.go_to_page(0)