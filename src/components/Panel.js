import React from 'react'
import PropTypes from 'prop-types'

const Panel = ({title, children}) => (
    <div className="mt-4">
        {title && <h4 className="text-center">{title}</h4>}
        {children}
    </div>
)

Panel.propTypes = {
    title: PropTypes.string,
}

export default Panel