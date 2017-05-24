let nextColourId = 0;
export const addColour = (colour) => {
  return {
    type: 'ADD_COLOUR',
    id: nextColourId++,
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
