import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import generateStore from './redux/store';

import App from './App';
import './index.css';

const store = generateStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
