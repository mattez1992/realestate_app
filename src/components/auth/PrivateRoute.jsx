import { Navigate } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import Spinner from "../layout/Spinner";

const PrivateRoute = ({ children }) => {
  const { loggedIn, loading } = useAuthStatus();

  if (loading) {
    return <Spinner />;
  }

  return loggedIn ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
