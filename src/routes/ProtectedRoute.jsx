import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute() {
  const { session, loading, isConfigured } = useAuth();

  if (!isConfigured) {
    return (
      <div className="admin-page">
        <div className="admin-card admin-card--narrow">
          <h1>Admin unavailable</h1>
          <p className="admin-muted">
            Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to a{' '}
            <code>.env</code> file, then restart the dev server.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="admin-page">
        <p className="admin-muted">Checking session…</p>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
