import React from 'react'
import tinycolor from 'tinycolor2'

const ColourCell = ({colour}) => {
  const style = {
    height: 30,
    width: '25%',
    backgroundColor: colour,
  }

  const c = tinycolor(colour)
  if(c.isDark()) {
    Object.assign(style, {color: 'white'})
  }

  return (
    <div className="d-inline-block text-center" style={style}>
      <small>{colour}</small>
    </div>
  )
}

export default ColourCell
