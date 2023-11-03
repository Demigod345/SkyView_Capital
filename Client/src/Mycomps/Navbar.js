import React from 'react'
import logo from './images/skyviewlogobg.png';
export default function Navbar() {
  return (
    <nav className="nav">
  <div className="navbarmain">
 <h1 >SkyView Capital</h1>
   </div>
    <div className="navright">
      
        
          <a className="navbut" font="Montserrat" aria-current="page" href="#">about</a>
        
          <a className="navbut" font="Montserrat" aria-current="page" href="#">learn</a>
        
          <a className="navbur" font="Montserrat" background-color =" #282c34 " aria-current="page" href="#">profile ▽</a>
       

    </div>
       
  
</nav>
  )
}
