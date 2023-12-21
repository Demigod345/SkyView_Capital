/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PasswordChecklist from "react-password-checklist";
import "../stylesheets/login.css";
import img1 from "../Mycomps/images/logo.svg";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState('')
  const [verifiedName, setVerifiedName] = useState('')
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSignUp2Click = () => {
    setPassword(""); // Set the password variable to an empty string
  };
  const handleSignIn2Click = () => {
    setPassword(""); // Set the password variable to an empty string
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  useEffect(() => {
    const checklist = password;
    let hasValidLength = checklist.length >= 8;
    let hasAlphabet = /[a-zA-Z]/.test(checklist);
    let hasNumber = /\d/.test(checklist);
    if (hasValidLength && hasAlphabet && hasNumber) {
      setIsPasswordValid(true);
    }
  }, [password]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSignUpClick = async (e) => {
    e.preventDefault();

    if (!isPasswordValid) {
      // Display an alert if the password is not valid
      Swal.fire({
        title: "Error",
        text: "Password does not meet the requirements",
        icon: "error",
      });
      return; // Exit the function
    }

    if (!email || !password || !name) {
      // Display an alert if any of the required fields are empty
      Swal.fire({
        title: "Error",
        text: "Please fill in all the required fields",
        icon: "error",
      });
      return; // Exit the function
    }

    const data = {
      email: email,
      name: name,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:5000/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        navigate("/");
      } else {
        console.log(response)
        if(response.status === 400){
          Swal.fire({
            title: `Error: ${response.status}`,
            text: `Email is already registered!`,
            icon: "error",
          });
          return;
        } 
      }
    } catch (error) {
      Swal.fire({
        title: `Error`,
        text: `${error.message}`,
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Sign Up Successful",
      text: "You have successfully signed up!",
      icon: "success",
    });
  };

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
    if (token.length > 3) {
      localStorage.setItem("name", JSON.stringify(verifiedName));
      localStorage.setItem("email", JSON.stringify(verifiedEmail));
    }
    // navigate("home");
  }, [token]);

  const handleSignInClick = async (e) => {
    e.preventDefault();

    if (!isPasswordValid) {
      // Display an alert if the password is not valid
      Swal.fire({
        title: "Error",
        text: "Password does not meet the requirements",
        icon: "error",
      });
      return; // Exit the function
    }

    if (!email || !password) {
      // Display an alert if any of the required fields are empty
      Swal.fire({
        title: "Error",
        text: "Please fill in both email and password fields",
        icon: "error",
      });
      return; // Exit the function
    }

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:5000/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.tokens.access.token);
        setVerifiedName(data.user.name)
        setVerifiedEmail(data.user.email)
        console.log(data)

        setTimeout(() => {
          navigate("home");
        }, 1000);
      } else {
        if (response.status === 401) {
          Swal.fire({
            title: "Error",
            text: "Incorrect Email or Password",
            icon: "error",
          });
          return;
        }
        Swal.fire({
          title: `Error: ${response.status}`,
          text: `Error: ${response.statusText}`,
          icon: "error",
        });
        return;
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Sign In Successful",
      text: "You have successfully signed in!",
      icon: "success",
    });
  };

  return (
    <>
      <nav className="nav" style={{"justifyContent":"center"}}>
            <img src={img1} width={"45px"}></img>
        <div className="navbarmain">
          <a href="" style={{ "text-decoration": "none","textAlign":"center","margin":"0px" }}>
            <h1 style={{ color: "" }} aaa>
              SkyView Capital
            </h1>
          </a>
        </div>
      </nav>

      <div id="container" style={{ border: "1rem", borderColor: "white" }}>
        <div id="cover">
          <h1 className="sign-up">Welcome Back!</h1>
          <p className="sign-up">
            To keep connected with us please<br></br>signin with your personal
            details.
          </p>
          <br></br>

          <a
            className="button sign-up"
            href="#cover"
            style={{
              width: "auto",
            }}
            onClick={handleSignUp2Click}
          >
            Sign Up
          </a>
          <h1 className="sign-in">Hello, Friend! </h1>
          <p className="sign-in">
            Enter your personal details<br></br> and start a journey with us.
          </p>
          <br></br>
        
          <a
            className="button sign-in"
            style={{
              width: "auto",
            }}
            href="#"
            onClick={handleSignIn2Click}
          >
            Sign In 
          </a>
          
        </div>
        <div id="login">
          <h1>Sign In</h1>

          <form onSubmit={handleSignInClick}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleEmailChange}
            />
            <br></br>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            {password !== "" && ( // Conditionally render the checklist
              <div style={{ display: "inline-block" }}>
                <br></br>
                <PasswordChecklist
                  rules={["letter", "minLength", "number"]}
                  minLength={8}
                  value={password}
                />
                <br></br>
              </div>
            )}
            <br></br>
            <input className="submit-btn" type="submit" value="Sign In" />
          </form>
        </div>
        <div id="register">
          <h1>Create Account</h1>
          <form onSubmit={handleSignUpClick}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleNameChange}
            />
            <br></br>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleEmailChange}
            />
            <br></br>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              autocomplete="off"
            />
            {password !== "" && ( // Conditionally render the checklist
              <div style={{ display: "inline-block" }}>
                <br></br>
                <PasswordChecklist
                  rules={["letter", "minLength", "number"]}
                  minLength={8}
                  value={password}
                />

              </div>
            )}
            <br></br>
            <input className="submit-btn" type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </>

  );
}

export default Login;
