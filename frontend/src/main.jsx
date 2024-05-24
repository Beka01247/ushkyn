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
import { AuthContext, AuthContextProvider } from './context/authContext.jsx'


  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </React.StrictMode>
  );

  // just comment