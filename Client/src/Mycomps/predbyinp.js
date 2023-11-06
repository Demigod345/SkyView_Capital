import React, { useState } from "react";
import "../stylesheets/home.css";

export default function PredByInput(props) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [company, setCompany] = useState("");
  const [responseText, setResponseText] = useState("");

  const token=props.token;
  
  const handleStartChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleEndChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const data = {
      startDate:startDate,
      endDate:endDate,
      company:company
    }

    console.log(data)

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
      const response = await fetch("http://localhost:5000/v1/ml/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json', // Specify the Content-Type here
          "Authorization" : `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      console.log(response)

      if (response.ok) {
        const data = await response.data();
        alert(data);
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
        <h1 className="title" style={{ color: "white", fontSize: "24px" }}>
          Predict by Input
        </h1>
        <div className="searcher">
          <input
            type="search"
            className="searchbar"
            placeholder="Search"
            list="stocks"
            onChange={handleCompanyChange}
            style={{ color: "white" }}
          />
          <datalist id="stocks">
            <option value="AAPL-Apple" />
            <option value="MSFT-Microsoft" />
            <option value="GOOGL-Google" />
            <option value="AMZN-Amazon" />
            <option value="NVDA-Nvidia" />
          </datalist>
          <input
            type="submit"
            className="search"
            onClick={handleClick}
            style={{ backgroundColor: "#3aaf9f", color: "white" }}
          />
        </div>
      </div>

      <br />
      <div className="dates">
        <div className="date-input">
          <label style={{ color: "white", fontSize: "18px" }}>Start Date: </label>
          <input
            type="date"
            onChange={handleStartChange}
            value={startDate}
            style={{ marginLeft: "10px", width: "150px", fontSize: "18px", height: "35px" }}
          />
        </div>

        <div className="date-input" style={{ marginTop: "10px" }}>
          <label style={{ color: "white", fontSize: "18px" }}>End Date: </label>
          <input
            type="date"
            onChange={handleEndChange}
            value={endDate}
            style={{ marginLeft: "16px", width: "150px", fontSize: "18px", height: "35px" }}
          />
        </div>
      </div>
    </div>
  );
}