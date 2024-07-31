import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// eslint-disable-next-line
export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn === null) {
    return <div>Loading...</div>
  }

  return isLoggedIn ? <>{children}</> : <Navigate to="/" />;
}