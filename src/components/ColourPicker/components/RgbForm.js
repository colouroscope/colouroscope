import React from 'react'
import { connect } from 'react-redux'
import { setRgbColour, setPreviewColour } from '../../../actions'
import tinycolor from 'tinycolor2'

const mapStateToProps = ({ picker }) => {
    return {
        rgb: picker.rgb
    }
}

const mergeProps = (stateProps, { dispatch }, ownProps) => {
    return {
        ...stateProps,
        ...ownProps,
        onRgbChange: (e) => {
            let { name, value } = e.target
            let { rgb } = stateProps
            rgb = { ...rgb, [name]: value }
            dispatch(setRgbColour(rgb))
            value = parseFloat(value)
            if(!isNaN(value)) {
                rgb = { ...rgb, [name]: value }
                if(tinycolor(rgb).isValid()){
                    dispatch(setPreviewColour(rgb))
                }
            }
        }
    }
}

let RgbForm = ({rgb, onRgbChange }) => (
    <div className="form-group row">
      <label htmlFor="rgb-r-input" className="col-2 col-form-label">RGB</label>
      <div className="col-10">
        <div className="row">
          <div className="col-4">
            <input className="form-control" type="text" value={rgb.r} id="rgb-r-input" name="r" onChange={onRgbChange} />
          </div>
          <div className="col-4">
            <input className="form-control" type="text" value={rgb.g} id="rgb-g-input" name="g" onChange={onRgbChange} />
          </div>
          <div className="col-4">
            <input className="form-control" type="text" value={rgb.b} id="rgb-b-input" name="b" onChange={onRgbChange} />
          </div>
        </div>
      </div>
    </div>
)

RgbForm = connect(
    mapStateToProps,
    null,
    mergeProps,
)(RgbForm)

export default RgbForm
