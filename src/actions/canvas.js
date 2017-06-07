import tinycolor from 'tinycolor2'

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

export const movePicture = (position) => ({
    type: 'MOVE_PICTURE',
    position,
})

export const clearPicture = () => ({
    type: 'CLEAR_PICTURE'
})

export const setCanvasImage = (image, data) => ({
    type: 'SET_CANVAS_IMAGE',
    image,
    data,
})

export const setCanvasDisplay = (display) => ({
    type: 'SET_CANVAS_DISPLAY',
    display,
})

const getImageData = (img) => {
    const canvas = document.createElement('canvas')
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
        return dispatch(fetchPictureFromSrc(src))
    } else {
        return Promise.resolve()
    }
}

export const fetchPictureFromSrc = (src) => (dispatch) => {
    dispatch(loadPictureRequest(src, 'url'))
    const image = new window.Image()
    image.onload = (imgEvent) => {
        const { base64Image, data, height, width } = getImageData(imgEvent.target)
        dispatch(loadPictureSuccess(base64Image, height, width))
        dispatch(setCanvasImage(image, data))
        dispatch(substituteColours())
    }
    image.src = src
}

export const fetchPictureFromPath = (path) => (dispatch) => {
    dispatch(clearPicture())
    dispatch(loadPictureRequest(path, 'path'))
    const reader = new FileReader()
    reader.onload = function(event){
        const src = event.target.result
        dispatch(fetchPictureFromSrc(src))
    }
    reader.readAsDataURL(path)
}

const delta = (c1, c2) => {
    return Math.abs(c1.r - c2.r) + Math.abs(c1.g - c2.g) + Math.abs(c1.b - c2.b)
}

const findSubstituteColour = (r, g, b, substituteColours) => {
    const colour = {r, g, b}
    for(let i = 0; i < substituteColours.length; i++) {
        if(delta(colour, substituteColours[i].from) < 10) return substituteColours[i].to
    }
    return colour
}

export const substituteColours = () => (dispatch, getState) => {
    const { substitutions, ...state } = getState()
    const { data } = state.canvas
    const { dimensions } = state.picture
    if(dimensions.width === 0 || dimensions.height === 0 || data === null) return
    const canvas = document.createElement('canvas')
    canvas.width = dimensions.width
    canvas.height= dimensions.height
    const ctx = canvas.getContext('2d')
    const result = ctx.createImageData(dimensions.width, dimensions.height)
    const substituteColours = substitutions.map((s) => ({
        from: tinycolor(s.from.colour).toRgb(),
        to: tinycolor(s.to.colour).toRgb(),
    }))
    for(let y = 0; y < dimensions.height; y++) {
        for(let x = 0; x < dimensions.width; x++) {
            const offset = (y * dimensions.width + x) * 4
            const colour = findSubstituteColour(data[offset], data[offset+1], data[offset+2], substituteColours)
            result.data[offset] = colour.r
            result.data[offset+1] = colour.g
            result.data[offset+2] = colour.b
            result.data[offset+3] = data[offset+3];
        }
    }
    ctx.putImageData(result, 0, 0)

    const image = new window.Image()
    image.onload = (imgEvent) => {
        dispatch(setCanvasDisplay(image))
    }
    image.src = canvas.toDataURL('image/png')
}