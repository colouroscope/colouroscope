import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import colourApp from './reducers'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const loggerMiddleware = createLogger()

const composeEnhancers = composeWithDevTools({
  realtime: true,
})

const store = createStore(colourApp, composeEnhancers(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
))

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
