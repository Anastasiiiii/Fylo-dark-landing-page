import React from "react";
import "../styles/Menu.css";
import "../styles/Formulas.css";
import logo from "../images/logo.svg";

const Menu = () => {
    return(
        <div className="menu-container">
            <img src={logo} className="logo" alt="logo"/>
            <ul className="menu-line">
                    <li><a href="https://github.com/Anastasiiiii">Features</a></li>
                    <li><a href="https://github.com/Anastasiiiii">Team</a></li>
                    <li><a href="https://github.com/Anastasiiiii">Sign In</a></li>
                </ul>
        </div>
    )
}

export default Menu;