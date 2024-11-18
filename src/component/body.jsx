import React, { useState } from "react";

function Body() {
  const [message, setMessage] = useState("");
  const [evaluationDetails, setEvaluationDetails] = useState(null);
  const [input, setInput] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputValues = [
      parseFloat(input.input1), 
      parseFloat(input.input2), 
      parseFloat(input.input3), 
      parseFloat(input.input4),
    ];

    if (inputValues.some((value) => isNaN(value))) {
      setMessage("Please enter valid numbers.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/store-input", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: inputValues }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Predicted Discount: ${data.predicted_discount}%`);
        setEvaluationDetails(data.evaluationDetails);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("An error occurred while fetching data.");
      console.error(error);
    }
  };

  return (
    <div className="container">
      
      <form className="container_form" onSubmit={handleSubmit}>
        <h2 id="container_text"><center>Do you want to check your watch price?</center></h2>
        <input
          type="text"
          name="input1"
          placeholder="Enter the Original Price"
          onChange={handleInputChange}
          value={input.input1}
          className="form_input"
        />
        <br />
        <input
          type="text"
          name="input2"
          placeholder="Enter the Rating"
          onChange={handleInputChange}
          value={input.input2}
          className="form_input"
        />
        <br />
        <input
          type="text"
          name="input3"
          placeholder="Number of Ratings"
          onChange={handleInputChange}
          value={input.input3}
          className="form_input"
        />
        <br />
        <input
          type="text"
          name="input4"
          placeholder="Enter the Battery Life"
          onChange={handleInputChange}
          value={input.input4}
          className="form_input"
        />
        <br />
        <button type="submit" className="form_button">
          Submit
        </button>
      </form>
      {message && <h1 id="predict">{message}</h1>}
      {evaluationDetails && (
        <div className="evaluation-details">
          <h3>Evaluation Details:</h3>
          <p>Predicted Market Price: Rs {evaluationDetails.predictedMarketPrice}</p>
          <p>Current Price: Rs {evaluationDetails.currentPrice}</p>
          <p>Original Price: Rs {evaluationDetails.originalPrice}</p>
          <p>Actual Discount: {evaluationDetails.actualDiscountPercentage}%</p>
          <p>Price Difference Percentage: {evaluationDetails.priceDiffPercentage}%</p>
          <p>Recommendation: {evaluationDetails.recommendation}</p>
        </div>
      )}
    </div>
  );
}

export default Body;
