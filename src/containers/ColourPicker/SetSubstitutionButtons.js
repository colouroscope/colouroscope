import React from 'react'
import { connect } from 'react-redux'
import { setColour, clearEditColour, substituteColours } from '../../actions/index'

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
            dispatch(substituteColours())
        },
        handleCancel: () => {
            dispatch(clearEditColour())
        }
    }
}

let SetCollectionButtons = ({handleSave, handleCancel}) => (
    <div>
        <button className="btn btn-primary btn-block" onClick={handleSave}>Save Colour</button>
        <button className="btn btn-default btn-block mt-0" onClick={handleCancel}>Cancel</button>
    </div>
)

SetCollectionButtons = connect(
    mapStateToProps,
    null,
    mergeProps,
)(SetCollectionButtons)

export default SetCollectionButtons
