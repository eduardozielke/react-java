import { CssBaseline } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Header from './layout/Header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
