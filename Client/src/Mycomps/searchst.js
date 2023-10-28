import React from 'react'

export default function searchst() {
  return (
    <div className="searchsto">
        <h1 className = "title">Search Stocks</h1>
        <div className="searcher">
        <input type="search"  className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" padding="10px"/>
        <button type="button" className="btn btn-outline" padding="10px" style="background-color:red">search</button>
        </div>
    </div>
  )
}

