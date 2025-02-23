import React, { useState } from "react";
import "./DataTable.css";

const DataTable = ({ title, data }) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    if (!data.length) return null;

    return (
        <div className="table-container">
            <h3 className="table-title">
                {title}
                <div
                    className="info-icon-wrapper"
                    onMouseEnter={() => setTooltipVisible(true)}
                    onMouseLeave={() => setTooltipVisible(false)}
                >
                    <i className="ri-information-line"></i>
                    {tooltipVisible && (
                        <div className="tooltip">This table shows the {title} data.</div>
                    )}
                </div>
            </h3>
            <div className="data-table-wrapper">
                <table className="custom-table">
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key, index) => (
                                <th key={index}>{key.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Object.values(row).map((value, colIndex) => (
                                    <td key={colIndex}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
