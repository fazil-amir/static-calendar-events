import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appDuck from './appDuck'
import { combineReducers } from 'redux'

const initialState = {}

const middlewrare = [thunk]
// const middlewrare = []

export default createStore(
  combineReducers({appDuck}),
  initialState,
  applyMiddleware(...middlewrare)
)
