import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Temporary
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;