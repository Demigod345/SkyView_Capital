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

  const token = (localStorage.getItem('token')).replace(/"/g, "");
  const handleChange = (e) => {
    console.log(e.target.value);
    setTicker(e.target.value);
  };

  const handleClear = () => {
    setIsSubmitted(false)
  }

  const handleClick = async(e) => {
    if(!ticker){
      setIsSubmitted(false);
      return
    }
    
    setIsSubmitted(true);

    const data = {
      company: ticker,
    };

    try {
      setLoading(true)
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
        setGraphDataPoints(
          setProperGraphData(data.dates, data.prices)
        );
          setLoading(false)
        // setResponseText(`Response: ${JSON.stringify(data)}`);
      } else {
        setLoading(false)
        // setResponseText(`Error: ${response.status} - ${response.statusText}`);
        console.log(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      setLoading(false)
      // setResponseText(`Error: ${error.message}`);
      console.log(`Error: ${error.message}`);
    }


  }

  return (
    // <div className="searchsto" align="center">
    //   <h1 className="title">Search Stocks</h1>
    //   <div className="searcher">
    //     <select
    //       type="search"
    //       className="searchbar"
    //       placeholder="Search"
    //       aria-label="Search"
    //       aria-describedby="search-addon"
    //       list="stocks"
    //       onChange={handleChange}
    //     >
    //       <option>AAPL</option>
    //       <option>MSFT</option>
    //       <option>GOOGL</option>
    //       <option>AMZN</option>
    //       <option>NVDA</option>
    //     </select>
    //     <button type="submit" className="search" onClick={handleClick}>
    //       <img src={search} className="searchicon" alt="" style={{ width: '20px', height: '20px' }} />
    //     </button>
    //   </div>
    // </div>
    <div className="predict-container">
      <div
        className="form-group"
        style={{ alignSelf: "center", alignContent: "center",width:'60%',marginLeft:'20%' }}
      >
        <label className="Search_Stock1">Select a Stock:</label>
        <select value={ticker} onChange={handleChange}>
          <option value="">Select a stock</option>
          <option value="AAPL">Apple Inc.</option>
          <option value="GOOGL">Alphabet Inc.</option>
          <option value="MSFT">Microsoft Inc.</option>
          <option value="AMZN">Amazon Inc.</option>
          <option value="NVDA">Nvidia Inc.</option>

          {/* Add more stock options here */}
        </select>

      {/* <button type="button" onClick={handleClick} style={{marginTop:'15px'}}>Search Stock</button> */}

      <br></br>
      {isSubmitted ?
        <div>
          <button onClick={handleClear}>Clear</button>
          {loading ? (
            <div>
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
            <Graph graphDataPoints={graphDataPoints} />
          )}
        </div>
      : <button onClick={handleClick}>Search Stock</button>
    }
        </div>
    </div>
  );
}
