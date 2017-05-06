import React, { Component } from 'react'
import { Provider } from 'react-redux'
import * as reducers from 'reducers/board'
import { GameBoard } from 'components/GameBoard'
import { createStore, combineReducers } from 'redux'
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer)

export class Main extends Component {
    render(){
        const routes =
            <HashRouter>
                <Route path="/" component={GameBoard}/>
            </HashRouter>

        return(
            <Provider store={store}>
                { routes }
            </Provider>
        )
    } 
}
