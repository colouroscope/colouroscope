const defaultState = {
  active: false,
}

const dropzone = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_DROPZONE_OVERLAY':
      return { active: true }
    case 'HIDE_DROPZONE_OVERLAY':
      return { active: false }
    default:
      return state
  }
}

export default dropzone
