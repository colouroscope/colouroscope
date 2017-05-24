import React from 'react'

const HexForm = ({hex, handleHexChange}) => (
  <div className="form-group row">
    <label for="hex-input" className="col-2 col-form-label">Hex</label>
    <div className="col-10">
      <input className="form-control" type="text" value={hex} id="hex-input" onChange={handleHexChange} />
    </div>
  </div>
)

export default HexForm
