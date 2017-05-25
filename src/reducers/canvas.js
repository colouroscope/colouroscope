const defaultState = {
  image: null,
  data: null,
}

const canvas = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CANVAS_IMAGE':
      const { image, data } = action
      return Object.assign({}, state, defaultState, { image, data })
    default:
      return state
  }
}

export default canvas
