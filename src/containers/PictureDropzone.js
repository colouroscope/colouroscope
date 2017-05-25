import React from 'react'
import { connect } from 'react-redux'
import OverlayDropzone from '../components/OverlayDropzone'
import { showDropzoneOverlay, hideDropzoneOverlay,
  fetchPictureFromPath } from '../actions'

const mapStateToProps = ({ dropzone }) => {
  return {
    active: dropzone.active
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDragEnter: () => {
      dispatch(showDropzoneOverlay())
    },
    onDragLeave: () => {
      dispatch(hideDropzoneOverlay())
    },
    onDrop: (files) => {
      dispatch(hideDropzoneOverlay())
      const path = files[0]
      dispatch(fetchPictureFromPath(path))
    },
  }
}

let PictureDropzone = ({ active, children,
  onDragEnter, onDragLeave, onDrop }) => {
  const accept = 'image/png'
  return (
    <OverlayDropzone
      accept={accept}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      message="Drop to Load Picture"
      >
      {children}
    </OverlayDropzone>
  )
}

PictureDropzone = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PictureDropzone)

export default PictureDropzone
