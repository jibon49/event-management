import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ServiceProvider from './ServiceProvider/ServiceProvider';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import EventRegistration from './Components/EventRegistration/EventRegistration';
import Profile from './Components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/registration",
        element: <PrivateRoute><EventRegistration></EventRegistration></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/serviceDetails/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: () => fetch('/servicesJson.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServiceProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ServiceProvider>
  </React.StrictMode>,
)
