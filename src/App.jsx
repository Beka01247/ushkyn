import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import "./App.css"
import ErrorPage from './routes/not-found/error-page.jsx';
import Login_page from './routes/login-page/login-page.jsx';
import Home from './routes/home/home.jsx';
import { useAuthContext } from "./hooks/useAuthContext.jsx";



export default function App() {

  const {user} = useAuthContext()

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/login_page"
            element={!user ? <Login_page/> : <Navigate to="/home"/>}
          />
          <Route 
            path="/home"
            element={user ? <Home/> : <Navigate to="/login_page"/>}
          />
          <Route
            path="*"
            element={<ErrorPage/>}
          />

        
        </Routes>
      
      </BrowserRouter> 
    </div>

  )
}