 
import './App.css';
import Navbar from "./Mycomps/Navbar";
import Backg from "./Mycomps/backgr";
import Seacrhst from "./Mycomps/searchst";
import News from "./Mycomps/news";
import Predin  from "./Mycomps/predbyinp";
import { useState } from 'react';
import Graph from './Mycomps/graph';
function App() {
  const[isSubmitted, setIsSubmitted] = useState(false)


  return (
  <>
  <Navbar/>
  <Backg/>
  <Seacrhst isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/> 
  <br></br>
  {isSubmitted && <Graph/>} 
  <Predin/>  
  <br></br>
  <News/>
 
   </>
  );
}

export default App;
