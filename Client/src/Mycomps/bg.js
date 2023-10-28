

import React from 'react'

import im from './images/image.svg';
import im1 from "./images/Sectionim1.svg";
import im2 from "./images/Sectionim2.svg";
import im3 from "./images/Sectionim3.svg";
import im4 from "./images/Sectionim4.svg";

export default function bg() {
  return (
    <>
    <img  src={im} className="img" alt=""/>
    <ul className="imag">
        
    <li><img  src={im1}  className="img" alt=""/></li>
    <li><img  src={im2}  className="img1" alt=""/></li>
    <li><img  src={im3} className="img1" alt=""/></li>
    <li><img  src={im4}  className="img1" alt=""/></li>
  </ul></>
  )
}
