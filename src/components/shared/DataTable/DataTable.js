import React from "react";
import "./DataTable.css";

const DataTable = ({ title, data }) => {
    return (
        <div className="table-container">
            <h3 className="table-title">
                {title} <i className="ri-information-line"></i>
            </h3>
            <div className="table-wrapper">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>TYPE</th>
                            <th>VALID</th>
                            <th>INVALID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.type}</td>
                                <td>{row.valid}</td>
                                <td>{row.invalid}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
