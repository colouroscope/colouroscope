import React from 'react'
import ColourCell from '../ColourCell'

const ColourCollection = ({ colours }) => {
  let nothing
  if(colours.length == 0) {
    nothing = (
        <p className="text-center text-muted m-4">
          <small>
            Add colours to Start!
          </small>
        </p>
    )
  }

  return (
    <div className="mt-4">
      <h4 className="text-center">Collection</h4>
      <div style={{border: '1px solid grey'}} >
        {nothing}
        {colours.map(colour => (
          <ColourCell colour={colour} />
        ))}
      </div>
    </div>
  )
}

export default ColourCollection;
