import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Use `StrictMode` for highlighting potential problems in the app during development
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root container missing in index.html");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
