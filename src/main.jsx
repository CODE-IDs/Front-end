import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './Index.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Calculator from './assets/calculator/Calculator';
import Empleabilidad from './Empleabilidad/Empleabilidad'; 
import Education from './assets/Education/Education';
import Learn from './assets/Education/Learn';
import { ChakraProvider } from "@chakra-ui/react";
import Navigator from './assets/Navigator';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/empleabilidad",
    element: <Empleabilidad />,
  }, 
  {
    path: "/educacion",
    element: <Education/>
  },
  {
    path: "/educacion/:name",
    element: <Learn/>
  },
  {
    path: "/calculadora",
    element: <Calculator />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
      <Navigator />
    </ChakraProvider>
  </React.StrictMode>
);
