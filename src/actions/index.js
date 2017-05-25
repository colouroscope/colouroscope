import uuid from 'uuid'
import {
  loadPictureRequest, loadPictureSuccess,
  fetchPictureFromPath, fetchPictureFromUrl, fetchPictureIfNeeded
} from './pictures.js'

export { loadPictureRequest, loadPictureSuccess,
fetchPictureFromPath, fetchPictureFromUrl, fetchPictureIfNeeded }

export const addColour = (colour) => {
  return {
    type: 'ADD_COLOUR',
    id: uuid.v1(),
    colour,
  }
}

export const setPreviewColour = (colour) => {
  return {
    type: 'SET_PREVIEW_COLOUR',
    colour
  }
}

export const setHexColour = (hex) => {
  return {
    type: 'SET_HEX_COLOUR',
    hex
  }
}

export const setRgbColour = (rgb) => {
  return {
    type: 'SET_RGB_COLOUR',
    rgb
  }
}

export const setHslColour = (hsl) => {
  return {
    type: 'SET_HSL_COLOUR',
    hsl
  }
}

export const movePicture = (position) => {
  return {
    type: 'MOVE_PICTURE',
    position,
  }
}

export const showDropzoneOverlay = () => {
  return {
    type: 'SHOW_DROPZONE_OVERLAY',
  }
}

export const hideDropzoneOverlay = () => {
  return {
    type: 'HIDE_DROPZONE_OVERLAY',
  }
}
