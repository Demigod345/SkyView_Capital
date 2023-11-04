import React, { useState } from "react";
import "../stylesheets/home.css";

export default function PredByInput() {
  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
  const [endDate, setEndDate] = useState("2023-12-31");
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

  const handleClick = async (e) => {
    e.preventDefault();

    const data = {
      startDate: startDate,
      endDate: endDate,
      company: company,
    };

    console.log(data);

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
            <option value="AAPLe-appl" />
            <option value="MSFT-microsoft" />
            <option value="GOOGL-google" />
            <option value="AMZN-amazon" />
            <option value="NVDA-nvadia" />
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