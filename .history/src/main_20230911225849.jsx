import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';

import './index.css';

import { worker } from './mock/browser';
worker.start();

ReactDOM.createRoot(
    document.getElementById('root')
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
