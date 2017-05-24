import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dimensions from 'react-dimensions'
import { Image, Layer, Rect, Stage, Group } from 'react-konva'
import { loadPictureRequest, loadPictureSuccess, setPreviewColour } from '../../actions'

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

const mapStateToProps = ({ picture }) => {
  const { src, image, data } = picture
  return {
    src,
    image,
    data,
  }
}

const mergeProps = (stateProps, { dispatch }, ownProps) => {
  return {
    ...stateProps,
    ...ownProps,
    onClickImage: (e) => {
      const { data } = stateProps
      console.log(e)
      const { offsetX, offsetY } = e.evt
      const rgb = data.getColourAtPosition(offsetX, offsetY)
      dispatch(setPreviewColour(rgb))
    },
    onClick: (e) => {
      const src = '/kaleidoscope.png'
      dispatch(loadPictureRequest(src))
      const image = new window.Image();
      image.src = src
      image.onload = (imgEvent) => {
        const data = getImageData(imgEvent.target)
        dispatch(loadPictureSuccess(image, data))
      }
    }
  }
}

class PV extends Component {
  render() {
    const { containerWidth, image, onClick, onClickImage } = this.props
    const height = Math.max(700, containerWidth)
    let picture
    if(image !== null) {
      picture = (<Image image={image} onClick={onClickImage} />)
    }
    return (
      <div>
        <Stage width={containerWidth} height={height}>
          <Layer>
            {picture}
          </Layer>
        </Stage>
        <button className="btn btn-default" onClick={onClick}>Load Image</button>
      </div>
    )
  }
}

let PictureViewer = Dimensions()(PV)
PictureViewer = connect(
  mapStateToProps,
  null,
  mergeProps,
)(PictureViewer)

export default PictureViewer
