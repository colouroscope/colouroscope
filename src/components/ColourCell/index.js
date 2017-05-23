import React from 'react'

const ColourCell = ({colour}) => {
  const style = {
    height: 100,
    width: 100,
    backgroundColor: colour,
  }
  return (
    <div style={style}>{colour}</div>
  )
}

export default ColourCell
