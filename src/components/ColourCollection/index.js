import React from 'react'
import ColourCell from '../ColourCell'

const ColourCollection = ({ colours }) => (
  <div>
    {colours.map(colour => (
      <ColourCell colour={colour} />
    ))}
  </div>
)

export default ColourCollection;
