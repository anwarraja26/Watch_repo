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
    <div id="home">
    <div>
      <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/rolex.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className="inner-text">Want To Predict The Price Of Your Watch</h1>
        <p></p>
      </div>
    </div>
    <div id="about">
      <h1 id="head">ABOUT</h1>
      <div class="about_div">
          <span class="about"id="about_1">
            <h2 ><u>About the Project</u></h2>
            <ul>
              <li id><b id="heading_span">Empowering Consumers: </b><br/>The Watch Price Predictor enables users to make informed purchasing decisions by providing insights into fair pricing based on machine learning predictions.</li><br/ >
              <li><b id="heading_span">Data-Driven Analysis: </b><br/> Factors like product specifications, customer ratings, and pricing trends are analyzed to predict whether a product is "Overpriced," "Fairly Priced," or "Underpriced</li><br/>
              <li><b id="heading_span">E-Commerce Enhancement: </b><br/>Designed to benefit consumers and retailers by bridging the gap between perceived product value and market pricing strategies.</li>
            </ul>
          </span>
          <span class="about"id="about_2">
            
            <h2><u>HOW IT WORKS </u></h2>
            <ul>
            <li><b id="heading_span">Input Collection: </b><br/>Users provide details like original price, customer ratings, and product specifications (e.g., battery life, brand).</li><br/>
            <li><b id="heading_span">Predictive Model: </b><br />The system employs machine learning algorithms (e.g., Random Forest, XGBoost) trained on historical data to estimate a product's fair market price.</li><br />
            <li><b id="heading_span">Insightful Recommendations: </b><br />Results are displayed with actionable advice, such as suggesting whether a deal is good or a product is overpriced.</li>
            </ul>
          </span>
          <span class="about"id="about_3">
            <h2><u>Future Applications</u></h2>
            <li><b id="heading_span">Real-Time Data Integration:</b><br />The system can be expanded to include live market data for more dynamic predictions.</li><br />
            <li><b id="heading_span">Broader Use Cases: </b><br />The model's methodology is scalable for analyzing pricing trends across various product categories, including fitness trackers and traditional watches.
          </li><br />
            <li><b id="heading_span">Advanced Features: </b><br />Potential upgrades include deep learning algorithms for better accuracy and personalized recommendations based on user preferences.</li>
          </span>
      </div>
    </div>
      <div className="container">
        <h1 id="head">PREDICT</h1>
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
            <h3 id="evaluate_head">Evaluation Details:</h3>
            <p>Predicted Market Price: Rs {evaluationDetails.predictedMarketPrice}</p>
            {/* <p>Current Price: Rs {evaluationDetails.currentPrice}</p> */}
            <p>Original Price: Rs {evaluationDetails.originalPrice}</p>
            <p>Actual Discount: {evaluationDetails.actualDiscountPercentage}%</p>
            <p>Price Difference Percentage: {evaluationDetails.priceDiffPercentage}%</p>
            <p>Recommendation: {evaluationDetails.recommendation}</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Body;
