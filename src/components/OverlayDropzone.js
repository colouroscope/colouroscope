import React from 'react'
import Dropzone from 'react-dropzone'

const OverlayDropzone = ({ active, accept, children, message,
  onDragEnter, onDragLeave, onDrop }) => {
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
      {active && <div style={overlayStyle}>{message}</div>}
      {children}
    </Dropzone>
  )
}

export default OverlayDropzone
