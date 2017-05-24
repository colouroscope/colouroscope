import React from 'react'
import ColourCollection from './containers/ColourCollection'
import PictureViewer from './components/PictureViewer'
import ColourPicker from './components/ColourPicker'
import './App.css'

const App = () =>  (
  <div className="App">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8">
          <PictureViewer />
        </div>
        <div className="col-12 col-sm-4">
          <ColourCollection />
          <ColourPicker />
        </div>
      </div>
    </div>
  </div>
)

export default App
