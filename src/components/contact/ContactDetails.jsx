import React from "react";

const ContactDetails = ({ name, phoneNumber, email }) => {
  return (
    <div>
      <p className="name">{name}</p>
      <div className="address">
        <p>{phoneNumber} </p>
        <p>|</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ContactDetails;
