
import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = self.change_value(value)

    @staticmethod
    def change_value(val):
        if val == 11:
            return  "J"
        elif val == 12:
            return "Q"
        elif val == 13:
            return  "K"
        elif val == 1:
            return  "A"
        else:
            return val
        
    def __str__(self):
        return f"{self.value}{self.suit}"


class Deck:
    def __init__(self):
        self.the_deck = self.creat_deck()
        self.deck_size = len(self.the_deck)

    @classmethod
    def creat_deck(cls):
        the_deck_list=[]
        suits = ("H", "D", "C", "S")
        for suit in suits:
            for val in range(1,14):
                card=Card(suit,val)
                the_deck_list.append(card)
        return  the_deck_list        
         
    def __str__(self):
        return_string = ""
        for card in self.the_deck:
           if return_string != "":
            return_string += f", {card.__str__()}"
           else: return_string += f"{card.__str__()}"

        return f"Deck size: {self.deck_size} \nCards in deck: {return_string}"
    
    def shuffle(self):
        random.shuffle(self.the_deck)
        return self
        # twice_current_deck_size = self.deck_size*2
        # for times in range(twice_current_deck_size):
        #     random_card = random.choice(self.the_deck)
        #     self.the_deck.remove(random_card)
        #     self.the_deck.append(random_card)


            # random_index = random.randint(0,current_deck_size-1) 
            # removed_card = self.the_deck[random_index]
            # self.the_deck.remove(removed_card)
            # self.the_deck.append(removed_card)
    
    def deal(self):
        delt_card = self.the_deck.pop()
        self.deck_size = len(self.the_deck)
        return delt_card

       

deck1 = Deck()
print(deck1)
deck1.shuffle()
print(deck1)
print(deck1.deal())
print(deck1.deal())
print(deck1.deal())
print(deck1)