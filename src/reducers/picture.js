const defaultState = {
    src: null,
    srcType: null,
    data: null,
    dimensions: { height: 0, width: 0 },
    position: { x: 0, y: 0 }
}

const picture = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOAD_PICTURE_REQUEST':
            const { src, srcType } = action
            return Object.assign({}, state, { src, srcType })
        case 'LOAD_PICTURE_SUCCESS':
            const { image, height, width } = action
            const dimensions = { height, width }
            return Object.assign({}, state, {
                src: image,
                srcType: 'base64',
                dimensions,
            })
        case 'MOVE_PICTURE':
            const { position } = action
            return Object.assign({}, state, { position })
        case 'CLEAR_PICTURE':
            return Object.assign({}, defaultState)
        default:
            return state
    }
}

export default picture
