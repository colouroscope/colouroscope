import React from 'react'

const ColourPreview = ({colour}) => {
  const preview = {
    height: 300,
    width: '100%',
    backgroundColor: colour,
    border: '2px solid grey',
  }
  return (
    <div style={preview}></div>
  )
}

export default ColourPreview
