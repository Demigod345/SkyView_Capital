import React, { useState } from "react";
import "../stylesheets/predbyinp.css";

function Predict() {
  const [stock, setStock] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [numberOfDays, setNumberOfDays] = useState(30);
  const [predictionResult, setPredictionResult] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handlePredictClick = () => {
    
  };
  const trackStyle = `bg-gradient-to-r from-yellow-500 to-red-500 h-2 rounded-full ${isDragging ? 'cursor-grabbing' : 'cursor-pointer'}`;

  return (
    <div className="predict-container">
      <h2>Predict the Future Prices of Stock</h2>
      <p>by providing the input</p>

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

      <div className="form-group">
        <label>Number of Days:</label>
        <input
          type="number"
          value={numberOfDays}
          onChange={(e) => setNumberOfDays(parseInt(e.target.value, 10))}
        />
      </div>


      <button onClick={handlePredictClick}>Predict</button>

      {predictionResult && (
        <div className="prediction-result">
          <h3>Prediction Result</h3>
          {/* Display the prediction result here */}
        </div>
      )}
    </div>
  );
}

export default Predict;
