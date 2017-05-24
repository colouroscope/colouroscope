import React from 'react'

const HslForm = ({hsl, handleHslChange}) => (
  <div className="form-group row">
    <label for="hsl-h-input" className="col-2 col-form-label">HSL</label>
    <div className="col-10">
      <div className="row">
        <div className="col-4">
          <input className="form-control" type="text" value={hsl.h} id="hsl-h-input" onChange={handleHslChange('h')} />
        </div>
        <div className="col-4">
          <input className="form-control" type="text" value={hsl.s} id="hsl-s-input" onChange={handleHslChange('s')} />
        </div>
        <div className="col-4">
          <input className="form-control" type="text" value={hsl.l} id="hsl-l-input" onChange={handleHslChange('l')} />
        </div>
      </div>
    </div>
  </div>
)

export default HslForm
