import uuid from 'uuid'
import React from 'react'
import { connect } from 'react-redux'
import { setColour, removeColour, clearEditColour } from '../../actions/index'

const mapStateToProps = ({ picker, editor }) => {
    const { id } = editor
    return {
        colour: picker.hex,
        id,
    }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    const { colour, id } = stateProps;
    const { dispatch } = dispatchProps;

    return {
        ...ownProps,
        handleSave: () => {
            dispatch(clearEditColour())
            dispatch(setColour(id, colour))
        },
        handleRemove: () => {
            dispatch(clearEditColour())
            dispatch(removeColour(id))
        },
        handleCancel: () => {
            dispatch(clearEditColour())
        }
    }
}

let SetCollectionButtons = ({handleSave, handleRemove, handleCancel}) => (
    <div>
        <button className="btn btn-primary w-50" onClick={handleSave}>Save Colour</button>
        <button className="btn btn-danger w-50" onClick={handleRemove}>Remove</button>
        <button className="btn btn-default btn-block" onClick={handleCancel}>Cancel</button>
    </div>
)

SetCollectionButtons = connect(
    mapStateToProps,
    null,
    mergeProps,
)(SetCollectionButtons)

export default SetCollectionButtons
