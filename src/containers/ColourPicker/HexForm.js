import React from 'react'
import { connect } from 'react-redux'
import { setHexColour, setPreviewColour } from '../../actions/index'
import tinycolor from 'tinycolor2'

const mapStateToProps = ({ picker }) => {
    return {
        hex: picker.hex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (e) => {
            if(tinycolor(e.target.value).isValid()){
                dispatch(setPreviewColour(e.target.value))
            } else {
                dispatch(setHexColour(e.target.value))
            }
        }
    }
}

let HexForm = ({ hex, onChange }) => {
    return (
        <div className="form-group row">
          <label htmlFor="hex-input" className="col-2 col-form-label">Hex</label>
          <div className="col-10">
            <input className="form-control" type="text" value={hex} id="hex-input" onChange={onChange} />
          </div>
        </div>
    )
}

HexForm = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HexForm)

export default HexForm
