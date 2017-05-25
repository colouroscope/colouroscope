import { combineReducers } from 'redux'
import collection from './collection'
import dropzone from './dropzone'
import picker from './picker'
import picture from './picture'

const colourApp = combineReducers({
  collection,
  picker,
  picture,
  dropzone,
})

export default colourApp
