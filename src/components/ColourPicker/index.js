import React from 'react'
import ColourPreview from '../ColourPreview'
import HexForm from './components/HexForm'
import RgbForm from './components/RgbForm'
import HslForm from './components/HslForm'
import AddToCollection from './components/AddToCollection'
import Panel from '../Panel'

const ColourPicker = () => (
    <Panel title="Colour Picker">
        <ColourPreview />
        <HexForm />
        <RgbForm />
        <HslForm />
        <AddToCollection />
    </Panel>
)

export default ColourPicker
