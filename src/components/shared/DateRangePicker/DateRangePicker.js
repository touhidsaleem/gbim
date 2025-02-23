import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateRangePicker.css";

const DateRangePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const calculateDays = () => {
        const difference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        return difference > 0 ? difference : 1;
    };

    return (
        <div className="date-picker-wrapper">
            <div className="date-label">
                <p>Date</p>
            </div>

            <div className="date-range-container">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="date-input"
                    dateFormat="MM/dd/yyyy"
                />
                <span className="separator">-</span>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="date-input"
                    dateFormat="MM/dd/yy"
                />
            </div>

            <p className="last-7-days">Last {calculateDays()} Days</p>
        </div>
    );
};

export default DateRangePicker;
