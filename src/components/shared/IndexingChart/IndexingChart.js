import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import "./IndexingChart.css";
import Dropdown from "../Dropdown/Dropdown";

// ✅ Register the annotation plugin
ChartJS.register(LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale, annotationPlugin);

const IndexingChart = () => {
    const [selected, setSelected] = useState("Monthly");

    const selectOptions = ["Daily", "Weekly", "Monthly", "Yearly"];

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "50 Pages Indexed",
                data: [95, 100, 150, 110, 100, 105, 110, 85, 115, 105, 100, 95], // Matched values from UI
                borderColor: "#2D023D",
                backgroundColor: "rgba(46, 12, 65, 0.5)",
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 3,
            },
            {
                label: "0 Pages Indexed",
                data: [90, 120, 160, 140, 105, 100, 105, 95, 110, 100, 90, 85], // Matched values from UI
                borderColor: "#597BE9",
                backgroundColor: "rgba(98, 132, 255, 0.5)",
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 3,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                // position: "top",
                // align: "start",
                // labels: {
                //     color: "#333",
                //     usePointStyle: true,
                //     pointStyle: "circle",
                //     padding: 15,
                // },
                display: false
            },
            annotation: {
                annotations: {
                    line1: {
                        type: "line",
                        xMin: 4.5, // Red dotted vertical line in May
                        xMax: 4.5,
                        borderColor: "red",
                        borderWidth: 2,
                        borderDash: [6, 6],
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#666",
                },
            },
            y: {
                min: 0,
                max: 200,
                ticks: {
                    stepSize: 50,
                    color: "#666",
                },
                grid: {
                    color: "rgba(200, 200, 200, 0.3)",
                },
            },
        },
    };

    return (
        <div className="chart-container">
            <div className="chart-header">
                <h3>Indexing Status <i className="ri-information-line"></i></h3>
                <Dropdown options={selectOptions} selected={selected} onChange={setSelected} />

            </div>

            <div className="custom-legend">
                <div className="legend-item">
                    <span className="legend-circle" style={{ backgroundColor: "#2D023D" }}></span>
                    50 Pages Indexed
                </div>
                <div className="legend-item">
                    <span className="legend-circle" style={{ backgroundColor: "#597BE9" }}></span>
                    0 Pages Indexed
                </div>
            </div>

            <div className="chart-wrapper">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default IndexingChart;
