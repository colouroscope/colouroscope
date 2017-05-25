import React from 'react'

let Button = ({ onClick, children }) => (
  <button className="btn btn-secondary" onClick={onClick}>{children}</button>
)

export default Button
