import React from 'react';
import ReactDOM from 'react-dom';
import WindowSizeStore from './windowSizeStore'
import './index.css';
import App from './App';

const windowSizeStore = new WindowSizeStore()

ReactDOM.render(
  <App windowSizeStore={windowSizeStore} />, 
  document.getElementById('root'));
