import React from "react";
import "./DataTable.css";

const DataTable = ({ title, data }) => {
    if (!data.length) return null; // Handle empty data

    return (
        <div className="table-container">
            <h3 className="table-title">
                {title} <i className="ri-information-line"></i>
            </h3>
            <div className="table-wrapper">
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
