import React from 'react'
import ColourCollection from './containers/ColourCollection'
import PictureViewer from './containers/PictureViewer'
import PictureDropzone from './containers/PictureDropzone'
import Substitutions from './containers/Substitutions.js'
import ColourPicker from './containers/ColourPicker/index'
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
                        <Substitutions />
                        <ColourCollection />
                        <ColourPicker />
                    </div>
                </div>
            </div>
        </PictureDropzone>
    </div>
)

export default App
