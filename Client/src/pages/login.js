/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import "../stylesheets/login.css";

function Login() {
  let navigate = useNavigate();
  const [responseText, setResponseText] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [token,setToken] =useState("")
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
        console.log(data.tokens.access.token);
        
        navigate("home");
      } else {
        setResponseText(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      setResponseText(`Error: ${error.message}`);
    }
    Swal.fire({
      title: "Sign Up Successful",
      text: "You have successfully signed up!",
      icon: "success",
    });
  };
  
  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
    // navigate("home");
  }, [token]);
  
  const handleSignInClick = async (e) => {
    e.preventDefault();

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
        
        setTimeout(() => {
          navigate("home")
        }, 1000);
      } else {
        setResponseText(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      setResponseText(`Error: ${error.message}`);
    }
    Swal.fire({
      title: "Sign In Successful",
      text: "You have successfully signed in!",
      icon: "success",
    });
  };

  return (
    <>
      <div id="info"></div>
      <div id="container" style={{ border: "1rem", borderColor: "white" }}>
        <div id="cover">
          <h1 className="sign-up">Welcome Back!</h1>
          <p className="sign-up">
          To keep connected with us please<br></br>signin with your personal details.
          </p>
          <br></br>
          
          <a className="button sign-up" href="#cover" style={{
            'width':'auto',
          }}>
            Sign Up
          </a>
          <h1 className="sign-in">Hello, Friend! </h1>
          <p className="sign-in">Enter your personal details<br></br> and start a journey with us.
          </p>
          <br></br>
          <a className="button sign-in" style={{
            "width":"auto",
          }} href="#">
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