import React from 'react'
import PropTypes from 'prop-types'
import ColourCell from './ColourCell'

const ColourMap = ({ from, to, active, handleSelect, handleRemove }) => (
    <div>
        <div>
            <ColourCell id={from.id} active={active===from.id}
                        handleClick={handleSelect.bind(this, from.id, from.colour)} colour={from.colour} />
            <div className="w-25 d-inline-block text-center">
                =>
            </div>
            <ColourCell id={to.id} active={active===to.id}
                        handleClick={handleSelect.bind(this, to.id, to.colour)} colour={to.colour} />
            <div className="w-25 d-inline-block text-center">
                <button className="btn-sm btn btn-danger align-middle"
                        onClick={handleRemove}>
                    Remove
                </button>
            </div>
        </div>
    </div>
)

ColourMap.propTypes = {
    from: PropTypes.object.isRequired,
    to: PropTypes.object.isRequired,
}

export default ColourMap;
