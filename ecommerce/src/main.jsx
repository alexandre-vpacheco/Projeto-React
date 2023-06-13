import React from 'react'
import ReactDOM from 'react-dom/client'
import { AllRoutes } from "./routes/Routes";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllRoutes />
  </React.StrictMode>,
)
