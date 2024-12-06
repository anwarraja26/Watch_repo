import React from "react";
import { Link } from "react-scroll";

function Header() {
    return (
        <header>
            <ul className="link" id="font">
                <li>
                    <Link to="home" smooth={true} duration={500} id="a_header">Home</Link>
                </li>
                <li><Link to="about" smooth={true} duration={500} id="a_header">About</Link></li>
                <li>
                    <Link to="container" smooth={true} duration={500} id="a_header">Predict</Link>
                </li>
            </ul>
            <b><h1 id="head">WATCH PRICE PREDICTOR</h1></b>
        </header>
    );
}

export default Header;
