import React from "react";

const Phone = ({ number, type }) => (
  <div className="phoneNumber">
    <p>
      {type}: {number.replace(/[^\d]/g, "")}
    </p>
  </div>
);

export default Phone;
