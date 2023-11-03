import '../stylesheets/home.css';
import Navbar from "../Mycomps/Navbar";
import Backg from "../Mycomps/backgr";
import Seacrhst from "../Mycomps/searchst";
import News from "../Mycomps/news";
import Predin  from "../Mycomps/predbyinp";
import { useState, useEffect } from 'react';
import Graph from '../Mycomps/graph';
import Footerc from "../Mycomps/Footer"


export default function Home() {
  const[isSubmitted, setIsSubmitted] = useState(false)
  const [token, setToken] = useState('')
  
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
     setToken(token);
     alert(token)
    }
  }, []);
  return (
  <>
  <Navbar/>
  <Backg/>
  <Seacrhst isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/> 
  <br></br>
  {isSubmitted && <Graph/>} 
  <Predin token={token}/>  
  <br></br>
  <News/>
  <Footerc/>
 
   </>
  );
}

