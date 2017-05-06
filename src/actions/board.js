export const PLACE_SELECTION = 'PLACE_SELECTION'
export const CLEAR_BOARD = 'CLEAR_BOARD'

export const placeSelection = (index) => {
    return {
        type: PLACE_SELECTION,
        index: index
    }
}

export const clearBoard = () => {
    return {
        type: CLEAR_BOARD
    }
}
