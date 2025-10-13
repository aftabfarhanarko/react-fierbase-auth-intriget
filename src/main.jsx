import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthContext/AuthProvider';
import Orders from './components/Orders/Orders';
import PrivateRoute from './Routes/PrivateRoute';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';



const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'orders',
        element: <PrivateRoute>
          <Orders></Orders>
        </PrivateRoute>
      }, 
      {
        path: 'profile', 
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
