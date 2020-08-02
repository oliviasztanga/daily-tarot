import { combineReducers } from 'redux'
import allCardsReducer from './allCards'
import userCardsReducer from './userCards'

const rootReducer = combineReducers({
    allCards: allCardsReducer,
    userCards: userCardsReducer
})

export default rootReducer