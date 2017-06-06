import React from 'react'
import { connect } from 'react-redux'
import { setHslColour, setPreviewColour } from '../../../actions'
import tinycolor from 'tinycolor2'

const mapStateToProps = ({ picker }) => {
    return {
        hsl: picker.hsl
    }
}

const mergeProps = (stateProps, { dispatch }, ownProps) => {
    return {
        ...stateProps,
        ...ownProps,
        onHslChange: (e) => {
            let { name, value } = e.target
            let { hsl } = stateProps
            hsl = { ...hsl, [name]: value }
            dispatch(setHslColour(hsl))
            value = parseFloat(value)
            if(!isNaN(value)) {
                hsl = { ...hsl, [name]: value }
                if(tinycolor(hsl).isValid()){
                    dispatch(setPreviewColour(hsl))
                }
            }
        }
    }
}

let HslForm = ({hsl, onHslChange}) => (
    <div className="form-group row">
      <label htmlFor="hsl-h-input" className="col-2 col-form-label">HSL</label>
      <div className="col-10">
        <div className="row">
          <div className="col-4">
            <input className="form-control" type="text" value={hsl.h} id="hsl-h-input" name="h" onChange={onHslChange} />
          </div>
          <div className="col-4">
            <input className="form-control" type="text" value={hsl.s} id="hsl-s-input" name="s" onChange={onHslChange} />
          </div>
          <div className="col-4">
            <input className="form-control" type="text" value={hsl.l} id="hsl-l-input" name="l" onChange={onHslChange} />
          </div>
        </div>
      </div>
    </div>
)

HslForm = connect(
    mapStateToProps,
    null,
    mergeProps,
)(HslForm)

export default HslForm
