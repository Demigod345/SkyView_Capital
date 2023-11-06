import '../stylesheets/home.css';
import Navbar from "../Mycomps/Navbar";
import Backg from "../Mycomps/backgr";
import Seacrhst from "../Mycomps/searchst";
import { useState, useEffect } from 'react';
import Graph from '../Mycomps/graph';
import Footerc from "../Mycomps/Footer"
import Prediction from "../Mycomps/predbyinp"

export default function Home() {
  const[isSubmitted, setIsSubmitted] = useState(false)
  const [token, setToken] = useState('')
  
  useEffect(() => {
    var token = JSON.parse(localStorage.getItem('token'));
    token=token.replace(/"/g, '');
    if (token) {
     setToken(token);
    //  alert(token)
    }
  }, []);
  return (
  <>
  <Navbar/>
  <Backg/>
  <Seacrhst isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/> 
  <br></br>
  {isSubmitted && <Graph/>}
  <br></br>
  <Prediction/>
  <Footerc/>
 
   </>
  );
}

