import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dimensions from 'react-dimensions'
import { Image, Layer, Stage } from 'react-konva'
import PictureLoader from './components/PictureLoader'
import { movePicture, setPreviewColour } from '../../actions'

const mapStateToProps = ({ picture }) => {
  const { image, data, position } = picture
  return {
    image,
    data,
    position,
  }
}

const mergeProps = (stateProps, { dispatch }, ownProps) => {
  return {
    ...stateProps,
    ...ownProps,
    onDrag: (e) => {
      const { x, y } = e.target.attrs
      dispatch(movePicture({ x, y }))
    },
    onClickImage: (e) => {
      const { data, position } = stateProps
      const { offsetX, offsetY } = e.evt
      const x = offsetX - position.x
      const y = offsetY - position.y
      const rgb = data.getColourAtPosition(x, y)
      dispatch(setPreviewColour(rgb))
    }
  }
}

class PV extends Component {
  render() {
    const { containerWidth, image, position,
      onClickImage, onDrag, } = this.props
    const height = Math.max(700, containerWidth)
    let picture
    if(image !== null) {
      picture = (
        <Image
          image={image}
          x={position.x}
          y={position.y}
          onClick={onClickImage}
          draggable="true"
          onDragEnd={onDrag}
        />
      )
    }
    return (
      <div>
        <Stage width={containerWidth} height={height}>
          <Layer>
            {picture}
          </Layer>
        </Stage>
        <PictureLoader />
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
