export const loadPictureRequest = (src, srcType) => ({
  type: 'LOAD_PICTURE_REQUEST',
  src,
  srcType,
})

export const loadPictureSuccess = (image, height, width) => ({
  type: 'LOAD_PICTURE_SUCCESS',
  image,
  srcType: 'base64',
  height,
  width,
})

export const setCanvasImage = (image, data) => ({
  type: 'SET_CANVAS_IMAGE',
  image,
  data,
})

const getImageData = (img) => {
  const canvas = document.createElement('canvas');
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)
  const imageData = ctx.getImageData(0, 0, img.width, img.height)
  const data = imageData.data
  let base64Image = canvas.toDataURL("image/png")
  return {
    base64Image,
    data,
    height: img.height,
    width: img.width,
  }
}

const shouldLoadPicture = (state) => (!state.canvas.image && state.picture.src)

export const fetchPictureIfNeeded = () => (dispatch, getState) => {
  const state = getState()
  if (shouldLoadPicture(getState())) {
    const { src } = state.picture
    return dispatch(fetchPictureFromBase64(src))
  } else {
    return Promise.resolve()
  }
}

export const fetchPictureFromUrl = (src) => (dispatch) => {
  dispatch(loadPictureRequest(src, 'url'))
  const image = new window.Image();
  image.onload = (imgEvent) => {
    const { base64Image, data, height, width } = getImageData(imgEvent.target)
    dispatch(loadPictureSuccess(base64Image, height, width))
    dispatch(setCanvasImage(image, data))
  }
  image.src = src
}

export const fetchPictureFromBase64 = (src) => (dispatch) => {
  const image = new window.Image();
  image.onload = (imgEvent) => {
    const { base64Image, data, height, width } = getImageData(imgEvent.target)
    dispatch(loadPictureSuccess(base64Image, height, width))
    dispatch(setCanvasImage(image, data))
  }
  image.src = src
}

export const fetchPictureFromPath = (path) => (dispatch) => {
  dispatch(loadPictureRequest(path, 'path'))
  const reader = new FileReader()
  reader.onload = function(event){
    const src = event.target.result
    dispatch(fetchPictureFromUrl(src))
  }
  reader.readAsDataURL(path);
}
