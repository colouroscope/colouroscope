import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dimensions from 'react-dimensions'
import { Image, Layer, Stage } from 'react-konva'
import PictureLoader from './PictureLoader'
import ResetButton from './ResetButton'
import { movePicture, setPreviewColour } from '../actions'

const getColourAtPosition = (data, dimensions, x, y) => {
    const offset = (y * dimensions.width + x) * 4
    if(data[offset+3] === 0) return {r: 255, g: 255, b: 255} // Transparent
    return {
        r: data[offset],
        g: data[offset+1],
        b: data[offset+2],
    }
}

const mapStateToProps = ({ canvas, picture, substitutions }) => {
    const { display, data } = canvas
    const { dimensions, position } = picture;
    return {
        display,
        data,
        dimensions,
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
            const { data, dimensions, position } = stateProps
            const { offsetX, offsetY } = e.evt
            const x = offsetX - position.x
            const y = offsetY - position.y
            const rgb = getColourAtPosition(data, dimensions, x, y)
            dispatch(setPreviewColour(rgb))
        }
    }
}

class PV extends Component {
    render() {
        const { containerWidth, display, position,
            onClickImage, onDrag, } = this.props
        const height = Math.max(700, containerWidth)
        let picture
        if(display !== null) {
            picture = (
                <Stage width={containerWidth} height={height}>
                  <Layer>
                    <Image
                        image={display}
                        x={position.x}
                        y={position.y}
                        onClick={onClickImage}
                        draggable="true"
                        onDragEnd={onDrag}
                    />
                  </Layer>
                </Stage>
            )
        }
        return (
            <div>
                {picture}
                {!picture &&
                <div
                    className="text-center py-4"
                    style={{height: height, width: containerWidth, backgroundColor: '#FAFAFA'}}>
                  Drag/ Load Picture to Preview
                </div>
                }
              <div className="pt-2">
                <PictureLoader />
                <ResetButton />
              </div>
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
