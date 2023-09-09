import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Index from './Index.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Calculator from './assets/calculator/Calculator';
import Education from './assets/Education/Education';
import Navigator from './assets/Navigator';
import Learn from './assets/Education/Learn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Calculator />,
  },
  {
    path: "/educacion",
    element: <Education/>
  },
  {
    path: "/educacion/:name",
    element: <Learn/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Navigator/>
  </React.StrictMode>,
)
