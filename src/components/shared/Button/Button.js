import React from "react";
import "./Button.css";

const Button = ({ text, variant = "primary", iconClass, icon }) => {
    return (
        <button className={`custom-button ${variant}`}>
            {iconClass && <i className={`ri-${iconClass} button-icon`}></i>}
            {icon && icon}
            {text && <span>{text}</span>}
        </button>
    );
};

export default Button;
