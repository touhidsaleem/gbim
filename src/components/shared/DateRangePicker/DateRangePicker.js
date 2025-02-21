import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateRangePicker.css";

const DateRangePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // Calculate the number of days
    const calculateDays = () => {
        const difference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        return difference > 0 ? difference : 1; // Avoid negative or zero values
    };

    return (
        <div className="date-picker-wrapper">
            {/* Label Positioned Above the Border */}
            <label className="date-label">Date</label>

            {/* Date Range Selection */}
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
                {/* <i class="ri-calendar-event-line"></i> */}
            </div>

            {/* Display Selected Days Count */}
            <p className="last-7-days">Last {calculateDays()} Days</p>
        </div>
    );
};

export default DateRangePicker;
