const defaultState = {
  src: null,
  image: null,
  data: null,
  position: { x: 0, y: 0 }
}

const picture = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_PICTURE_REQUEST':
      const { src } = action
      return Object.assign({}, state, defaultState, { src })
    case 'LOAD_PICTURE_SUCCESS':
      const { image, data } = action
      return Object.assign({}, state, { image, data })
    case 'MOVE_PICTURE':
      const { position } = action
      return Object.assign({}, state, { position })
    default:
      return state
  }
}

export default picture
