import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Root from './Components/Root/Root';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Register from './Components/Register/Register'
import AuthProvider from './Components/Providers/AuthProvider'
import Login from './Components/Login/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
