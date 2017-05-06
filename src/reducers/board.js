import { PLACE_SELECTION, CLEAR_BOARD } from 'actions/board'

const defaultState = {
    gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    currentPlayer: 'X',
    win: false
}
const checkForWin = (gameBoard) => {
  if ( gameBoard[0] == 'X' && gameBoard[1] == 'X' && gameBoard[2] == 'X' ||
    gameBoard[3] == 'X' && gameBoard[4] == 'X' && gameBoard[5] == 'X' ||
    gameBoard[6] == 'X' && gameBoard[7] == 'X' && gameBoard[8] == 'X' ||
    gameBoard[0] == 'X' && gameBoard[3] == 'X' && gameBoard[6] == 'X' ||
    gameBoard[1] == 'X' && gameBoard[4] == 'X' && gameBoard[7] == 'X' ||
    gameBoard[2] == 'X' && gameBoard[5] == 'X' && gameBoard[8] == 'X' ||
    gameBoard[0] == 'X' && gameBoard[4] == 'X' && gameBoard[8] == 'X' ||
    gameBoard[2] == 'X' && gameBoard[4] == 'X' && gameBoard[6] == 'X' ||
    gameBoard[0] == 'O' && gameBoard[1] == 'O' && gameBoard[2] == 'O' ||
    gameBoard[3] == 'O' && gameBoard[4] == 'O' && gameBoard[5] == 'O' ||
    gameBoard[6] == 'O' && gameBoard[7] == 'O' && gameBoard[8] == 'O' ||
    gameBoard[0] == 'O' && gameBoard[3] == 'O' && gameBoard[6] == 'O' ||
    gameBoard[1] == 'O' && gameBoard[4] == 'O' && gameBoard[7] == 'O' ||
    gameBoard[2] == 'O' && gameBoard[5] == 'O' && gameBoard[8] == 'O' ||
    gameBoard[0] == 'O' && gameBoard[4] == 'O' && gameBoard[8] == 'O' ||
    gameBoard[2] == 'O' && gameBoard[4] == 'O' && gameBoard[6] == 'O' ) {
    return true
  }
  else{
    return false
  }
}

export const board = (
    state = { ...defaultState },
    action
) => {
    const { type, index, selection } = action
    const { gameBoard, win, currentPlayer } = state

    switch(type){
        case PLACE_SELECTION:
            if(gameBoard[index] == " " && !win){
                let newGameBoard = gameBoard.slice()
                newGameBoard[index] = currentPlayer
                return{ ...state, ...{
                    gameBoard: newGameBoard,
                    currentPlayer: currentPlayer == 'X' ? 'O' : 'X',
                    win: checkForWin(newGameBoard)
                }}
            }
            else{
                return state
            }
        case CLEAR_BOARD: {
            return { ...defaultState }
        }
        default:
            return state
    }
}
