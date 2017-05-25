import React from 'react'
import classNames from 'classnames'

let Button = ({ onClick, children, className }) => (
  <button className={classNames('btn', 'btn-secondary', className)} onClick={onClick}>{children}</button>
)

export default Button
