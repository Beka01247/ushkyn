import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
    createBrowserRouter,
    RouterProvider, 
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ErrorPage from './routes/not-found/error-page.jsx'
import Login_page from './routes/login-page/login-page.jsx'
import Home from './routes/home/home.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login_page/>,
      errorElement: <ErrorPage/>,
    },

    {
        path: "/home",
        element: <Home/>,
        errorElement: <ErrorPage/>,
      },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );