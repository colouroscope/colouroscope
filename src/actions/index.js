import uuid from 'uuid'
import {
  loadPictureRequest, loadPictureSuccess,
  fetchPictureFromPath, fetchPictureFromUrl, fetchPictureIfNeeded
} from './pictures.js'

export { loadPictureRequest, loadPictureSuccess,
fetchPictureFromPath, fetchPictureFromUrl, fetchPictureIfNeeded }

export const reset = () => ({
  type: 'RESET'
})

export const addColour = (colour) => ({
  type: 'ADD_COLOUR',
  id: uuid.v1(),
  colour,
})

export const setPreviewColour = (colour) => ({
  type: 'SET_PREVIEW_COLOUR',
  colour,
})

export const setHexColour = (hex) => ({
  type: 'SET_HEX_COLOUR',
  hex,
})

export const setRgbColour = (rgb) => ({
  type: 'SET_RGB_COLOUR',
  rgb,
})

export const setHslColour = (hsl) => ({
  type: 'SET_HSL_COLOUR',
  hsl,
})

export const movePicture = (position) => ({
  type: 'MOVE_PICTURE',
  position,
})

export const showDropzoneOverlay = () => ({
  type: 'SHOW_DROPZONE_OVERLAY',
})

export const hideDropzoneOverlay = () => ({
  type: 'HIDE_DROPZONE_OVERLAY',
})
