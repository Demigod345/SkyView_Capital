import React, { useEffect, useState } from "react";
import "../stylesheets/graph.css";
import axios from "axios";
import CanvasJSReact from "@canvasjs/react-stockcharts";
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

export default function Graph(props) {
  const [apiData, setApiData] = useState(null);
  // const dataPoints = props.graphDataPoints;
  // const dataPoints = [
  //   { x: new Date("2018-01-01"), y: 71 },
  //   { x: new Date("2018-02-01"), y: 55 },
  //   { x: new Date("2018-03-01"), y: 50 },
  //   { x: new Date("2018-04-01"), y: 65 },
  //   { x: new Date("2018-05-01"), y: 95 },
  //   { x: new Date("2018-06-01"), y: 68 },
  //   { x: new Date("2018-07-01"), y: 28 },
  //   { x: new Date("2018-08-01"), y: 34 },
  //   { x: new Date("2018-09-01"), y: 14 },
  //   { x: new Date("2018-10-01"), y: 71 },
  //   { x: new Date("2018-11-01"), y: 55 },
  //   { x: new Date("2018-12-01"), y: 50 },
  //   { x: new Date("2019-01-01"), y: 34 },
  //   { x: new Date("2019-02-01"), y: 50 },
  //   { x: new Date("2019-03-01"), y: 50 },
  //   { x: new Date("2019-04-01"), y: 95 },
  //   { x: new Date("2019-05-01"), y: 68 },
  //   { x: new Date("2019-06-01"), y: 28 },
  //   { x: new Date("2019-07-01"), y: 34 },
  //   { x: new Date("2019-08-01"), y: 65 },
  //   { x: new Date("2019-09-01"), y: 55 },
  //   { x: new Date("2019-10-01"), y: 71 },
  //   { x: new Date("2019-11-01"), y: 55 },
  //   { x: new Date("2019-12-01"), y: 50 },
  // ];

  const dataPoints = props.graphDataPoints;
  // useEffect(() => {
  //   const apiKey = `${process.env.REACT_APP_FINANCE_API_KEY}`;
  //   const symbol = "AAPL";

  //   fetch(
  //     `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${apiKey}`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setData(result);
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   const apiKey = `${process.env.REACT_APP_ALPHA_API_KEY}`;
  //   const symbol = props.ticker;
  //   fetch(
  //     `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setApiData(result);
  //       console.log(result)
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (apiData && typeof apiData === 'object' && 'Time Series (Daily)' in apiData) {
  //     console.log("data aa gya");
  //     const timeSeriesDaily = apiData['Time Series (Daily)'];
  //     // console.log(timeSeriesDaily)
  //     const datapoints = Object.keys(timeSeriesDaily).map(date => {
  //       const dataPoint = timeSeriesDaily[date];
  //       const closePrice = parseFloat(dataPoint['4. close']);
  //       // console.log(dataPoint)
  //       return {
  //         x: new Date(date),
  //         y: closePrice,
  //       };
  //     });
  //     console.log(datapoints)
  //     // Now you can work with timeSeriesDaily
  //   }
  //   //DO CHANGES WITH DATA HERE
  // }, [apiData]);

  //data aa gya

  const options = {
    title: {
      text: "CanvasJS React StockChart",
    },
    charts: [
      {
        data: [
          {
            type: "line",
            dataPoints: dataPoints,
          },
        ],
      },
    ],
    navigator: {
      slider: {
        minimum: new Date("1990-01-01"),
        maximum: new Date("2024-01-01"),
      },
    },
  };

  return (
    <div className="graph">
      <div className="chart">
        <div style={{ width: "650px" }}>
          <div>
            <CanvasJSStockChart options={options} />
          </div>
        </div>
      </div>
      <div className="valuetable" >
        < table className ="valuetable-column">
          <thead>
            <tr >
              <th>Financial Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PREVIOUS CLOSE</td>
              <td>$173.97</td>
            </tr>
            <tr>
              <td>DAY RANGE</td>
              <td>$175.46 - $177.78</td>
            </tr>
            <tr>
              <td>YEAR RANGE</td>
              <td>$124.17 - $198.23</td>
            </tr>
            <tr>
              <td>MARKET CAP</td>
              <td>2.78T USD</td>
            </tr>
            <tr>
              <td>AVG VOLUME</td>
              <td>54.52M</td>
            </tr>
            <tr>
              <td>P/E RATIO</td>
              <td>29.84</td>
            </tr>
            <tr>
              <td>DIVIDEND YIELD</td>
              <td>0.54%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
