import React, { Component } from 'react';
import ColourCollection from './components/ColourCollection';
import ColourPicker from './components/ColourPicker';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      colours: [],
    }
    this.addColour = this.addColour.bind(this)
  }

  addColour(colour) {
    const { colours } = this.state;
    colours.push(colour);
    this.setState({colours});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8">
            </div>
            <div className="col-12 col-sm-4">
              <ColourCollection {...this.state} />
              <ColourPicker addColour={this.addColour} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
