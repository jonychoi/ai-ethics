import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalProvider from './contexts/globalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalProvider>
);