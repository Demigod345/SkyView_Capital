import React, { useState } from "react";
import "../stylesheets/login.css";
function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setIsSignIn(false);
  };

  const handleSignInClick = () => {
    setIsSignIn(true);
    setIsSignUp(false);
  };

  return (
    <>
      <div id="info">
        
      </div>
      <div id="container">
        <div id="cover">
          <h1 className="sign-up">Hello, Friend!</h1>
          <p className="sign-up">
            Enter your personal details<br></br> and start a journey with us
          </p>
          <a className="button sign-up" href="#cover">
            Sign Up
          </a>
          <h1 className="sign-in">Welcome Back!</h1>
          <p className="sign-in">
            To keep connected with us please<br></br> login with your personal
            info
          </p>
          <br></br>
          <a className="button sub sign-in" href="#">
            Sign In
          </a>
        </div>
        <div id="login">
          <h1>Sign In</h1>
          <p>or use your email account:</p>
          <form>
            <input type="email" placeholder="Email" autocomplete="off" />
            <br></br>
            <input type="password" placeholder="Password" autocomplete="off" />
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
          <form>
            <input type="text" placeholder="Name" autocomplete="off" />
            <br></br>
            <input type="email" placeholder="Email" autocomplete="off" />
            <br></br>
            <input type="password" placeholder="Password" autocomplete="off" />
            <br></br>
            <input className="submit-btn" type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
