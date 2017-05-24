import React from 'react'

const RgbForm = ({rgb, handleRgbChange}) => (
  <div className="form-group row">
    <label for="rgb-r-input" className="col-2 col-form-label">RGB</label>
    <div className="col-10">
      <div className="row">
        <div className="col-4">
          <input className="form-control" type="text" value={rgb.r} id="rgb-r-input" onChange={handleRgbChange('r')} />
        </div>
        <div className="col-4">
          <input className="form-control" type="text" value={rgb.g} id="rgb-g-input" onChange={handleRgbChange('g')} />
        </div>
        <div className="col-4">
          <input className="form-control" type="text" value={rgb.b} id="rgb-b-input" onChange={handleRgbChange('b')} />
        </div>
      </div>
    </div>
  </div>
)

export default RgbForm
