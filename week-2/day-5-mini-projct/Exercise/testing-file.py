
game_board = [
    ["X", "O", "X"],
    [" ", "X", " "],
    ["O", "O", "O"]
]


win_options = [
                    [game_board[0][0] == game_board[0][1] == game_board[0][2] != " "],
                    [game_board[1][0] == game_board[1][1] == game_board[1][2] != " "],
                    [game_board[2][0] == game_board[2][1] == game_board[2][2] != " "],
                    [game_board[0][0] == game_board[1][0] == game_board[2][0] != " "],
                    [game_board[0][1] == game_board[1][1] == game_board[2][1] != " "],
                    [game_board[0][2] == game_board[1][2] == game_board[2][2] != " "],
                    [game_board[0][0] == game_board[1][1] == game_board[2][2] != " "],
                    [game_board[2][0] == game_board[1][1] == game_board[0][2] != " "]
                ]

def game():
    winner = False
    for option in win_options:
            if option[0] == True:
                winner = True
                break
    if winner == False:
        print("keep playing...")
    else:
         print("THE WINNER IS!")

game()