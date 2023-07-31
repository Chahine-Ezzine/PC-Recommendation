import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Landing-Page.css'
import { LaptopProvider } from './LaptopContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LaptopProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LaptopProvider>
)
