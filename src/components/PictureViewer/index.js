import React from 'react'
import { connect } from 'react-redux'
import { Image, Layer, Rect, Stage, Group } from 'react-konva'
import { loadPictureRequest, loadPictureSuccess } from '../../actions'

const mapStateToProps = ({ picture }) => {
  const { src, image } = picture
  return {
    src,
    image,
  }
}

const mergeProps = (stateProps, { dispatch }, ownProps) => {
  return {
    ...stateProps,
    ...ownProps,
    onClick: (e) => {
      const src = '/kaleidoscope.png'
      dispatch(loadPictureRequest(src))
      const image = new window.Image();
      image.src = src
      image.onload = () => {
        console.log('d')
        dispatch(loadPictureSuccess(image))
      }
    }
  }
}

let PictureViewer = ({ image, onClick }) => {
  let picture
  if(image !== null) {
    picture = (<Image image={image} />)
  }
  return (
    <div>
      <Stage width={700} height={700}>
        <Layer>
          {picture}
        </Layer>
      </Stage>
      <button className="btn btn-default" onClick={onClick}>Load Image</button>
    </div>
  )
}

PictureViewer = connect(
  mapStateToProps,
  null,
  mergeProps,
)(PictureViewer)

export default PictureViewer
