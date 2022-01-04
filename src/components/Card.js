import React from "react";
// import { SRLWrapper } from "simple-react-lightbox";

import Location from "./Location";
import Phone from "./Phone";

const Card = ({ userData }) => {
  let date = new Date(userData.dob.date);
  console.log(
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      date.getFullYear()
  );

  return (
    <div className="card">
      <div className="card__title">
        {userData.name.first} {userData.name.last}
      </div>
      <div className="card__body">
        <p>{userData.login.username}</p>
        <p>{userData.email}</p>
        <p>
          {(date.getMonth() > 8
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1)) +
            "/" +
            (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
            "/" +
            date.getFullYear()}
        </p>
        <Location location={userData.location} />
        <Phone number={userData.phone} type="Home" />
        <div className="card__image">
          <a href={userData.picture.large}>
            <img src={userData.picture.thumbnail} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
