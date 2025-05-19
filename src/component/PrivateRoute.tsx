import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const isAdmin = user?.role === "admin";

  return isAdmin ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
