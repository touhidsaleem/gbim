import React, { useState } from "react";
import "./MenuDrop.css";

const MenuDrop = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                <span className="dropdown-title">{title}</span>
                <i className={`ri-arrow-down-s-line ${isOpen ? "open" : ""}`}></i>
            </div>
            <ul className={`dropdown-list ${isOpen ? "show" : ""}`}>
                {items.map((item, index) => (
                    <li key={index} className="dropdown-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuDrop;
