import { combineReducers } from 'redux'
import collection from './collection'
import picker from './picker'

const colourApp = combineReducers({
  collection,
  picker
})

export default colourApp
