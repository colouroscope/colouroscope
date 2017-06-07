const defaultState = {
    image: null,
    data: null,
    display: null,
}

const canvas = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_CANVAS_DISPLAY':
            const { display } = action
            return Object.assign({}, state, { display })
        case 'SET_CANVAS_IMAGE':
            const { image, data } = action
            return Object.assign({}, state, { image, data })
        default:
            return state
    }
}

export default canvas
