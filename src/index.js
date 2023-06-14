import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement);
if (rootElement.hasChildNodes()) {
  root.hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else { 
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();
