import React from 'react';
import DatePickerReact from 'react-datepicker';
import './DatePicker.scss';

const DatePicker = ({ value, onChange }) => {
  return (
    <div className="date-picker-container">
      <DatePickerReact
        selected={value ? new Date(value) : null}
        onChange={onChange}
        placeholderText="Select event date"
        showYearDropdown
        showMonthDropdown
        dateFormat="MMMM d, yyyy"
      />
    </div>
  );
};

export default DatePicker;
