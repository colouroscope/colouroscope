import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import colourApp from './reducers'
import App from './App'
import { fetchPictureIfNeeded } from './actions'
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
  ),
  autoRehydrate()
))

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

persistStore(store, {blacklist: ['canvas']}, () => {
  store.dispatch(fetchPictureIfNeeded())
})

registerServiceWorker()
