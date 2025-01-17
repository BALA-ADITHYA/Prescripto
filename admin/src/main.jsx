import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import DoctorContextProvider from './context/DoctorContext.jsx'
import AdminContextProvider from './context/AdminContext.jsx'
import AppContextProvider from './context/Appcontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AdminContextProvider>
    <DoctorContextProvider>
      <AppContextProvider>
      <App />
      </AppContextProvider>
    </DoctorContextProvider>
  </AdminContextProvider>
  </BrowserRouter>,
)
