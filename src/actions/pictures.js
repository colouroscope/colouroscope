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

export const loadPictureRequest = (src) => {
  return {
    type: 'LOAD_PICTURE_REQUEST',
    src,
  }
}

export const fetchPictureFromUrl = (src) => {
  return (dispatch) => {
    dispatch(loadPictureRequest(src))
    const image = new window.Image();
    image.onload = (imgEvent) => {
      const data = getImageData(imgEvent.target)
      dispatch(loadPictureSuccess(image, data))
    }
    image.src = src
  }
}

export const fetchPictureFromPath = (path) => {
  return (dispatch) => {
    dispatch(loadPictureRequest(path))
    const reader = new FileReader()
    reader.onload = function(event){
      const src = event.target.result
      dispatch(fetchPictureFromUrl(src))
    }
    reader.readAsDataURL(path);
  }
}

export const loadPictureSuccess = (image, data) => {
  return {
    type: 'LOAD_PICTURE_SUCCESS',
    image,
    data,
  }
}
