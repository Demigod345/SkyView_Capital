import React from "react";
import { useState } from "react";
import "../stylesheets/home.css";

export default function PredByInput() {
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndDate] = useState("");
  const [company, setCompany] = useState("");
  const [responseText, setResponseText] = useState("");
  
  const handleStartChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };
  const handleEndChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleClick = async(e) => {
    e.preventDefault();

    const data = {
      startDate:startDate,
      endtDate:endtDate,
      company:company
    }

    console.log(data)

    try {
      const response = await fetch("https://localhost:5000/model", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data)
        setResponseText(`Response: ${JSON.stringify(data)}`);
      } else {
        setResponseText(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      setResponseText(`Error: ${error.message}`);
    }
  };

  return (
    <div className="predy" align="center">
      {/* SEARCH BUTTON */}
      <div className="searchsto">
        <h1 className="title">pred by input</h1>
        <div className="searcher">
          <input
            type="search"
            className="searchbar"
            placeholder="Search"
            list="stocks"
            onChange={handleCompanyChange}
          />
          <datalist id="stocks">
            <option value="AAPLe-appl" />
            <option value="MSFT-microsoft" />
            <option value="GOOGL-google" />
            <option value="AMZN-amazon" />
            <option value="NVDA-nvadia" />
          </datalist>
          <input type="submit" className="search" onClick={handleClick}></input>
        </div>
      </div>

      <br></br>
      <div className="dates">
        <h1>
          Start Date
          <input type="date" onChange={handleStartChange} />
        </h1>

        <h1>
          End Date
          <input type="date" onChange={handleEndChange} />
        </h1>
        <br></br>
      </div>
    </div>
  );
}
