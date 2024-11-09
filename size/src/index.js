import React from 'react';
import 'animate.css';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App'; // Importing App as the default export
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root for React 18
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Rendering the App component */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
