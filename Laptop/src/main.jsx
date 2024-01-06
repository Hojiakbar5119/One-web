import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Desktop from './Pages/Desktop'
import Benefits from './Pages/Benefits'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Desktop></Desktop>
    <Benefits/>
  </React.StrictMode>,
)
