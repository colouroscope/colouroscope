export const addColour = (id, colour) => ({
    type: 'ADD_COLOUR',
    id,
    colour,
})

export const setColour = (id, colour) => ({
    type: 'SET_COLOUR',
    id,
    colour,
})

export const removeColour = (id) => ({
    type: 'REMOVE_COLOUR',
    id,
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
