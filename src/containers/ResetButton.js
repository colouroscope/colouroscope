import React from 'react'
import { connect } from 'react-redux'
import { reset } from '../actions'
import Button from '../components/Button'

let ResetButton = ({ dispatch }) => (
  <div className="d-inline-block">
    <Button onClick={() => {dispatch(reset())}}>Reset</Button>
  </div>
)

ResetButton = connect()(ResetButton)

export default ResetButton
