import React from 'react'
import logo from './images/skyviewlogobg.png';
export default function Navbar() {
  return (
    <nav className="nav">
  <div className="navbarmain">
  <img  src={logo}  className="logoimg" alt=""/>
   </div>
    <div className="navright">
      
        
          <a className="navbut" font="Montserrat" aria-current="page" href="#">about</a>
        
          <a className="navbut" font="Montserrat" aria-current="page" href="#">learn</a>
        
          <a className="navbur" font="Montserrat" background-color =" #282c34 " aria-current="page" href="#">profile</a>
       

    </div>
       
  
</nav>
  )
}
