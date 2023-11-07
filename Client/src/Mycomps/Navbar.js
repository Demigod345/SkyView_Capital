// import React, { Component } from "react";
// import logo from "./images/skyviewlogobg.png";

// class Navbar extends Component {
//     constructor(props) {
//     super(props);

//     this.state = {
//       isProfileOpen: false,
//     };

//     this.dropdownRef = React.createRef();
//   }

//   handleMouseEnter = () => {
//     this.setState({ isProfileOpen: true });
//   };

//   handleMouseLeave = () => {
//     this.setState({ isProfileOpen: true }); // Keep the dropdown open after mouse leaves
//     setTimeout(() => {
//       this.setState({ isProfileOpen: false }); // Close the dropdown after a delay
//     }, 1000); // Adjust the delay time (in milliseconds) as needed
//   };

//   handleLogout = () => {
//     localStorage.setItem('token',"")
//     localStorage.setItem('name',"")
//     localStorage.setItem('email',"")
//     this.navigate('/')
//   }

  

//   render() {
//     const { isOpen } = this.state;
//     const user = {
//       name: localStorage.getItem('name').replace(/"/g,''),
//       email: localStorage.getItem('email').replace(/"/g,''),
//     };

//     return (
//       <nav className="nav">
//         <div className="navbarmain">
//           <a href="/home" style={{ "text-decoration": "none" }}>
//             <h1 style={{ color: "" }} aaa>
//               SkyView Capital
//             </h1>
//           </a>
//         </div>
//         <div className="navright">
//           <a
//             className="navbut"
//             font="Montserrat"
//             aria-current="page"
//             href="/news"
//           >
//             News
//           </a>

//           <a
//             className="navbut"
//             font="Montserrat"
//             aria-current="page"
//             href="/about"
//           >
//             about
//           </a>

//           <a
//             className="navbut"
//             font="Montserrat"
//             aria-current="page"
//             href="/learn"
//           >
//             learn
//           </a>

//           <div
//             className="profile-dropdown"
//             onMouseEnter={this.handleMouseEnter}
//             onMouseLeave={this.handleMouseLeave}
//           >
//             <a
//               className="navbur"
//               font="Montserrat"
//               backgroundColor="#282c34"
//               aria-current="page"
//               href="#"
//             >
//               profile
//             </a>
//             {this.state.isProfileOpen && (
//               <div className="profile-content">
//                 <div className="profile-background">
//                   <p className="user-name">Username: {user.name}</p>
//                   <p className="user-email">Email ID: {user.email}</p>
//                 </div>
//                 <button className="logout-button" onClick={this.handleLogout}>Logout</button>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;


import React, { useState } from "react";
import logo from "./images/skyviewlogobg.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsProfileOpen(true);
  };

  const handleMouseLeave = () => {
    setIsProfileOpen(true); // Keep the dropdown open after mouse leaves
    setTimeout(() => {
      setIsProfileOpen(false); // Close the dropdown after a delay
    }, 1000); // Adjust the delay time (in milliseconds) as needed
  };

  const handleLogout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("name", "");
    localStorage.setItem("email", "");
    // You need to implement the 'navigate' function or replace it with your own routing logic
    navigate('/');
  };

  const user = {
    name: localStorage.getItem("name").replace(/"/g, ""),
    email: localStorage.getItem("email").replace(/"/g, ""),
  };

  return (
    <nav className="nav">
      <div className="navbarmain">
        <a href="/home" style={{ textDecoration: "none" }}>
          <h1 style={{ color: "" }} aaa>
            SkyView Capital
          </h1>
        </a>
      </div>
      <div className="navright">
        <a className="navbut" font="Montserrat" aria-current="page" href="/news">
          News
        </a>

        <a className="navbut" font="Montserrat" aria-current="page" href="/about">
          about
        </a>

        <a className="navbut" font="Montserrat" aria-current="page" href="https://youtu.be/dQw4w9WgXcQ?si=gWbheBsBKnRpibug">
          learn
        </a>

        <div
          className="profile-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
          {isProfileOpen && (
            <div className="profile-content">
              <div className="profile-background">
                <p className="user-name">Username: {user.name}</p>
                <p className="user-email">Email ID: {user.email}</p>
              </div>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}