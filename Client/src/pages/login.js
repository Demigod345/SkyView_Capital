import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/login.css";

function Login() {
  let navigate = useNavigate();
  const [responseText, setResponseText] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSignUpClick = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(name);
    console.log(password);

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
        console.log(data.tokens.access.token);
        navigate("home");
      } else {
        setResponseText(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      setResponseText(`Error: ${error.message}`);
    }
  };

  const handleSignInClick = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

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
        console.log(data.tokens.access.token);
        navigate("home");
      } else {
        setResponseText(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      setResponseText(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div id="info"></div>
      <div id="container" style={{ border: "1rem", borderColor: "white" }}>
        <div id="cover">
          <h1 className="sign-up">Hello, Friend!</h1>
          <p className="sign-up">
          Enter your personal details<br></br> and start a journey with us
          </p>
          <br></br>
          <a className="button sign-up" href="#cover">
            Sign Up
          </a>
          <h1 className="sign-in">Welcome Back!</h1>
          <p className="sign-in">
            To keep connected with us please<br></br> login with your personal
            info
          </p>
          <br></br>
          <a className="button sign-in" href="#">
            Sign In
          </a>
  
        </div>
        <div id="login">
          <h1>Sign In</h1>
          <p>or use your email account:</p>
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
            <br></br>
            <a id="forgot-pass" href="#">
              Forgot your password?
            </a>
            <br></br>
            <input className="submit-btn" type="submit" value="Sign In" />
          </form>
        </div>
        <div id="register">
          <h1>Create Account</h1>
          <p>or use your email for registration:</p>
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
            <br></br>
            <input className="submit-btn" type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
