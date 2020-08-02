import { getCards } from '../../utilities'

// CONSTANTS
const GET_CARDS = 'GET_CARDS'


// ACTIONS & THUNKS

export const getRandomCards = () => async dispatch => {
    try {
        const { data } = await getCards()
        const { cards } = data
        return dispatch({
            type: GET_CARDS,
            cards
        })
    } catch (error) {
        console.log(error)
    }
}


// REDUCER

const defaultState = []

const allCardsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_CARDS:
            return [...action.cards]
        default:
            return state
    }
}

export default allCardsReducer