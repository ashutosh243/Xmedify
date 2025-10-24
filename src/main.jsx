import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import './main.css';
import { BrowserRouter } from 'react-router';
import Routing from './Routes/Routing.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routing></Routing>
    </BrowserRouter>
  </StrictMode>,  
)
