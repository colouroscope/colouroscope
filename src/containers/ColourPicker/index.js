import React from 'react'
import { connect } from 'react-redux'
import ColourPreview from '../../components/ColourPreview'
import HexForm from './HexForm'
import RgbForm from './RgbForm'
import HslForm from './HslForm'
import AddToCollection from './AddToCollectionButton'
import SetCollectionButtons from './SetCollectionButtons'
import Panel from '../../components/Panel'

const mapStateToProps = ({ picker, editor }) => {
    return {
        ...picker,
        ...editor,
    }
}

const mapDispatchToProps = (dispatch) => ({

})

let ColourPicker = ({ id, hex, rgb, hsl }) => (
    <Panel title="Colour Picker">
        <ColourPreview colour={hex} />
        <HexForm hex={hex} />
        <RgbForm rgb={rgb} />
        <HslForm hsl={hsl} />
        {!id && <AddToCollection  />}
        {id && <SetCollectionButtons />}
    </Panel>
)

ColourPicker = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ColourPicker)

export default ColourPicker
