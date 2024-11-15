import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/sass/main.scss"
import App from './App';
import * as serviceWorker from './serviceWorker';
require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
