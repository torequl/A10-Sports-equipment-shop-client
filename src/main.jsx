import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'
import AuthContext from './context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from 'react-tooltip'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={Router} />
      <Tooltip id="my-tooltip" />
      <ToastContainer position="top-center" autoClose={2000} />
    </AuthContext>
  </StrictMode>,
)
