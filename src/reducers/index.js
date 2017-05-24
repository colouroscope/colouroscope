import { combineReducers } from 'redux'
import collection from './collection'
import picker from './picker'
import picture from './picture'

const colourApp = combineReducers({
  collection,
  picker,
  picture,
})

export default colourApp
