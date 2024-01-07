import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Desktop from './Pages/Desktop'
import Benefits from './Pages/Benefits'
import FormDesktop from './Pages/FormDesktop'
import Teams from './Pages/Teams'
import Service from './Pages/Service'
import Partners from './Pages/Partners'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Desktop></Desktop>
    <Benefits/>
    <FormDesktop></FormDesktop>
    <Teams></Teams>
    <Service></Service>
    <Partners></Partners>
  </React.StrictMode>,
)
