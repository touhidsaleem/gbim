import React, { useState } from "react";
import "./MenuDrop.css";

const MenuDrop = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="menu">
            <div className="menu-header" onClick={() => setIsOpen(!isOpen)}>
                <span className="menu-title">{title}</span>
                <i className={`ri-arrow-down-s-line drop-icon ${isOpen ? "open" : ""}`}></i>
            </div>
            <ul className={`menu-list ${isOpen ? "show" : ""}`}>
                {items.map((item, index) => (
                    <li key={index} className="menu-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuDrop;
