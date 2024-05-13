import React from 'react';
import './date-header.css';

const DateHeader = ({created, updated}) => {
  const createdDate = created;
  const updatedDate = updated ? updated : `Unchanged`;
  return (
    <div className="dates-container">
      <div className="date-entry">
        <div className="date-label">Created At:</div>
        <div className="date-value">{createdDate}</div>
      </div>
      <div className="date-entry">
        <div className="date-label">Updated At:</div>
        <div className="date-value">{updatedDate}</div>
      </div>
    </div>
  );
};

export default DateHeader;