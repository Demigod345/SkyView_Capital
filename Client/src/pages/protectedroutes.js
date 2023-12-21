import { Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes() {
  let navigate = useNavigate();
  var Token = localStorage.getItem("token");
  console.log(Token.length);
  let verified = false;
  if(Token.length>3) verified=true
  Token = Token.replace(/"/g, ""); // This will remove all double quotes in the string

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
    body: JSON.stringify({ title: "React POST Request Example" }),
  };
  // console.log(requestOptions);
  fetch("http://localhost:5000/v1/auth/verify-token/", requestOptions)
    .then((response) => {
      if (response.status === 401) {
        verified = false;
        navigate('/')
      }
    })

  return verified ? <Outlet /> : <Navigate to="/" />;
}
