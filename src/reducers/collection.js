const defaultState = {
    id: null,
    colour: null,
}

const colour = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_COLOUR': {
            const { id, colour } = action
            return Object.assign({}, defaultState, { id, colour })
        }
        case 'SET_COLOUR': {
            if(state.id === action.id) {
                const { colour } = action
                return Object.assign({}, state, { colour })
            }
        }
        default:
            return state
    }
}

const collection = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COLOUR':
            return [
                ...state,
                colour(undefined, action)
            ]
        case 'SET_COLOUR':
            return state.map(c => colour(c, action))
        case 'REMOVE_COLOUR': {
            const { id } = action
            return state.filter(c => c.id !== id)
        }
        default:
            return state
    }
}

export default collection
