import React from 'react';
import ReactDOM from 'react-dom/client';
//CONTEXT
import { AuthContextProvider } from './context/AuthContext';
//COMPONENTS
import App from './App';
//ROUTER
import { BrowserRouter as Router } from 'react-router-dom';
//STYLES
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <App />
      </Router>
    </AuthContextProvider>
  </React.StrictMode>
);


