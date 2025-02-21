import React from "react";
import "./Button.css";

const Button = ({ text, variant = "primary", iconClass }) => {
    return (
        <button className={`custom-button ${variant}`}>
            {iconClass && <i className={`ri-${iconClass} button-icon`}></i>}
            {text && <span>{text}</span>}
        </button>
    );
};

export default Button;
