import React, { useEffect, useState } from "react";
import "../stylesheets/graph.css";
import axios from "axios";
import CanvasJSReact from "@canvasjs/react-stockcharts";
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

export default function Graph(props) {
  const dataPoints = props.graphDataPoints;
  const stock=props.stockVariables;
  console.log(stock)
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

  // console.log(props.stockVariables)

  return (
    <div className="graph">
      {/* <div className="chart"> */}
        
      {/* </div> */}
      <div style={{ width: "650px" }}>
          <div>
            <CanvasJSStockChart options={options} />
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
              <td>52 Week High</td>
              <td>$ {stock.high}</td>
            </tr>
            <tr>
              <td>52 Week Low</td>
              <td>$ {stock.low}</td>
            </tr>
            <tr>
              <td>Previous Close</td>
              <td>$ {stock.prev_close}</td>
            </tr>
            <tr>
              <td>52 Week Returns</td>
              <td>$ {stock.returns}</td>
            </tr>
            <tr>
              <td>Average Volume</td>
              <td>$ {stock.avg_volume} M</td>
            </tr>
            <tr>
              <td>Prev day High</td>
              <td>$ {stock.high_prev}</td>
            </tr>
            <tr>
              <td>Prev day Low</td>
              <td>$ {stock.low_prev}</td>
            </tr>
            <tr>
              <td>Market Cap</td>
              <td>$ {stock.market_cap} T</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
