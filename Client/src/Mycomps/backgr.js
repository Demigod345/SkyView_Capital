import React from 'react'
import im from './images/image.svg';
import im1 from "./images/Sectionim1.svg";
import im2 from "./images/Sectionim2.svg";
import im3 from "./images/Sectionim3.svg";
import im4 from "./images/Sectionim4.svg";
export default function bg() {
  return (
    <div className="bgmain">
    <div style={{
      width:'100%',
      height:'100%',
      
     

    }}>
    <img  src={im}  alt=""/>
   
    <img  src={im1}  className="img1" alt=""/>
    <img  src={im2}  className="img1" alt=""/>
    <img  src={im3}  className="img1" alt=""/>
    <img  src={im4}  className="img1" alt=""/>
    </div>
  </div>
  )
}