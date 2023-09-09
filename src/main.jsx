import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Index from './Index.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Calculator from "./assets/calculator/Calculator";
import Education from "./assets/Education/Education";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Calculator />,
  },
  {
    path: "/educacion",
    element: <Education />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
