import React from 'react';
import "../App.css";

export default function PredByInput() {
  return (
    <div className="predy">
      {/* SEARCH BUTTON */}
      <div className="searchsto">
        <h1 className="title">pred by input</h1>
        <div className="searcher">
          <input type="search" className="searchbar" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" className="search"></button>
        </div>
      </div>
      {/* TABLE */}
      <h1>Students Table</h1>
      <table align="center">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Company</th>
            <th>Start Date
            <td><input type="date" /></td>
            </th>
            
            <th>End Date
                 <td><input type="date" /></td>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AAPL</td>
            <td>APPLE INC</td>
         
          </tr>
          <tr>
            <td>MSFT</td>
            <td>MICROSOFT CORP</td>
         
          </tr>
          <tr>
            <td>GOOGL</td>
            <td>ALPHABET INC</td>
           
          </tr>
          <tr>
            <td>AMZN</td>
            <td>AMAZON COM INC</td>
           
          </tr>
          <tr>
            <td>NVDA</td>
            <td>NVIDIA CORP</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
}