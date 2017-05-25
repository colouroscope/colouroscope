import { combineReducers } from 'redux'
import canvas from './canvas'
import collection from './collection'
import dropzone from './dropzone'
import picker from './picker'
import picture from './picture'

const colourApp = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }
  return appReducer(state, action)
}

const appReducer = combineReducers({
  canvas,
  collection,
  picker,
  picture,
  dropzone,
})

export default colourApp
