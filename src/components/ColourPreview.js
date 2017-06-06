import React from 'react'

let ColourPreview = ({ colour }) => {
  const preview = {
    height: 300,
    width: '100%',
    backgroundColor: colour,
    border: '2px solid grey',
  }
  return (
    <div className="mb-4" style={preview}></div>
  )
}

export default ColourPreview
