import React from 'react'

export default function Searchst(props) {



  const handleClick=(e)=>{
    props.setIsSubmitted(!props.isSubmitted)
  }

  const handleChange=(e)=> {
    console.log(e.target.value)
  }
  return (
    <div className="searchsto">
        <h1 className = "title">Search Stocks</h1>
        <div className="searcher">
        <input type="search" className="searchbar" placeholder="Search" aria-label="Search" aria-describedby="search-addon" list="stocks" onChange={handleChange}/>
          <datalist id="stocks">
            <option value='AAPL'/>
            <option value='MSFT'/>
            <option value='GOOGL'/>
            <option value='AMZN'/>
            <option value='NVDA'/>
          </datalist>
          <input type="submit" className="search" onClick={handleClick}></input>
        </div>
    </div>
  )
}

