import React from 'react';

import "../App.css";

export default function PredByInput() {
  return (
    <div className="predy" align="center">
      {/* SEARCH BUTTON */}
      <div className="searchsto">
        <h1 className="title">pred by input</h1>
        <div className="searcher">
          <input type="search" className="searchbar" placeholder="Search" list="stocks"/>
          <datalist id="stocks">
            <option value='AAPLe-appl'/>
            <option value='MSFT-microsoft'/>
            <option value='GOOGL-google'/>
            <option value='AMZN-amazon'/>
            <option value='NVDA-nvadia'/>
          </datalist>
          <input type="submit" className="search"></input>
         
        </div>
      </div>
      
        <br></br>
        <div className="dates" >
        <h1>Start Date
            <input type="date" />
            </h1>
            
            <h1>End Date
                 <input type="date"/>
            </h1>
            <br></br>
      </div>
      
    </div>
       
  );
}