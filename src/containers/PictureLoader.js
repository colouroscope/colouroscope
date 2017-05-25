import React from 'react'
import { connect } from 'react-redux'
import { fetchPictureFromPath } from '../actions'
import FileButton from '../components/FileButton'

let PictureLoader = ({ dispatch }) => {
  const onFileSelect = (path) => {
    dispatch(fetchPictureFromPath(path))
  }

  return (
    <FileButton id="pictureLoader" onFileSelect={onFileSelect}>
      Load Picture
    </FileButton>
  )
}

PictureLoader = connect()(PictureLoader)

export default PictureLoader
