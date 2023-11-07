import React, { Component } from "react";
import logo from "./images/skyviewlogobg.png";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isProfileOpen: false,
    };

    this.dropdownRef = React.createRef();
  }

  handleMouseEnter = () => {
    this.setState({ isProfileOpen: true });
  };

  handleMouseLeave = () => {
    this.setState({ isProfileOpen: true }); // Keep the dropdown open after mouse leaves
    setTimeout(() => {
      this.setState({ isProfileOpen: false }); // Close the dropdown after a delay
    }, 1000); // Adjust the delay time (in milliseconds) as needed
  };

  render() {
    const { isOpen } = this.state;
    const user = {
      name: "John Doe",
      email: "johndoe@example.com",
    };

    return (
      <nav className="nav">
        <div className="navbarmain">
          <a href="/home" style={{ "text-decoration": "none" }}>
            <h1 style={{ color: "" }} aaa>
              SkyView Capital
            </h1>
          </a>
        </div>
        <div className="navright">
          <a
            className="navbut"
            font="Montserrat"
            aria-current="page"
            href="/news"
          >
            News
          </a>

          <a
            className="navbut"
            font="Montserrat"
            aria-current="page"
            href="/about"
          >
            about
          </a>

          <a
            className="navbut"
            font="Montserrat"
            aria-current="page"
            href="/learn"
          >
            learn
          </a>

          <div
            className="profile-dropdown"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
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
