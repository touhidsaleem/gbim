import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./RightDoughnut.css";
import Button from "../Button/Button";

ChartJS.register(ArcElement, Tooltip, Legend);

const RightDoughnut = () => {
    const data = {
        datasets: [
            {
                data: [600, 500, 100, 300, 400],
                backgroundColor: ["#C23A22", "#FF6663", "#FDAAAA", "#E54C38", "#F8858B"],
                borderColor: "#ffffff",
                // borderWidth: 2,
                borderRadius: 10,
                hoverBorderWidth: 0,
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
        <div className="right-pie-container">
            <div className="title-cta-wrapper">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h2 className="right-pie-title">Under Performing Pages</h2>
                    <i class="ri-information-line"></i>
                </div>
                <Button variant="secondary" text='View more' />
            </div>
            <div className="right-pie-chart">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
};

export default RightDoughnut;
