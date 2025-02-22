import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./LeftDoughnut.css"; // Import the CSS file

ChartJS.register(ArcElement, Tooltip, Legend);

const LeftDoughnut = () => {
    const data = {
        datasets: [
            {
                data: [600, 600, 600, 600, 600],
                backgroundColor: ["#A3D9A5", "#BFAF80", "#A3C4E5", "#F19C99", "#F4D29F"],
                borderColor: "#ffffff",
                borderWidth: 2,
                borderRadius: 10,
                hoverBorderWidth: 3,
                cutout: "70%",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: "transparent",
                titleColor: "#000",
                bodyColor: "#333",
                displayColors: true,
                cornerRadius: 8,
                callbacks: {
                    title: () => "www.abc.com/services",
                    label: (tooltipItem) => {
                        const dataset = tooltipItem.dataset;
                        const index = tooltipItem.dataIndex;
                        const clicks = dataset.data[index];
                        const growth = "60%";
                        return [`Click: ${clicks}`, `Click Growth: ${growth}`];
                    },
                },
            },
        },
    };

    return (
        <div className="left-pie-container">
            <h2 className="left-pie-title">Best Performing Pages</h2>
            <div className="left-pie-chart">
                <Doughnut data={data} options={options} />
            </div>
            <button className="left-pie-button">View more</button>
        </div>
    );
};

export default LeftDoughnut;
