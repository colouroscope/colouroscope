import React from 'react'
import { connect } from 'react-redux'
import { addColour } from '../../../actions'

const mapStateToProps = ({ picker }) => {
  return {
    colour: picker.hex
  }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { colour } = stateProps;
  const { dispatch } = dispatchProps;
  
  return {
    ...ownProps,
    onClick: (e) => {
      dispatch(addColour(colour))
    }
  }
}

let AddToCollection = ({onClick}) => (
  <button className="btn btn-default btn-block" onClick={onClick}>Add to Collection</button>
)

AddToCollection = connect(
  mapStateToProps,
  null,
  mergeProps,
)(AddToCollection)

export default AddToCollection
