

#Step 1: Representing the Game Board

def clean_board():
    board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
    ]
    return board

#Step 2: Displaying the Game Board

def display_board(board):
    print("Row " + "*"*14)
    print(" 1 " + "*" + " "*2 + f"{board[0][0]}" + " | " + f"{board[0][1]}" " | " + f"{board[0][2]}" + " "*2 + "*")
    print(" - " + "*" + " " + "-"*3 +"|" +"-"*3 + "|" + "-"*3 + " " + "*")
    print(" 2 " + "*" + " "*2 + f"{board[1][0]}" + " | " + f"{board[1][1]}" " | " + f"{board[1][2]}" + " "*2 + "*")
    print(" - " + "*" + " " + "-"*3 +"|" +"-"*3 + "|" + "-"*3 + " " + "*")
    print(" 3 " + "*" + " "*2 + f"{board[2][0]}" + " | " + f"{board[2][1]}" " | " + f"{board[2][2]}" + " "*2 + "*")
    print("   " + "*"*15)

# Step 3: Getting Player Input

def player_input(board, player):
    row_input=0
    is_asking_row_input = True
    column_input = 0
    is_asking_column_input = True
   
    while is_asking_row_input:
        row_input = int(input("Enter Row (between 1-3): "))
        if row_input >= 1 and row_input <=3:             #asking for a valid number
            row_spot_counter = 3
            for spot in board[row_input-1]:        #checking if row isnt full
                if spot != " ":
                    row_spot_counter-=1
            if row_spot_counter == 0:                   #if row is full - ask for another row
                print("This Row is full- Enter another row.")                     
            else:
                is_asking_row_input = False      
        else:  print("invalide input - try again")     

    while is_asking_column_input:
        column_input = int(input("Enter Column (between 1-3) - (to change yor row type '9'): "))
        if column_input == 9:
            player_input()
            break
        if column_input >= 1 and column_input <=3:         #asking for a valid number
            if board[row_input-1][column_input-1] == " ":   #checking if spot isnt full
                is_asking_column_input = False
            else: print("This spot is full- Enter another column.")     #if spot is full - ask for another column
        else: print("invalide input - try again")

    if is_asking_column_input == False and is_asking_row_input == False:
        board[row_input-1][column_input-1] = player


#Step 4: Checking for a Winner and Step 5: Checking for a Tie

def check_win(board, player):
    win_options = [
        [board[0][0] == board[0][1] == board[0][2] == f"{player}"],
        [board[1][0] == board[1][1] == board[1][2] == f"{player}"],
        [board[2][0] == board[2][1] == board[2][2] == f"{player}"],
        [board[0][0] == board[1][0] == board[2][0] == f"{player}"],
        [board[0][1] == board[1][1] == board[2][1] == f"{player}"],
        [board[0][2] == board[1][2] == board[2][2] == f"{player}"],
        [board[0][0] == board[1][1] == board[2][2] == f"{player}"],
        [board[2][0] == board[1][1] == board[0][2] == f"{player}"]
                  ]
    player_won = False
    is_it_a_tie = False
    for option in win_options:
        if option[0] == True:
            player_won = True
            #print(f"player {player} WON!")
            return "win" 
    game_spots = 9
    for row in board:
        for spot in row:
            if spot != " ":
                game_spots-=1
    if game_spots == 0 and player_won == False:
        is_it_a_tie == True
        #print("its a tie")
        return "tie"
    else:
        return player_won

def clean_board():
    board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
    ]
    return board


def play(board):
    my_board = board
    play_x_turn = True
    player_sing = "X"
    print("Wellcome to Tic Tac Toe")
    while True:
        print(f"It`s player {player_sing}`s turn: ")
        display_board(my_board)
        player_input(my_board, player_sing)
        end_game = check_win(my_board, player_sing)
        if end_game == "win":
            display_board(my_board)
            print(f"player {player_sing} WON!")
            my_board = []
            break
        elif end_game == "tie":
            display_board(my_board)
            print("its a tie")
            my_board =[]
            break
    
        play_x_turn =  not play_x_turn
        if play_x_turn:
            player_sing = "X"
        else: player_sing = "O"
         
    while True:  
        again_input = input("Would you like to play again?  type Y for yes OR N for no: ")
        if(again_input == "n" or again_input == "N"):
            print("GoodBye")
            break 
        elif(again_input == "y" or again_input == "Y"):
            play(clean_board())
        else:
            print("Invalide answer")

play(clean_board())