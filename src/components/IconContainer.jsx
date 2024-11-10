import React from "react";
import "../styles/IconContainer.css";
import "../styles/Formulas.css";

const IconContainer = ({ icon, header, passage }) => {
    return (
        <div className="icon-container">
            <span>{icon}</span>
            <h1>{header}</h1>
            <p>{passage}</p>
        </div>
    )
}

export default IconContainer;