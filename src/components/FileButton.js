import React from 'react'
import classNames from 'classnames'

let FileButton = ({ onFileSelect, id, className, children }) => {
  const onChange = (e) => {
    const path = e.target.files[0]
    onFileSelect(path)
  }

  return (
    <div className={classNames('d-inline-block', className)}>
      <label htmlFor={id} className="btn btn-secondary my-0">{children}</label>
      <input id={id} type="file" hidden className="form-control-file" onChange={onChange} />
    </div>
  )
}

export default FileButton
