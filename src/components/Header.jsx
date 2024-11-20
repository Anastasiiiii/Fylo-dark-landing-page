import React from "react";
import "../styles/Header.css";
import "../styles/Formulas.css";
import introImg from "../images/illustration-intro.png";

const Header = () => {
    return (
        <div className="header-container">
            <img src={introImg} alt="Intro Illustration" />
            <div className="text-container">
                <h1>
                    All your files in one secure location,<br /> accessible anywhere.
                </h1>
                <p>
                    Fylo stores all your most important files in one secure location.<br />
                    Access them wherever you need, share and collaborate with<br />
                    friends, family, and co-workers.
                </p>
                <button>Get Started</button>
            </div>
        </div>
    );
};

export default Header;
