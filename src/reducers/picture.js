const defaultState = {
  src: null,
  image: null,
}

const picture = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_PICTURE_REQUEST':
      let { src } = action
      return Object.assign({}, state, { src })
    case 'LOAD_PICTURE_SUCCESS':
      let { image } = action
      return Object.assign({}, state, { image })
    default:
      return state
  }
}

export default picture
