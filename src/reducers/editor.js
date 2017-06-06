const defaultState = {
    id: null,
}

const editor = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_EDIT_COLOUR':
            const { id } = action
            return Object.assign({}, state, { id })
        case 'CLEAR_EDIT_COLOUR':
            return Object.assign({}, defaultState)
        default:
            return state
    }
}

export default editor