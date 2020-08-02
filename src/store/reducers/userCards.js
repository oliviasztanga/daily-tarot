import { getImageSrc } from '../../utilities'

// CONSTANTS
const SELECT_CARD = 'SELECT_CARD'
const FLIP_CARD = 'FLIP_CARD'

// ACTIONS & THUNKS
export const selectCard = (card) => {
    const { name } = card
    const modifiedCard = {
        ...card,
        img_src: getImageSrc(name),
        flipped: false
    }
    return {
        type: SELECT_CARD,
        card: modifiedCard
    }
}

export const flipCard = (name) => ({
    type: FLIP_CARD,
    name: name
})

// REDUCER

const defaultState = {
    count: 0,
    selected: [] //add img src & flipped key to obj before pushing to picked array
}

const userCardsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SELECT_CARD:
            if (state.count === 3) return state
            return {
                ...state,
                count: state.count + 1,
                selected: [...state.selected]
            }
        case FLIP_CARD:
            return {
                ...state, 
                selected: state.selected.map(card => {
                    return card.name === action.name ? {...card, flipped: true} : card
                })
            }
        default:
            return state
    }
}

export default userCardsReducer