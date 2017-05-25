import React from 'react'
import { connect } from 'react-redux'
import { fetchPictureFromPath } from '../../../../actions'

let PictureLoader = ({ dispatch }) => {
  const onChange = (e) => {
    const path = e.target.files[0]
    dispatch(fetchPictureFromPath(path))
  }

  return (
    <div>
      <label htmlFor="pictureLoader" className="btn btn-primary">Load Picture</label>
      <input id="pictureLoader" type="file" hidden className="form-control-file" onChange={onChange} />
    </div>
  )
}

PictureLoader = connect()(PictureLoader)

export default PictureLoader
