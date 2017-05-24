import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dimensions from 'react-dimensions'
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

class PV extends Component {
  render() {
    const { containerWidth, image, onClick } = this.props
    const height = Math.max(700, containerWidth)
    let picture
    if(image !== null) {
      picture = (<Image image={image} />)
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
