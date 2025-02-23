import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "./Bars.css";
import Dropdown from "../Dropdown/Dropdown";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Bars = () => {

    const selectOptions = ["Daily", "Weekly", "Monthly", "Yearly"];
    const [selected, setSelected] = useState("Monthly");

    const data = {
        labels: [
            "Jan 25", "Feb 25", "Mar 25", "Apr 25", "May 25", "Jun 25",
            "Jul 25", "Aug 25", "Sep 25", "Oct 25", "Nov 25", "Dec 25"
        ],
        datasets: [
            {
                data: [150, 120, 110, 160, 170, 130, 125, 140, 100, 175, 125, 135],
                backgroundColor: "#1F3B66",
                borderRadius: 5,
                barThickness: 10,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: "#6B7280" }
            },
            y: {
                grid: { color: "#E5E7EB", borderDash: [3, 3] },
                ticks: { color: "#6B7280", stepSize: 50, beginAtZero: true }
            }
        }
    };

    return (
        <div className="bar-chart-container">
            <div className="bar-title-wrapper">
                <h2 className="chart-title">Total Website Clicks</h2>
                <Dropdown options={selectOptions} selected={selected} onChange={setSelected} />
            </div>

            <p className="chart-stat">
                398 <span className="chart-increase">↑ 39%</span>
            </p>
            <div className="chart-wrapper">
                <p className="click-label">Clicks</p>
                <div className="bar-wrapper">
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default Bars;
