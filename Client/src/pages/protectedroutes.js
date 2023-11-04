import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const Token = localStorage.getItem('token')
  // let auth = { token: refreshToken};
  console.log(Token.length)
  let verified=false;
  if(Token.length>3) verified=true

  return verified? <Outlet /> : <Navigate to="/" />;
}