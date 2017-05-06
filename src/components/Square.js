import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as BoardActions from 'actions/board'

//Not placed in container
const mapStateToProps = (state) => {
    return {
        currentPlayer: state.board.currentPlayer,
        win: state.board.win
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

export class Square extends Component {
    handleClick = () => {
        if(!this.props.win){
            this.props.placeSelection(this.props.index)
        }

    }

    render = () => {
        const style = () => {

        }
        return(
            <div className='square col-md-3' onClick={this.handleClick}>
                <div className='selection' style={{color: this.props.selection == 'X' ? 'red' : 'blue'}}>{this.props.selection} </div>
            </div>
            )
    }
}
