import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Usercard } from './Usercard'
import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Usercard />
  </StrictMode>,
)
