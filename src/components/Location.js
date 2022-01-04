import React from "react";

const Location = ({ location }) => {
  return (
    <div className="location">
      <p>
        {location.street.number} {location.street.name}
      </p>
      <p>
        {location.city}, {location.state}
      </p>
      <p>
        {location.postcode} - {location.country}
      </p>
    </div>
  );
};

export default Location;
