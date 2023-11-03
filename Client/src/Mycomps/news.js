import React from 'react'
import "../stylesheets/home.css";


export default function news() {
    return (
      <div className="newsbody">
        <h1>Companies Information</h1>
        <style>{"table{border:1px white;}"}</style>
        <table  align ="center">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Company</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Price target</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AAPL</td>
              <td>APPLE INC</td>
              <td>$2.80T</td>
              <td>$178.85</td>
              <td>$205.54</td>
            </tr>
            <tr>
            <td>MSFT</td>
              <td>MICROSOFT CORP</td>
              <td>$2.80T</td>
              <td>$178.85</td>
              <td>$205.54</td>
            </tr>
            <tr>
            <td>GOOGL</td>
              <td>ALPHABET INC</td>
              <td>$2.80T</td>
              <td>$178.85</td>
              <td>$205.54</td>
            </tr>
            <tr>
            <td>AMZN</td>
              <td>AMAZON COM INC</td>
              <td>$2.80T</td>
              <td>$178.85</td>
              <td>$205.54</td>
            </tr>
            <tr>
            <td>NVDA</td>
              <td>NVIDIA CORP</td>
              <td>$2.80T</td>
              <td>$178.85</td>
              <td>$205.54</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }