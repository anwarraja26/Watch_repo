import React from "react";
import Header from "./header.jsx";
import Body from "./body.jsx";
import Footer from "./footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/body" element={<Body />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
