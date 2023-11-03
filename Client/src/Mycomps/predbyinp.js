import React from "react";
import { useState } from "react";
import "../stylesheets/home.css";

export default function PredByInput(props) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [company, setCompany] = useState("");
  const [responseText, setResponseText] = useState("");
  
  const token = props.token;
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
      endDate:endDate,
      company:company
    }

    console.log(data)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                  'Authorization':`Bearer ${token}` },
      body: JSON.stringify(data)
  };

  // {
  //   method: "POST",
  //   headers: {
  //     "Authorization" : `Bearer ${token}`,
  //   },
  //   body: JSON.stringify({
  //     "hi":"hello"
  //   }),
  // }
    try {
      const response = await fetch("http://localhost:5000/v1/ml", requestOptions);

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
