import React from 'react'
import PropTypes from 'prop-types'
import ColourCell from './ColourCell'

const ColourGrid = ({ colours, message, handleSelect, active }) => (
    <div style={{border: '1px solid grey'}} >
        {!colours.length &&
        <p className="text-center text-muted m-4">
            <small>
                {message || 'Add colours to Start!'}
            </small>
        </p>
        }
        {colours.map(({ id, colour }) => {
            return (<ColourCell key={id} colour={colour} active={active === id} handleClick={handleSelect.bind(this, id, colour)} />)
        })}
    </div>
)

ColourGrid.propTypes = {
    colours: PropTypes.array.isRequired,
    message: PropTypes.string,
}

export default ColourGrid;
