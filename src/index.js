import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PixelMan from './PixelMan';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <PixelMan />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.register();
