const defaultState = {
    id: null,
    group: null,
}

const editor = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_EDIT_COLOUR':
            const { id, group } = action
            return Object.assign({}, state, { id, group })
        case 'CLEAR_EDIT_COLOUR':
            return Object.assign({}, defaultState)
        default:
            return state
    }
}

export default editor