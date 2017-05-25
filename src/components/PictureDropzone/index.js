import React from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { showDropzoneOverlay, hideDropzoneOverlay,
  fetchPictureFromPath } from '../../actions'

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
  const overlayStyle= {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: '5em 0',
    background: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    color: '#fff',
    zIndex: 1000
  }
  return (
    <Dropzone
      disableClick
      style={{}}
      accept={accept}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      >
      { active && <div style={overlayStyle}>Drop to Load Picture</div>}
      { children }
    </Dropzone>
  )
}

PictureDropzone = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PictureDropzone)

export default PictureDropzone
