import React from 'react';
import './date-header.css';

const DateHeader = ({created, updated}) => {
  return (
    <div className="content-dates">
      <div className="content-date-entry">
        <div className="content-date-label">Created At:</div>
        <div className="date">{created}</div>
      </div>
      <div className="content-date-entry">
        <div className="content-date-label">Updated At:</div>
        <div className="date">{updated}</div>
      </div>
    </div>
  );
};

export default DateHeader;