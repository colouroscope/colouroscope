import React from 'react'
import { connect } from 'react-redux'
import ColourGrid from '../components/ColourGrid'
import Panel from '../components/Panel'
import { setPreviewColour, setEditColour } from '../actions'

const mapStateToProps = ({ collection }) => {
    return {
        colours: collection
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleSelect: (id, colour) => {
        dispatch(setPreviewColour(colour))
        dispatch(setEditColour(id))
    },
})

let ColourCollection = (props) => (
    <Panel title="Collection">
        <ColourGrid {...props} />
    </Panel>
)

ColourCollection = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ColourCollection)

export default ColourCollection
