import React from "react";
import Header from "./header.jsx";
import Body from "./body.jsx";
import Footer from "./footer.jsx";

function App(){
    return(
        <div>
            <Header />
            <Body />
           
        </div>
    );
}
// export default App;
// import React, { useState } from 'react';

// function App() {
//   const [input, setInput] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Send a POST request to the Flask backend
//     const response = await fetch('http://localhost:5000/store-input', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ input }),  // Send the input data as JSON
//     });

//     const data = await response.json();

//     if (response.ok) {
//       setMessage(data.message);  // Success message
//     } else {
//       setMessage(data.error);  // Error message
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Input to Flask API</h1>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           value={input} 
//           onChange={(e) => setInput(e.target.value)} 
//           placeholder="Enter something" 
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default App;
export default App;
