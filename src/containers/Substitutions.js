import uuid from 'uuid'
import React from 'react'
import { connect } from 'react-redux'
import Panel from '../components/Panel'
import ColourMap from '../components/ColourMap'
import { setPreviewColour, setEditColour, addSubstitution, removeSubstitution, substituteColours } from '../actions'

const mapStateToProps = ({ substitutions, editor }) => {
    const { id } = editor
    return {
        substitutions,
        active: id,
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleAdd: () => {
        const from = {id: uuid.v1(), colour: '#000000'}
        const to = {id: uuid.v1(), colour: '#000000'}
        dispatch(addSubstitution(uuid.v1(), from, to))
        dispatch(substituteColours())
    },
    handleSelect: (id, colour) => {
        dispatch(setPreviewColour(colour))
        dispatch(setEditColour(id, 'substitution'))
    },
    handleRemove: (id) => {
        dispatch(removeSubstitution(id))
        dispatch(substituteColours())
    },
})

let Substitutions = ({ substitutions, active, handleAdd, handleSelect, handleRemove }) => (
    <Panel title="Substitutions">
        <div className="text-center mb-2">
            <button className="btn btn-primary btn-sm" onClick={handleAdd}>Add Substitution</button>
        </div>
        {!substitutions.length &&
            <p className="text-center text-muted m-4">
                <small>
                    {'No colour substitutions... yet!'}
                </small>
            </p>
        }
        {substitutions.map(({ id, from, to }) => (
            <ColourMap key={id} from={from} to={to} active={active}
                       handleSelect={handleSelect} handleRemove={handleRemove.bind(this, id)} />
        ))}
        <div className="clearfix"></div>
    </Panel>
)

Substitutions = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Substitutions)

export default Substitutions
