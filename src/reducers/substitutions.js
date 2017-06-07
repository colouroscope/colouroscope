const defaultState = {
    id: null,
    colour: null,
}

const colour = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_COLOUR': {
            if(state.id === action.id) {
                const { colour } = action
                return Object.assign({}, state, { colour })
            }
            return state
        }
        default:
            return state
    }
}

const substitutions = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SUBSTITUTION': {
            const { id, from, to } = action
            return [
                ...state,
                { id, from, to }
            ]
        }
        case 'SET_SUBSTITUTION':
            return state
        case 'REMOVE_SUBSTITUTION': {
            const { id } = action
            return state.filter(c => c.id !== id)
        }
        case 'SET_COLOUR':
            return state.map(s => (
                Object.assign({}, s, {
                    from: colour(s.from, action),
                    to: colour(s.to, action),
                })
            ))
        default:
            return state
    }
}

export default substitutions
