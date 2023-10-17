import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Import the Provider
import store from './redux/store'; // Import your Redux store

ReactDOM.render(
  <Provider store={store}> {/* Wrap your App with the Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
