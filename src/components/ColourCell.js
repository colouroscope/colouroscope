import React from 'react'
import tinycolor from 'tinycolor2'

const ColourCell = ({ id, colour, handleClick}) => {
  const style = {
    height: 30,
    backgroundColor: colour,
  }

  const c = tinycolor(colour)
  if(c.isDark()) {
    Object.assign(style, {color: 'white'})
  }

  return (
    <div className="d-inline-block text-center w-25" style={style} onClick={handleClick}>
      <small>{colour}</small>
    </div>
  )
}

export default ColourCell
