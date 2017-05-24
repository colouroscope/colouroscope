import tinycolor from 'tinycolor2'

const defaultState = {
  hex: '#FFFFFF',
  rgb: {r: 255, g: 255, b: 255},
  hsl: {h: 0, s: 100, l: 1.0},
}

const picker = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_PREVIEW_COLOUR':
      let { colour } = action
      let nextState = {hex: colour, rgb: colour, hsl: colour}
      colour = tinycolor(colour)
      if(colour.getFormat() !== 'hex8' && colour.getFormat() !== 'hex') {
        const hex = colour.toHexString().toUpperCase()
        Object.assign(nextState, {hex})
      }
      if(colour.getFormat() !== 'rgb') {
        const rgb = colour.toRgb()
        Object.assign(nextState, {rgb})
      }
      if(colour.getFormat() !== 'hsl') {
        const hsl = colour.toHsl()
        Object.assign(nextState, {hsl})
      }
      return nextState
    case 'SET_HEX_COLOUR':
      state = Object.assign({}, state, {hex: action.hex})
      return state
    case 'SET_RGB_COLOUR':
      state = Object.assign({}, state, {rgb: action.rgb})
      return state
    case 'SET_HSL_COLOUR':
      state = Object.assign({}, state, {hsl: action.hsl})
      return state
    default:
      return state
  }
}

export default picker
