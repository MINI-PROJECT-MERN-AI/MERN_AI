// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Homepage from "./routes/Homepage/Homepage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
    
  },
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
