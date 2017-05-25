import React from 'react'
import { connect } from 'react-redux'
import { reset } from '../actions'
import Button from '../components/Button'

let ResetButton = ({ dispatch }) => (
  <Button onClick={() => {dispatch(reset())}} className="ml-1">Reset</Button>
)

ResetButton = connect()(ResetButton)

export default ResetButton
