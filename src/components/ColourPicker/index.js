import React from 'react'
import ColourPreview from './components/ColourPreview'
import HexForm from './components/HexForm'
import RgbForm from './components/RgbForm'
import HslForm from './components/HslForm'
import AddToCollection from './components/AddToCollection'

const ColourPicker = () => (
  <div className="mt-4">
    <h4 className="text-center">Colour Picker</h4>
    <ColourPreview />
    <div className="mt-4">
      <HexForm />
      <RgbForm />
      <HslForm />
      <AddToCollection />
    </div>
  </div>
)

export default ColourPicker
