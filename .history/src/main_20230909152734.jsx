import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './Index.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Calculator from './assets/calculator/Calculator';
import Empleabilidad from '../Empleabilidad/Empleabilidad.jsx'; 
import Education from './assets/Education/Education';
import Navigator from './assets/Navigator';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/Empleabilidad",
    element: <empleabilidad />,
  },
  {
    path: "/educacion",
    element: <Education/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Navigator/>
  </React.StrictMode>,
)
