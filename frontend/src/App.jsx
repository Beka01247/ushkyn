import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ErrorPage from './routes/not-found/error-page.jsx';
import LoginPage from './routes/login-page/login-page.jsx';
import Home from './routes/home/home.jsx';
import { useAuthContext } from './hooks/useAuthContext.jsx';
import AdminHome from './routes/admin/adminHome.jsx';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

export default function App() {
  const { user } = useAuthContext();

  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <Notifications position="bottom-right" zIndex={1000} />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/login_page"
            element={!user ? <LoginPage /> : <Navigate to="/home" />}
          />
          <Route 
            path="/home/*"
            element={user ? <Home /> : <Navigate to="/login_page" />}
          />
          <Route
            path="/admin"
            element={user ? <AdminHome /> : <Navigate to="/login_page" />}
          />
          <Route
            path="/"
            element={<AdminHome/>}
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter> 
    </MantineProvider>
  );
}
