import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import manageBand from './reducers/manageBand'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageBand, window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
