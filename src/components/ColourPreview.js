import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ picker }) => {
  return {
    colour: picker.hex
  }
}

let ColourPreview = ({colour}) => {
  const preview = {
    height: 300,
    width: '100%',
    backgroundColor: colour,
    border: '2px solid grey',
  }
  return (
    <div className="mb-4" style={preview}></div>
  )
}

ColourPreview = connect(
  mapStateToProps,
)(ColourPreview)

export default ColourPreview
