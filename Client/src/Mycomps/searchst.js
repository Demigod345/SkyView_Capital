import React from 'react'

export default function searchst() {
  return (
    <div className="searchsto">
        <h1 className = "title">Search Stocks</h1>
        <div className="searcher">
        <input type="search"  className="searchbar" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button type="button" className="search" ></button>
        </div>
    </div>
  )
}

