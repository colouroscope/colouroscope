import React from 'react'
import { connect } from 'react-redux'
import { loadPictureRequest, loadPictureSuccess } from '../../../../actions'

const getImageData = (img) => {
  const canvas = document.createElement('canvas');
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)
  const imageData = ctx.getImageData(0, 0, img.width, img.height)
  const data = imageData.data
  return {
    data,
    getColourAtPosition: (x, y) => {
      const offset = (y * img.width + x) * 4
      return {
        r: data[offset],
        g: data[offset+1],
        b: data[offset+2],
      }
    }
  }
}

let PictureLoader = ({ dispatch }) => {
  const onChange = (e) => {
    const reader = new FileReader();
    const path = e.target.files[0]
    dispatch(loadPictureRequest(path))
    reader.onload = function(event){
      const src = event.target.result
      dispatch(loadPictureRequest(src))
      const image = new window.Image();
      image.onload = (imgEvent) => {
        const data = getImageData(imgEvent.target)
        dispatch(loadPictureSuccess(image, data))
      }
      image.src = src
    }
    reader.readAsDataURL(path);
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
