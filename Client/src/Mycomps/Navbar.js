import React, { Component } from "react";
import logo from "./images/skyviewlogobg.png";

class Navbar extends Component {
  state = {
    isProfileOpen: false,
  };

  toggleProfileDropdown = () => {
    this.setState({ isProfileOpen: !this.state.isProfileOpen });
  };

  render() {
    const user = {
      name: "John Doe",
      email: "johndoe@example.com",
    };

    return (
      <nav className="nav">
        <div className="navbarmain">
          <h1>SkyView Capital</h1>
        </div>
        <div className="navright">
          <a className="navbut" font="Montserrat" aria-current="page" href="#">
            about
          </a>

          <a className="navbut" font="Montserrat" aria-current="page" href="#">
            learn
          </a>

          <div
            className="profile-dropdown"
            onMouseEnter={this.toggleProfileDropdown}
            onMouseLeave={this.toggleProfileDropdown}
          >
            <a
              className="navbur"
              font="Montserrat"
              backgroundColor="#282c34"
              aria-current="page"
              href="#"
            >
              profile
            </a>
            {this.state.isProfileOpen && (
              <div className="profile-content">
                <div className="profile-background">
                  <p className="user-name">{user.name}</p>
                  <p className="user-email">{user.email}</p>
                </div>
                <button className="logout-button">Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;