import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import { ThemeProvider } from './theme/ThemeProvider';
import ProtectedRoute from './routes/ProtectedRoute';
import AppShell from './ui/AppShell';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />

          <Route
            path='/'
            element={
              <ProtectedRoute>
                <AppShell />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path='settings' element={<Settings />} />
          </Route>

          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}
