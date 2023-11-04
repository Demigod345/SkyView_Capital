import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";
import "../../node_modules/react-vis/dist/style.css";
import "../stylesheets/graph.css";
export default function Graph() {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
  ];

  return (
    <div className="graph">
      <div style={{ width: "500px" }}>
        <XYPlot height={400} width={400}>
          <LineSeries data={data} />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="time " />
          <YAxis title="stock price" />
        </XYPlot>
      </div>
      <div style={{ width: "600px" }}>
        <table align="center">
          <thead>
            <tr>
              <th>prop</th>
              <th>value</th>
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
