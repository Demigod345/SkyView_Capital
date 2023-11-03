import React from 'react'
import search from './images/Sectionim1.svg';
export default function Searchst(props) {



  const handleClick=(e)=>{
    props.setIsSubmitted(!props.isSubmitted)
  }

  const handleChange=(e)=> {
    console.log(e.target.value)
  }
  return (
    <div className="searchsto" align = "center">
        <h1 className = "title">Search Stocks</h1>
        <div className="searcher">
        <select type="search" className="searchbar" placeholder="Search" aria-label="Search" aria-describedby="search-addon" list="stocks" onChange={handleChange}>
            <option>AAPL</option> 
            <option>MSFT</option>  
            <option>GOOGL</option> 
            <option>AMZN</option>  
            <option>NVDA</option>  
          </select>
          <button type="submit" className="search" onClick={handleClick}><img  src={search}  className="searchicon" alt=""/></button>
        </div>
    </div>
  )
}