import { combineReducers } from 'redux'
import canvas from './canvas'
import collection from './collection'
import dropzone from './dropzone'
import picker from './picker'
import picture from './picture'

const colourApp = combineReducers({
  canvas,
  collection,
  picker,
  picture,
  dropzone,
})

export default colourApp
