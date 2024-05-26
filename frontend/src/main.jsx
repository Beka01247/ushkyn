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
import { TopicContextProvider } from './context/topicContext.jsx'

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <AuthContextProvider>
        <TopicContextProvider>
          <App />
        </TopicContextProvider>
      </AuthContextProvider>
    </React.StrictMode>
  );

  // just comment