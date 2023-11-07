import '../stylesheets/home.css';
import Navbar from "../Mycomps/Navbar";
import Backg from "../Mycomps/backgr";
import Seacrhst from "../Mycomps/searchst";
import { useState, useEffect } from 'react';
import Footerc from "../Mycomps/Footer"
import Prediction from "../Mycomps/predbyinp"

export default function Home() {
  const[isSubmitted, setIsSubmitted] = useState(false)
  
  return (
  <>
  <Navbar/>
  <Backg/>
  <br></br>
  <br></br>
  <Seacrhst isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/> 
  <br></br>  
  <br></br>
  <Prediction/>
  <br></br>
  <br></br>
  <Footerc/>
 
   </>
  );
}

