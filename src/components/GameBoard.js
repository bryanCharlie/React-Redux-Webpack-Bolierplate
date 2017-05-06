import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Square } from 'components/Square'
import * as BoardActions from 'actions/board'
import styles from 'styles/ttt.css'

//Not placed in container
const mapStateToProps = (state) => {
    const { gameBoard, currentPlayer, win } = state.board
    return {
        gameBoard: gameBoard,
        currentPlayer: currentPlayer,
        win: win
    }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
            ...BoardActions
        },
        dispatch
    )
}

@connect(mapStateToProps, mapDispatchToProps)

export class GameBoard extends Component {
    // onClick = () => {

    // }

    render(){
        const squares = this.props.gameBoard.map((currentSelection, index) => {
                return ( <Square
                    key={index}
                    index={index}
                    selection={currentSelection}
                /> )
        })
        return <div>
            <div className='squareContainer row'>
                {squares}
            </div>
            <div className="controls">
                <div className='playerTurn'>
                    <span> { !this.props.win ? `Player ${this.props.currentPlayer}'s turn!` : 'WINNER!!!!' } </span>
                </div>
                <div>
                    <button type="button" onClick={this.props.clearBoard}> Reset Game </button>
                </div>
            </div>
        </div>
    }
}
