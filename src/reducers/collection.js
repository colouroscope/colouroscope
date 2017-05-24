const collection = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COLOUR':
      const { id, colour } = action
      return [
        ...state,
        { id, colour }
      ]
    default:
      return state
  }
}

export default collection
