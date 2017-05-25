import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { showDropzoneOverlay, hideDropzoneOverlay,
  loadPictureRequest, loadPictureSuccess } from '../../actions'

const getImageData = (img) => {
  const canvas = document.createElement('canvas');
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)
  const imageData = ctx.getImageData(0, 0, img.width, img.height)
  const data = imageData.data
  return {
    data,
    getColourAtPosition: (x, y) => {
      const offset = (y * img.width + x) * 4
      return {
        r: data[offset],
        g: data[offset+1],
        b: data[offset+2],
      }
    }
  }
}

const loadPictureFromPath = (path, dispatch) => {
  const reader = new FileReader();
  dispatch(loadPictureRequest(path))
  reader.onload = function(event){
    const src = event.target.result
    dispatch(loadPictureRequest(src))
    const image = new window.Image();
    image.onload = (imgEvent) => {
      const data = getImageData(imgEvent.target)
      dispatch(loadPictureSuccess(image, data))
    }
    image.src = src
  }
  reader.readAsDataURL(path);
}

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
      loadPictureFromPath(path, dispatch)
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
