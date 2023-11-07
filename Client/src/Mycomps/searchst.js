import React, { useState } from "react";
import search from "./images/Sectionim1.svg";
import Graph from "./graph";
import "../stylesheets/graph.css";
import { CirclesWithBar } from "react-loader-spinner";

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

  // console.log(a)
  console.log(dummyPoints);
  return dummyPoints;
}

export default function Searchst(props) {
  const [apiData, setApiData] = useState(null);
  const [ticker, setTicker] = useState(null);
  const [graphDataPoints, setGraphDataPoints] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stockVariables, setStockVariables] = useState(null);
  const token = localStorage.getItem("token").replace(/"/g, "");
  const handleChange = (e) => {
    console.log(e.target.value);
    setTicker(e.target.value);
  };

  const handleClear = () => {
    setIsSubmitted(false);
  };

  const handleClick = async (e) => {
    if (!ticker) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);

    const data = {
      company: ticker,
    };

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/v1/ml/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the Content-Type here
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        // setPredictions(data);
        console.log(data);
        // setAdvice(data.advice);
        // setSentiment(data.predicted_sentiment);
        // setGraphData(data.predicted_prices);
        // setDates(data.dates);
        // setProperData(startDate, endDate, data.predicted_prices)
        setGraphDataPoints(setProperGraphData(data.dates, data.prices));
        setLoading(false);
        console.log(data.stock);
        setStockVariables(data.stock);
        // setResponseText(`Response: ${JSON.stringify(data)}`);
      } else {
        setLoading(false);
        // setResponseText(`Error: ${response.status} - ${response.statusText}`);
        console.log(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      setLoading(false);
      // setResponseText(`Error: ${error.message}`);
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <div className="predict-container">
      <h2>Analyze Stock Historical Data</h2>
      <p>by providing the input</p>
      <div
        className="form-group"
        style={{
          "padding-left": "18rem",
          "padding-right": "18rem",
          alignItems: "center",
        }}
      >
        <label>Select a Stock:</label>
        <select value={ticker} onChange={handleChange}>
          <option value="">Select a stock</option>
          <option value="AAPL">Apple Inc.</option>
          <option value="GOOGL">Alphabet Inc.</option>
          <option value="MSFT">Microsoft Inc.</option>
          <option value="AMZN">Amazon Inc.</option>
          <option value="NVDA">Nvidia Inc.</option>
        </select>
      </div>
      {isSubmitted ? (
        <div style={{ justifyContent: "center" }}>
          <button onClick={handleClear}>Clear</button>
          {loading ? (
            <div className="MakeCenter">
              <CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel="circles-with-bar-loading"
              />
            </div>
          ) : (
            <div>
              <Graph
                stock={ticker}
                graphDataPoints={graphDataPoints}
                stockVariables={stockVariables}
              />
            </div>
          )}
        </div>
      ) : (
        <button onClick={handleClick}>Predict</button>
      )}
    </div>
  );
}
