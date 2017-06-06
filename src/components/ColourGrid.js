import React from 'react'
import PropTypes from 'prop-types'
import ColourCell from './ColourCell'

const ColourGrid = ({ colours, message }) => {
    let nothing
    if(!colours.length) {
        nothing = (
            <p className="text-center text-muted m-4">
                <small>
                    {message || 'Add colours to Start!'}
                </small>
            </p>
        )
    }

    return (
        <div style={{border: '1px solid grey'}} >
            {nothing}
            {colours.map(({ id, colour }) => (
                <ColourCell key={id} colour={colour} />
            ))}
        </div>
    )
}

ColourGrid.propTypes = {
    colours: PropTypes.array.isRequired,
    message: PropTypes.string,
}

export default ColourGrid;
