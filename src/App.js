import React from 'react'
import ColourCollection from './containers/ColourCollection'
import ColourPicker from './components/ColourPicker'
import PictureViewer from './components/PictureViewer'
import PictureDropzone from './components/PictureDropzone'
import './App.css'

const App = () =>  (
  <div className="App">
    <PictureDropzone>
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
    </PictureDropzone>
  </div>
)

export default App
