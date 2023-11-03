import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const refreshToken = localStorage.getItem('token')
  let auth = { token: refreshToken};
  return auth.token ? <Outlet /> : <Navigate to="/" />;
}