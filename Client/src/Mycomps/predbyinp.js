import React, { useState, useEffect } from "react";
import "../stylesheets/predbyinp.css";
import Graph from "./graph";

function setProperGraphData(dates, predictions) {
  let dummyPoints = [];

  let nanosecondsValue, millisecondsValue, date;
  for (let a = 0; a < dates.length; a++) {
    nanosecondsValue = dates[a];
    millisecondsValue = nanosecondsValue / 1000000; // Convert nanoseconds to milliseconds
    date = new Date(millisecondsValue);

    let dummyPoint = {
      x: new Date(date),
      y: predictions[a],
    };
    dummyPoints.push(dummyPoint);
  }

  let extra = predictions.length - dates.length;

  for (let i = 0; i < extra; i++) {
    let prediction = predictions[dates.length + i];
    nanosecondsValue += 24 * 60 * 60 * 1000 * 1000000;
    millisecondsValue = nanosecondsValue / 1000000; // Convert nanoseconds to milliseconds
    date = new Date(millisecondsValue);
    while (date.getDay() > 5) {
      nanosecondsValue += 24 * 60 * 60 * 1000 * 1000000;
      millisecondsValue = nanosecondsValue / 1000000; // Convert nanoseconds to milliseconds
      date = new Date(millisecondsValue);
    }
    let dummyPoint = {
      x: new Date(date),
      y: prediction,
    };
    console.log(dummyPoint);
    dummyPoints.push(dummyPoint);
  }
  // console.log(a)
  console.log(dummyPoints);
  return dummyPoints;
}

export default function PredByInput(props) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [company, setCompany] = useState("");
  const [responseText, setResponseText] = useState("");
  const [stock, setStock] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [numberOfDays, setNumberOfDays] = useState(30);
  const [predictionResult, setPredictionResult] = useState(null);
  const [graphDataPoints, setGraphDataPoints] = useState([]);
  const [advice, setAdvice] = useState("");
  const [sentiment, setSentiment] = useState(0);
  const [predictions, setPredictions] = useState(null);
  const [graphData, setGraphData] = useState(null);
  const [dates, setDates] = useState([]);
  let token = localStorage.getItem("token");
  token = token.replace(/"/g, ""); // This will remove all double quotes in the string

  const [isDragging, setIsDragging] = useState(false);

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

    try {
      const response = await fetch("http://localhost:5000/v1/ml/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the Content-Type here
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        setPredictions(data);
        console.log(data);
        setAdvice(data.advice);
        setSentiment(data.predicted_sentiment);
        setGraphData(data.predicted_prices);
        setDates(data.dates);
        // setProperData(startDate, endDate, data.predicted_prices)
        setGraphDataPoints(
          setProperGraphData(data.dates, data.predicted_prices)
        );

        setResponseText(`Response: ${JSON.stringify(data)}`);
      } else {
        setResponseText(`Error: ${response.status} - ${response.statusText}`);
        console.log(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      setResponseText(`Error: ${error.message}`);
      console.log(`Error: ${error.message}`);
    }
  };
  const handleIncreaseDays = () => {
    if (numberOfDays < 7) {
      setNumberOfDays(numberOfDays + 1);
    }
  };

  const handleDecreaseDays = () => {
    if (numberOfDays > 1) {
      setNumberOfDays(numberOfDays - 1);
    }
  };
  
  return (
    <div className="predict-container">
      <h2>Predict the Movement of the Stock</h2>
      <p>by providing the input</p>
      <div className="makeGrid">
      <div className="form-group">
        <label>Select a Stock:</label>
        <select
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        >
          <option value="">Select a stock</option>
          <option value="AAPL">Apple Inc.</option>
          <option value="GOOGL">Alphabet Inc.</option>
          {/* Add more stock options here */}
        </select>
      </div>

      <div className="form-group">
        <label>Select a Date:</label>
        <input
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
      </div>
      </div>
      <div className="flex items-center">
        <div className="w-full h-2 bg-gray-800 rounded-full">
          
        </div>
        <div className="form-group">
        <label>Number of Days:</label>
        <div className="number-input">
          <button onClick={handleDecreaseDays}>-</button>
          <input type="number" value={numberOfDays} readOnly />
          <button onClick={handleIncreaseDays}>+</button>
        </div>
      </div>
      </div>

      <button 
      // onClick={handlePredictClick}
      >Predict</button>

      {predictionResult && (
        <div className="prediction-result">
          <h3>Prediction Result</h3>
          
          {/* Display the prediction result here */}
        </div>
      )}
    </div>
    // <div className="predy" align="center">
    //   {/* SEARCH BUTTON */}
    //   <div className="searchsto">
    //     <h1 className="title" style={{ color: "white", fontSize: "24px" }}>
    //       Predict by Input
    //     </h1>
    //     <div className="searcher">
    //       <input
    //         type="search"
    //         className="searchbar"
    //         placeholder="Search"
    //         list="stocks"
    //         onChange={handleCompanyChange}
    //         style={{ color: "white" }}
    //       />
    //       <datalist id="stocks">
    //         <option value="AAPL-Apple" />
    //         <option value="MSFT-Microsoft" />
    //         <option value="GOOGL-Google" />
    //         <option value="AMZN-Amazon" />
    //         <option value="NVDA-Nvidia" />
    //       </datalist>
    //       <input
    //         type="submit"
    //         className="search"
    //         onClick={handleClick}
    //         style={{ backgroundColor: "#3aaf9f", color: "white" }}
    //       />
    //     </div>
    //   </div>

    //   <br />
    //   <div className="dates">
    //     <div className="date-input">
    //       <label style={{ color: "white", fontSize: "18px" }}>
    //         Start Date:{" "}
    //       </label>
    //       <input
    //         type="date"
    //         onChange={handleStartChange}
    //         value={startDate}
    //         style={{
    //           marginLeft: "10px",
    //           width: "150px",
    //           fontSize: "18px",
    //           height: "35px",
    //         }}
    //       />
    //     </div>

    //     <div className="date-input" style={{ marginTop: "10px" }}>
    //       <label style={{ color: "white", fontSize: "18px" }}>End Date: </label>
    //       <input
    //         type="date"
    //         onChange={handleEndChange}
    //         value={endDate}
    //         style={{
    //           marginLeft: "16px",
    //           width: "150px",
    //           fontSize: "18px",
    //           height: "35px",
    //         }}
    //       />
    //     </div>
    //   </div>
    //   <Graph graphDataPoints={graphDataPoints} />
    // </div>
  );
}