import React, { Component } from 'react'
import tinycolor from 'tinycolor2'

import ColourPreview from './components/ColourPreview'
import HexForm from './components/HexForm'
import RgbForm from './components/RgbForm'
import HslForm from './components/HslForm'
import AddToCollection from './components/AddToCollection'

class ColourPicker extends Component {
  constructor() {
    super()
    this.state = {
      hex: '#FFFFFF',
      rgb: {r: 255, g: 255, b: 255},
      hsl: {h: 0, s: 100, l: 1},
    }
    this.handleHexChange = this.handleHexChange.bind(this)
    this.handleRgbChange = this.handleRgbChange.bind(this)
    this.handleHslChange = this.handleHslChange.bind(this)
    this.setColour = this.setColour.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setColour(c) {
    var colour = tinycolor(c)
    if(!colour.isValid()) return
    let nextState = {}
    if(colour.getFormat() !== 'hex8' && colour.getFormat() !== 'hex') {
      const hex = colour.toHexString().toUpperCase()
      Object.assign(nextState, {hex})
    }
    if(colour.getFormat() !== 'rgb') {
      const rgb = colour.toRgb()
      Object.assign(nextState, {rgb})
    }
    if(colour.getFormat() !== 'hsl') {
      const hsl = colour.toHsl()
      Object.assign(nextState, {hsl})
    }
    this.setState(nextState)
  }

  handleHexChange(e) {
    this.setState({hex: e.target.value.toUpperCase()})
    this.setColour(e.target.value)
  }

  handleRgbChange(field) {
    return e => {
      let { rgb } = this.state
      rgb[field] = e.target.value
      this.setState({rgb})
      this.setColour(rgb)
    }
  }

  handleHslChange(field) {
    return e => {
      let { hsl } = this.state
      hsl[field] = e.target.value
      this.setState({hsl})
      this.setColour(hsl)
    }
  }

  handleSubmit(e) {
    this.props.addColour(this.state.hex)
  }

  render() {
    const { hex, rgb, hsl } = this.state
    const preview = {
      height: 300,
      width: '100%',
      backgroundColor: hex
    }
    return (
      <div className="mt-4">
        <h4 className="text-center">Colour Picker</h4>
        <ColourPreview colour={hex} />
        <div className="mt-4">
          <HexForm hex={hex} handleHexChange={this.handleHexChange} />
          <RgbForm rgb={rgb} handleRgbChange={this.handleRgbChange} />
          <HslForm hsl={hsl} handleHslChange={this.handleHslChange} />
          <AddToCollection handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default ColourPicker
