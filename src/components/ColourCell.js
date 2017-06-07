import React from 'react'
import tinycolor from 'tinycolor2'

const ColourCell = ({ id, active, colour, handleClick}) => {
    const style = {
        height: 32,
        backgroundColor: colour,
    }

    const textStyle = {
    }

    if(active){
        Object.assign(textStyle, { fontSize: '100%' })
    }

    const c = tinycolor(colour)
    if(c.isDark()) {
        Object.assign(textStyle, {color: 'white'})
    }

    return (
        <div className="d-inline-block text-center w-25" style={style} onClick={handleClick}>
            <small className="align-middle" style={textStyle}>
                {colour}
            </small>
        </div>
    )
}

export default ColourCell
