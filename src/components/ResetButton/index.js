import React from 'react'
import { connect } from 'react-redux'
import { reset } from '../../actions'

let ResetButton = ({ dispatch }) => (
  <div className="d-inline-block">
    <button className="btn btn-secondary ml-1" onClick={() => {dispatch(reset())}}>Reset</button>
  </div>
)

ResetButton = connect()(ResetButton)

export default ResetButton
