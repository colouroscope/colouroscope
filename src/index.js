import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';
import colourApp from './reducers'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// const store = createStore(colourApp)
const store = createStore(colourApp, devToolsEnhancer({ realtime: true }));

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
